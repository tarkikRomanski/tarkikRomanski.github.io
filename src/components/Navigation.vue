<template>
    <ul class="navigation">
        <router-link tag="li" class="navigation__item" v-for="page in pages" :key="page.name" :to="{ name: page.name }">
            {{ page.title }}
        </router-link>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                pages: [
                    {
                        name: 'main',
                        title: 'Main'
                    },
                    {
                        name: 'posts',
                        title: 'Posts'
                    },
                    {
                        name: 'portfolio',
                        title: 'Portfolio'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>