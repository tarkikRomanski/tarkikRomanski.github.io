<template>
    <div class="gallery">
        <vue-gallery :images="images" :index="index" @close="index = null" />
        <div class="image" v-for="(image, imageIndex) in images" :key="imageIndex"
             @click="index = imageIndex"
             :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
        ></div>
    </div>
</template>

<script>
    import VueGallery from 'vue-gallery';

    export default {
        data(){
            return {
                index: null
            }
        },

        components: {
            VueGallery
        },

        props: {
            images: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>