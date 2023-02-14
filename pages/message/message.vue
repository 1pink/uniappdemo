<template>
    <view>
        <view>
            <view class="contenter">
              <view class="head">
              </view>
              <view class="con">
                <view class="title">
                  <text> 系统通知</text>
                  <text class="time">2020-08-12 15:00</text>
                </view>
                <view class="desc">
                  <text>您申报的项目已经</text>
                  <text class="successColor">审核通过</text>
                  <text>!</text>
                </view>
              </view>
                
            </view>
            <view class="contenter">
              <view class="head">
              </view>
              <view class="con">
                <view class="title">
                  <text> 系统通知</text>
                  <text class="time">2020-08-12 15:00</text>
                </view>
                <view class="desc">
                  <text>您申报的项目已经</text>
                  <text class="successColor">审核通过</text>
                  <text>!</text>
                </view>
              </view>  
            </view>
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
.contenter{
  margin: 20rpx;
  background-color: #fff;
  box-sizing: border-box;
  padding: 20rpx;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .head {
      width: 80rpx;
      height: 80rpx;
      border-radius: 100%;
      background: linear-gradient(180deg, #6B81EB 0%, #4C97E7 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20rpx;
      color: #fff;
      
      }
      .con{
        flex: 1;
        border-radius: 12rpx;
        .title {
            font-size: 28rpx;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .time{
              color: #A4A4A4;
              font-size: 24rpx;
              font-weight: 300;
            }
        }
        .desc {
            color: #666;
            font-size: 24rpx;
            margin-top: 10rpx;
            .successColor {
                color: #19BE6B;
            }
        }
      }
}
</style>
