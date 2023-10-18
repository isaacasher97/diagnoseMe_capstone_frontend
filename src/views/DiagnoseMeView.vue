<template>
<div class="dme-container">
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