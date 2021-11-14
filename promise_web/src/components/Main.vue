<template>
  <div class="app">
    <div class="sections-menu">
      <span
         class="menu-point"
         v-bind:class="{active: activeSection == index}"
         v-on:click="scrollToSection(index)"
         v-for="(offset, index) in offsets"
         v-bind:key="index">
      </span>
    </div>
    <section class="fullpage">
      <Intro />
    </section>
    <section class="fullpage">
      <Alarm />
    </section>
    <section class="fullpage">
      <MediSearch />
    </section>
    <section class="fullpage">
      <Pharm />
    </section>
        <section class="fullpage">
      <Plus />
    </section>
    <section class="fullpage">
      <Developer />
    </section>
  </div>
  
</template>

<script>
import Intro from "./Intro.vue"
import Alarm from "./Alarm.vue"
import MediSearch from "./MediSearch.vue"
import Pharm from "./Pharm.vue"
import Plus from "./Plus.vue"
import Developer from "./Developer.vue"



export default {
  name: 'FrontMain',
  props: {

  },
  components: {
    Intro,
    Alarm,
    MediSearch,
    Pharm,
    Plus,
    Developer
  },
  data(){
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0
    }
  },
  mounted(){
    this.calculateSectionOffsets()
  },
  methods: {
    
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName('section');
      let length = sections.length;
      
      for(let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    handleMouseWheel: function(e) {
      
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }
        
      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function(e) {
      
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }
      
      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;
        
      if(this.activeSection < 0) this.activeSection = this.offsets.length - 1;
        
      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;
        
      if(this.activeSection > this.offsets.length - 1) this.activeSection = 0;
        
      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if(this.inMove && !force) return false;
      
      this.activeSection = id;
      this.inMove = true;
      document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth'})
      
      setTimeout(() => {
        this.inMove = false;
      }, 400);
      
    },
    touchStart(e) {
      e.preventDefault();
      
      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if(this.inMove) return false;
      e.preventDefault();
      
      const currentY = e.touches[0].clientY;
      
      if(this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }
      
      this.touchStartY = 0;
      return false;
    }
  },
  created() {
    this.calculateSectionOffsets();
    
    window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM);  // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, { passive: false }); // Other browsers
    
    window.addEventListener('touchstart', this.touchStart, { passive: false }); // mobile devices
    window.addEventListener('touchmove', this.touchMove, { passive: false }); // mobile devices
  },
  destroyed() {
    window.removeEventListener('mousewheel', this.handleMouseWheel, { passive: false });  // Other browsers
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    
    window.removeEventListener('touchstart', this.touchStart); // mobile devices
    window.removeEventListener('touchmove', this.touchMove); // mobile devices
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fullpage {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
}

.sections-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  background-color: #FFF;
  display: block;
  margin: 1.5rem 0;
  opacity: .6;
  transition: .4s ease all;
  cursor: pointer;
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}

/* @media screen and (max-width: 1200px) {
  h1 {
    font-size: 2.5em;
  }
} */
</style>
