<template>
  <div>
    <header>
      <!-- <a href="https://github.com/suweiteng/vue2-management-platform"></a> -->
      <!-- <img src="./logo.svg" alt="logo" class="header-logo"> -->
      <!-- <h1>  微鲸VR BI Dashboard</h1> -->
      <!-- <ul class="header-operations"> -->
        <!-- <li> -->
          <!-- <span class="header-lang is-active">{{user.name}}</span> -->
          <!-- <span class="header-opacity">({{user.area}}/{{user.identity}})</span> -->
        <!-- </li> -->
        <!-- <li></li> -->
      <!-- </ul> -->
      <p> 微鲸VR BI Dashboard</p>

       <!-- <div class="update_time">数据更新时间 ：2017/09/05 17:37</div> -->
      </header>
  </div>
</template>
<script>
  export default {
    props: {
      user: { 
      }
    },
    data () {
      return {
      };
    },
  };
</script>
<style>
  header {
    background-color:#000000;
    /* background-color:pink; */
    height: 80px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 20px;
    z-index: 999;
    box-sizing: border-box;
    position: fixed;
    display: inline-block;
  }
  .header-logo {
    display: inline-block;
    vertical-align: middle;
  }
  .header-operations {
    display: inline-block;
    /* float: right; */
    padding-right: 30px;
    height: 100%;
  }
  .header-operations li {
    color: #fff;
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    margin: 0 10px;
    line-height: 80px;
    cursor: pointer;
  }
  .header-operations li:first-child{
    cursor: default
  }
  .header-opacity{
    opacity: .7;
  }
  .header-operations:after, header:after {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
  }
  p{
    height: 80px;
    line-height: 80px;
    color: #3CBFFF;
    display:inline-block;
  }
  /* update_time{
    display:block; 
    float:right;
    color: #A8AEA7;
    float: right;

  } */
</style>
