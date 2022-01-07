export interface Author {
  id: string;
  email: string;
  password: string;
  name: string;
  username: string;
}

export interface Post {
  id: string;
  title: string;
  content?: string;
  published?: boolean;
  author?: Author;
}

export interface PostProps {
  posts: Post[];
}
