"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_scheme_1 = require("./resources/comment/comment.scheme");
const post_schema_1 = require("./resources/post/post.schema");
const user_schema_1 = require("./resources/user/user.schema");
const Mutation = `
    type Mutation {
        ${comment_scheme_1.commentMutations}
        ${post_schema_1.postMutation}
        ${user_schema_1.userMutations}
    }
`;
exports.Mutation = Mutation;
