<template>
  <div class="about">
    <h1>About Us</h1>
    <BookComponent/>
  </div>
</template>

<script>
import BookComponent from '../components/BookComponent.vue'

export default {
  name: 'AboutView',
  components: {
    BookComponent
  }
}
</script>

<style>
.about h1 {
  color: antiquewhite;
  text-decoration: underline;
  margin-bottom: 0;
  padding: 0;
}
</style>
