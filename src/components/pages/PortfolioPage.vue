<template>
    <div>
        <page-hero v-if="pageData" :title="pageData.title" :text="pageData.heroText" :image="pageData.heroImage.url" />
        <portfolio-list />
    </div>
</template>

<script>
    import PagesResource from '../../resources/pages';
    import PageHero from '../pages/PageHero';
    import PortfolioList from '../portfolio/PortfolioList';

    export default {
        data() {
            return {
                portfolioResource: new PagesResource(this.$apollo),
                pageData: null
            }
        },

        created() {
            this.portfolioResource.getPortfolioPageData().then(response => this.pageData = response);
        },

        components: {
            PageHero,
            PortfolioList
        }
    }
</script>

<style scoped>

</style>