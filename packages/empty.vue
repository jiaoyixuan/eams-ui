<template>
	<view class="none-data">
		<image class="none-image" src="./img/none.png" mode=""></image>
		<text class="none-words">{{text}}</text>
	</view>
</template>

<script>
	export default {
    name: 'Empty' ,
    props:{
      text:{
        type:String,
        default:'暂无数据'
      }
    },
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.none-data{
		height: 600rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.none-image{
		width: 300rpx;
		height: 180rpx;
	}
	.none-words{
			color: #b6bac0;
			font-size: 26rpx;
			margin-top: 20rpx;
	}
</style>
