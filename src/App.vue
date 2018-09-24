<template>
  <div class="wrapper">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Posts from './components/Posts';

export default {
  name: 'app',
  components: {
      'posts': Posts,
  }
}
</script>