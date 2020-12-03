
<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div id="main" style="width: 100%; height: 100%"></div>
</template>
<script>
  import echarts from 'echarts'


  export default {
    name: '',
    data () {
      return {
        menuKey:1,
        echarts1_option:{
          backgroundColor: '#45515a', //背景颜色
          //标题
          title: {
            text: '订单中保险公司所占的比例',
            subtext: '饼图示例',
            left: 'center',
            top: 20,
            textStyle: {
              color: '#ccc',
              fontStyle: 'italic'//标题字体
            }
          },
          //弹窗，响应鼠标指向，显示具体细节
          tooltip : {
            trigger: 'item',//以具体项目触发弹窗
            formatter: "{a} <br/>{b} : {c} ({d}%)",
          },
          //图例，选择要显示的项目
          legend:{
            orient:'vertical',
            left:'left',
            textStyle:{
              color:'#c8c8d0'
            },
            data:['安心','安盛天平','中华联合保险','中国太平洋保险','中国人保财险','平安车险']  //注意要和数据的name相对应
          },
          //工具箱
          toolbox:{
            show:true,//显示工具箱
            feature:{
              dataView:{show:true}, //以文字形式显示数据
              restore:{show:true},   //还原
              //dataZoom:{show:true}, //区域缩放
              saveAsImage:{show:true},  //保存图片
              //magicType:{type:['line','bar']}//动态数据切换，数据显示可以在该规定内容中切换显示方式，
            }
          },
          series : [
            {
              name: '成交数量',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data:[

              ].sort(function (a, b) {
                return a.value - b.value;
              }),

              roseType: 'radius',//角度和半径展现百分比，'area'只用半径展现
              label: { //饼图图形的文本标签
                normal: {  //下同，normal指在普通情况下样式，而非高亮时样式
                  textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  }
                }
              },
              labelLine: {  //引导线样式
                normal: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  },
                  smooth: 0.5, //0-1，越大越平滑弯曲
                  length: 10,  //从块到文字的第一段长
                  length2: 20  //拐弯到文字的段长
                }
              },

              itemStyle: { //图例样式
                normal: {
                  //color: '#97413c',
                  shadowBlur: 50,//阴影模糊程度
                  shadowColor: 'rgba(0, 0, 0, 0.5)',//阴影颜色，一般黑

                }
              },
              animationType: 'scale', //初始动画效果，scale是缩放，expansion是展开
              animationEasing: 'elasticOut', //初始动画缓动效果
              animationDelay: function (idx) {  //数据更新动画时长，idx限定了每个数据块从无到有的速度
                return Math.random() * 200;
              }
            }
          ],
          color: ['#97858c','pink','green','yellow','orange','#97813c'],
        }
      }
    },



    // activated(){
    //   if (this.$route.meta.isFresh) {
    //     init();
    //   }else{}
    //   this.$route.meta.isFresh = false;//记得这里一定要设置一下false。
    // },
    //
    //
    //
    // beforeRouteEnter(to, from, next) {
    //   if (from.name == 'Index') {
    //     to.meta.isFresh = true;
    //   }
    //   next();
    // },







    methods:{

     created:function(){
      const data = JSON.parse(sessionStorage.getItem('con'))
      console.log(data)
     },
    init(){

      let myChart = echarts.init(document.getElementById('main'))
      // 绘制图表，this.echarts1_option是数据
      myChart.setOption(this.echarts1_option,true)

    }
    },

    mounted() {
      const data = JSON.parse(sessionStorage.getItem('con'))
      this.echarts1_option.title.text=data
      ++this.menuKey

    },

    watch: {




      //观察option的变化
      echarts1_option: {
        handler(newVal, oldVal) {
          if (this.myChart) {

            if (newVal) {

              this.myChart.setOption(newVal);
            } else {

              this.myChart.setOption(oldVal);
            }
          } else {

            this.init();
          }
        },
        deep: true //对象内部属性的监听，关键。
      }
    },



  }
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>



