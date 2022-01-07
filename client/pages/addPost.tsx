import { useMutation, gql } from "@apollo/client";

const CREATE_POST_MUTATION = gql`
  mutation CREATE_POST_MUTATION($title: String!, $content: String) {
    createPost(data: { title: $title, conent: $content }) {
      id
      title
      content
      published
    }
  }
`;

export default function AddPost() {
  return <h1>Add Post</h1>;
}
