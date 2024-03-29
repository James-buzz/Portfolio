enum PostCategory {
  Showcase,
  Guide,
  Personal,
}

type Post = {
  slug: string;
  meta: PostMeta;
  content: any;
};

type PostMeta = {
  title: string;
  abstract: string;
  category: PostCategory;
  publishedOn: string;
  updatedOn: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
};

function getPostCategories() {
  return (
    Object.keys(PostCategory)
      // @ts-ignore
      .map((key: string) => PostCategory[key])
      .filter((value) => typeof value === 'string') as string[]
  );
}

export type { PostMeta, Post };
export { PostCategory, getPostCategories };

