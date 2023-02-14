<template>
  <!--pages/index/components/teacher/teacher.wxml-->
  <view class="container">
    <view class="statis-box">
      <view class="total-moneny">
        <view class="num">1389.3</view>
        <view bindtap="toStatis" class="statis-link">
          <view class="iconfont icon-statis"></view>经费统计
        </view>
      </view>
      <view class="row">
        <view class="col">
          <view class="value">33W</view>
          <view class="label">本月申请</view>
        </view>
        <view class="col">
          <view class="value">33W</view>
          <view class="label">上月申请</view>
        </view>
        <view class="col">
          <view class="value">33W</view>
          <view class="label">本月审批</view>
        </view>
        <view class="col">
          <view class="value">33W</view>
          <view class="label">上月审批</view>
        </view>
      </view>
    </view>
    <view class="number-box">
      <view class="list">
        <view class="item" data-idx="0" bindtap="toList">
          <view class="value">35</view>
          <view class="label">待审批</view>
        </view>
        <view class="item" data-idx="1" bindtap="toList">
          <view class="value">35</view>
          <view class="label">已审批</view>
        </view>
        <view class="item" data-idx="2" bindtap="toList">
          <view class="value">35</view>
          <view class="label">全部审批</view>
        </view>
      </view>
    </view>
    <view class="approval-box">
      <view class="approval-head">
        <view class="title">经费审批</view>
        <picker mode="date" value="2022" start="2021-01-01" end="2023-12-01" fields="month" bindchange="bindDateChange">
          <view class="picker">
            <text class="year">2022年</text><text class="month">12月</text> <text
              class="iconfont icon-trangle-right"></text>
          </view>
        </picker>
      </view>
      <view class="approval-list">
        <view class="item-approval" bindtap="toDetail">
          <view class="left">
            <view class="number">1.2W</view>
            <view class="label">申请费用</view>
          </view>
          <view class="right">
            <view class="info-box">
              <view class="title">2021年大学生创新创业训练项目</view>
              <view class="info">项目类型：创新创业项目</view>
              <view class="info">项目阶段：立项</view>
              <view class="info">申报时间：2021-11-12 11:11</view>
            </view>
            <view class="iconfont icon-complete"></view>
          </view>
        </view>
        <view class="item-approval" bindtap="toDetail">
          <view class="left">
            <view class="number">1.2W</view>
            <view class="label">申请费用</view>
          </view>
          <view class="right">
            <view class="info-box">
              <view class="title">2021年大学生创新创业训练项目</view>
              <view class="info">项目类型：创新创业项目</view>
              <view class="info">项目阶段：立项</view>
              <view class="info">申报时间：2021-11-12 11:11</view>
            </view>
            <view class="iconfont icon-ing"></view>
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

<style>
  .statis-box {
    background-color: blue;
    height: 180px;
    background-size: cover;
  }

  .total-moneny {
    color: #fff;
    position: relative;
    padding: 30px 0 20px 30px;
    display: flex;
    align-items: baseline;
  }

  .total-moneny .num {
    font-size: 24px;
    font-weight: bold;
  }

  .statis-link {
    color: #166BDA;
    font-size: 11px;
    background: #F1F1FF;
    width: 82px;
    height: 22px;
    border-radius: 22px;
    position: fixed;
    padding-right: 10px;
    top: 70px;
    right: -8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .statis-link .iconfont {
    font-size: 14px;
    margin-right: 5px;
  }

  .statis-box .row {
    display: flex;
    align-items: center;
    padding: 0 10px;
    color: #fff;
  }

  .row .col {
    flex: 1;
    text-align: center;
  }

  .col .value {
    font-size: 14px;
    font-weight: bold;
  }

  .col .label {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 3px;
  }

  .number-box {
    padding: 0 15px;
    margin-top: -40px;
  }

  .number-box .list {
    padding: 10px 0;
    background: #fff;
    border-radius: 2px;
    display: flex;
    align-items: center;
  }

  .list .item {
    flex: 1;
    text-align: center;
    justify-content: center;
  }

  .list .item .value {
    font-size: 18px;
    font-weight: bold;
  }

  .list .item:nth-child(1) .value {
    color: #F2B124
  }

  .list .item:nth-child(2) .value {
    color: #39D884
  }

  .list .item:nth-child(3) .value {
    color: #166BDA
  }

  .list .item .label {
    color: #333;
    font-size: 12px;
  }


  .approval-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 15px;
    color: #333;
    font-size: 16px;
  }


  .approval-head .title {
    font-weight: bold;
  }

  .approval-head .year {
    font-size: 14px;
  }

  .approval-head .month {
    font-size: 18px;
  }

  .approval-head .iconfont {
    font-size: 12px;
    margin-left: 4px;
    transform: rotate(90deg);
    display: inline-block;
    font-weight: bold;
  }

  .approval-list {
    padding: 0 15px;
  }

  .approval-list .item-approval {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 4px;
    padding: 10px 0;
    margin-bottom: 8px;
  }

  .item-approval .left {
    width: 75px;
    text-align: center;
  }

  .item-approval .left .number {
    color: #166BDA;
    font-size: 16px;
    font-weight: bold;
  }

  .item-approval .left .label {
    font-size: 12px;
    color: #333;
  }

  .item-approval .right {
    width: calc(100% - 75px);
    font-size: 12px;
    color: #666;
    display: flex;
    align-items: center;
  }

  .right .title {
    font-size: 14px;
    color: #333;
    font-weight: bold;
  }

  .right .info-box {
    width: calc(100% - 30px);
  }

  .right .info {
    margin-top: 5px;
  }

  .right .iconfont {
    font-size: 15px;
  }

  .icon-complete {
    color: #39D884;
  }

  .icon-ing {
    color: #F2B124;
  }
</style>
