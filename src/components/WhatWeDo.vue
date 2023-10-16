<template>
<div id="cardContainer" class="card mb-3" style="max-width: 90%; margin: 0 auto;">
  <div class="row g-0">
    <div class="col-md-4">
      <img style="width: 100%" src="../../public/imgs/newStethoscope.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">What We Do</h3>
        <h5 class="card-text">Diagnose Me takes the struggle out of finding the right diagnosis when you're not feeling well 🤒<br><br></h5>
        <h5 class="card-text"> By using our services, visitors can access a page to search and receive a possible diagnosis by choosing their symptoms and submitting that form<br><br></h5>
        <h5 class="card-text">A visitor can also post, update, and delete their diagnosis and view it on a public feed page. Along with their own personal notes<br><br></h5>
        <h5 class="card-text">Use ZocDoc to search to search for your nearest medical professional<br><br></h5>
        <h5 class="card-text">Whether you're interested in keeping track of your medical history, doctor visits, or simply want to check your symptoms or local medical professionals. Dianose Me is your go-to application for keeping your medical history in check.</h5>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    gap: 20px;
}

.card-title, .card-text {
    color: antiquewhite;
}

#cardContainer {
    background-color: #537895;
    background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
}

</style>