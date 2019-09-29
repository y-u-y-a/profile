<template>
  <header>
    <div class="setWidth flex headerWrapper">
      <h1><a href="home">yuya's Profile</a></h1>
      <nav class="pc">
        <ul>
          <li class="navList"><a href="#/about">About</a></li>
          <li class="navList"><a href="#/port">Portfolio</a></li>
          <li class="navList"><a href="#/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
</script>

<style lang="scss">
// PC
@media screen and (min-width:640px){
  header{
    position:fixed;
    width:100vw;
    background-color:rgba(#2E2E2E, 0.8);
    .headerWrapper{
      padding:25px 0;
      position:relative;
      h1{
        font-size: 32px;
        font-weight: bold;
        font-family: cursive;
        letter-spacing:6px;
        a{
          color:#FFFFFF;
        }
      }
      nav{
        position:absolute;
        right:0;
        li{
          display:inline-block;
          margin-left:35px;
          font-size:24px;
          font-weight:bold;
          font-family:cursive;
          letter-spacing:4px;
          line-height:32px;
          a{
            color:#FFFFFF;
          }
        }
      }
    }
  }
}
// スマホ
@media screen and (max-width:640px){
  header{
    position:fixed;
    width:100vw;
    background-color:rgba(#2E2E2E, 0.7);
    .headerWrapper{
      width: 90%;
      padding:15px 0;
      position:relative;
      h1{
        font-size: 20px;
        font-weight: bold;
        font-family: cursive;
        letter-spacing:4px;
        a{
          color:#FFFFFF;
        }
      }
    }
  }
}
</style>
