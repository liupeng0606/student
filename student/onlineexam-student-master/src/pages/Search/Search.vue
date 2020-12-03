<template>
  <div id="app">
    <iframe
      style="border:none"
      :width="searchTableWidth"
      :height="searchTableHeight"
      v-bind:src="reportUrl"
    ></iframe>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    methods: {
      widthHeight() {
        this.searchTableHeight = window.innerHeight;
        this.searchTableWidth = window.innerWidth
      },
    },
    data() {
      return {
        reportUrl: '',
        searchTableHeight: 0,
        searchTableWidth: 0
      }
    },
    mounted() {
      window.onresize = () => {
        this.widthHeight(); // 自适应高宽度
      };
      this.$nextTick(function () {
        this.widthHeight();
      });
    },
    created() {
      // 从路由里动态获取 url地址   具体地址看libs下util.js里的 backendMenuToRoute  方法
      this.reportUrl = 'http://62.234.194.53'
    },
    watch: {
      '$route': function () {
        // 监听路由变化
        this.reportUrl = this.$route.meta.pathUrl
      }
    }
  }
</script>
