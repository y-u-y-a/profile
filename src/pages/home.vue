<template>
  <main>
    <div class="eyecatch" style="background-image:url(images/topEyecatch.jpg);">
      <div class="eyecatchTitle">WELCOME TO MY PROFILE SITE</div>
      <p>I WILL SHOW YOU MY SELF INTRODUCTION</p>
    </div>

    <section>
      <div class="sectionTitle">
        <h2>About</h2>
        <p>〜自己紹介〜</p>
      </div>
      <div class="setWidth text">
        <p>
          詳細ページでは、私について、HISTORY、SKILL、HOBBY、MESSAGE、FUTUREの５セクションに分けて説明しているので、是非ご覧ください！
        </p>
      </div>
      <div class="pageLink">
        <a href="#/about">Aboutページへ</a>
      </div>
    </section>

    <section>
      <div class="sectionTitle">
        <h2>Portfolios</h2>
        <p>〜開発実績〜</p>
      </div>
      <div class="setWidth text">
        <p>自分が今までどんなものを作ってきたのかを紹介していきます。</p>
        <p>詳細ページでは、作品をどのように作ったのか、どんな環境で、どんなスキルで誰と挑んだのか、を丁寧に説明しています。</p>
        <p>※ 随時、更新していきます。</p>
      </div>
      <div class="pageLink">
        <a href="#/port">Portfoliosページへ</a>
      </div>
    </section>

    <section>
      <div class="sectionTitle">
        <h2>Comment</h2>
        <p>〜感謝〜</p>
      </div>
      <div class="setWidth text">
        <p>このサイトを見てくださってありがとうございました！</p>
        <p>これからエンジニアとして、人として、様々なことに挑戦していきます！</p>
        <p>出会った方々、よろしくお願いします！</p>
      </div>
      <div class="pageLink">
        <a href="#/contact">Contactページへ</a>
      </div>
    </section>
  </main>
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
    padding:18rem 0 12rem;
    .eyecatchTitle{
      margin-bottom: 1rem;
      font-size: 32px;
      font-weight: bold;
      letter-spacing:6px;
    }
    p{
      font-size:16px;
    }
  }
  section{
    background-color:rgba(white, 0.6);
    .sectionTitle{
      text-align:center;
      padding-top:2rem;
      margin-bottom:4rem;
      h2{
        margin-bottom:1rem;
        font-size:28px;
        font-weight:bold;
      }
      p{
        font-size:14px;
      }
    }
    .text{
      padding-bottom:2rem;
    }
    .pageLink{
      text-align:center;
      padding-bottom:1rem;
      a{
        width:300px;
        padding: 20px 0;
        font-size: 18px;
        letter-spacing: 2px;
        border-radius: 8px;
        color:#ffffff;
        background-color:#084B8A;
      }
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
    padding:8rem 0 4rem;
    color:#FFFFFF;
    .eyecatchTitle{
      margin-bottom: 1rem;
      font-size: 20px;
      font-weight: bold;
    }
    p{
      font-size:14px;
    }
  }
  section{
    background-color:rgba(white, 0.6);
    .sectionTitle{
      text-align:center;
      padding-top:2rem;
      margin-bottom:2rem;
      h2{
        margin-bottom:1rem;
        font-size:28px;
        font-weight:bold;
      }
      p{
        font-size:14px;
      }
    }
    .text{
      padding-bottom:2rem;
    }
    .pageLink{
      text-align:center;
      padding-bottom:1rem;
      a{
        width: 90%;
        padding: 20px 0;
        font-size: 16px;
        letter-spacing: 2px;
        border-radius: 8px;
        color:#ffffff;
        background-color:#084B8A;
      }
    }
  }
}
</style>
