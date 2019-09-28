<template>
  <div class="eyecatch" style="background-image:url(images/topEyecatch.jpg);">
    <h2>WELCOME TO MY PROFILE SITE</h2>
    <p>I WILL SHOW YOU MY SELF INTRODUCTION</p>
  </div>
</template>

<style lang="scss">
// PC
@media screen and (min-width:640px){
  .eyecatch{
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center top; // 縦方向に詰める
    background-attachment:fixed;

    text-align:center;
    color:#FFFFFF;
    padding:12rem 0;
    h2{
      margin-bottom: 1rem;
      font-size: 32px;
      font-weight: bold;
      letter-spacing:6px;
    }
    p{
      font-size:16px;
    }
  }
}
// スマホ
@media screen and (max-width:640px){
  .eyecatch{
    background-size:110%;
    background-repeat:no-repeat;
    background-position:center top; // 縦方向に詰める
    background-attachment:fixed;

    text-align:center;
    padding:4rem 0;
    color:#FFFFFF;
    h2{
      margin-bottom: 1rem;
      font-size: 20px;
      font-weight: bold;
    }
    p{
      font-size:14px;
    }
  }
}
</style>
