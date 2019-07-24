<style scoped>
	.callDetails {
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
		height: 631px;
		background: #fff;
		padding: 33px 50px;
		box-sizing: border-box;
	}

	.content .mod_box {
		display: flex;
		justify-content: space-between;
	}

	.content .mod_box div {
		width: 240px;
		height: 80px;
		border-radius: 3px;
	}

	.content .mod_box div h3 {
		font-size: 15px;
		color: #FFFFFF;
		padding: 10px 20px 0;
	}

	.content .mod_box div h1 {
		font-size: 30px;
		color: #FFFFFF;
		font-weight: bold;
		padding-left: 20px;
	}

	.content .mod_box div h1 span {
		font-size: 15px;
		color: #FFFFFF;
		font-weight: normal;
	}

	.content .mod_box .box1 {
		box-shadow: 0 4px 10px 0 #C5B0FF;
		background: url(../assets/img/pic_total_2.png) no-repeat;
	}

	.content .mod_box .box2 {
		box-shadow: 0 4px 10px 0 #8ABDEA;
		background: url(../assets/img/pic_done_2.png) no-repeat;
	}

	.content .mod_box .box3 {
		box-shadow: 0 4px 10px 0 #E7B785;
		background: url(../assets/img/pic_surplus_2.png) no-repeat;

	}

	.content .mod_box .box4 {
		box-shadow: 0 4px 10px 0 #91E1DC;
		background: url(../assets/img/pic_empty_2.png) no-repeat;

	}

	.content .mod_box .box4 p {
		line-height: 112px;
		color: #fff;
		font-size: 15px;
		text-decoration: underline;
		padding-left: 20px;
	}

	.table_box {
		height: 405px;
		background: #fff;
		border: 1px solid #D3DAE3;
		margin-top: 14px;
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
		background: #F4F6FA;
		height: 100%;
	}

	.nullImg p {
		font-size: 14px;
		color: #828DA3;
		text-align: center;
		line-height: 25px;
	}
</style>
<template>
	<div class="callDetails">
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
					<p style='width:35px;height:35px;min-width:35px'><button @click="$router.push({path:'/orderList'})" style="background: #828DA3;"><img
							 style="vertical-align: middle;" src="../assets/img/icon_back.png" alt=""></button></p>
					<p class="p_details">电话详情</p>
					<el-select class='block' v-model="value" placeholder="第一批失联电话" @change='chChange'>
						<el-option v-for="item in options" :key="item.id" :label="item.TelephoneCollectiveName" :value="item.id">
						</el-option>
					</el-select>
					<p style='width:35px;height:35px;min-width:35px'><button @click="go()">GO</button></p>
					<h2 style="width: 100%;font-size: 14px;color: #6C7F85;text-align: right;line-height: 35px;">失联修复主号码：011—5653531</h2>
				</div>
				<div class="content">
					<div class="mod_box">
						<div class="box1">
							<h3>电话总数量</h3>
							<h1>{{PhoneNum}} <span>个</span></h1>
						</div>
						<div class="box2">
							<h3>已拨打修复电话</h3>
							<h1>{{DialedNum}} <span>个</span></h1>
						</div>
						<div class="box3">
							<h3>剩余可联系号码</h3>
							<h1>{{SurplusNum}} <span>个</span></h1>
						</div>
						<div class="box4">
							<h3>查询结果</h3>
							<h1>{{NoNum}}<span>个</span></h1>
						</div>
					</div>
					<div class="table_box">
						<div class="nullImg" v-show="nullTrue">
							<img src="../assets/img/pic_empty.png" alt="">
							<p>暂无失联电话名单，</br>请新建失联修复电话单</p>
						</div>
						<el-table v-show="isTab" :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)" style="width: 100%">
							<el-table-column align='center' width='100' type="index" label="序列号">
							</el-table-column>
							<el-table-column align='center' width='100' prop="RepairName" label="姓名">
							</el-table-column>
							<el-table-column align='center' prop="RepairIdcard" label="身份证号">
							</el-table-column>
							<el-table-column align='center' label="修复电话">
								<template slot-scope="scope">
									<span v-if='scope.row.RepairPhone == -99' style="color: red;">修复失败</span>
									<span v-else-if='scope.row.RepairPhone == -2' style="color:red;">修复失败</span>
									<span v-else-if='scope.row.RepairPhone == -1' style="color:red;">修复失败</span>
									<span v-else style="color:#6C7F85;">{{scope.row.RepairPhone}}</span>
								</template>
							</el-table-column>
							<el-table-column align='center' prop="ValidityBegin" label="有效期">
							</el-table-column>
							<el-table-column align='center' width='250' prop="ValidityEnd" label="描述">
							</el-table-column>
						</el-table>


					</div>
					<el-pagination v-show='isTab' @size-change='handleSizeChange' @current-change='handleCurrentChange' :page-size='pagesize'
					 background layout="prev, pager, next" :total="tableData.length">
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import headAccount from '../components/headAccount.vue'
	export default {
		name: 'callDetails',
		components: {
			headAccount
		},
		data() {
			return {
				pagesize: 8,
				currpage: 1,
				isTab:true,
				iSfalse: false,
				nullTrue: false,
				options: [],
				value: '',
				tableData: [],
				url: this.URL.url,
				PhoneNum: 0,
				DialedNum: 0,
				SurplusNum: 0,
				NoNum: 0,
				optionsName:'',
			}
		},
		mounted() {
			this.$axios({
				method: 'post',
				url: this.url + '/api/Missingrepair/PhoneCollectPullDownLists',
			}).then((res) => {
				this.options = res.data.data
			})
			this.deailAjax()
		},
		methods: {
			chChange(val) {
				var obj = {};
				obj = this.options.find(item => {
					return item.id === val
				});
				this.optionsName = obj.TelephoneCollectiveName
			},
			handleSizeChange(val) {
				// console.log('每页+"val"+条')
				this.pagesize = val
			},
			handleCurrentChange(val) {
				// console.log('当前页'+ val)
				this.currpage = val
			},
			deailAjax() {
				this.$axios({
					method: 'post',
					url: this.url + '/api/Missingrepair/PhoneCollectDetail',
					data: {
						CollectId: this.$route.query.id
					},
					
				}).then((res) => {
					if (res.data.code == 200) {
						this.tableData = res.data.data
						this.PhoneNum = res.data.PhoneNum
						this.DialedNum = res.data.DialedNum
						this.SurplusNum = res.data.SurplusNum
						this.NoNum = res.data.NoNum
					}
				})
			},
			go() {
				
				this.$axios({
					method: 'post',
					url: this.url + '/api/Missingrepair/PhoneCollectDetail',
					data: {
						CollectId: this.value
					},
				}).then((res) =>{
					if(res.data.code == 200){
						this.tableData = res.data.data
						this.PhoneNum = res.data.PhoneNum
						this.DialedNum =  res.data.DialedNum
						this.SurplusNum = res.data.SurplusNum
						this.NoNum = res.data.NoNum
						this.isTab = true
						this.nullTrue = false
					}else if(res.data.code == 202){
						this.isTab = false
						this.nullTrue = true
						this.PhoneNum = 0
						this.DialedNum =  0
						this.SurplusNum = 0
						this.NoNum = 0
					}
				})
			}
		}
	}
</script>
<style>
	.el-table tr:nth-child(even) {
		background: #F4F6FA;
	}

	.el-input__icon {
		line-height: 35px !important;
	}
</style>
