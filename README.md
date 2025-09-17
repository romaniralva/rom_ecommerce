# ROM E-Commerce

A modern e-commerce application built with Next.js, TypeScript, TailwindCSS, Better Auth, Neon PostgreSQL, Drizzle ORM, and Zustand.

## Features

- 🛍️ Product catalog with Nike sample items
- 🎨 Modern UI with TailwindCSS
- 🔐 Authentication with Better Auth
- 🗄️ PostgreSQL database with Neon
- 🔄 Type-safe database operations with Drizzle ORM
- 🏪 State management with Zustand
- 📱 Responsive design

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Database**: Neon PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth
- **State Management**: Zustand
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Neon PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd rom_ecommerce
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update `.env.local` with your database URL and auth secrets:
   ```
   DATABASE_URL="your_neon_database_url_here"
   BETTER_AUTH_SECRET="your_secret_key_here"
   BETTER_AUTH_URL="http://localhost:3000"
   ```

4. Generate and push database schema:
   ```bash
   npm run db:push
   ```

5. Seed the database with sample Nike products:
   ```bash
   npm run db:seed
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Commands

- `npm run db:generate` - Generate migration files
- `npm run db:migrate` - Run migrations
- `npm run db:push` - Push schema changes to database
- `npm run db:seed` - Seed database with sample data

## Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── api/            # API routes
│   └── page.tsx        # Homepage
├── components/         # React components
├── lib/
│   └── db/            # Database configuration and schema
└── store/             # Zustand stores
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Submit a pull request

## License

MIT License