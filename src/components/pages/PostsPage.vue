<template>
    <div>
        <page-hero v-if="pageData" :title="pageData.title" :text="pageData.heroText" :image="pageData.heroImage.url" />
        <posts :latest="true" />
    </div>
</template>

<script>
    import PagesResource from '../../resources/pages';
    import Posts from '../posts/Posts';
    import PageHero from '../pages/PageHero';

    export default {
        components: {
            'posts': Posts,
            'page-hero': PageHero
        },

        data() {
            return {
                portfolioResource: new PagesResource(this.$apollo),
                pageData: null
            }
        },

        created() {
            this.portfolioResource.getPostsPageData().then(response => this.pageData = response);
        }
    }
</script>