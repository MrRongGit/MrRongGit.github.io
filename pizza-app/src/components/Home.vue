<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza!</h1>
        <h2>这里有你非常喜欢的pizza!</h2>
      </div>
    </div>
    <div>
      <h1>Home</h1>
      <button @click="goToUpper" class="btn btn-success">返回上一层浏览的页面</button>
      <button @click="formulate" class="btn btn-success">指定跳转的地址</button>
      <button @click="routeName" class="btn btn-success">指定跳转到路由的名字下</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 跳转到上一次浏览的页面
    goToUpper() {
      this.$router.go(-1);
    },
    // 指定跳转的地址
    formulate() {
      this.$router.replace("/menu");
    },
    // 指定跳转到路由的名字下
    routeName() {
      this.$router.replace({ name: "adminLink" });
    }
  }
};
</script>

<style>
    #home {
        background:url('../assets/pizza.jpg');
        background-size:100% 100%;
        height:85vh;
        padding:10%;
    }
    h1,h2 {
        margin:6%;
    }
    .background{
        background:#ccc;
        opacity: 0.8;
        max-width: 70vw;
        margin: 0 auto;
        padding:20px 0;
    }
</style>

