import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        urban: {
          50: "#f2f8ff",
          100: "#dbeefe",
          500: "#3b82f6",
          700: "#1d4ed8"
        },
        pine: {
          500: "#166534",
          700: "#14532d"
        }
      }
    }
  },
  plugins: []
};

export default config;
