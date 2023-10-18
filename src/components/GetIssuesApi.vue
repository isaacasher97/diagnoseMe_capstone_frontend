<template>
   <div class="symtpoms">
    <!-- List Of Diagnosis -->
    <div class="posts-table">
      <h1 class="latest-heading">Possible Diagnosis</h1>
      <table class="table">
        <thead class="table-light">
          <th>ID</th>
          <th>Description</th>
          <th>Diagnosis</th>
          <th>Accuracy</th>
        </thead>
        <div class="search-bar">
        <label for="symptomNumber">Enter Symptom ID:</label>
        <input type="number" id="symptomNumber" v-model="symptomNumber">
        <button @click="searchDiagnosis">Search</button>
      </div>
        <tbody class="reverse-tbl">
          <tr v-for="item in issues" :key="item.ID">
            <td>{{ item.Issue.ID }}</td>
            <td>{{ item.Issue.Name }}</td>
            <td>{{ item.Issue.ProfName }}</td>
            <td>{{ item.Issue.Accuracy }}</td>
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
            'api': 'https://healthservice.priaid.ch/diagnosis?symptoms=[]&gender=male&year_of_birth=26&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImlzYWFjLmFzaGVyOTdAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxMDM2NiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjEwOSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiIxMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJCYXNpYyIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjMtMTAtMDMiLCJpc3MiOiJodHRwczovL2F1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2OTc2MDU5NTEsIm5iZiI6MTY5NzU5ODc1MX0.fWj3Dy3vUqbf-0n1k_FhXWb75YHptme9p-kCpYPSYIE&format=json&language=en-gb',
            'Issue': {
                'id': '',
                'name': '',
                'profname': '',
                'accuracy': '',
            },
            'symptomNumber': null,    
        }
    },
    mounted() {
        console.log('DOM Rendered')
    },
    created() {
        console.log('DOM created')
        this.getIssues();
    },
    methods: {
        getIssues() {
            axios.get(this.api).then(
                response => {
                    console.log(response.data)
                    this.issues = response.data
                }
            ).catch(error => {
                console.log(error)
            }) 
        },
         searchDiagnosis() {
    if (this.symptomNumber) {
      const apiUrl = `https://healthservice.priaid.ch/diagnosis?symptoms=[${this.symptomNumber}]&gender=male&year_of_birth=26&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImlzYWFjLmFzaGVyOTdAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxMDM2NiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjEwOSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiIxMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJCYXNpYyIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjMtMTAtMDMiLCJpc3MiOiJodHRwczovL2F1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2OTc2MDU5NTEsIm5iZiI6MTY5NzU5ODc1MX0.fWj3Dy3vUqbf-0n1k_FhXWb75YHptme9p-kCpYPSYIE&format=json&language=en-gb`;

      axios.get(apiUrl)
        .then(response => {
          this.issues = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
    }
}
</script>

<style>

</style>