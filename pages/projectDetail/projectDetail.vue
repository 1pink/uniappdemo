<template>
  <view>
    <view class="itemCon">
      <view class="title">
        <text class="iconfontNew icon-xiangmu"></text>
        <text>TGF-β诱导肝癌细胞分泌IL-11促进肝星状细胞活化的作用及机制</text>
      </view>
      <view class="txtCon">
        <text class="txtTime">申报年度：2022</text>
      </view>
      <view class="txtCon">
        <text class="txtName">负责人：张三</text>
      </view>
      <view class="txtCon">
        <text class="txtName">指导老师：张三</text>
      </view>
      <view class="btn errorBg">
        审核退回
      </view>
    </view>
    <view class="recordCon">
        <view class="recordHead">
          <text class="iconfontNew icon-shenhe"></text>
          <text class="title">审查记录</text>
        </view>
        
        <view class="recordList">
          <view class="listBox lower">
            <view class="title">
              <text class="txt doingColor">发起申报</text>
              <text class="time">2022-10-08 15:00</text>
            </view>
            <text class="desc">张三</text>
          </view>    
          <view class="listBox lower">
            <view class="title">
              <text class="txt successColor">审核通过</text>
              <text class="time">2022-10-08 15:00</text>
            </view>
            <text class="desc">指导老师李四</text>
          </view>   
          <view class="listBox">
            <view class="title">
              <text class="txt errorColor">审核退回</text>
              <text class="time">2022-10-08 15:00</text>
            </view>
            <text class="desc">教秘王五</text>
          </view>     
        </view>
      </view>
      <view class="tips">
          请前往PC端进行相关操作！
      </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss">
.itemCon{
      margin-top: 20rpx;
      padding: 30rpx;
      background-color: #fff;
      border-radius: 12rpx;
      position: relative;
      margin-bottom: 20rpx;
      .title{
        font-weight: 600;
        font-size: 28rpx;
        .iconfontNew{
          color: #3E51FC;
          margin-right: 10rpx;
        }
      }
      .txtCon{
        margin-top: 20rpx;
        .txtTime{
          font-size: 24rpx;
          font-weight: 400;
          color: #666666;
          margin-right: 40rpx;
        }
         .txtName{
          font-weight: 400;
          color: #666666;
          font-size: 24rpx;
        }
      }
      .btn{
        position: absolute;
        width: 160rpx;
        height: 48rpx;
        // background-color: #3E51FC;
        color: #ffffff;
        font-size: 24rpx;
        border-radius: 50rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 30rpx;
        bottom: 30rpx;
      }
    }
    .recordCon{
      margin: 20rpx;
      box-sizing: border-box;
      padding: 30rpx;
      background: #fff;
      .recordHead{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 30rpx;
        .iconfontNew{
          color: #3E51FC;
          font-size: 36rpx;
        }
        .title{
          font-size: 28rpx;
          margin-left: 5rpx;
          font-weight: 600;
        }
      }
      .recordList .listBox{
        box-sizing: border-box;
        padding-left: 40rpx;
        padding-bottom: 60rpx;
        position: relative;
      }
    }
  .recordList .listBox::before{
    content: '';
    position: absolute;
    left: 10rpx;
    top: 10rpx;
    width: 10rpx;
    height: 10rpx;
    background-color: #3E51FC;
    border-radius: 100%;
  }
  
  .recordList .lower::after{
    content: '';
    position: absolute;
    left: 15rpx;
    top: 10rpx;
    height: 100%;
    width: 1rpx;
    background-color: #3E51FC;
  }
  
  .listBox .title{
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rpx;
  }
  
  .listBox .title .txt{
    font-size: 26rpx;
    font-weight: 600;
  }
  
  .listBox .title .time{
    font-size: 24rpx;
    color: #666;
  }
  
  .listBox .desc{
    font-size: 22rpx;
    color: #666;
  }
  
  .tips{
    font-size: 24rpx;
    font-weight: 400;
    color: #666;
    text-align: center;
  }
</style>
