<template>
  <div class="book-container">
    <div class="book">
      <div class="book-content" @click="nextPage">
        <div class="page" :style="pageStyle(0)">
          <div class="content" v-html="currentPageContent">
          </div>
        </div>
      </div>
      <div class="nav-buttons">
        <button @click="previousPage" :disabled="currentPage === 0">Previous Page</button>
        <button @click="nextPage" :disabled="currentPage === pages.length">Next Page</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 0,
      pages: [
        { content: 
          '<h1>Step 1</h1><br><br><ul><li style="padding: 20px;">Navigate to Diagnose Me Page and Search For Your symptom in the symptoms list</li><li>Once a symptom and its ID are identified, use the search form below the symptoms to search for a possible diagnosis </li></ul><div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-success" style="width: 25%;">25%</div></div><br><h4>Your Journey Has Begun!</h4><img style="width: 300px;" src="https://i.imgur.com/nuENWpG.png">'
        },
        { content:
           '<h1>Step 2</h1><br><br><ul><li style="padding: 20px;">Once you see the diagnosis list, copy your diagnosis over to the clipboard using the copy button</li><li>You should aslo see an alert confirming that the data was copied to the clipboard</li></ul><div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-info text-dark" style="width: 50%;">50%</div></div><br><h4>You are halfway there!</h4><img style="width: 300px;" src="https://i.imgur.com/wNljuNa.png">'      
        },
        { content:
          '<h1>Step 3</h1><br><br><ul><li style="padding: 20px;">Navigate to the Diagnosis page and paste your diagnosis</li><li>Once a diagnosis is posted, you can take action to either update or delete the post from the table below (It may take some time to load)</li></ul><div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-warning text-dark" style="width: 75%;">75%</div></div><br><h4>Almost There!</h4><img style="width: 200px;" src="https://i.imgur.com/CSvgWhs.png">'
        },
        { content: 
          '<h1>Step 4</h1><br><br><ul><li style="padding: 20px;">Finally, Click on Find a Doctor to be redirected to search for your nearest medical specialist</li><li>ZocDoc is what will be used ton find a specialist. If you are not familiar with zocdoc, read about it <a style="color: white; text-decoration: none;" href="https://www.zocdoc.com/about/" target="_blank">HERE</a></li></ul><div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-danger text-dark" style="width: 100%;">100%</div></div><br><h4>Congrats, you made it!</h4><img style="width: 300px;" src="https://i.imgur.com/GihWCJz.png">'
        },
        { content: "Back Cover" },
        // Add more pages and content as needed
      ],
    };
  },
  methods: {
    pageStyle(index) {
      return {
        zIndex: index === 0 ? 1 : 0,
      };
    },
    previousPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.pages.length) {
        this.currentPage++;
      }
    },
  },
  computed: {
    currentPageContent() {
      return this.currentPage === 0
        ? '<h1>How To Use Our Services:</h1><br><br><h3>A Step By Step Guide</h3><img style="width: 400px;" src="https://i.imgur.com/wSIFCLi.png">'
        : this.currentPage === this.pages.length
        ? '<h1>Thank you for using DiagnoseMe!</h1><br><br><h3>Have a healthy day!</h3><img style="width: 400px;" src="https://i.imgur.com/nbs6ZEl.gif">'
        : this.pages[this.currentPage - 1].content;
    },
  },
};
</script>

<style scoped>
.book-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.book {
  width: 500px;
  height: 600px;
  perspective: 1200px;
  position: relative;
  transform-style: preserve-3d;
}

.book-content {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: openBook 2s forwards;
}

.page {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #f7f7f7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 0;
  backface-visibility: hidden; /* Hide the back face */
    background-color: #c2b6b6;
  background-image: linear-gradient(315deg, #c2b6b6 0%, #576574 74%);
}

.content {
  color: white;
}

.front-cover {
  width: 100%;
  height: 100%;
  background: #d9b0b0;
  position: absolute;
  transform: rotateY(0deg);
  transform-origin: left;
  backface-visibility: hidden; /* Hide the back face */
  color: #fff;
  text-align: center;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(45deg, #ff5733, #ff0f77);
}

.content {
  padding: 20px;
  font-size: 16px;

}

.nav-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  background: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
.content img {
  width: 50px;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>