import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Post } from '@/types/post';

async function getPost(id: string): Promise<{ data: Post } | { error: string } | null> {
  try {
    const res = await fetch(`${process.env.API_URL}/posts/${id}`, { cache: 'no-store' });
    if (res.status === 404) return null;
    if (!res.ok) return { error: `Błąd odpowiedzi z API (${res.status})` };
    return { data: await res.json() };
  } catch {
    return { error: 'error' };
  }
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const result = await getPost(id);

  if (result === null) notFound();

  if ('error' in result) {
    return (
      <section className="section max-w-3xl mx-auto">
        <p style={{ color: 'var(--color-text-muted)' }}>{result.error}</p>
      </section>
    );
  }

  const post = result.data;

  const date = new Date(post.createdAt).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className="section max-w-3xl mx-auto flex flex-col gap-8">
      <Link href="/blog" className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
        ← Blog
      </Link>
      <article className="flex flex-col gap-6">
        <header className="flex flex-col gap-3">
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight">
            {post.title}
          </h1>
          <span className="text-sm" style={{ color: 'var(--color-text-subtle)' }}>
            {date}
          </span>
        </header>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
          {post.excerpt}
        </p>
        <div
          className="text-base leading-relaxed whitespace-pre-wrap"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {post.content}
        </div>
      </article>
    </section>
  );
}
