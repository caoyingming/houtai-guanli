<style scoped="scoped">
	.login {
		width: 100%;
		min-width: 1366px;

		height: 100%;
		background: url(../assets/img/Mask.png) center no-repeat;
		background-size: 100% 100%;
		position: fixed;
	}

	.login h1 {
		color: #fff;
		font-size: 28px;
		padding-left: 30px;
		padding-top: 20px;
	}

	.img1 {
		position: absolute;
		left: 60px;
		top: 104px;
	}

	.img2 {
		position: absolute;
		right: 0;
		top: 0;
		height: 100%;
	}

	.img2 img {
		height: 100%;
	}

	.log_box {
		width: 385px;
		height: 408px;
		background: #FFFFFF;
		box-shadow: 5px 5px 25px 0 rgba(179, 179, 179, 0.25);
		border-radius: 8px;
		position: absolute;
		right: 116px;
		top: 50%;
		margin-top: -204px;
		
		box-sizing: border-box;
	}

	.log_box .icon_right {
		width: 20px;
		height: 20px;
		position: absolute;
		right: 15px;
		top: 15px;
	}
	
	.log_box .icon_right img {
		width: 100%;
		height: 100%;
	}
	.log_box h2 {
		font-size: 18px;
		color: #4A4A4A;
		text-align: center;
		line-height: 48px;
		padding: 30px 0;
	}
	.log_box h2 span{
		display: inline-block;
		width: 48px;
		height: 48px;
		background: rgba(59,193,196,0.10);	
		border-radius: 48px;
		margin-right: 15px;
	}
	.log_box label{
		font-weight: normal;
		font-size: 14px;
		color: #4A4A4A;
		margin-bottom: 6px;
	}
	.log_box input[type=text],input[type=password]{
		width: 100%;
		background: #FFFFFF;
		border: 1px solid #D3DAE3;
		border-radius: 3px;
		height: 40px;
		line-height: 40px;
		margin-bottom: 15px;
		text-indent: 10px;
	}
	.log_box .eyes{
		width: 18px;
		height: 12px;
		position: absolute;
		right: 10px;
		top: 10px;
	}
	.log_box .eyes img{
		width: 100%;
		height: 100%;
	}
	.btn_box{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 15px;
	}
	.btn_box .right button{
		width: 101px;
		height: 40px;
		line-height: 40px;
		background: #4DBD73;
		border-radius: 3px;
		font-size: 15px;
		color: #FFFFFF;
		text-align: center;
		border:0
	}
	.btn_box .left label{
		display: inline;
		vertical-align: middle;
		font-size: 13px;
		color: #828DA3;
		margin-left: 6px;
	}
	.bottom_box{
		width: 100%;
		height: 45px;
		line-height: 45px;
		background: #EFEEF8;
		position: absolute;
		bottom: 0;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		font-size: 14px;
		color: #3BC1C4;
		padding: 0 30px;
		box-sizing: border-box;
	}
	.bottom_box a{
		color: #3BC1C4;
	}
	.bottom_box span{
		float: right;
		cursor: pointer;
	}
</style>
<template>
	<div id="login" class="login">
		<h1>失联修复管理平台</h1>
		<div class="img1"><img src="../assets/img/pic_login1.png" alt=""></div>
		<div class="img2"><img src="../assets/img/pic_login2.png" alt=""></div>
		<div class="log_box">
			<div style="padding: 0 30px;">
			<div class="icon_right"><img src="../assets/img/icon_cancel@2x.png" alt=""></div>
			<h2><img src="" alt=""><span><img style="width: 14px;height: 18px;vertical-align: sub;" src="../assets/img/icon_lock@2x.png"
					 alt=""></span>登录·失联修复管理平台</h2>
			<label>账号<span v-show="spanPrompt" style="color: #DF3A3A;font-size: 14px; float: right;">该账号不存在</span></label>
			<p>
				<input v-model="Account" type="text" placeholder="请输入账号">
			</p>
			<label>密码</label>
			<p style="position: relative;">
				<input ref='input' type="password" v-model="Password" placeholder="请输入密码">
				<span class="eyes" @click="eyes()"><img v-if="imgShow" src="../assets/img/icon_password_hide@2x.png" alt=""><img src="../assets/img/icon_password_show@2x.png" v-else alt=""></span>
			</p>
			<div class="btn_box">
				<div class="left">
					<input v-model="checked" type="checkbox" id="check"><label style="display: inline;" for="check">记住账号</label>
				</div>
				<div class="right"><button @click="submitForm()">登录</button></div>
			</div>
			</div>
			<div class="bottom_box">
				还没有账号？<a href="javascript:">点击注册</a>
				<span>忘记密码</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
		components: {

		},
		data() {
			return {
				spanPrompt: false,
				imgShow: true,
				Account:'',
				Password:'',
				checked:false,
				url:this.URL.url
			}
		},
		mounted() {
			let account = localStorage.setItem("account",this.Account)
			this.Account = account
		},
		
		methods: {
			submitForm(){
				if(this.checked == true){
					localStorage.setItem("account",this.Account)
				}
			},
			eyes() {
				if (this.imgShow) {
					this.$refs.input.type = "text"
					this.imgShow = false
				} else {
					this.$refs.input.type = "password"
					this.imgShow = true
				}
			}
		}
	}
</script>
