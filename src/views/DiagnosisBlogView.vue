<template>
<div id="blog-container"> 
  <h1>Call Api</h1>
  <ul v-for="item in list" :key="item.id">
    <li>{{ item.name }}</li>
    <li>{{ item.age }}</li>
    <li>{{ item.practiceType }}</li>
    <li>{{ item.specialist }}</li>
    <li>{{ item.description }}</li>
  </ul>
</div>
</template>

<script>
import axios from "axios"
export default {
    name: 'DiagnosisBlogView',
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