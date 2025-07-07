import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export default defineConfig({
  out: "./drizzle",
  schema: "./app/db/schema.server.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
