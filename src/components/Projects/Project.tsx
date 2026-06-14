import { ExternalLink } from 'lucide-react';

import PolaroidFrame from '@/components/ui/PolaroidFrame';
import Technology from '@/components/ui/Technology';
import { TechnologyKey } from '@/data/technologies';
import Button from '@/components/ui/Button';

type ProjectProps = {
  name: string;
  image: string;
  description: string;
  technologies: readonly TechnologyKey[];
  demo: string;
  readme: string;
};

export default function Project({
  name,
  image,
  description,
  technologies,
  demo,
  readme,
}: ProjectProps) {
  return (
    <article className="mt-4 flex items-start gap-12">
      <div className="-rotate-[6deg]">
        <PolaroidFrame image={image} alt={`${name} project preview`} size="md" />
      </div>

      <div className="flex flex-col">
        <h2 className="font-serif text-5xl text-[var(--color-text)]">{name}</h2>

        <p className="my-4 leading-relaxed text-[var(--color-text-muted)]">{description}</p>

        <div className="flex gap-3 text-lg font-semibold text-[var(--color-text-muted)]">
          <Button
            href={demo}
            text="Demo"
            variant="primary-glass"
            size="sm"
            rightIcon={<ExternalLink size={14} />}
            newTab
          />

          <Button
            href={readme}
            text="GitHub"
            variant="secondary-glass"
            size="sm"
            rightIcon="/assets/icons/github.svg"
            newTab
          />
        </div>

        <hr className="divider my-3" />

        <ul className="flex gap-2">
          {technologies.map((technology) => (
            <li key={technology}>
              <Technology variant="badge" technologyKey={technology} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
