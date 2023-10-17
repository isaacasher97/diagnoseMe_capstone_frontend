<template>
<div class="add-diagnosis-container">
<h1>Add Your Diagnosis Below</h1>
  <div class="add-diagnosis">
    <form v-on:submit.prevent="submitForm">
        <div class="form-group">
            <label for="name">Name Of Diagnosis</label>
            <input type="text" class="form-control" id="name" v-model="name">
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" v-model="description"></textarea>
        </div>
        <div class="form-group">
            <button type="submit">Add Task</button>
        </div>
    </form>
  </div>
</div>
</template>

<script>
import axios from "axios"

export default {
    name: 'AddDiagnosisView',
    data() {
        return {
            list: [],
            name: '',
            age: '',
            practiceType: '',
            specialist: '',
            description: ''
        }
    },
    methods: {
    async submitForm() {
        try {
            //send POST request to API
            const response = await this.$http.post('https://diagnose-me-backend.onrender.com/diagnosis/', {
                name: this.name,
                age: this.age,
                practiceType: this.practiceType,
                specialist: this.specialist,
                description: this.description,
                completed: false
            });
            //append the returned data to the list array
            this.list.push(response.data);
            //Reset the input field values
            this.name = '';
            this.age = '';
            this.practiceType = '';
            this.specialist = '';
            this.description = '';
        } catch (error) {
            //log the error
            console.log(error);
        }
    }
    }
}
</script>

<style>

</style>