<template>
<div id="blog-container">
  <!-- Create A Diagnosis -->
  <div class="create-diagnosis">
    <h2>Create Diagnosis</h2>
    <form @submit.prevent="saveBlog()">
      <label for="age">
        Age: <input type="number" id="age" placeholder="Age of patient" v-model="diagnosis.age"> 
      </label>
      <label for="name">
        Name: <input type="text" id="name" placeholder="Name Of Diagnosis" autocomplete="true" v-model="diagnosis.name">
      </label>
      <label for="practiceType">
        Practice: <input type="text" id="practiceType" placeholder="Enter Practice Type" v-model="diagnosis.practiceType">
      </label>
      <label for="specialist">
        Specialist: <input type="text" id="specialist" placeholder="Enter specialist type" v-model="diagnosis.specialist">
      </label>
      <label for="description">
        Description: <textarea type="text" id="description" placeholder="Describe diagnosis" v-model="diagnosis.description" />
      </label>
      <input type="submit" value="Create Post">
    </form>
  </div>
  <!-- List of diagnoses -->
  <div class="posts-table">
    <h1>Latest Diagnoses</h1>
    <table class="table">
      <thead class="table-light">
        <th>Age</th>
        <th>Name</th>
        <th>Practice Type</th>
        <th>Specialist</th>
        <th>Description</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr v-for="item in diagnoses" :key="item.id">
          <td>{{ item.age }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.practiceType }}</td>
          <td>{{ item.specialist }}</td>
          <td>{{ item.description }}</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- Edit A Diagnosis -->
  <div class="edit-diagnosis">
    <h2>Edit A Diagnosis</h2>
    <form>
      
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      'diagnoses': [],
      'currentDiagnosis': {},
      'api': 'https://diagnose-me-backend.onrender.com/diagnosis/',
      'diagnosis': {
        'name': '',
        'age': '',
        'practiceType': '',
        'specialist': '',
        'description': '',
      } 
    }
  },
  mounted() {
    console.log('DOM rendered')
  },
  created() {
    console.log('DOM is created')
    this.getBlog()
  },
  methods: {
    // get Post method
    getBlog(){
      axios.get(this.api).then(
        response => {
          console.log(response.data)
          this.diagnoses = response.data;
        }
      ).catch(error => {
        console.log(error)
      })
    },
    // create POST method
    saveBlog() {
      axios.post(this.api, this.diagnosis).then(
        response => {
          console.log(response.data)
          this.getBlog()
          this.diagnosis = {}
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>