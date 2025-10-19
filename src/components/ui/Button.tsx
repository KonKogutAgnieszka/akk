type Props = {
  text: string;
  variant: "green";
};

export default function Button({ text, variant }: Props) {
  return (
    <button
      className={`inline-block bg-green width-auto px-4 py-2 rounded-full text-xl text-blue-dark cursor-pointer`}
    >
      {text}
    </button>
  );
}
