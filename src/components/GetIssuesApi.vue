<template>
  <div class="symptoms">
    <!-- List Of Possible Diagnosis -->
    <div class="posts-table">
      <h1 class="latest-heading">Search For Diagnosis</h1>
      <div class="search-bar">
        <label for="symptomNumber">Enter Symptom ID#:</label>
        <input type="number" id="symptomNumber" v-model="symptomNumber">
        <label for="userAge">Enter Age:</label>
        <input type="number" id="userAge" v-model="userAge">
        <label for="genderSelect">Select Gender:</label>
        <select id="genderSelect" v-model="selectedGender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button class="bn5" @click="searchDiagnosis">Search</button>
      </div>

      <!-- Add v-if to hide the table by default -->
      <table class="table" v-if="searchClicked">
        <thead class="table-light">
          <th>ID</th>
          <th>Description</th>
          <th>Diagnosis</th>
          <th>Specialisation</th>
          <th>Accuracy</th>
        </thead>
        <tbody class="reverse-tbl">
          <tr v-for="item in issues" :key="item.Issue.ID">
            <td>{{ item.Issue.ID }}</td>
            <td>{{ item.Issue.Name }}</td>
            <td>{{ item.Issue.ProfName }}</td>
            <td>{{ getSpecialisationName(item.Specialisation) }}</td>
            <td>{{ item.Issue.Accuracy }}%</td>
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
      'issues': [],
      'api': 'https://healthservice.priaid.ch/diagnosis?symptoms=[]&gender=male&year_of_birth=26&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImlzYWFjLmFzaGVyOTcrMUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEwNDQxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMTA5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6IjEwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IkJhc2ljIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMy0xMC0xOCIsImlzcyI6Imh0dHBzOi8vYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTY5NzYxMjM0OCwibmJmIjoxNjk3NjA1MTQ4fQ.c1X_SL7FUwhGzC7odI-lFSbHz7XqlOelTuoU9sQpKXo',
      'symptomNumber': null,
      'userAge': null,
      'selectedGender': 'male',
      'searchClicked': false, 
    }
  },
  methods: {
    searchDiagnosis() {
      if (this.symptomNumber) {
        const ageQueryParam = this.userAge ? `&year_of_birth=${this.userAge}` : '';
        const apiUrl = `https://healthservice.priaid.ch/diagnosis?symptoms=[${this.symptomNumber}]&gender=${this.selectedGender}${ageQueryParam}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImlzYWFjLmFzaGVyOTcrMUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEwNDQxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMTA5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6IjEwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IkJhc2ljIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMy0xMC0xOCIsImlzcyI6Imh0dHBzOi8vYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTY5NzYxMjM0OCwibmJmIjoxNjk3NjA1MTQ4fQ.c1X_SL7FUwhGzC7odI-lFSbHz7XqlOelTuoU9sQpKXo&format=json&language=en-gb`;

        axios.get(apiUrl)
          .then(response => {
            this.issues = response.data;
            // Set searchClicked to true to show the table and data
            this.searchClicked = true;
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    getSpecialisationName(specialisation) {
      if (specialisation && specialisation.length > 0) {
        return specialisation[0].Name;
      } else {
        return 'N/A'; // Display "N/A" if no specialisation data is available
      }
    },
  }
}
</script>

<style>
.search-bar {
    display: flex;
    justify-content: center;
    margin: 0 auto;
}
.search-bar {
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 20px;
    border: 3px solid black;
    margin-bottom: 10px;
}
.search-bar input, select {
    width: 50%;
    margin: 0 auto;
    border-radius: 10px;
}
.search-bar button {
    width: max-content;
    margin: 10px auto;
}
</style>