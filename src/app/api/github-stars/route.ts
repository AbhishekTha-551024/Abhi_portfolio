export async function GET(req: Request) {
  const headers: Record<string, string> = {
    'User-Agent': 'portfolio-app',
  };
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch('https://api.github.com/repos/AbhishekTha-551024/Abhi_portfolio', {
      headers,
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return Response.json({ stars: 0 }, { status: 200 });
    }

    const data = await res.json();
    return Response.json({ stars: data.stargazers_count ?? 0 });
  } catch {
    return Response.json({ stars: 0 }, { status: 200 });
  }
}