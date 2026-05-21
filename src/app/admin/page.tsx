import { cookies } from 'next/headers';

function getUsernameFromToken(token: string): string | null {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.name ?? payload.email ?? null;
  } catch {
    return null;
  }
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const username = token ? getUsernameFromToken(token) : null;

  return (
    <section className="section min-h-screen flex flex-col gap-8 pt-24">
      <div className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
          Panel
        </span>
        <h1 className="font-display text-5xl font-medium">
          Witaj{username ? `, ${username}` : ''}
        </h1>
        <p style={{ color: 'var(--color-text-muted)' }}>Jesteś zalogowana do panelu administracyjnego.</p>
      </div>
    </section>
  );
}
