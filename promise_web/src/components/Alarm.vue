<template>
  <div class="containers">
    <div class="container-content row">
      <div class="col-8">
        <div class="title">
          <p>삐빅!</p>
          <p>약먹을 시간입니다</p>
        </div>
        <div class="subtitle">
          <p>복용할 약/건강보조제 알림을 받을 수 있어요!</p>
        </div>
        <div class="description">
          <p>자동완성을 통한 약 등록</p>
          <p>약 봉투 이미지 스캔을 통한 약 등록(OCR)</p>
          <p>알람 공유 등록</p>
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
            <p>복용 알람과 함께한</p>
            <p>모든 날이 건강했다</p>
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
      images: [".././assets/Alarm1.png", ".././assets/Alarm2.png"],
      tinySliderOptions: {
        mouseDrag: false,
        autoplayButtonOutput: false,
        controlsContainer: "#visual-carousel-controls",
        loop: true,
        autoplay: true,
        nav: false,
        controls: false,
        items: 1,
        speed: 500,
        swipeAngle: false,
        autoplayResetOnVisibility: false,
        rewind : false,
        container: "#visual-carousel-controls"
      }
    }
  },
  created(){
    this.startRotation();
  },
  methods: {
    startRotation: function() {
        this.timer = setInterval(this.next, 3000);
    },

    stopRotation: function() {
        clearTimeout(this.timer);
        this.timer = null;
    },

    next: function() {
        this.currentNum += 1
    }
}

}
</script>

<style scoped>
#visual-carousel-controls{
  display: none;
}
.phone-container{
  position: relative;
  z-index: 2;
}
.phone-back{
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 65%;
  margin-left: 16%;
  margin-top: 8%;
  z-index: -1;
}
.slide-img{
  width: 100%;
}
</style>