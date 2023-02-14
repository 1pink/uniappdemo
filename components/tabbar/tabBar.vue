<template>
	<view v-if="showselected">
		<view class="tabbar">
			<view class="box">
				<view class="item" v-for="(item,index) in tabBar.list" :key="item.pagePath"
					@click="switchTab(index,item)">
						
						<view class="icon"
							v-if="item.flag == 'icon'">
							<image :src="item.iconPath" class="icon" v-if="selectedIndex !== index">
							<image :src="item.selectedIconPath" class="icon" v-else>
							<view>
								<text :class="['item-text',{'text-active':selectedIndex === index}]">{{item.text}}</text>
							</view>
						</view>
						
						<view class="icon seven"
							v-else>
							<image :src="item.iconPath" mode=""></image>
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
				selectedIndex: uni.getStorageSync('selectedIndex') || 0,  // 是否选中
				showselected: true, // 是否启用tarBer
				tabBar: {
					list: [{
							"flag": 'icon',
							"pagePath": "pages/index/index",
							"iconPath": "/static/home.png",
							"selectedIconPath": "/static/home-active.png",
							"text": "首页"
						},{
							"flag": 'icon',
							"pagePath": "pages/messgae/message",
							"iconPath": "/static/message.png",
							"selectedIconPath": "/static/message-active.png",
							"text": "信息"
						},{
							"flag": 'icon',
							"pagePath": "pages/my/my/my",
							"iconPath": "/static/my.png",
							"selectedIconPath": "/static/my-active.png",
							"text": "我的"
						}
					]
				},
			}
		},
		methods: {
			switchTab(index, item) {
				let url = '/' + item.pagePath
				let pagePath = url
				uni.switchTab({url})
				this.tabBar.list.forEach((v, i) => {
					if (item.pagePath === v.pagePath) {
						uni.setStorageSync('selectedIndex', index);
					}
				})
			}
		},
		
	}
</script>

<style lang="scss">
	
	.tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 130rpx;
		z-index: 999;
		background: #ffffff;
		border-top: 2rpx solid #eee;
		
		.box {
			padding: 0 40rpx;
			display: flex;
			justify-content: space-around;
			.item {
				width: 15%;
				
				.icon {
					margin-top: 10rpx;
					width: 100%;
					font-size: 24rpx;
					color: #8a8a8a;
					
					text-align: center;
					image {
						width: 50rpx;
						height: 50rpx;
					}
					
					.text-active {
						color: #c5cde6;
					}
				}
				.seven {
					height: 100rpx;
					background-color: #dcdaef;
					border-radius: 0rpx 0rpx 35rpx 35rpx;
					line-height: 130rpx;
					
					image {
						width: 70rpx;
						height: 70rpx;
					}
				}
			}
		}
	}
	 
</style>
