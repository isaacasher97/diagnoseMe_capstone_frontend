<template>
<div class="dme-container">
  <h1>This is the diagnose me page</h1>
  <DiagnoseMeApi/>
  <GetIssuesApi />
</div>
</template>

<script>
import DiagnoseMeApi from '../components/DiagnoseMeApi.vue'
import GetIssuesApi from '../components/GetIssuesApi.vue'
export default {
    name: 'DiagnoseMeView',
    components: { DiagnoseMeApi, GetIssuesApi }
}
</script>

<style>

</style>