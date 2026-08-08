ULM RB OPPONENT ANALYSIS ENGINE — ONLINE VERSION

Built for Shawn Simmons.

HOW IT WORKS
- index.html automatically loads the weekly file from Supabase:
  rb-scout/current.csv
- Shawn does not upload a CSV.
- Tommy replaces current.csv in Supabase each week.
- Shawn keeps using the same Vercel link.
- Reload Latest forces a fresh fetch of the current weekly file.

DEPLOYMENT
Upload this folder to a GitHub repository, then import that repository into Vercel.
No build command or framework is required. It is a static HTML app.

IMPORTANT
The public Supabase URL is intentionally embedded for read-only access to the public rb-scout bucket. Do not put private Supabase service-role keys in this file.
