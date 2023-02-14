<!-- <template>
    <view>
        <router-view></router-view>
    </view>
</template> -->

<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
    page{
      background:#F6F6F6;
    }
    .doingBg{
      background-color: #409EFF;
    }
    .successBg{
      background-color: #19BE6B;
    }
    .errorBg{
      background-color: #F56C6C;
    }
    
    .doingColor{
      color: #409EFF;
    }
    .successColor{
      color: #19BE6B;
    }
    .errorColor{
      color: #F56C6C;
    }
</style>
