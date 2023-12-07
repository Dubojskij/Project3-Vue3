<template>
    <header>
      <div class="header-top"  
      :style="{ backgroundColor: isWhiteBackground ? '#ffffff' : '#FFC017' }">
        <div class="container">
          <div class="header-top-el">
            <a><img class="logo" width="160" height="35" src="@/img/logo.png"/></a>
            <div class="null-el"></div>
            <a class="header-link">Our story</a>
            <a class="header-link">Membership</a>
            <a class="header-link">Write</a>
            <a class="header-link">Sign in</a>
            <div>
            <button class="header-top-btn" 
            @click="showGetStarted" 
            :style="{ backgroundColor: isWhiteBackground ? '#1A8917' : '#000000',
            borderColor: isWhiteBackground ? '#1A8917' : '#000000' }"
            >Get started
            </button>
                <!-- динамический компонент для GetStarted -->
                <keep-alive>
                  <component 
                  :is="currentComponent" 
                  v-if="isGetStartedVisible" 
                  @close="hideGetStarted"
                  />
                </keep-alive>
          </div>
          </div>
        </div>
      </div>
      <div class="header-bot">
        <div class="header-bot-position">
        <div class="header-bot-animation">   

             <svg class="animation-svg">                
            </svg>

        </div>
        <div class="container">
          <div class="header-bot-left">
            <h1 class="h1-hb">Stay curious.</h1>
            <h2 class="h2-hb">Discover stories, thinking, and expertise from writers on any topic.</h2>
            <div>
              <button 
              class="btn-hb" 
              @click="showGetStarted"
              >Start reading</button>
               <!-- динамический компонент для GetStarted -->
                <keep-alive>
                  <component 
                  :is="currentComponent"
                   v-if="isGetStartedVisible" 
                   @close="hideGetStarted"
                   />
                </keep-alive>
            </div>            
          </div>
        </div>
      </div>
      </div>
      
    </header>
  </template>

<script>
import GetStarted from '@/components/GetStarted'
export default {
  components:{
    GetStarted
    },
  data() {
    return {
      isWhiteBackground: false,
      scrollThreshold: 300,
      isGetStartedVisible: false,
      currentComponent: null,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPosition = window.scrollY;
      // Определяем, прокручен ли экран достаточно, чтобы изменить цвет
      const shouldBeWhite = currentScrollPosition > this.scrollThreshold;
      // Устанавливаем состояние только при изменении
      if (shouldBeWhite !== this.isWhiteBackground) {
        this.isWhiteBackground = shouldBeWhite;
      }
    },
    showGetStarted() {
      this.isGetStartedVisible = true;
      this.currentComponent = 'GetStarted';
      document.body.style.overflow = 'hidden'; // Запрещаем прокрутку
    },
    hideGetStarted() {
      this.isGetStartedVisible = false;
      document.body.style.overflow = ''; // Разрешаем прокрутку
    },
  },
};
</script>
<style scoped>

.container{
 
    min-width: 0;
    max-width: 1192px;
    width: 100%;
    margin: 0 64px;
}
.header-top{
    transition: background-color 300ms linear;
    position: fixed;
    top: 0;
    z-index: 100;
    border-bottom: solid 1px #242424;
    width: 100%;    
    height: 75px;
    background-color: #FFC017;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    

}
.header-bot{
  position: relative;
  overflow: hidden;
  display: block;
}
.header-bot-position{      
    background-color: #FFC017;
    margin-top: 75px;
    z-index: 99;    
    border-bottom: solid 1px #242424;
    display: flex;
    justify-content: center;
}
.header-bot-animation{
  right: 0px;
  width: 585px;
  position: absolute;
  display: block;

}
.animation-svg{
    width: 100%;
    height: 100%;
    transform: translate3d(0px, 0px, 0px);
    content-visibility: visible;
    vertical-align: middle;
}
.header-top-el{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.null-el{
    flex: 1 0 auto;
}
a,button{
    cursor: pointer;
    text-decoration: none;
}

.header-link{    
    margin-right: 20px;
}
@media (max-width: 730px) {
  .header-link {
    display: none; /* скрываем ссылки при ширине экрана менее 600px */
  }
}
.header-top-btn{   
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 1);
    padding: 8px 16px;
    fill: rgba(255, 255, 255, 1);
    background: rgba(25, 25, 25, 1);
    border-color: rgba(25, 25, 25, 1);
    border-radius: 99em;
    border-width: 1px;
    border-style: solid;
    text-decoration: none;
    text-align: center;
    transition: background-color 300ms linear, border-color 300ms linear;
}
.header-bot-left{
     max-width: 550px;
     width: 100%;
     word-wrap: break-word;    
    padding-top: 93px;
    padding-bottom: 92px;
    display: flex;
    flex-direction: column;
}
.h1-hb{    
     /* margin: 0;
    font-weight: 400;   
    font-size: 106px;
    line-height: 95px;
    letter-spacing: -0.05em; */
     margin-bottom: 35px; 
    -webkit-text-size-adjust: 100%;
    --reach-tabs: 1;
    --reach-menu-button: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    box-sizing: inherit;
    /* margin: 0; */
    font-weight: 400;
    font-family: gt-super, Georgia, Cambria, "Times New Roman", Times, serif;
    font-feature-settings: "pnum", "lnum";
    color: rgb(0, 0, 0);
    font-size: 106px;
    line-height: 95px;
    letter-spacing: -0.05em;
}
.h2-hb{    
    -webkit-text-size-adjust: 100%;
    --reach-tabs: 1;
    --reach-menu-button: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    box-sizing: inherit;
    margin: 0;
    font-weight: 400;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #242424;
    line-height: 24px;
    font-size: 24px;
    margin-bottom: 50px;
}
.btn-hb{   
    color: rgba(255, 255, 255, 1);
    fill: rgba(255, 255, 255, 1);
    background: rgba(25, 25, 25, 1);
    border-color: rgba(25, 25, 25, 1);
    border-radius: 99em;
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    line-height: 24px;
    padding: 8px 20px;
    width: 213px;
    font-size: 20px;
}
@media (max-width: 400px) {
        .container{          
      min-width: 0;      
      width: 100%;
      margin: 0 24px;
      }     
      .h1-hb{   
    
     margin-bottom: 35px; 
    -webkit-text-size-adjust: 100%;
    --reach-tabs: 1;
    --reach-menu-button: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    box-sizing: inherit;
    /* margin: 0; */
    font-weight: 400;
    font-family: gt-super, Georgia, Cambria, "Times New Roman", Times, serif;
    font-feature-settings: "pnum", "lnum";
    color: rgb(0, 0, 0);
    font-size: 70px;
    line-height: 74px;
    letter-spacing: -0.05em;
}
}
/* .logo{
  display: flex;
  align-items: flex-end;
} */
</style>