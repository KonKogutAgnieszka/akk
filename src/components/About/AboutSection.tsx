import SnakeCard from './SnakeCard';

const cards = [
  {
    number: '01',
    title: 'End-to-end development',
    description: 'Od UI po backend i logikę biznesową',
    align: 'left' as const,
  },
  {
    number: '02',
    title: 'Backend i testy',
    description: 'Od UI po backend i logikę biznesową',
    align: 'right' as const,
  },
  {
    number: '03',
    title: 'Performance i UX',
    description: 'Optymalizacja działania i doświadczeń użytkownika',
    align: 'left' as const,
  },
];

export default function AboutSection() {
  return (
    <section className="relative py-24 flex flex-col gap-6">
      {cards.map((card) => (
        <SnakeCard key={card.number} {...card} />
      ))}
    </section>
  );
}
