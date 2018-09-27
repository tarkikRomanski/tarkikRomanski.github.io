let privateElements = {
    apollo: null,
};

export default class PagesResource {
    constructor(apollo) {
        privateElements.apollo = apollo;
    }

    async getMainPageData() {
        let posts = await privateElements.apollo.query({
            query: require('../graphql/queries/getMainPage.graphql')
        });

        return posts.data.mainPage;
    }

    async getPostsPageData() {
        let posts = await privateElements.apollo.query({
            query: require('../graphql/queries/getPostsFile.graphql')
        });

        return posts.data.postsPage;
    }

    async getPortfolioPageData() {
        let posts = await privateElements.apollo.query({
            query: require('../graphql/queries/getPortfolioPage.graphql')
        });

        return posts.data.portfoliosPage;
    }
}