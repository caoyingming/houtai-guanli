<style scoped="scoped">
	.orderList{
		position: fixed;
		height: 100%;
		width: 100%;
		display: flex;
		min-width: 1366px;
	}
	.o_left{
		width: 200px;
		min-width: 200px;
		background: #1D2B35;
		height: 100%;
	}
	.o_right{
		width: 100%;
		height: 100%;
	}
	.o_left h1{
		color: #3BC1C4;
		font-size: 18px;
		text-align: center;
		padding-top: 50px;
		padding-bottom: 37px;
	}
	.o_left ul li{
		width: 100%;
		height: 45px;
		background: #4DBD73;
		line-height: 45px;
		text-align: center;
		color: #fff;
	}
	.o_left ul li span{
		display: inline-block;
		width: 18px;
		height: 18px;
		vertical-align: sub;
		margin-right: 10px;
	}
	.o_left ul li span img{
		width: 100%;
		height: 100%;
		display: block;
	}
	.o_right .top{
		height: 40px;
		min-height: 40px;
		background: #fff;
		padding-right: 23px;
		padding-top: 5px;
		box-sizing: border-box;
	}
	.o_right .top .set_box{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: relative;
	}
	
	.o_right .top .set_box .imgUrl{
		width: 30px;
		height: 30px;
		border-radius: 30px;
		background: #ccc;
	}
	.o_right .top .set_box .imgUrl img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.o_right .top .set_box .icon_set{
		width: 20px;
		height: 20px;
	}
	.o_right .top .set_box .icon_set img{
		width: 100%;
		height: 100%;
	}
	.o_right .top .set_box .exit{
		width: 150px;
		height: 80px;
		background: #fff;
		box-shadow: 0 4px 10px 0 rgba(0,0,0,0.10), inset 0 0 0 0 rgba(0,0,0,0.10);
		border-radius: 0px 0px 5px 5px;
		position: absolute;
		right: 0;
		top: 35px;
	}
	.o_right .top .set_box .exit p{
		font-size: 14px;
		color: #828DA3;
		padding: 20px 0 0 18px;
	}
	.o_right .top .set_box .exit span{
		display: inline-block;
		width: 16px;
		height: 16px;
		vertical-align: sub;
		margin-right: 5px;
	}
	.o_right .top .set_box .exit span img{
		width: 100%;
		height: 100%;
	}
	.o_right .bottom{
		height: 100%;
		width: 100%;
		background: rgb(232,237,238);
		padding: 21px 30px;
		box-sizing: border-box;
	}
	.o_right .bottom .div_box{
		display: flex;
	}
	.o_right .bottom .div_box p{
		width: 150px;
		min-width: 150px;
		height: 35px;
		margin-right: 10px;
	}
	.o_right .bottom .div_box p:first-child{
		width: 150px;
		height: 47px;
		background: #fff;
		font-size: 15px;
		color: #6C7F85;
		text-align: center;
		line-height: 35px;
	}
	.block{
		width: 150px;
		min-width: 150px;
		height: 35px;
		box-sizing: border-box;
		margin-right: 10px;
	}
	.el-date-editor.el-input, .el-date-editor.el-input__inner{
		width: 150px !important;
		height: 35px;
	}
	
	.el-input__icon{
		line-height: 35px !important;
	}
	.o_right .bottom .div_box p button{
		width: 35px;
		height: 35px;
		line-height: 35px;
		background: #4DBD73;
		border-radius: 3px;
		border: 0;
		font-size: 15px;
		color: #FFFFFF;
	}
	.daochu{
		line-height: 35px;
		text-align: center;
		color: #fff;
		background: #3BC1C4;
		border-radius: 3px;
	}
	.o_right .bottom .content{
		width: 100%;
		height: 631px;
		background: #fff;
		padding: 33px 50px;
		box-sizing: border-box;
	}
	.content .mod_box{
		display: flex;
		justify-content: space-between;
	}
	.content .mod_box div{
		width: 240px;
		height: 112px;
		border-radius: 3px;
	}
	.content .mod_box div h3{
		font-size: 15px;
		color: #FFFFFF;
		padding: 20px 20px 11px;
	}
	.content .mod_box div h1{
		font-size: 30px;
		color: #FFFFFF;
		font-weight: bold;
		padding-left: 20px;
	}
	.content .mod_box div h1 span{
		font-size: 15px;
		color: #FFFFFF;
		font-weight: normal;
	}
	.content .mod_box .box1{
		box-shadow: 0 4px 10px 0 #C5B0FF;
		background: url(../assets/img/pic_total_1.png) no-repeat;
	}
	.content .mod_box .box2{
		box-shadow: 0 4px 10px 0 #8ABDEA;
		background: url(../assets/img/pic_done_1.png) no-repeat;
	}
	.content .mod_box .box3{
		box-shadow: 0 4px 10px 0 #E7B785;
		background: url(../assets/img/pic_surplus_1.png) no-repeat;

	}
	.content .mod_box .box4{
		box-shadow: 0 4px 10px 0 #91E1DC;
		background: url(../assets/img/pic_add_1.png) no-repeat;
		
	}
	.content .mod_box .box4 p{
		line-height: 112px;
		color: #fff;
		font-size: 15px;
		text-decoration: underline;
		padding-left: 20px;
	}
	.table_box {
		height: 405px;
		background: #F4F6FA;
		border: 1px solid #D3DAE3;
		margin-top: 14px;
	}
	.table_box table{
		width: 100%	;
		background: #fff;
	}
	.table_box table thead tr{
		height: 44px;
		background: #E7E9EF;
	}
	.table_box table thead tr th{
		text-align: center;
		font-size: 14px;
		color: #444444;
		font-weight: bold;
	}
	.table_box table tbody tr{
		height: 44px;
		text-align: center;
		font-size: 13px;
		color: #6C7F85;
	}
	.Enter{
		display: inline-block;
		width: 80px;
		height: 26px;
		background: #3BC1C4;
		border-radius: 3px;
		color: #fff;
		line-height: 26px;
	}
	.table_box table tbody tr:nth-child(even){
		background: #F4F6FA;
	}
	.el-pagination{
		text-align: center;
		margin-top: 15px;
	}
	.el-pagination.is-background .el-pager li:not(.disabled).active{
		background-color: #4DBD73!important;
	}
	.nullImg{
		text-align: center;
		padding-top: 110px;
	}
	.nullImg p{
		font-size: 14px;
		color: #828DA3;
		text-align: center;
		line-height: 25px;
	}
</style>
<style>
	.el-table th, .el-table tr{
		height: 45px !important;
	}
	.el-table td, .el-table th.is-leaf{
		padding: 9px 0 !important;
	}
	.el-input__inner{
		height: 35px !important;
		line-height: 35px !important;
	}
	.el-button--mini, .el-button--mini.is-round{
		width: 80px;
		height: 26px;
		background: #3BC1C4 !important;
		color: #fff !important;
		border-radius: 3px;
	}
	.el-button{
		line-height: 0 !important;
	}
</style>
<template>
	<div class="orderList">
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
					<p>月话单统计</p>
					<div class="block" style="display: none;">
						<el-date-picker v-model="value5" align="right" type="year" placeholder="选择年">
						</el-date-picker>
					</div>
					<div class="block">
						<el-date-picker value-format="yyyy-MM" v-model="value4" type="month" placeholder="选择月">
						</el-date-picker>
					</div>
					<p style='width:35px;height:35px;min-width:35px'><button @click="listAjax()">GO</button></p>
					<p class="daochu">导出报表</p>
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
							<p @click="$router.push({path:'/newPhone'})">新建失联修复电话单</p>
						</div>
					</div>
					<div class="table_box">
						<div class="nullImg" v-show="nullTrue">
							<img src="../assets/img/pic_empty.png" alt="">
							<p>暂无失联电话名单，</br>请新建失联修复电话单</p>
						</div>
						<el-table v-show='isTab' :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)" height="100%" align='center'
						 style="width: 100%;">
							<el-table-column align='center' width='100' prop="TelephoneCollectiveName" label="电话单">
							</el-table-column>
							<el-table-column align='center' prop="ActivationTime" label="激活时间">
							</el-table-column>
							<el-table-column align='center' prop="RepairNum" label="修复电话数">
							</el-table-column>
							<el-table-column align='center' prop="DialedNum" label="已拨打">
							</el-table-column>
							<el-table-column align='center' prop="ResidualNum" label="剩余次数">
							</el-table-column>
							<el-table-column align='center' prop="ValidityTime" label="有效期">
							</el-table-column>
							<el-table-column align='center' label="立即联系">
								<template slot-scope="scope">
									<el-button v-if='scope.row.status == 1' size="mini" @click="editor(scope.row)">进入</el-button>
									<span v-else style="color:#6C7F85;">审核中</span>
								</template>
							</el-table-column>
						</el-table>

					</div>
					<el-pagination v-show="isTab" @size-change='handleSizeChange' @current-change='handleCurrentChange' :page-size='pagesize'
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
		name: 'orderList',
		components: {
			headAccount
		},
		data() {
			return {
				pagesize: 8,
				currpage: 1,
				value4: '',
				value5: '',
				iSfalse: false,
				nullTrue: false,
				url: this.URL.url,
				tableData: [],
				PhoneNum: '',
				DialedNum: '',
				SurplusNum: '',
				isTab:false
			}
		},
		mounted() {
			this.listAjax()
		},
		updated(){
			
		},
		methods: {
			
			editor(row) {
				this.$router.push({
					path:'/callDetails',
					query:{
						id:row.id
					}
				})
			},
			handleSizeChange(val) {
				// console.log('每页+"val"+条')
				this.pagesize = val
			},
			handleCurrentChange(val) {
				// console.log('当前页'+ val)
				this.currpage = val
			},
			listAjax() {
				this.$axios({
					method: 'post',
					url: this.url + '/api/Missingrepair/MonthCollect',
					data: {
						YearMonth: this.value4
					},
					
				}).then((res) => {
					if (res.data.code == 200) {
						this.tableData = res.data.data
						
						this.nullTrue = false
						this.isTab = true
						this.PhoneNum = res.data.PhoneNum
						this.DialedNum = res.data.DialedNum
						this.SurplusNum = res.data.SurplusNum
						this.value4 = res.data.YearMonth
					} else if (res.data.code == 40011) {
						this.$message.error('非法操作');
					} else if (res.data.code == 202) {
						this.nullTrue = true
						this.isTab = false

					}
				})
			},
		}
	}
</script>
