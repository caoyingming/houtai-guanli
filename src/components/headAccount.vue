<template>
	<div class="top">
		<div class="set_box">
			<div class="imgUrl"><img src="" alt=""></div>
			<p style="margin: 0 23px 0 10px;">Amy Hall</p>
			<div class="icon_set"><img src="../assets/img/icon_set@2x.png" alt=""></div>
			<div class="exit" style="display: none;">
				<p><span><img src="../assets/img/icon_exit@2x.png" alt=""></span>退出账号</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		mounted(){
			$('.icon_set').on('click',function(e){
				$('.exit').slideDown()
				$(document).one("click", function() {
					$(".exit").slideUp();
				});
				e.stopPropagation()
			})
		},
		methods:{
			
		},
	}
</script>

<style>
	.top {
		height: 40px;
		min-height: 40px;
		background: #fff;
		padding-right: 23px;
		padding-top: 5px;
		box-sizing: border-box;
	}
	
	 .top .set_box {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: relative;
	}
	
	 .top .set_box .imgUrl {
		width: 30px;
		height: 30px;
		border-radius: 30px;
		background: #ccc;
	}
	
	 .top .set_box .imgUrl img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	
	 .top .set_box .icon_set {
		width: 20px;
		height: 20px;
	}
	
	 .top .set_box .icon_set img {
		width: 100%;
		height: 100%;
	}
	
	 .top .set_box .exit {
		width: 150px;
		height: 80px;
		background: #fff;
		box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.10), inset 0 0 0 0 rgba(0, 0, 0, 0.10);
		border-radius: 0px 0px 5px 5px;
		position: absolute;
		right: 0;
		top: 35px;
	}
	
	 .top .set_box .exit p {
		font-size: 14px;
		color: #828DA3;
		padding: 20px 0 0 18px;
	}
	
	 .top .set_box .exit span {
		display: inline-block;
		width: 16px;
		height: 16px;
		vertical-align: sub;
		margin-right: 5px;
	}
	
	 .top .set_box .exit span img {
		width: 100%;
		height: 100%;
	}
</style>
