const articlesQuery = `
SELECT 
  json_object(
    'slug', a.slug,
    'title', a.title,
    'summary', a.summary,
    'content', a.content,
    'published_at', a.published_at,
    'content_type', json_object(
      'id', ct.id,
      'name', ct.name,
      'color', ct.color,
      'asset_class_id', ct.asset_class_id
    ),
    'analysts', json_group_array(
      CASE 
        WHEN an.slug IS NOT NULL THEN json_object(
          'slug', an.slug,
          'first_name', an.first_name,
          'last_name', an.last_name,
          'picture', an.picture
        )
        ELSE NULL
      END
    )
  ) AS article_json


  FROM articles a
  LEFT JOIN article_analysts aa ON a.slug = aa.article_slug
  LEFT JOIN analysts an ON aa.analyst_slug = an.slug
  LEFT JOIN content_types ct ON a.content_type_id = ct.id
  GROUP BY a.slug
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
