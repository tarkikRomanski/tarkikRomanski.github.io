let privateElements = {
    apollo: null,
};

export default class PortfolioResource {
    constructor(apollo) {
        privateElements.apollo = apollo;
    }

    async getPortfolios() {
        let posts = await privateElements.apollo.query({
            query: require('../graphql/queries/allPortfolios.graphql')
        });

        return posts.data.allPortfolios;
    }

    async getLatestPortfolio(quantity = 3) {
        let posts = await privateElements.apollo.query({
            query: require('../graphql/queries/latestsPortfolio.graphql'),
            variables: {
                quantity: quantity
            }
        });

        return posts.data.allPortfolios;
    }

    async getPortfolio(slug) {
        let posts = await privateElements.apollo.query({
            query: require('../graphql/queries/portfolio.graphql'),
            variables: {
                slug
            }
        });

        return posts.data.portfolio;
    }
}