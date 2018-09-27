<template>
  <div class="wrapper">
    <div class="content">
      <navigation />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
  name: 'app',
  components: {
      'navigation': Navigation,
  }
}
</script>