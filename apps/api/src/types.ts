export type Article = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  regions: Region[];
  content_type: ContentType;
  published_at: string;
  analysts: Analyst[];
};

export type Region = {
  id: number;
  slug: string;
  name: string;
};

export type Analyst = {
  slug: string;
  first_name: string;
  last_name: string;
  picture: string;
};

export type Channel = {
  slug: string;
  name: string;
  badge: string;
};

export type ContentType = {
  id: number;
  name: string;
  color: string;
  asset_class_id: string;
};
