This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About

This is the website for LegalBrain built upon T3 stack

### Major Technologies used

- FrontEnd - Next Js + TailWind
- Upstash - Redis Cache + Rate Limiting APIs
- tRPC - To build type safe internal api routes
- PlanetScale - SQL servers
- Prisma - Query the database and render the results
- PineCone - Vector Database
- Steamship - To Build external APIs to use langchain and llms
  
## Getting Started

First, run the development server:

Fork the repo

Create and populate the .env.local variables according to the .env.example file

```bash
npm install 
# or 
yarn

npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
