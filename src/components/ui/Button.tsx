type Props = {
  text: string;
  variant?: 'primary' | 'ghost';
  onClick?: () => void;
};

export default function Button({ text, variant = 'primary', onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer btn ${variant === 'primary' ? 'btn-primary' : 'btn-ghost'}`}
    >
      {text}
    </button>
  );
}
