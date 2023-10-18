<template>
<div class="card-container">
  <div class="card" style="width: 18rem;">
  <img style="height: 25vh;" src="../../public/imgs/doctor-stethoscope.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Diagnose Me</h5>
    <p class="card-text">Use our intuitive form to get a possible diagnosis</p>
    <a href="/diagnoseme" class="bn632-hover bn26">Get Diagnosed</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="../../public/imgs/carousel2.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Find A Medical Specialist</h5>
    <p class="card-text">Use ZocDoc to find your nearest medical specialist</p>
    <a href="https://book.zocdoc.com/get-started?utm_source=google&utm_medium=cpc_brand&utm_campaign=10439133071&utm_term=zocdoc_e&utm_content=102297848623&gclid=Cj0KCQjwm66pBhDQARIsALIR2zADJLNP-jUChyWpkkpcDKEWVmzfmfxTd3ymfKexB9whj9iQDSuqGbcaAkWcEALw_wcB" target="_blank" class="bn632-hover bn26">Go to ZocDoc</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="../../public/imgs/propicmain.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">About The Developer</h5>
    <p class="card-text">Learn More About the Developer Behind Diagnose Me</p>
    <a  href="/about" class="bn632-hover bn26">View here</a>
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
.card {
  background-color: #756213;
  background-image: linear-gradient(315deg, #756213 0%, #000000 74%);
  color: antiquewhite;
}

.bn632-hover {
  width: 160px;
  font-size: 16px;
  font-weight: 600;
  padding: 8px;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align:center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  -moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.bn632-hover:hover {
  background-position: 100% 0;
  -moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.bn632-hover:focus {
  outline: none;
}

.bn632-hover.bn26 {
  background-image: linear-gradient(
    to right,
    #25aae1,
    #4481eb,
    #04befe,
    #3f86ed
  );
  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
}
</style>