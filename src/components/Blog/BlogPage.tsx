import type { Post } from '@/types/post';
import FeaturedPost from './FeaturedPost';
import PostCard from './PostCard';

async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${process.env.API_URL}/posts`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;

  if (!featured) {
    return (
      <section className="section">
        <p style={{ color: 'var(--color-text-muted)' }}>Brak wpisów.</p>
      </section>
    );
  }

  return (
    <section className="section flex flex-col gap-12">
      <FeaturedPost post={featured} />
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
