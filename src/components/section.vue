<template>
  <section class="lightWhite">
    <div class="sectionTitle">
      <h2>{{title}}</h2>
      <p>{{subTitle}}</p>
    </div>
    <div class="setWidth text">
      <p>
        <span>{{text}}</span>
      </p>
    </div>
    <div class="pageLink">
      <a href="about">{{link}}</a>
    </div>
  </section>
</template>

<script>
export default{
  data: function(){
    return{
      title   : "About",
      subTitle: "〜自己紹介〜",
      text    : "詳細ページでは、私について、HISTORY、SKILL、HOBBY、MESSAGE、FUTUREの５セクションに分けて説明しているので、是非ご覧ください！",
      link    : "Aboutページへ"
    }
  }
}
</script>

<style lang="scss" scoped>
  section{
    .sectionTitle{
      text-align:center;
      padding-top:2rem;
      h2{
        font-size:28px;
        font-weight:bold;
        margin-bottom:0.5rem;
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
        opacity:0.9;
      }
    }
  }
</style>
