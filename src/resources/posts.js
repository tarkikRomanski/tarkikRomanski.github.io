let privateElements = {
    apollo: null,
};

export default class PostsResource {
    constructor(apollo) {
        privateElements.apollo = apollo;
    }

    async getPosts() {
        let posts = await privateElements.apollo.query({
            query: require('../graphql/queries/allPosts.graphql')
        });

        return posts.data.allPosts;
    }

    async getLatestPosts(quantity = 6) {
        let posts = await privateElements.apollo.query({
            query: require('../graphql/queries/latestsPosts.graphql'),
            variables: {
                quantity: quantity
            }
        });

        return posts.data.allPosts;
    }

    async getPost(slug) {
        let posts = await privateElements.apollo.query({
            query: require('../graphql/queries/post.graphql'),
            variables: {
                slug
            }
        });

        return posts.data.post;
    }
}