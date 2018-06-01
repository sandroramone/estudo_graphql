import { commentMutations } from "./resources/comment/comment.scheme";
import { postMutation } from "./resources/post/post.schema";
import { userMutations } from "./resources/user/user.schema";

const Mutation = `
    type Mutation {
        ${commentMutations}
        ${postMutation}
        ${userMutations}
    }
`

export {
    Mutation
}