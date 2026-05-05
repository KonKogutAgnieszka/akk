import Link from 'next/link';
import type { Post } from '@/types/post';

type FeaturedPostProps = {
  post: Post;
};

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const date = new Date(post.createdAt).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className="rounded-2xl overflow-hidden p-8 md:p-12 flex flex-col gap-4 transition-all duration-300 group-hover:brightness-110"
        style={{ background: 'var(--color-surface)' }}
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
          Featured
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
          {post.title}
        </h2>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
          {post.excerpt}
        </p>
        <span className="text-sm mt-2" style={{ color: 'var(--color-text-subtle)' }}>
          {date}
        </span>
      </article>
    </Link>
  );
}
