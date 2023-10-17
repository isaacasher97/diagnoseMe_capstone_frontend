<template>
  <h1>Add Diagnosis below</h1>
</template>

<script>
import axios from "axios"
export default {
    name: 'AddDiagnosisView',
    data() {
        return {
            list: []
        }
    },
    async mounted() {
        let result = await axios.get("https://diagnose-me-backend.onrender.com/diagnosis/")
        console.log(result.data)
        this.list = result.data
    }
}
</script>

<style>

</style>