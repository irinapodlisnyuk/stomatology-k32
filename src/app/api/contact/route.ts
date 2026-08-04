import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Описываем интерфейс для данных из формы обратной связи
interface AppointmentRequestBody {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    // Явно типизируем входящий JSON
    const { name, email, phone, message } =
      (await request.json()) as AppointmentRequestBody;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // ========================================================
    // 📩 ПИСЬМО №1: Администратору клиники
    // ========================================================
    const adminMailOptions = {
      from: `"Сайт К+32" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_RECEIVER,
      subject: `🆕 Новая заявка от ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px;">
          <h2 style="color: #008491; margin-bottom: 20px;">Новое сообщение из формы контактов К+32</h2>
          <p><strong>Имя пациента:</strong> ${name}</p>
          <p><strong>Телефон:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Email для связи:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #008491;">
            <p style="margin: 0; font-style: italic;"><strong>Сообщение:</strong></p>
            <p style="margin: 10px 0 0 0; white-space: pre-line;">${message}</p>
          </div>
        </div>
      `,
    };

    // ========================================================
    // 📩 ПИСЬМО №2: Автоответ пациенту
    // ========================================================
    const patientMailOptions = {
      from: `"Стоматология К+32" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Здравствуйте, ${name}! Ваше обращение принято`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px; line-height: 1.6;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #008491; margin: 0;">Стоматология К+32</h2>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin-bottom: 20px;" />
          
          <p>Здравствуйте, <strong>${name}</strong>!</p>
          <p>Мы успешно получили ваше сообщение из формы обратной связи на нашем сайте.</p>
          <p>Наш администратор уже изучает вашу заявку и свяжется с вами по указанному телефону <strong>${phone}</strong> в самое ближайшее время для уточнения деталей или подтверждения записи.</p>

          <p> Наши специалисты принимают по предварительной записи.</p>
      
          <div style="margin-top: 30px; padding: 15px; background-color: #f4fbfc; border-radius: 8px; font-size: 14px; color: #555;">
            <p style="margin: 0 0 5px 0;"><strong>📞 Наши контакты для экстренной связи:</strong></p>
            <p style="margin: 0;">Телефон: <a href="tel:+78619913215" style="color: #008491; text-decoration: none;">+7 (861) 991-32-15</a></p>
            <p style="margin: 3px 0 0 0;">Часы работы: Пн-Пт: 9:00 - 19:00</p>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0 20px 0;" />
          
          <p style="font-size: 12px; color: #999; text-align: center; margin: 0;">
            Пожалуйста, не отвечайте на это письмо, оно отправлено автоматически.
          </p>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(patientMailOptions),
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    console.error("🔥 КРИТИЧЕСКАЯ ОШИБКА GMAIL SMTP:");

    // Проверяем, является ли пойманный объект стандартной ошибкой Error
    if (error instanceof Error) {
      console.error("Сообщение:", error.message);

      const mailError = error as unknown as Record<string, unknown>;
      if (mailError.code) console.error("Код ошибки:", mailError.code);
      if (mailError.command) console.error("Команда:", mailError.command);

      return NextResponse.json(
        { error: error.message || "Не удалось отправить сообщение" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { error: "Неизвестная ошибка при отправке почты" },
      { status: 500 },
    );
  }
}
