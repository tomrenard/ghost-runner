# Next.js SaaS Template

This is a starter template for building a SaaS application using Next.js, Supabase, and Radix UI. It includes everything you need to get started quickly, including authentication, internationalization, and a UI component library.

## ✨ Features

- **Framework**: [Next.js](https://nextjs.org/)
- **Authentication**: [Supabase](https://supabase.io/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) and [Lucide Icons](https://lucide.dev/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Testing**: [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Linting & Formatting**: [Biome](https://biomejs.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn (v1.22 or higher)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**

    ```bash
    yarn install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of your project and add the following environment variables. You can get these from your Supabase project settings.

    ```bash
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

4.  **Run the development server:**

    ```bash
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

In the project directory, you can run the following commands:

| Command           | Description                            |
| :---------------- | :------------------------------------- |
| `yarn dev`        | Runs the app in the development mode.  |
| `yarn build`      | Builds the app for production.         |
| `yarn start`      | Starts the production server.          |
| `yarn lint`       | Lints the code using Biome.            |
| `yarn lint:fix`   | Fixes linting errors automatically.    |
| `yarn format`     | Formats the code using Biome.          |
| `yarn format:fix` | Fixes formatting errors automatically. |
| `yarn biome`      | Formats and lints the code.            |
| `yarn test`       | Runs the tests using Vitest.           |

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
