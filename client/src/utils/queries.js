import {gql} from '@apollo/client';

export const QUERY_USER = gql`
query user($username: username){
    _id
    username
    email
    favorites {
        _id
        songName
        artistName
        songLink
        albumArt
    }
}`;

export const QUERY_BLOGS = gql`
  query getBlogs {
    blogs {
      _id
      thoughtText
      blogAuthor
      createdAt
    }
  }
`;

export const QUERY_BLOG_BY_ID = gql`
  query getBlogById($blogId: ID!) {
    blog (blogId: $blogId) {
      _id
      blogText
      blogAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;
