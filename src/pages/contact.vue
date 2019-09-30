<template>
  <main>
    <div class="eyecatch" style="background-image:url(images/contact.jpg);">
      <h2>Contact</h2>
    </div>
    <section class="lightWhite">
      <div class="sectionTitle">
        <h3>SNS</h3>
        <p>〜主に使っているサービス〜</p>
      </div>
      <div class="setWidth list">
        <ul>
          <li><a href="#" target="_blank">facebook</a></li>
          <li><a href="#" target="_blank">Twitter</a></li>
          <li><a href="#" target="_blank">Github</a></li>
          <li><a href="#" target="_blank">Qiita</a></li>
          <li><a href="#" target="_blank">Wantedly</a></li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
// PC
@media screen and (min-width:640px){
  h2{// eyecatchタイトル
    font-size: 32px;
    font-weight: bold;
    letter-spacing:6px;
  }
  section{
    background-color:#FFFFFF;
    h3{// 見出し
      margin-bottom:1rem;
      font-size:28px;
      font-weight:bold;
    }
    .list{
      padding-bottom:2rem;
      font-size:18px;
      a{
        border-bottom:1px dotted;
      }
    }
  }
}
// スマホ
@media screen and (max-width:640px){
  h2{
    font-size: 20px;
    font-weight: bold;
  }
  section{
    background-color:#FFFFFF;
    h3{
      margin-bottom:1rem;
      font-size:28px;
      font-weight:bold;
    }
    .list{
      padding-bottom:2rem;
    }
  }
}
</style>
