<template>
	<view>
    <!-- tab栏切换动态改变激活样式 -->
    <view class="nav">
        <view class="nav-list" v-for="(item,index) in list" :key="item.id" @tap="changeAct(item)">
            <!-- 激活样式名字是红色 判断act==index 和act==item.id都行-->
            <view :class="[act==index?'name':'']">
                {{item.name}}
            </view>
            <!-- 名字下面的横线 -->
            <view :class="[act==index?'line':'']">
            </view>
        </view>
    </view>
			
    <!-- 内容的改变 -->
    <view class="content">
      <swiper :current=act class="contentSwiper" bindchange="unitoTRproject">
        <swiper-item>
          <view class="swiper-item">
            <view class="itemCon" @click="toProjectDetail">
              <view class="title">
                <text class="iconfontNew icon-xiangmu"></text>
                <text>TGF-β诱导肝癌细胞分泌IL-11促进肝星状细胞活化的作用及机制</text>
              </view>
              <view class="txtCon">
                <text class="txtTime">申报年度：2022</text>
                <text class="txtName">负责人：张三</text>
              </view>
              <view class="btn doingBg">
                申报中
              </view>
            </view>
            <view class="itemCon" @click="toProjectDetail">
              <view class="title">
                <text class="iconfontNew icon-xiangmu"></text>
                <text>TGF-β诱导肝癌细胞分泌IL-11促进肝星状细胞活化的作用及机制</text>
              </view>
              <view class="txtCon">
                <text class="txtTime">申报年度：2022</text>
                <text class="txtName">负责人：张三</text>
              </view>
              <view class="btn successBg">
                审核通过
              </view>
            </view>
            <view class="itemCon" @click="toProjectDetail">
              <view class="title">
                <text class="iconfontNew icon-xiangmu"></text>
                <text>TGF-β诱导肝癌细胞分泌IL-11促进肝星状细胞活化的作用及机制</text>
              </view>
              <view class="txtCon">
                <text class="txtTime">申报年度：2022</text>
                <text class="txtName">负责人：张三</text>
              </view>
              <view class="btn errorBg">
                审核退回
              </view>
            </view>
          </view>
        </swiper-item>
        <swiper-item>
          <view @click="toTeacher">----teacher 首页 -------入口---  </view>
        </swiper-item>
        <swiper-item>
          <view @click="toTeacherdetail">----teacher-审批详情  ---入口----</view>
        </swiper-item>
        <swiper-item>
          <view>4</view>
        </swiper-item>
      </swiper>
    </view>
 <!--  <tabbar></tabbar> -->
    </view>
    
</template>

<script>
	export default {
		data() {
			return {
				// 默认激活样式是第一个
				act: 0,
				list: [{
						id: 0,
						name: '双创'
					},
					{
						id: 1,
						name: '科研'
					},
					{
						id: 2,
						name: '学科'
					},
          {
            id: 3,
            name: '学分'
          }
				],
				content: ''
			};
		},
		methods: {
			changeAct(item) {
				// 激活样式是当前点击的对应下标--list中对应id
				this.act = item.id;
				// 可以根据点击事件改变内容
				this.content = item
			},
      toTeacher(){
        console.log("clals")
        uni.navigateTo({
          url:"/pages/teaIndex/teaIndex"
        })
      },
      toTeacherdetail(){
        console.log("clals")
        uni.navigateTo({
          url:"/pages/teaDetail/teaDetail"
        })
      },
      toProjectDetail(){
        console.log("clals")
        uni.navigateTo({
          url:"/pages/projectDetail/projectDetail"
        })
      },
		},
    
		onShow() {
			// 页面默认显示的是list列表中第一条数据
			this.content = this.list[0]
		}
	}
</script>


<style scoped lang="scss">
	.nav {
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: #ffffff;
		font-size: 30rpx;
		color: black;
		letter-spacing: 2.14rpx;
	}

	.nav-list {
		width: 65rpx;
		height: 100%;
		margin-top: 40rpx;
		opacity: .9;
	}

	.nav-list .name {
		color: black;
    font-weight: 600;
	}

	.nav-list .line {
		margin-top: 10rpx;
		width: 65rpx;
		height: 4rpx;
		background-color: blue;
	}

	/* 内容 */
	// .content {
	// 	margin-top: 40rpx;
	// }
  .contentSwiper{
    height: 100vh;
  }
  
  .swiper-item{
    padding: 20rpx;
    height: 100%;
    overflow-y: scroll;
    .itemCon{
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
  }
</style>

