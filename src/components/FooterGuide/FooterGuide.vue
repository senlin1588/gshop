<template>
 <div class="footer-guide">
     <span class="guide-item " @click="goto('/msite')" :class="{on: isCurrent('/msite')}">
         <span>
             <i class="iconfont icon-waimai "></i>
         </span>
         <span>首页</span>
     </span>
      <span class="guide-item" @click="goto('/search')" :class="{on: isCurrent('/search')}">
         <span>
             <i class="iconfont icon-sousuo"></i>
         </span>
         <span>搜索</span>
     </span>
      <span class="guide-item" @click="goto('/order')" :class="{on: isCurrent('/order')}">
         <span>
             <i class="iconfont icon-dingdan"></i>
         </span>
         <span>订单</span>
     </span>
      <span class="guide-item" @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
         <span>
             <i class="iconfont icon-geren"></i>
         </span>
         <span>个人</span>
     </span>
 </div>
</template>
 
<script>
export default {
 name: 'FooterGuide',
 data () {
 return {
 msg:'FooterGuidemsg'
 }
 },
  methods: {
      goto(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        // console.log(this.$route.path)
        return this.$route.path === path
      }
    }
}
</script>
 
<style scoped lang = "stylus"  rel="stylesheet/stylus" >
    @import "../../common/stylus/mixins.styl"

    .footer-guide
        top-border-1px(#cccccc);
        left 0
        bottom 0
        display flex
        position fixed
        height 50px
        width  100%
        .guide-item
            display flex
            flex-direction column
            text-align center
            width 25%
            &.on
              color $green
            span 
                margin-top 6px
                font-size 12px
            .iconfont
                font-size 22px
</style>