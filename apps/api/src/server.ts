import { serve } from "@hono/node-server";
import { Hono } from "hono";
import Database from "better-sqlite3";
import type { Article } from "./types.js";
import { getRows } from "../utils/get-rows.js";

const db = new Database("./data.db");
const app = new Hono();

app.get("/", async (c) => {
  return c.text("Hello Telimer!");
});

app.get("/articles", (c) => {
  const page = parseInt(c.req.query("page")!) || 1;
  const pageSize = 10;
  const offset = (page - 1) * pageSize;
  try {
    const rows = db
      .prepare("SELECT * FROM articles LIMIT ? OFFSET ?")
      .all(pageSize, offset) as Article[];
    return c.json(rows); // Send rows as JSON response
  } catch (error) {
    return c.text(`Error fetching articles: ${error}`, 500);
  }
});

app.get("/articles/:slug", (c) => {
  const { slug } = c.req.param();
  try {
    const article = db
      .prepare("SELECT * FROM articles WHERE slug = ?")
      .get(slug) as Article;

    return c.json(article);
  } catch (error) {
    return c.text(`Error fetching article: ${error}`, 500);
  }
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
