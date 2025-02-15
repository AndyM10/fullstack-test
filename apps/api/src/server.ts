import { serve } from "@hono/node-server";
import { Hono } from "hono";
import Database from "better-sqlite3";
import type { Article } from "./types.js";
import { articleBySlugQuery, articlesQuery } from "./queries.js";

const db = new Database("./data.db");
const app = new Hono();

app.get("/", async (c) => {
  return c.text("Hello Telimer!");
});

app.get("/articles", (c) => {
  //Parse the page query param from string to number
  const page = parseInt(c.req.query("page")!) || 1;
  const pageSize = 10;
  //Calculate the offset for the query
  const offset = (page - 1) * pageSize;
  try {
    const rows = db
      .prepare(articlesQuery)
      //Would be nice if the type inference worked better here maybe use an ORM like drizzle but have never used it so did not want waste time learning it.
      .all(pageSize, offset) as { article_json: any }[];

    if (rows.length === 0) {
      return c.json({ error: "No articles found" }, 404);
    }

    //parse the article_json string into an object
    const result = rows.map((row) => JSON.parse(row.article_json));

    return c.json(result); // Send rows as JSON response
  } catch (error) {
    return c.text(`Error fetching articles: ${error}`, 500);
  }
});

app.get("/articles/:slug", (c) => {
  const { slug } = c.req.param();
  try {
    const article = db.prepare(articleBySlugQuery).get(slug) as Article;
    if (!article) {
      return c.json({ error: "Article not found" }, 404);
    }
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
