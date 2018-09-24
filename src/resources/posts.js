import gql from 'graphql-tag';

let privateElements = {
    apollo: null,
};

export default class PostsResource {
    constructor(apollo) {
        privateElements.apollo = apollo;
    }

    async getPosts() {
        let posts = await privateElements.apollo.query({
            query: gql`
                {
                    allPosts {
                        title
                        description
                        slug
                        heroimage { 
                            url
                        }
                    }
                }
            `
        });

        return posts.data.allPosts;
    }

    async getPost(slug) {
        let posts = await privateElements.apollo.query({
            query: gql`
                {
                    post(filter:{slug: {eq: "${slug}"}}) {
                        title
                        description
                        content
                        heroimage {
                            url
                            alt
                        }
                    }
                }
            `
        });

        return posts.data.post;
    }
}