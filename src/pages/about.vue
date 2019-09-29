<template>
  <main>
    <div class="eyecatch" style="background-image:url(images/about.jpg);">
      <h2>About</h2>
    </div>

    <section>
      <div class="sectionTitle">
        <h3>HISTORY</h3>
        <p>〜経歴〜</p>
      </div>
      <div class="setWidth text">
        <p>1995年9月15日生まれ、広島県出身。</p>
        <table class="table">
          <tr><th>2014年3月</th><td>広島県立広島井口高校 卒業</td></tr>
          <tr><th>〜2016年</th><td>浪人生活</td></tr>
          <tr><th>2017年4月</th><td>広島経済大学 経済学科 入学</td></tr>
          <tr><th>2019年4月〜7月</th><td>web制作企業にてインターン</td></tr>
          <tr><th>2019年8月〜9月</th><td>web制作企業にてアルバイト</td></tr>
          <tr><th>2019年10月〜</th><td>印刷会社で社内システムの開発</td></tr>
        </table>
      </div>
    </section>

    <section>
      <div class="sectionTitle">
        <h3>SKILLS</h3>
        <p>〜スキル〜</p>
      </div>
      <div class="setWidth text">
        <p class="flap">HTML/CSS(SASS)/JavaScript/jQuery/Ruby/Rails/PHP/Laravel/Vue.js/Pythonと幅広く触ってますが、最近はLaravel×Vue.jsをよく使ってます。</p>
        <p>今は大学生なので、言語を絞るようなことは考えておらず、いろいろ触ってみようと考えていますが、機械学習に興味を持ち始めたので、Pythonを触ることが増えてくるのではないかと思ってます。</p>
        <p>初めてのインターン先では、開発をさせてもらえると思って飛び込んだが、自分の技術と知識の無さゆえに実際の開発には携われませんでした。</p>
        <p>しかし、クライアントとのコミュニケーションの多さや現場のエンジニアが習得している言語数、チームでの開発の難しさ、設計の重要性など３ヶ月という短い期間でしたが、多くのことを勉強させてもらえました。</p>

        <p>個人開発に関しては、<a href="#/port">ポートフォリオ</a>のページをご覧ください！</p>
      </div>
    </section>

    <section>
      <div class="sectionTitle">
        <h3>HOBBY</h3>
        <p>〜趣味〜</p>
      </div>
      <div class="setWidth text">
        <p>小さい頃：レゴが好きでした、幅の薄いブロックがお気に入りでした。</p>
        <p>好きな食べ物：すし、高いやつの美味しさが最近わかるようになってきました。</p>
        <p>趣味：野球観戦、アニメ(ジャンプ系)、(旅行したい)</p>
        <p>最近ハマっていること：webシステムの開発、機械学習の勉強、勉強会などの参加(登壇してみたい)</p>
        <p>これからやってみたいこと：経営学の勉強にも本腰入れ、データ分析をやってみたい。まずはどんなデータを分析すればいいのかを知ることを〜９月までには見つけ実際にやってみる、というのを今年の目標にしています。</p>
        <p>好きな言葉１："Done is better than perfect"</p>
        <p>好きな言葉２："成功の反対は、何もしないこと"</p>
        <p>※()内は未来への願望です。</p>
      </div>
    </section>

    <section>
      <div class="sectionTitle">
        <h3>FUTURE</h3>
        <p>〜これから〜</p>
      </div>
      <div class="setWidth text">
        <p>TEDなどで話している方たちのような人に憧れてます。どの人も主張があり、独自性があって、何より自分の主張に自信を持っている姿に憧れてます。</p>
        <p>自分の得意な事(苦にならないこと)は黙々と勉強することなので、必要とされるぐらいの力をつけたいです。</p>
        <p>あとは、人と協力しながら何かを進めていくことが好きなので、大学生のうちに何か大きなことができたらなーとぼんやり夢をみてます。</p>
      </div>
    </section>

    <section>
      <div class="sectionTitle">
        <h3>MESSAGE</h3>
        <p>〜一言〜</p>
      </div>
      <div class="setWidth text">
        <p>このサイトを見ていただいてありがとうございます！</p>
        <p>自分は内気で、なかなか自己主張が少ない性格で、自分のことが少しでも伝わればと思って作成しました。</p>
        <p>このサイトは僕が興味を持った企業さんがみていると思うので、僕が何に興味を持ったのかを聞き出していただけると嬉しいです。(自分でも一生懸命伝えます！)</p>
      </div>
    </section>

    <section class="pc">
      <div class="sectionTitle">
        <h3>LINKS</h3>
        <p>〜気になったらどうぞ〜</p>
      </div>
      <div class="setWidth list">
        <ul>
          <li>Facebook</li>
          <li>Twitter記事にするほどでもないようなことを呟いています</li>
          <li>
            <a href="https://qiita.com/y_u_y_a" target="_brank" title="Qiita">Qiita</a>技術的な記事を投稿しています
          </li>
          <li>
            <a href="https://github.com/y-u-y-a" target="_brank" title="Github">Github</a>作成した作品のソースコードが見れます
          </li>
          <li>Wantedly</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
</script>

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
    .table{
      width:1000px;
      margin-top:30px;
      letter-spacing:2px;
      border:1px solid #424242;
      th{
        padding:12px;
        border:1px solid #424242;
        background-color:#E6E6E6;
      }
      td{
        padding:12px;
        border:1px dotted #424242;
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
    .table{
      font-size:12px;
      letter-spacing:2px;
      border:1px solid #424242;
      th, td{
        padding:10px 5px;
      }
      th{
        text-align:left;
        border:1px solid #424242;
        background-color:#E6E6E6;
      }
      td{
        border:1px dotted #424242;
      }
    }
  }
}
</style>
