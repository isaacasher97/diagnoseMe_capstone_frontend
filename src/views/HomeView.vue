<template>
  <div class="home">
    <Carousel/>
    <WhatWeDo/>
    <ImageCards/>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import ImageCards from '../components/ImageCards.vue'
import WhatWeDo from '../components/WhatWeDo.vue'

export default {
  name: 'HomeView',
  components: {
    Carousel,
    ImageCards,
    WhatWeDo
  }
}
</script>
