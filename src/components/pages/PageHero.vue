<template>
    <div class="pageHeroBlock">
        <h1 v-if="title" class="pageHeroBlock__title">{{ title }}</h1>
        <img v-if="image" class="pageHeroBlock__image" :src="image" alt="">
        <p v-if="text" class="pageHeroBlock__description">{{ text }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            },
            image: {
                type: String
            },
            text: {
                type: String
            }
        }
    }
</script>

<style scoped>

</style>