import Link from 'next/link';
import type { Post } from '@/types/post';

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const date = new Date(post.createdAt).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Link href={`/blog/${post.id}`} className="group block">
      <article
        className="rounded-xl p-6 flex flex-col gap-3 h-full transition-all duration-300 group-hover:brightness-110"
        style={{ background: 'var(--color-surface)' }}
      >
        <h3 className="font-display text-xl font-medium leading-snug">{post.title}</h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-muted)' }}>
          {post.excerpt}
        </p>
        <span className="text-xs" style={{ color: 'var(--color-text-subtle)' }}>
          {date}
        </span>
      </article>
    </Link>
  );
}
