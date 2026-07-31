import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: string | undefined;
  duration?: number;
}

export default function AnimatedNumber({ value, duration = 1700 }: AnimatedNumberProps) {
  const safeValue = value || "";

  // Вытаскиваем только чистые цифры и точки/запятые для подсчета
  const targetNumber = parseFloat(safeValue.replace(/[^0-9.]/g, "")) || 0;
  // Вытаскиваем все нечисловые символы (например, "+", "%"), чтобы вернуть их в конце
  const suffix = safeValue.replace(/[0-9.]/g, "");
  
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (targetNumber === 0) {
      return;
    }

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const current = progress * targetNumber;
      setCurrentNumber(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animationFrameId = window.requestAnimationFrame(step);
    
    // Возвращаем функцию очистки, чтобы отменить анимацию, если компонент размонтируется раньше времени
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [targetNumber, duration]);

  // Проверяем, было ли исходное число дробным
  const isFloat = safeValue.includes(".");

  if (!value) return null;

  return (
    <>
      {isFloat ? currentNumber.toFixed(1) : Math.floor(currentNumber)}
      {suffix}
    </>
  );
}