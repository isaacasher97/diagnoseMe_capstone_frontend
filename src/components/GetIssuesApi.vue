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
      <table class="table" v-if="searchClicked">
        <thead class="table-light">
          <th>ID</th>
          <th>Description</th>
          <th>Diagnosis</th>
          <th>Specialisation</th>
          <th>Accuracy</th>
          <th>Action</th> <!-- New column for the copy button -->
        </thead>
        <tbody class="reverse-tbl">
          <tr v-for="item in issues" :key="item.Issue.ID">
            <td>{{ item.Issue.ID }}</td>
            <td>{{ item.Issue.Name }}</td>
            <td>{{ item.Issue.ProfName }}</td>
            <td>{{ getSpecialisationName(item.Specialisation) }}</td>
            <td>{{ item.Issue.Accuracy }}%</td>
            <!-- Button to copy row data -->
            <td>
              <button class="copy-button" @click="copyRowData(item)">
                <img src="../../public/imgs/icons8-copy.gif">
              </button>
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
      issues: [],
      api: 'https://healthservice.priaid.ch/diagnosis?symptoms=[10]&gender=male&year_of_birth=26&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImdxaXp6eS5ueUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEwNDUwIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMTA5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6IjEwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IkJhc2ljIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMy0xMC0xOCIsImlzcyI6Imh0dHBzOi8vYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTY5NzY2OTIyMCwibmJmIjoxNjk3NjYyMDIwfQ.APMeAnpqVXNIZbYhjp13zhOqor9XiGH-dh5r4DjDdxE&format=json&language=en-gb',
      symptomNumber: null,
      userAge: null,
      selectedGender: 'male',
      searchClicked: false,
    };
  },
  methods: {
    searchDiagnosis() {
      if (this.symptomNumber) {
        const ageQueryParam = this.userAge ? `&year_of_birth=${this.userAge}` : '';
        const apiUrl = `https://healthservice.priaid.ch/diagnosis?symptoms=[${this.symptomNumber}]&gender=${this.selectedGender}${ageQueryParam}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImdxaXp6eS5ueUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEwNDUwIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMTA5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6IjEwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IkJhc2ljIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMy0xMC0xOCIsImlzcyI6Imh0dHBzOi8vYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTY5NzY2OTIyMCwibmJmIjoxNjk3NjYyMDIwfQ.APMeAnpqVXNIZbYhjp13zhOqor9XiGH-dh5r4DjDdxE&format=json&language=en-gb`;

        axios
          .get(apiUrl)
          .then((response) => {
            this.issues = response.data;
            this.searchClicked = true;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    getSpecialisationName(specialisation) {
      if (specialisation && specialisation.length > 0) {
        return specialisation[0].Name;
      } else {
        return 'N/A';
      }
    },
    copyRowData(item) {
      const rowData = `ID: ${item.Issue.ID}, Description: ${item.Issue.Name}, Diagnosis: ${item.Issue.ProfName}, Specialisation: ${this.getSpecialisationName(item.Specialisation)}, Accuracy: ${item.Issue.Accuracy}%`;

      navigator.clipboard
        .writeText(rowData)
        .then(() => {
          this.customAlert('Copied To Clipboard', 'success'); // Call the custom alert function
        })
        .catch((error) => {
          this.customAlert('Error copying data', 'error'); // Call the custom alert function
        });
    },
    customAlert(message, type) {
      const alertDiv = document.createElement('div');
      alertDiv.classList.add('custom-alert', type); // Apply custom styles based on 'type'

      const messageDiv = document.createElement('div');
      messageDiv.textContent = message;
      alertDiv.appendChild(messageDiv);

      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.className = 'bn53';
      closeButton.addEventListener('click', () => {
        alertDiv.remove();
      });
      alertDiv.appendChild(closeButton);

      document.body.appendChild(alertDiv);
    },
  },
};
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
.copy-button {
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}


/* Custom alert styles */
.custom-alert {
  position: fixed;
  top: 10px;
  right: 0;
  left: 0;
  width: 20%;
  margin: 0 auto;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}

.success {
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
}
.success button {
  border-radius: 20px;
}
.success div {
  font-weight: 900;
  color: beige;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-align: center;
}
.error {
  background-color: #d9534f; /* Red color for error */
}
.copy-button img {
    width: 30px;
}

.bn53 {
  background-color: #b81515;
  padding: 7px;
  width: 100px;
  margin: 0 auto;
  margin-top: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  animation: bn53bounce 4s infinite;
  cursor: pointer;
}

@keyframes bn53bounce {
  5%,
  50% {
    transform: scale(1);
  }

  10% {
    transform: scale(1);
  }

  15% {
    transform: scale(1);
  }

  20% {
    transform: scale(1) rotate(-5deg);
  }

  25% {
    transform: scale(1) rotate(5deg);
  }

  30% {
    transform: scale(1) rotate(-3deg);
  }

  35% {
    transform: scale(1) rotate(2deg);
  }

  40% {
    transform: scale(1) rotate(0);
  }
}
</style>