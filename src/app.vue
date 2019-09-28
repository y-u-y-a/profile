<template>
  <body style="background-image:url(images/base.jpg);" ontouchstart="">
    <Header></Header>
    <RouterView/>
    <Footer></Footer>
  </body>
</template>

<script>
// importすることで内部で利用可能にする
import Header from "./components/header.vue"
import Footer from "./components/footer.vue"

// exportすることで外部で利用可能にする
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

/*リセットCSS ================================*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p,
blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
}



</style>
