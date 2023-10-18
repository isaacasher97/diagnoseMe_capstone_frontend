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
      <input class="bn30" type="submit" value="Update">
      <button class="bn30" @click="goBack">Go back</button>
    </form>
    </div>
  </div>
  <div v-else>
  <!-- Create A Diagnosis -->
  <div class="create-diagnosis">
    <h2>Create Diagnosis</h2>
    <form @submit.prevent="saveBlog()">
      <label for="age">
        Age: <input type="number" id="age" placeholder="Age of patient" v-model="diagnosis.age" required> 
      </label>
      <label for="name">
        Name: <input type="text" id="name" placeholder="Name Of Diagnosis" autocomplete="true" v-model="diagnosis.name" required>
      </label>
      <label for="practiceType">
        Practice: <input type="text" id="practiceType" placeholder="Enter Practice Type" v-model="diagnosis.practiceType" required>
      </label>
      <label for="specialist">
        Specialist: <input type="text" id="specialist" placeholder="Enter specialist type" v-model="diagnosis.specialist" required>
      </label>
      <label for="description">
        Description: <textarea type="text" id="description" placeholder="Describe diagnosis" v-model="diagnosis.description" />
      </label>
      <input class="bn30" type="submit" value="Create">
    </form>
  </div>
</div>
  <!-- List of diagnoses -->
  <div class="posts-table">
    <h1 class="latest-heading">Latest Diagnoses</h1>
    <div v-if="diagnosed">
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
            <a href="#" class="edit" title=""><button class="btn btn-warning btn-sm" @click="editBtn(item.id)"><img style="width: 30px;" src="../../public/imgs/icons8-edit.gif"></button></a>
            <a href="#" class="edit ml-1" title=""><button class="btn btn-danger btn-sm" @click="deleteBlog(item.id)"><img style="width: 30px;" src="../../public/imgs/icons8-trash.gif"></button></a>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <div v-else>
      <h4>Data Loading</h4>
      <img style="width: 50px;" src="../../public/imgs/icons8-loading.gif">
    </div>
  </div>
  <!-- Delete Confirmation Dialog -->
    <div v-if="showDeleteConfirmation" class="custom-alert delete-confirmation">
      <div class="message">Are you sure you want to delete this diagnosis?</div>
      <div class="actions">
        <button class="bn53 confirm" @click="confirmDelete">Yes</button>
        <button class="bn53 cancel" @click="cancelDelete">No</button>
      </div>
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
      'diagnosed': null,
      'showDeleteConfirmation': false,
      'diagnosisToDeleteId': null,
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
    fetch(this.api)
    .then(res => res.json())
    .then(data => this.diagnosed = data)
    .catch(err => console.log(err.message))
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
    deleteBlog(id) {
      if (window.confirm('Are you sure you want to delete this diagnosis?')) {
        axios
          .delete(this.api + `${id}/`, id)
          .then((response) => {
            console.log(response.data);
            this.getBlog();
          })
          .catch((error) => {
            console.log(error);
          });
      }
      // If the user clicks "Cancel" in the confirmation dialog, no action will be taken.
    },
    goBack() {
      return this.$router.go(-1)
    },
    deleteBlog(id) {
      this.showDeleteConfirmation = true;
      this.diagnosisToDeleteId = id;
    },

    confirmDelete() {
      axios
        .delete(this.api + `${this.diagnosisToDeleteId}/`, this.diagnosisToDeleteId)
        .then((response) => {
          console.log(response.data);
          this.getBlog();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.showDeleteConfirmation = false;
          this.diagnosisToDeleteId = null;
        });
    },

    cancelDelete() {
      this.showDeleteConfirmation = false;
      this.diagnosisToDeleteId = null;
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

.bn30 {
  border: 5em;
  cursor: pointer;
  outline: none;
  width: 30%;
  margin: 10px auto;
  font-size: 16px;
  -webkit-transform: translate(0);
  transform: translate(0);
  background-image: linear-gradient(45deg, #4568dc, #b06ab3);
  padding: 0.7em 2em;
  border-radius: 65px;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
  -webkit-transition: box-shadow 0.25s;
  transition: box-shadow 0.25s;
  color: white;
}

.bn30 .text {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #4568dc, #b06ab3);
}

.bn30:after {
  content: "";
  border-radius: 18px;
  position: absolute;
  margin: 4px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: #0e0e10;
}

.bn30:hover {
  background-image: linear-gradient(-45deg, #4568dc, #b06ab3);
  box-shadow: 0 12px 24px rgba(128, 128, 128, 0.1);
}

.bn30:hover .text {
  background-image: linear-gradient(-45deg, #4568dc, #b06ab3);
}
 .delete-confirmation {
    background-color: #1b2845;
    background-image: linear-gradient(315deg, #1b2845 0%, #274060 74%);
    color: antiquewhite;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .delete-confirmation .message {
    font-size: 16px;
    text-align: center;
    margin: 20px 0;
  }

  .delete-confirmation .actions {
    display: flex;
    justify-content: center;
  }

  .delete-confirmation button {
    margin: 0 10px;
  }

  .delete-confirmation button.confirm {
    background-image: linear-gradient(45deg, #4568dc, #b06ab3);
  }

  .delete-confirmation button.cancel {
    background-image: linear-gradient(-45deg, #4568dc, #b06ab3);
  }

  .delete-confirmation button.confirm:hover {
    box-shadow: 0 12px 24px rgba(128, 128, 128, 0.1);
  }

  .delete-confirmation button.cancel:hover {
    box-shadow: 0 12px 24px rgba(128, 128, 128, 0.1);
  }

</style>