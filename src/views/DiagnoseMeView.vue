<template>
<div class="dme-container">
  <h1>This is the diagnose me page</h1>
  <DiagnoseMeApi/>
</div>
</template>

<script>
import DiagnoseMeApi from '../components/DiagnoseMeApi.vue'
export default {
    name: 'DiagnoseMeView',
    components: { DiagnoseMeApi }
}
</script>

<style>

</style>