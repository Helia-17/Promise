<template>
  <div class="containers">
    <div class="container-content row">
      <div class="col-8">
        <div class="title">
          <p>더하기+</p>
        </div>
        <div class="subtitle">
          <p>뭘 좋아할지 몰라 준비해봤어요</p>
        </div>
        <div class="description">
          <p>알람 이용에 따라 성장하는 캐릭터</p>
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
            <!-- <img class="d-block " src=".././assets/Alarm1.png"> -->
          </div>
          <div class="true-msg">
            <p>바쁘다 바빠 현대사회</p>
            <p>건강을 잊은자에게 롱 런은 없다!</p>
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