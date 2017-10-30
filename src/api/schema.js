const { makeExecutableSchema } = require('graphql-tools');

import resolvers from './resolvers';

const typeDefs = `
type Post {
  id: ID!
  title: String
  slug: String
  content: String
  comments: [Comment]!
}

type Page {
  id: ID!
  title: String
  slug: String
  content: String
}

type Comment {
  id: ID!
  text: String
}

# This type specifies the entry points into our API
type Query {
  posts: [Post]
  post(id: ID!): Post
  pageContent(slug: String!): Page
}

input PostInput {
  title: String
  content: String
}

# The mutation root type, used to define all mutations
type Mutation {
  addPost(post: PostInput!): Post
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
