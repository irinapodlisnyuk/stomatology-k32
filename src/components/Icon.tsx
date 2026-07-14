import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export default function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg className={className} {...props}>
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
}