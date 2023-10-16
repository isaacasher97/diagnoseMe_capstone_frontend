<template>
  <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../../public/imgs/dentist-clinic.svg" class="d-block w-100" alt="carouselImg">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="car-txt">Need A Dental Visit?</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../../public/imgs/body-checkup.svg" class="d-block w-100" alt="carouselImg">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="car-txt">Maybe a trip to the Nuerologist?</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../../public/imgs/routine-health-checkup.svg" class="d-block w-100" alt="carouselImg">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="car-txt">Or just a simple routine checkup?</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../../public/imgs/doctor-checking-patient.svg" class="d-block w-100" alt="carouselImg">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="car-txt">Whatever it is, we've got you covered!</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>

</script>

<style>
#carouselExampleCaptions {
  margin: 10px auto;
  width: 90%;
}

.carousel-control-next, .carousel-control-prev {
  background: #09203f;
  cursor: pointer;
}

.carousel-inner {
    max-width: 70%;
    margin: 0 auto;
    background: white;
}

.car-txt {
  color: blue;
  font-weight: bold;
  background: #eee;
  padding: 10px;
  border-radius: 10px;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10px;
}

.carousel-indicators > button {
  padding: 3px;
  width: 5%;
  margin: 0 5px 5px 5px;
}
</style>