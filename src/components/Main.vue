<template>
    <div class="mainPage">
        <page-hero v-if="pageData" :title="pageData.title" :text="pageData.heroText" :image="pageData.heroImage.url" />
        <h3>Latest works:</h3>
        <portfolio-list :latest="true" />
        <h3>Latest posts</h3>
        <posts :latest="true" />
    </div>
</template>

<script>
    import PagesResource from '../resources/pages';
    import Posts from './posts/Posts';
    import PageHero from './pages/PageHero';
    import PortfolioList from './portfolio/PortfolioList';

    export default {
        components: {
            Posts,
            PageHero,
            PortfolioList
        },

        data() {
            return {
                portfolioResource: new PagesResource(this.$apollo),
                pageData: null
            }
        },

        created() {
            this.portfolioResource.getMainPageData().then(response => this.pageData = response);
        }
    }
</script>