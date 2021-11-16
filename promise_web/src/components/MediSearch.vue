<template>
  <div class="containers">
    <div class="container-content row">
      <div class="col-8">
        <div class="title">
          <p>궁금하지 않아요?</p>
          <p>내가 먹을 약</p>
        </div>
        <div class="subtitle">
          <p>자세한 약 정보를 확인할 수 있어요.</p>
        </div>
        <div class="description">
          <p>약 검색</p>
          <p>주의대상 마크를 통한 손쉬운 확인</p>
          <p>효능/복용법/보관법 등의 정보 제공</p>
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
            <p>언제까지 잊고 살겁니까?</p>
            <p>당신의 약창고</p>
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