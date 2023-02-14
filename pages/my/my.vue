<template>
    <view>
      <view class="box">
        <view class="info">
          <view class="itemname">
              {{name}}
          </view>
          <view class="itemjob">
              {{job}}
          </view>
        </view>
        <view class="avatar">
          <image class="image" src="../../static/avatar.png" role="img"></image>
        </view>
      </view>
      <view class="list-box">
        <view class="item" hover-class="hover">
          <view class="label"><text class="iconfont icon-logout"></text>退出登录</view>
          <view class="iconfont icon-trangle-right"></view>
        </view>
      </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                name:"666666(测试学生李)",
                job:"学生"
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss">
.box{
  width: 100%;
  height:160px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  // padding:0 25px;
  padding-left: 25px;
  background-color: blue;
  .info{
    color: #fff;
    .itemname{
      font-size: 20px;
      margin-bottom: 10px;
    }
    .itemjob{
      font-size: 13px;
    }
  }
  .avatar{
    width: 60px;
    height: 60px;
    border-radius: 60px;
    padding-right: 45px;
    .image {
      width: 60px;
      height: 60px;
      display: block;
    }
  }
}
.list-box {
  .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      line-height: 60px;
      padding: 0 15px;
      background: #fff;
      .label {
          font-size: 16px;
          color: #333;
      }
      .icon-trangle-right {
          color: #777A8C;
      }
    }
  }
</style>
