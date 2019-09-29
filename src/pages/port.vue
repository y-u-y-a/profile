<template>
  <main>
    <div class="eyecatch" style="background-image:url(images/port.jpg);">
      <h2>My Portfolios</h2>
    </div>

    <section>
      <div class="sectionTitle">
        <h3>Application</h3>
        <p>〜アプリケーション〜</p>
      </div>
      <ul class="setWidth">
        <li>
          <div class="image">
            <a href="#/chat"><img src="images/chat01.jpg" alt="chat"></a>
          </div>
          <h4>chat</h4>
        </li>
        <li>
          <div class="image">
            <a href="#/mercari"><img src="images/mercari01.jpg" alt="mercari"></a>
          </div>
          <h4>メルカリのクローンサイト</h4>
        </li>
        <li>
          <div class="image">
            <a href="#/blog"><img src="images/video.jpg" alt="blog"></a>
          </div>
          <h4>WordPress自作テーマ</h4>
        </li>
        <li>
          <div class="image">
            <a href="#/phono"><img src="images/video.jpg" alt="phono"></a>
          </div>
          <h4>phonoBook</h4>
        </li>
      </ul>
    </section>

    <section>
      <div class="sectionTitle">
        <h3>webサイト</h3>
        <p>〜ホームページ〜</p>
      </div>
      <ul class="setWidth">
        <li>
          <div class="image">
            <a href="#/chat"><img src="images/chat01.jpg" alt="chat"></a>
          </div>
          <h4>VR同好会ホームページ</h4>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
</script>

<style lang="scss" scoped>
// 共通
section{
  background-color:#F2F2F2;
  .image{
    padding:20px;
    box-sizing:border-box;
    img{
      border-radius:10px;
      box-shadow:10px 10px 10px #848484;
      transition: all 0.5s; // ゆっくり戻す
    }
    img:hover{
      transform:scale(1.1, 1.1);
    }
  }
  h3{
    margin-bottom:1rem;
    font-size:28px;
    font-weight:bold;
  }
  h4{
    text-align:center;
    padding-bottom:1rem;
  }
}
// PC
@media screen and (min-width:640px){
  h2{// eyecatchタイトル
    font-size: 32px;
    font-weight: bold;
    letter-spacing:6px;
  }
  li{
    display:inline-block;
    width:500px;
  }
}
// スマホ
@media screen and (max-width:640px){
  h2{
    font-size: 20px;
    font-weight: bold;
  }
}
</style>

