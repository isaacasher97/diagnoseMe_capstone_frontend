<template>
<div class="card-container">
  <div class="card" style="width: 18rem;">
  <img style="height: 25vh;" src="../../public/imgs/doctor-stethoscope.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Diagnose Me</h5>
    <p class="card-text">Use our intuitive form to get a possible diagnosis</p>
    <a href="/diagnoseme" class="btn btn-primary">Get Diagnosed</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="../../public/imgs/carousel2.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Find A Medical Specialist</h5>
    <p class="card-text">Use ZocDoc to find your nearest medical specialist</p>
    <a href="https://book.zocdoc.com/get-started?utm_source=google&utm_medium=cpc_brand&utm_campaign=10439133071&utm_term=zocdoc_e&utm_content=102297848623&gclid=Cj0KCQjwm66pBhDQARIsALIR2zADJLNP-jUChyWpkkpcDKEWVmzfmfxTd3ymfKexB9whj9iQDSuqGbcaAkWcEALw_wcB" target="_blank" class="btn btn-primary">Go to ZocDoc</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="../../public/imgs/propicmain.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">About The Developer</h5>
    <p class="card-text">Learn More About the Developer Behind Diagnose Me</p>
    <a href="/about" class="btn btn-primary">View here</a>
  </div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.card-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 15px;
    gap: 20px;
}
</style>