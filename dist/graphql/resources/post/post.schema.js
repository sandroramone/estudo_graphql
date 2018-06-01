"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postTypes = `
    # Post definition types
    type Post {
        id: ID!
        title: String!
        content: String!
        photo: String!
        createdAt: String!
        updatedAt: String!
        author: User!
        comments(first: Int, offset: Int): [ Comment! ]!
    }

    input PostInput {
        title: String!
        content: String!
        photo: String!
        author: Int!
    }
`;
exports.postTypes = postTypes;
const postQueries = `
    posts(first: Int, offset: Int): [ Post! ]!
    post(id: ID!): Post
`;
exports.postQueries = postQueries;
const postMutation = `
    createPost(input: PostInput!): Post
    updatePost(id: ID!, input: PostInput!): Post
    deletePost(id: ID!): Boolean
`;
exports.postMutation = postMutation;
