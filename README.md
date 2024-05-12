# [Jotai Flow](https://jotai-flow.vercel.app)

This is an open source habit app build with everything new in Next.js 14. It is bootstrapped with `create-t3-app`.

<!-- [![Jotai Flow](./public/og.png)](https://jotai-flow.vercel.app/) -->

> **Warning**
> This project is still in development and is not ready for production use.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **User Management:** [Clerk](https://clerk.com)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Content Management:** [Contentlayer](https://www.contentlayer.dev)
- **File Uploads:** [uploadthing](https://uploadthing.com)

## Features to be implemented

- [x] Authentication with **Clerk**
- [x] ORM using **Drizzle ORM**
- [x] Database on **Neon**
- [ ] Validation with **Zod**
- [ ] Dashboard with tasks, categories, and subcategories
- [ ] File uploads with **uploadthing**
- [ ] Blog using **MDX** and **Contentlayer**
- [ ] User subscriptions
- [ ] AI tools for tasks

## Running Locally

1. Clone the repository

   ```bash
   git clone https://github.com/iboughtbed/jotai-flow.git
   ```

2. Install dependencies using pnpm

   ```bash
   pnpm install
   ```

3. Copy the `.env.example` to `.env` and update the variables.

   ```bash
   cp .env.example .env
   ```

4. Start the development server

   ```bash
   pnpm run dev
   ```

5. Push the database schema

   ```bash
   pnpm run db:push
   ```

## Introduction

A habit app

## Contributing

Contributions are welcome! Please open an issue if you have any questions or suggestions. Your contributions will be acknowledged. See the [contributing guide](./CONTRIBUTING.md) for more information.

## License

Licensed under the MIT License. Check the [LICENSE](./LICENSE.md) file for details.
