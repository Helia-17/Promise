<template>
  <div class="containers">
    <div class="container-content row">
      <div class="col-8">
        <div class="title">
          <p>찾아라!</p>
          <p>열려있는 약국</p>
        </div>
        <div class="subtitle">
          <p>내 주변에 있는 약국은 어딜까?</p>
        </div>
        <div class="description">
          <p>사용자 위치 기반의 약국 정보 조회</p>
          <p>운영시간에 기반하여 현재 열려있는 약국만 표시</p>
          <p>거리순으로 정렬된 약국 리스트</p>
        </div>
      </div>
      <div class="col-4">
        <div class="phone-container">
          <img class="phone-img d-block" src=".././assets/iphone-frame.png">
          <div class="phone-back">
            <tiny-slider v-bind="tinySliderOptions" class="tns-visually-hidden">
              <img class="slide-img" src=".././assets/Alarm1.png" />
              <img class="slide-img" src=".././assets/Alarm2.png" />
            </tiny-slider>
          </div>
          <div class="true-msg">
            <p>우리가 어떤 민족입니까.</p>
            <p>보조제의 민족.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider';
export default {
  components: {
    'tiny-slider': VueTinySlider
  },
  data() {
    return {
      tinySliderOptions: {
        mouseDrag: false,
        autoplayButtonOutput: false,
        loop: true,
        autoplay: true,
        nav: false,
        controls: false,
        items: 1,
        speed: 500,
        autoplayResetOnVisibility: false
      }
    }
  },
}
</script>

<style scoped>
</style>