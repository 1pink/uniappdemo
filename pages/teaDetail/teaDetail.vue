<template>
  <view class="container">
  <view class="box">
    <view class="title">2021年大学生创新创业训练项目</view>
    <view class="sub-box">
      <view class="row"><view class="label">申报年度：</view><view class="value">2021年 | 申报时间2021年10月22日</view></view>
      <view class="row"><view class="label">项目类型：</view><view class="value">创新创业项目</view></view>
      <view class="row"><view class="label">项目阶段：</view><view class="value">立项</view></view>
      <view class="row"><view class="label">申请金额：</view><view class="value">889923元</view></view>
      <view class="row"><view class="label">补充说明：</view><view class="value">无</view></view>
    </view>
    <view class="title">经费详情</view>
    <view class="gray-box">
      <view class="row"><view class="label">支出科目：</view><view class="value">元器件和原材料</view></view>
      <view class="row"><view class="label">备注说明：</view><view class="value">这里备注说明可以很长很长很长很长很长很长很长 勇士总冠军！库里FMVP+MVP+得分王YYDS！！！ 格林DPOY！</view></view>
    </view>
    
  </view>
  <view class="box margin">
    <view class="title">审批进度</view>
    <view class="approval-process">
      <view class="item-process" v-for="(item,index) in processList" :key="index">
        <view class="avatar"><image src="../../static/avatar.png"></image></view>
        <view class="info">
          <view class="info-cont">
            <view class="name">{{item.name}} | {{item.college}}</view>
            <view class="time">{{item.time}}</view>
            <view class="sync">{{item.flowName}}</view>
          </view>
          <view class="info-status complete">{{item.result}}</view>
        </view>
      </view>
      <!-- <view class="item-process">
        <view class="avatar"><image src="../../../assets/avatar.png"></image></view>
        <view class="info">
          <view class="info-cont">
            <view class="name">李二 | 软件学院</view>
            <view class="time">2021-01-22</view>
            <view class="sync">项目经费申请</view>
          </view>
          <view class="info-status reject">管理员 | 已退回</view>
        </view>
      </view> -->
    </view>
  </view>
  <!-- <view class="btn-box">
    <view class="reject"  bindtap="toNoPass">退回</view>
    <view class="pass"  bindtap="toPass">审核通过</view>
  </view> -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
         processList:[
              {'name':'李项','college':'软件学院',"time":"2021-10-22",'remark': "",'result': "经费申报",'flowName': "经费申报"},
              {'name':'教秘','college':'软件学院',"time":"2021-11-10",'remark': "通过通过",'result': "审核通过",'flowName': "学院教秘审批"},
              {'name':'教务处管理员','college':'教务处',"time":"2021-12-10",'remark': "通过通过",'result': "审核通过",'flowName': "教务处管理员审批"}
            ]
      }
    },
    methods: {
      
    }
  }
</script>

<style>
.box{
  background:#fff;
  padding:20px 15px;
}
.box .title{
  color:#333;
  font-size:14px;
  font-weight: bold;
  position: relative;
  padding-left: 10px;
  margin-top:20px;
  margin-bottom:10px;
}
.box .title:first-child{
  margin-top:0;
}
.box .title::after{
  content:'';
  width:3px;
  height: 11px;
  background:#0B68FC;
  border-radius: 1.5px;
  position: absolute;
  left:0;
  top:3px;
}
.box .sub-box{
  padding-left:18px;
}
.row{
  color:#333;
  font-size:12px;
  padding-bottom:10px;
  display: flex;
}
.row .label{
  width:65px;
}
.row .value{
  width:calc(100% - 65px);
}
.gray-box{
  padding:10px 15px;
  background:#F4F5F7;
  border-radius: 8px;
}

.item-process{
  display: flex;
  align-items: center;
  border:1px solid #eee;
  border-radius: 4px;
  padding:5px 10px;
  margin-bottom:10px;
  box-shadow: 0px 0px 6px 0px rgba(0, 107, 255, 0.15);
}
.item-process .avatar{
  width:40px;
  height: 40px;
  border-radius: 100%;
}
.avatar image{
  width:100%;
  height: 100%;
}
.info{
  width:calc(100% - 40px);
  padding-left:10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size:12px;
}

.info .info-cont .name{color:#333;}
.info .info-cont .time{color:#999;}
.info .info-cont .sync{color:#777A8C}
.info .info-status{
  color:#333;
  font-weight: bold;
}
.info-status.complete{
  color:#0B68FC;
}
.info-status.reject{
  color:#FF2A00;
}

.margin{
  margin-top:10px;
  margin-bottom:50px;
}

.btn-box{
  width:100%;
  height: 50px;
  line-height: 50px;
  position:fixed;
  bottom:0;
  left:0;
  text-align: center;
  display: flex;
  box-shadow: 0px 0px 14px 2px rgba(0, 107, 255, 0.08);
}
.btn-box .pass{
  background:#0B68FC;
  color:#fff;
  flex:1;
}
.btn-box .reject{
  background:#fff;
  color:#FF2A00;
  flex:1;
}
</style>
