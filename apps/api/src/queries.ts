const articlesQuery = `
SELECT 
    a.slug AS article_slug,
    a.title AS article_title,
    a.summary,
    a.content,
    a.published_at,
    an.first_name,
    an.last_name,
    an.picture
FROM articles a
JOIN article_analysts aa ON a.slug = aa.article_slug
JOIN analysts an ON aa.analyst_slug = an.slug
LIMIT ? OFFSET ?;
`;

const articleBySlugQuery = `
SELECT 
    a.slug AS article_slug,
    a.title AS article_title,
    a.summary,
    a.content,
    a.published_at,
    an.first_name,
    an.last_name,
    an.picture
FROM articles a
JOIN article_analysts aa ON a.slug = aa.article_slug
JOIN analysts an ON aa.analyst_slug = an.slug
WHERE a.slug = ?;
`;

export { articlesQuery, articleBySlugQuery };
