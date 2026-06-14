import Link from 'next/link';
import Image from 'next/image';
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
        className="rounded-xl overflow-hidden flex flex-col gap-3 h-full transition-all duration-300 group-hover:brightness-110"
        style={{ background: 'var(--color-surface)' }}
      >
        {post.coverImage && (
          <div className="relative w-full h-48">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
          </div>
        )}
        <div className="p-6 flex flex-col gap-3 flex-1">
          <span className="text-xs" style={{ color: 'var(--color-text-subtle)' }}>
            {date}
          </span>
          <h3 className="font-display text-xl font-medium leading-snug">{post.title}</h3>
          <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-muted)' }}>
            {post.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
