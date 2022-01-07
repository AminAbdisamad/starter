import { useQuery, gql } from "@apollo/client";
import { PostProps } from "components/Types";

const GET_ALL_POSTS = gql`
  query GET_ALL_POSTS {
    posts {
      id
      title
      content
      published
      author {
        id
        email
        password
        name
        username
      }
    }
  }
`;

export default function Posts() {
  const { data, loading, error } = useQuery<PostProps>(GET_ALL_POSTS);
  if (loading) return "Loading ...";
  if (error) return error;
  const posts = data?.posts.map((post) => {
    return (
      <ul key={post.id}>
        <li>
          <h3>{post.title}</h3>
        </li>
        <li>{post.content}</li>
        <li>{post.published}</li>
      </ul>
    );
  });
  return (
    <div>
      <h1>Get Posts</h1>
      {posts}
    </div>
  );
}
