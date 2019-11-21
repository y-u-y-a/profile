<template>
  <body style="background-image:url(images/base.jpg);" ontouchstart="">
    <Header/>
    <RouterView/>
    <Footer/>
  </body>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
// 全ページ共通
body{
  background-size:cover;
  background-position:center top; // 縦方向に詰める
  background-attachment:fixed;
}
a{
  display:inline-block;
  color:#2E64FE;
}
a:hover{
  opacity:0.7;
}
img{
  max-width:100%;
  height:auto;
}
p, li{
  margin-bottom:1rem;
  line-height:1.58rem;
}
// 要素間の余白
section{
  margin-bottom:3rem;
}
.flex{
  display:flex;
}
.flap{
  overflow-wrap:break-word;
}
// PC
@media screen and (min-width:640px){
  .sp{
    display:none;
  }
  .setWidth{
    max-width:1000px;
    margin:0 auto;
  }
}
// スマホ
@media screen and (max-width:640px){
  .pc{
    display:none;
  }
  .setWidth{
    max-width:90%;
    margin:0 auto;
  }
  button{
    -webkit-appearance: none;
  }
}
</style>
