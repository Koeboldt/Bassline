import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) 
    {
      token
      user 
        {
            _id
            username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(
        username: $username,
        email: $email,
        password: $password
    ) 
    {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FAVORITE = gql`
  mutation addUser($songName: String!, $artistName: String!, $songLink: String!, $albumArt: String!) {
    addFavorite(
        songName: $songName,
        artistName: $artistName,
        songLink: $songLink,
        albumArt: $albumArt
    ) 
    {
      Favorite {
        _id
        songName
        artistName
        songLink
        albumArt
      }
    }
  }
`;

export const ADD_BLOG = gql`
  mutation addBlog($blogText: String!, $blogAuthor: String!) {
    addBlog(
        blogText: $blogText,
        blogAuthor: $blogAuthor
    ) 
    {
        _id
        blogText
        blogAuthor
        createdAt
        comments {
            _id
            commentText
            commentAuthor
        }
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($blogId: ID!, $commentText: String!, $commentAuthor: String!) {
    addComment(
      blogId: $blogId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) 
    {
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
