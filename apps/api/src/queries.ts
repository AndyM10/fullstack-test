/*
  This query returns a list of articles.
  Tried to keep the same shape as the types defined in the types.ts file.
  Had make a subquery to get the regions as placing another left join was returning duplicate analyst results.
  I believe this was due to it aggregating the two tables as as article can have multiple regions and analysts.
  I'm not sure if this is the best way to do this, but it works.
*/
const articlesQuery = `
SELECT 
  json_object(
    'slug', a.slug,
    'title', a.title,
    'summary', a.summary,
    'content', a.content,
    'published_at', a.published_at,
    'regions', (
      SELECT json_group_array(
        json_object(
          'id', r.id,
          'slug', r.slug,
          'name', r.name
        )
      )
      FROM article_regions ar
      LEFT JOIN regions r ON ar.region_id = r.id
      WHERE ar.article_slug = a.slug
    ),
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
  json_object(
    'slug', a.slug,
    'title', a.title,
    'summary', a.summary,
    'content', a.content,
    'published_at', a.published_at,
    'regions', (
      SELECT json_group_array(
        json_object(
          'id', r.id,
          'slug', r.slug,
          'name', r.name
        )
      )
      FROM article_regions ar
      LEFT JOIN regions r ON ar.region_id = r.id
      WHERE ar.article_slug = a.slug
    ),
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
  WHERE a.slug = ?
`;

export { articlesQuery, articleBySlugQuery };
