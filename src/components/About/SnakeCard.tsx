import { ReactNode } from 'react';

interface SnakeCardProps {
  number: string;
  title: string;
  description: string;
  align?: 'left' | 'right';
}

export default function SnakeCard({ number, title, description, align = 'left' }: SnakeCardProps) {
  return (
    <div
      className={`w-[70%] rounded-[2.5rem] bg-[#13112a] px-10 py-8 ${
        align === 'right' ? 'ml-auto' : 'mr-auto'
      }`}
    >
      <div className="flex items-start gap-4">
        <span className="font-mono text-sm text-teal-400 mt-1">{number}</span>
        <div>
          <h3 className="font-display text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-white/50 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
