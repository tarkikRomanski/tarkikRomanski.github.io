<template>
    <div class="itemsColection">
        <portfolio-item v-for="portfolio in portfolioList" :key="portfolio.slug" :portfolio="portfolio" />
    </div>
</template>

<script>
    import PortfolioResource from '../../resources/portfolio';
    import PortfolioItem from './PortfolioItem';

    export default {
        components: {
            PortfolioItem
        },

        data() {
            return {
                portfolioResource: new PortfolioResource(this.$apollo),
                portfolioList: [],
            }
        },

        props: {
            latest: {
                type: Boolean,
                default: false
            }
        },

        created() {
            if (this.latest) {
                this.portfolioResource.getLatestPortfolio().then(response => this.portfolioList = response);
            } else {
                this.portfolioResource.getPortfolios().then(response => this.portfolioList = response);
            }
        }
    }
</script>

