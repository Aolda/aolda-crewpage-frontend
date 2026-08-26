# Aolda Crew Page Frontend

Next.js frontend for the Aolda crew page.

## API proxy

The browser calls the backend through the same origin at `/api`. Next.js
forwards those requests server-side to `BACKEND_INTERNAL_URL`. This is required
when the page is served over HTTPS: a browser blocks direct calls from
`https://homepage.ajou.app` to an `http://` backend as mixed content.

Profile images returned as `/assets/profile-images/...` are also forwarded to
the backend. The existing `/_next/image` proxy remains as a compatibility path
for local direct backend image URLs.

Copy `.env.example` to `.env.local` and choose the backend address for the
environment:

```dotenv
# Browser-visible setting: use the same-origin rewrite
NEXT_PUBLIC_BASE_URL=/api

# Local development
BACKEND_INTERNAL_URL=http://localhost:8001

# k3s deployment (example namespace and Service name)
# BACKEND_INTERNAL_URL=http://ahp-backend.ahp.svc.cluster.local:8001
```

`BACKEND_INTERNAL_URL` is server-only and must not use the public frontend
domain. It is read when Next.js starts/builds, so rebuild or restart the
frontend after changing it.

## Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). API requests such as
`/team/crew` are sent by the browser to `/api/team/crew` and forwarded to the
local backend.

## Deployment

For `https://homepage.ajou.app`, configure the frontend workload with:

```dotenv
NEXT_PUBLIC_BASE_URL=/api
BACKEND_INTERNAL_URL=http://ahp-backend.ahp.svc.cluster.local:8001
```

Use the Service DNS that is valid in the frontend Pod's namespace. With this
configuration no browser CORS rule is needed for the frontend domain because
the browser only communicates with `homepage.ajou.app`.
