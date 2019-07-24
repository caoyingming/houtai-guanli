<style scoped>
	.newPhone {
		position: fixed;
		height: 100%;
		width: 100%;
		display: flex;
		min-width: 1366px;
	}
	.o_left {
		width: 200px;
		min-width: 200px;
		background: #1D2B35;
		height: 100%;
	}

	.o_right {
		width: 100%;
		height: 100%;
		padding-bottom: 30px;
	}

	.o_left h1 {
		color: #3BC1C4;
		font-size: 18px;
		text-align: center;
		padding-top: 50px;
		padding-bottom: 37px;
	}

	.o_left ul li {
		width: 100%;
		height: 45px;
		background: #4DBD73;
		line-height: 45px;
		text-align: center;
		color: #fff;
	}

	.o_left ul li span {
		display: inline-block;
		width: 18px;
		height: 18px;
		vertical-align: sub;
		margin-right: 10px;
	}

	.o_left ul li span img {
		width: 100%;
		height: 100%;
		display: block;
	}

	.o_right .top {
		height: 40px;
		min-height: 40px;
		background: #fff;
		padding-right: 23px;
		padding-top: 5px;
		box-sizing: border-box;
	}

	.o_right .top .set_box {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: relative;
	}

	.o_right .top .set_box .imgUrl {
		width: 30px;
		height: 30px;
		border-radius: 30px;
		background: #ccc;
	}

	.o_right .top .set_box .imgUrl img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.o_right .top .set_box .icon_set {
		width: 20px;
		height: 20px;
	}

	.o_right .top .set_box .icon_set img {
		width: 100%;
		height: 100%;
	}

	.o_right .top .set_box .exit {
		width: 150px;
		height: 80px;
		background: #fff;
		box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.10), inset 0 0 0 0 rgba(0, 0, 0, 0.10);
		border-radius: 0px 0px 5px 5px;
		position: absolute;
		right: 0;
		top: 35px;
	}

	.o_right .top .set_box .exit p {
		font-size: 14px;
		color: #828DA3;
		padding: 20px 0 0 18px;
	}

	.o_right .top .set_box .exit span {
		display: inline-block;
		width: 16px;
		height: 16px;
		vertical-align: sub;
		margin-right: 5px;
	}

	.o_right .top .set_box .exit span img {
		width: 100%;
		height: 100%;
	}

	.o_right .bottom {
		height: 100%;
		width: 100%;
		background: rgb(232, 237, 238);
		padding: 21px 30px;
		box-sizing: border-box;
	}

	.o_right .bottom .div_box {
		display: flex;
	}

	.o_right .bottom .div_box p {
		width: 150px;
		min-width: 150px;
		height: 35px;
		margin-right: 10px;
	}

	.o_right .bottom .div_box .p_details {
		width: 150px;
		height: 47px;
		background: #fff;
		font-size: 15px;
		color: #6C7F85;
		text-align: center;
		line-height: 35px;
	}

	.block {
		width: 150px;
		min-width: 150px;
		height: 35px;
		box-sizing: border-box;
		margin-right: 10px;
	}

	.el-date-editor.el-input,
	.el-date-editor.el-input__inner {
		width: 150px !important;
	}

	.el-input__inner {
		height: 35px !important;
		line-height: 35px !important;
	}

	.el-input__icon {
		line-height: 35px !important;
	}

	.o_right .bottom .div_box p button {
		width: 35px;
		height: 35px;
		line-height: 35px;
		background: #4DBD73;
		border-radius: 3px;
		border: 0;
		font-size: 15px;
		color: #FFFFFF;
	}

	.daochu {
		line-height: 35px;
		text-align: center;
		color: #fff;
		background: #3BC1C4;
		border-radius: 3px;
	}

	.o_right .bottom .content {
		width: 100%;
		background: #fff;
		padding: 33px 50px 0;
		box-sizing: border-box;
	}
	.content .top_box{
		
	}
	.content .top_box .flex1{
		display: flex;
		align-items: center;
	}
	.content .top_box .flex1 p{
		color: #444444;
		font-size: 14px;
	}
	.content .top_box .flex1 p input{
		width: 350px;
		height: 40px;
		line-height: 40px;
		background: #FFFFFF;
		border: 1px solid #D3DAE3;
		border-radius: 3px;
		text-indent: 10px;
		margin-left: 6px;
		margin-right: 10px;
	}
	.content .top_box .flex1 p button,.btn_span{
		width: 110px;
		height: 35px;
		line-height: 35px;
		border: 0;
		background: #4DBD73;
		border-radius: 3px;
		font-size: 15px;
		color: #FFFFFF;
		text-align: center;
		margin-left: 20px;
		display: inline-block;
	}
	.content .top_box .flex1 p .btn_span{
		position: relative;
	}
	.content .top_box .flex1 p .btn_span input[type=file]{
		width: 110px;
		height: 35px;
		position: absolute;
		left: 0;
		margin-left: 0;
		opacity: 0;
	}
	.content .top_box .flex1 p a{
		color: rgb(62,117,234);
		text-decoration: underline;
	}
	.table_box {
		height: 340px;
		border-bottom: 1px solid #E7E9EF;
		padding: 20px 50px 30px;
		background: #fff;
	}
	.table_box table {
		width: 100%;
		background: #fff;
	}

	.table_box table thead tr {
		height: 44px;
		background: #E7E9EF;
	}

	.table_box table thead tr th {
		text-align: center;
		font-size: 14px;
		color: #444444;
		font-weight: bold;
	}

	.table_box table tbody tr {
		height: 44px;
		text-align: center;
		font-size: 14px;
		color: #6C7F85;
	}

	.table_box table tbody tr td .Enter {
		display: inline-block;
		width: 80px;
		height: 26px;
		background: #3BC1C4;
		border-radius: 3px;
		color: #fff;
		line-height: 26px;
	}

	.table_box table tbody tr:nth-child(even) {
		background: #F4F6FA;
	}

	.el-pagination {
		text-align: center;
		margin-top: 15px;
	}

	.el-pagination.is-background .el-pager li:not(.disabled).active {
		background-color: #4DBD73 !important;
	}

	.nullImg {
		text-align: center;
		padding-top: 110px;
	}

	.nullImg p {
		font-size: 14px;
		color: #828DA3;
		text-align: center;
		line-height: 25px;
	}
	.el-table td,{
		border: 0 !important;
	}
	.el-table__body .el-table td{
		text-align: center !important;
	}
	.sub_box{
		display: flex;
		background: #fff;
		align-items: center;
		justify-content: space-between;
		font-size: 13px;
		color: #828DA3;
		padding: 20px 50px 0;
	}
	.sub_box .sub_l p{
		margin-bottom: 10px;
	}
	.sub_box .sub_l p label{
		display: inline;
	}
	.sub_box .sub_l p input{
		width: 14px;
		height: 14px;
		margin-right: 6px;
	}
	.sub_box .sub_l p span{
		color: rgb(62,117,234);
	}
	.sub_box .sub_r span{
		display: inline-block;
		width: 100px;
		height: 22px;
		line-height: 22px;
		font-size: 16px;
		color: #6C7F85;
		text-align: center;
	}
	.sub_box .sub_r button{
		width: 150px;
		height: 40px;
		text-align: center;
		border: 0;
		background: #4DBD73;
		border-radius: 3px;
		font-size: 16px;
		color: #FFFFFF;
	}
	.el-table th{
		background: #f00;
	}
    .el-table td,.building-top .el-table th.is-leaf {
		border-bottom:  1px solid #f00;
    }
	
	.black-bg{
		width: 100%;
		height: 100%;
		z-index: 1;
		position: fixed;
		left: 0;
		top: 0;
		background: rgba(0,0,0,.5);
	}
	.addAlert{
		width: 500px;
		height: 373px;
		background: #fff;
	    border-radius: 3px;
		position: fixed;
		left: 50%;
		margin-left: -250px;
		top: 50%;
		margin-top: -186.5px;
		z-index: 2;
	}
	.addAlert .close{
		width: 20px;
		height: 20px;
		position: absolute;
		right: 15px;
		top: 15px;
	}
	.addAlert .close img{
		width: 100%;
		height: 100%;
	}
	.addAlert h1{
		font-size: 20px;
		color: #4DBD73;
		font-weight: bold;
		text-align: center;
		padding: 35px 0 30px;
	}
	.addInput{
		text-align: center;
	}
	.addInput p{
		margin-bottom: 15px;
		font-size: 14px;
		color: #444444;
	}
	.addInput input{
		width: 240px;
		height: 40px;
		line-height: 40px;
		background: #FFFFFF;
		border: 1px solid #D3DAE3;
		border-radius: 3px;
		text-indent: 10px;
		font-size: 14px;
		color: #6C7F85;
	}
	.addInput button{
		width: 200px;
		height: 40px;
		background: #4DBD73;
		border-radius: 3px;
		border: 0;
		font-size: 16px;
		color: #FFFFFF;
		margin-top: 5px;
	}
	.warning{
		height: 40px;
		line-height: 40px;
		background: #EDEDED;
		font-size: 13px;
		color: #6C7F85;
		text-align: center;
		position: absolute;
		bottom: 0;
		width: 100%;
	}
	.submitAlert{
		width: 360px;
		height: 200px;
		background: #FCFCFC;
		border-radius: 3px;
		position: fixed;
		left:50%;
		top: 50%;
		margin-left: -180px;
		margin-top: -100px;
		z-index: 2;
		text-align: center;
	}
	.submitAlert h1{
		font-size: 15px;
		color: #444444;
		text-align: center;
		line-height: 24px;
		font-weight: bold;
		padding: 50px 0 37px;
	}
	.submitAlert button{
		width: 200px;
		height: 40px;
		background: #4DBD73;
		border-radius: 3px;
		border: 0;
		font-size: 16px;
		color: #FFFFFF;
	}
	
</style>
<template>
	<div class="newPhone">
		<div class="o_left">
			<h1><img src="../assets/img/logo.png" alt=""></h1>
			<ul>
				<li><span><img src="../assets/img/icon_nav_sldhgl@2x.png" alt=""></span>失联电话管理</li>
			</ul>
		</div>
		<div class="o_right">
			<head-account></head-account>
			<div class="bottom">
				<div class='div_box'>
					<p style='width:35px;height:35px;min-width:35px'><button @click="$router.push({path:'/orderList'})" style="background: #828DA3;"><img style="vertical-align: middle;" src="../assets/img/icon_back.png" alt=""></button></p>
					<p class="p_details">新建电话单</p>
				</div>
				<div class="content">
					<div class="top_box">
						<div class="flex1" style="margin-bottom: 20px;">
							<p>新建电话单名称：</p>
							<p><input type="text" v-model="phoneName" placeholder="为电话单创建一个名称"></p>
							<p style="font-size: 13px;color: #828DA3;">文字、字母、数字或英文符号，最短3位</p>
						</div>
						<div class="flex1">
							<p>录入失联人名单</p>
							<p><button @click="addTr()"><img style="vertical-align: sub;margin-right: 6px;margin-bottom: 1px;" src="../assets/img/icon_btn_add.png" alt="">添加</button><span class="btn_span" style="background: #3BC1C4;"><img style="vertical-align: sub;margin-right: 6px;margin-bottom: 1px;" src="../assets/img/icon_btn_leadin.png" alt=""><input type="file" multiple="multiple" id='inputFile' @change="uploadFile($event)">导入</span></p>
							<p style="font-size: 13px;color: #828DA3;margin-left: 20px;">失联人名单必须按照Excel模板格式填写， <a href="http://tapi.yzx360.com/upload/excel/Listofpersons.xls">下载失联人名单Excel模板</a></p>
						</div>
					</div>
				</div>
				<div class="table_box">
					<div class="nullImg" v-show="nullTrue" style="background: rgb(232, 237, 238);height: 100%;">
						<img src="../assets/img/pic_empty.png" alt="">
						<p>暂无失联人名单，</br>请手动添加或导入名单</p>
					</div>
					<el-table v-show='isTab' :data="tableData3" height="340" align='center' style="width: 100%;">
						<el-table-column align='center' width='100' type="index" label="序列号">
						</el-table-column>
						<el-table-column align='center' prop="RepairName" label="姓名">
						</el-table-column>
						<el-table-column align='center' prop="RepairIdcard" label="身份证号">
						</el-table-column>
						<el-table-column align='center' prop="FailPhone" label="无效号码">
						</el-table-column>
					</el-table>
				</div>
				<div class="sub_box">
					<div class="sub_l">
						<p><input type="checkbox"><label>我同意签订</label><span>《失联人名单授权协议》</span></p>
						<p><input type="checkbox"><label>我同意</label><span>《失联修复平台免责申请》</span></p>
						<p>失联电话拨打有效期：6个月（审核成功当天开始计算）</p>
					</div>
					<div class="sub_r">
						<span>取消</span><button @click="forSubmit()">提交申请</button>
					</div>
				</div>
			</div>
		</div>
		<div @click="closeFun()" class="black-bg" v-show="isBlack"></div>
		<div class="addAlert" v-show="iSaddAlert">
			<div class="close" @click="closeFun()"><img src="../assets/img/icon_cancel@2x.png" alt=""></div>
			<h1>添加失联人</h1>
			<div class="addInput">
				<p><span>失联人姓名：</span><input type="text" v-model="addName" placeholder="请输入失联人的姓名"></p>
				<p><span>身份证号码：</span><input type="text" v-model="addCard" placeholder="请输入失联人的身份证号码"></p>
				<p><span>无效号码：&nbsp;&nbsp;&nbsp;</span><input v-model="addInvalid" type="text" placeholder="请输入失联人员原有手机号(选填)"></p>
				<button @click="addbtn()">添加</button>
			</div>
			<div class="warning">* 请确认所输入的身份证号码和姓名对称</div>
		</div>
		<div class="submitAlert" v-show="isSubmit">
			<h1>电话单成功提交申请，</br>请等待审核···</h1>
			<button @click="$router.push({path: '/orderList'})">我知道了</button>
		</div>
	</div>
</template>

<script>
	import headAccount from '../components/headAccount.vue'
	export default {
		name: 'newPhone',
		components: {
			headAccount
		},
		data() {
			return {
				phoneName: '',
				iSfalse: false,
				nullTrue: false,
				iSaddAlert: false,
				isSubmit: false,
				isBlack: false,
				addName: '',
				addCard: '',
				addInvalid: '',
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: '',
				tableData3: [],
				isTab: false,
				url: this.URL.url,
				file: '',
				src: ''
			}
		},
		mounted() {
			if (this.tableData3.length === 0) {
				this.nullTrue = true
				this.isTab = false
			} else {
				this.nullTrue = false
				this.isTab = true
			}
		},
		methods: {
			uploadFile(event) {
				this.file = event.target.files[0]; //获取文件
				var windowURL = window.URL || window.webkitURL;
				this.file = event.target.files[0];
				this.src = windowURL.createObjectURL(event.target.files[0]);
				event.preventDefault(); //取消默认行为
				let formdata = new window.FormData();
				formdata.append('RepairersList', this.file);
				this.$axios({
					method: 'post',
					url: this.url + '/api/Missingrepair/ExcelUpload',
					data: formdata,
					headers: {
						'Content-Type': 'multipart/form-data' //之前说的以表单传数据的格式来传递fromdata
					}
				}).then((res) => {
					if(res.data.code == 200){
						console.log(res.data.data)
						this.isTab = true
						this.nullTrue = false
						for(let i of res.data.data){
							this.tableData3.push(i)
						}
						
						
					}
					$('#inputFile').val('')
				})
			},
			sub() {

			},
			addTr() {
				this.isBlack = true
				this.iSaddAlert = true
			},
			closeFun() {
				this.isBlack = false
				this.iSaddAlert = false
			},
			addbtn() {
				this.tableData3.push({
					RepairName: this.addName,
					RepairIdcard: this.addCard,
					FailPhone: this.addInvalid
				})
				this.addName = ''
				this.addCard = ''
				this.addInvalid = ''
				this.closeFun()
				if (this.tableData3.length === 0) {
					this.nullTrue = true
					this.isTab = false
				} else {
					this.nullTrue = false
					this.isTab = true
				}
			},
			forSubmit() {
				this.$axios({
					method: 'post',
					url: this.url + '/api/Missingrepair/PhoneCollectAdd',
					data: {
						TelephoneCollectiveName: this.phoneName,
						params: this.tableData3
					}
				}).then((res) => {
					if (res.data.code == 200) {
						this.isSubmit = true
						this.isBlack =  true
					}else if (res.data.code == 201){
						this.$message.error('请填写全部信息在提交');
					}
				})
			}
		}
	}
</script>
<style>
	.el-table thead tr th {
		background: #E7E9EF;
	}

	.el-table td,
	.el-table th {
		padding: 9px 0 !important;
	}

	.el-table td,
	.el-table th.is-leaf {
		border-bottom: 0 !important;
	}

	.el-table--border::after,
	.el-table--group::after,
	.el-table::before {
		content: '';
		position: absolute;
		background-color: #fff !important;
		z-index: 1;
	}
</style>
