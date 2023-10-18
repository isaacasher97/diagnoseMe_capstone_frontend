 <template>
  <div class="symtpoms">
    <!-- List Of Symptoms -->
    <div class="posts-table">
      <h1 class="latest-heading">Possible Symptoms</h1>
      <table class="table">
        <thead class="table-light">
          <th>ID</th>
          <th>NAME</th>
        </thead>
        <tbody class="reverse-tbl">
          <tr v-for="item in paginatedSymptoms" :key="item.ID">
            <td>{{ item.ID }}</td>
            <td>{{ item.Name }}</td>
          </tr>
        </tbody>
      </table>
        <!-- Pagination buttons -->
        <div id="nxt-prev-btns" class="paginationbtns">
            <button id="prev-btn" class="bn5" @click="previousPage" :disabled="currentPage === 1">Previous</button>
            <button id="nxt-btn" class="bn5" @click="nextPage" :disabled="currentPage * itemsPerPage >= symptoms.length">Next</button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      'symptoms': [],
      'api': 'https://healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImNvbnRhY3QuaXp6eXNob3dAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxMDQ0MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjEwOSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiIxMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJCYXNpYyIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjMtMTAtMTgiLCJpc3MiOiJodHRwczovL2F1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2OTc2MTg5NTcsIm5iZiI6MTY5NzYxMTc1N30.L1xFjrxHKD5dGqKWQrkVsff4GnM17jE6_iZr0BVMlxY&format=json&language=en-gb',
      'symptom': {
        'id': '',
        'name': '',
      },
      'currentPage': 1,
      'itemsPerPage': 10, // Adjust the number of items per page as needed
    };
  },
  computed: {
    paginatedSymptoms() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.symptoms.slice(startIndex, endIndex);
    },
  },
  created() {
    this.getSymptoms();
  },
  methods: {
    getSymptoms() {
      axios.get(this.api)
        .then(response => {
          this.symptoms = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage * this.itemsPerPage < this.symptoms.length) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style>
#nxt-prev-btns {
    width: 100%;
}
.bn5 {
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.bn5:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowingbn5 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowingbn5 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.bn5:active {
  color: #000;
}

.bn5:active:after {
  background: transparent;
}

.bn5:hover:before {
  opacity: 1;
}

.bn5:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #191919;
  left: 0;
  top: 0;
  border-radius: 10px;
}
.paginationbtns {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 5px;
}
</style>