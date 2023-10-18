<template>
<div id="blog-container">
  <div v-if="Object.keys(this.currentDiagnosis).length !==0">
     <!-- Edit A Diagnosis -->
    <div class="edit-diagnosis">
    <h2>Edit Diagnosis</h2>
    <form @submit.prevent="updateBlog(currentDiagnosis.id)">
      <label for="age">
        Age: <input type="number" id="age" placeholder="Age of patient" v-model="currentDiagnosis.age"> 
      </label>
      <label for="name">
        Name: <input type="text" id="name" placeholder="Name Of Diagnosis" autocomplete="true" v-model="currentDiagnosis.name">
      </label>
      <label for="practiceType">
        Practice: <input type="text" id="practiceType" placeholder="Enter Practice Type" v-model="currentDiagnosis.practiceType">
      </label>
      <label for="specialist">
        Specialist: <input type="text" id="specialist" placeholder="Enter specialist type" v-model="currentDiagnosis.specialist">
      </label>
      <label for="description">
        Description: <textarea type="text" id="description" placeholder="Describe diagnosis" v-model="currentDiagnosis.description" />
      </label>
      <input class="pst-btn" type="submit" value="Update">
    </form>
    </div>
  </div>
  <div v-else>
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
      <input class="pst-btn" type="submit" value="Create">
    </form>
  </div>
  </div>
  <!-- List of diagnoses -->
  <div class="posts-table">
    <h1 class="latest-heading">Latest Diagnoses</h1>
    <table class="table">
      <thead class="table-light">
        <th>Age</th>
        <th>Name</th>
        <th>Practice Type</th>
        <th>Specialist</th>
        <th>Description</th>
        <th>Actions</th>
      </thead>
      <tbody class="reverse-tbl">
        <tr v-for="item in diagnoses" :key="item.id">
          <td>{{ item.age }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.practiceType }}</td>
          <td>{{ item.specialist }}</td>
          <td>{{ item.description }}</td>
          <td>
            <a href="#" class="edit" title=""><button class="btn btn-warning btn-sm" @click="editBtn(item.id)">Edit</button></a>
            <a href="#" class="edit ml-1" title=""><button class="btn btn-danger btn-sm" @click="deleteBlog(item.id)">Delete</button></a>
          </td>
        </tr>
      </tbody>
    </table>
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
    },
    editBtn(id) {
      console.log(id);
      this.diagnoses.map(diagnosis => {
        if(diagnosis.id === id ) {
          console.log(diagnosis.name)
          this.currentDiagnosis = { 'id': diagnosis.id, 'age': diagnosis.age, 'name': diagnosis.name, 'practiceType': diagnosis.practiceType, 'specialist': diagnosis.specialist, 'description': diagnosis.description }
          
        }
      })
    },
    updateBlog(id){
      axios.put(this.api + `${id}/`, this.currentDiagnosis).then(
        response => {
          console.log(response.data)
          this.getBlog()
          this.currentDiagnosis = {}
        }
      ).catch(error => {
        console.log(error)
      })
    },
    deleteBlog(id){
      axios.delete(this.api + `${id}/`, id).then(
        response => {
          console.log(response.data)
          this.getBlog()
        }
      ).catch(error => {
        console.log(error)
      })
    },
  }
}
</script>

<style>
.create-diagnosis, .edit-diagnosis {
  background-color: #1b2845;
  background-image: linear-gradient(315deg, #1b2845 0%, #274060 74%);
  color: antiquewhite;
  width: 70%;
  margin: 0 auto;
  padding: 10px;
  border-radius: 20px;
}

.create-diagnosis form, .edit-diagnosis form {
  display: flex;
  flex-direction: column;
}
label {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
}

.pst-btn {
  width: 20%;
  margin: 10px auto;

}

.latest-heading {
  color: white;
  margin-top: 10px;
  padding: 10px;
  text-decoration: underline;
}
.table {
  width: max-content;
  margin: 0 auto;
  border: 5px solid black;
}
</style>