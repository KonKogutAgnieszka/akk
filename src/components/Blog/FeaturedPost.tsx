import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { Post } from '@/types/post';
import { ArrowRight } from 'lucide-react';

type FeaturedPostProps = {
  post: Post;
};

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const t = useTranslations('Blog');
  const date = new Date(post.createdAt).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Link href={`/blog/${post.id}`} className="group flex ">
      <div
        className="relative rounded-2xl h-60 w-96 overflow-hidden flex"
        style={{ background: 'var(--color-surface)' }}
      >
        {post.coverImage && <Image src={post.coverImage} fill alt={post.title} />}
      </div>
      <article className="flex flex-col gap-4 p-2 flex-1">
        <div className="flex items-center gap-3 max-w-xs">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: 'var(--color-accent)' }}
          >
            {t('featured')}
          </span>
          <span className="flex-1 h-px" style={{ background: 'var(--color-border-hover)' }} />
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: 'var(--color-text-subtle)' }}
          >
            {date}
          </span>
        </div>
        <h2 className="font-display italic text-4xl md:text-5xl font-medium leading-tight text-right">
          {post.title}
        </h2>
        <p
          className="text-lg leading-relaxed text-right"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {post.excerpt}
        </p>
        <div
          className="flex w-20 items-center justify-between py-1 mt-auto text-xs uppercase tracking-widest border-b"
          style={{ borderColor: 'var(--color-accent)' }}
        >
          <span>{t('read')}</span>
          <ArrowRight color="var(--color-accent)" size={16} />
        </div>
      </article>
    </Link>
  );
}
