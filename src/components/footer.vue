<template>
  <footer>
    <div class="setWidth footerWrapper">
      <ul class="pc">
        <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa fa-github"></i></a></li>
        <li><a href="#"><i class="fa fa-quora"></i></a></li>
        <li><a href="#"><i class="fa fa-wikipedia-w"></i></a></li>
      </ul>
      <ul class="sp">
        <li><a href="#">facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Qiita</a></li>
        <li><a href="#">Wantedly</i></a></li>
      </ul>
      <small>since 2019 yuya's profile</small>
    </div>
  </footer>
</template>

<script>
</script>

<style lang="scss">
// PC
@media screen and (min-width:640px){
  footer{
    text-align:center;
    background-color:#1C1C1C;
    ul{
      padding-top:30px;
      li{
        display:inline-block;
        margin:0 25px;
        font-size:32px;
        a{
          color:#FFFFFF;
        }
      }
    }
    small{
      display:block;
      margin-top:50px;
      padding-bottom:20px;
      color:#FFFFFF;
    }
  }
}
// スマホ
@media screen and (max-width:640px){
  footer{
    background-color:#1C1C1C;
    .footerWrapper{
      padding:20px 0;
      ul{
        width:90%;
        margin:0 auto;
        li{
          margin-bottom:1rem;
          font-size:16px;
          a{
            color:#FFFFFF;
            font-size:20px;
          }
        }
      }
      small{
        display:block;
        padding-top:30px;
        color:#FFFFFF;
        text-align:center;
      }
    }
  }
}
</style>
