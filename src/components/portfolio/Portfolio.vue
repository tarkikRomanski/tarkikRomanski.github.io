<template>
    <div>
        <div v-if="portfolio">
            <div class="backBtn" @click="back()">Back</div>
            <h1>{{ portfolio.name }}</h1>
            <gallery v-if="images" :images="images" />
            <div class="portfolioDate">
                <div>
                    <strong>Start:</strong> {{ portfolio.start ? portfolio.start : '-' }}
                </div>
                <div>
                    <strong>End:</strong> {{ portfolio.end ? portfolio.end : '-' }}
                </div>
            </div>
            <div class="portfolioContent" v-html="portfolio.description"></div>
        </div>
    </div>
</template>

<script>
    import portfolioResource from '../../resources/portfolio';
    import Gallery from '../parts/Gallery';

    export default {
        data() {
            return {
                portfolioResource: new portfolioResource(this.$apollo),
                portfolio: null,
            }
        },

        props: {
            slug: {
                type: String,
                required: true
            }
        },

        computed: {
            images: function () {
                let images = [];
                this.portfolio.images.forEach(value => {
                    images.push(value.url);
                });
                return images;
            }
        },

        created() {
            this.portfolioResource.getPortfolio(this.slug).then(response => this.portfolio = response);
        },

        methods: {
            back() {
                this.$router.push('/');
            }
        },

        components: {
            Gallery
        }
    }
</script>