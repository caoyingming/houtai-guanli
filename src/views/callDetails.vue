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
			<h1>失联修复管理平台</h1>
			<ul>
				<li><span><img src="../assets/img/icon_nav_sldhgl@2x.png" alt=""></span>失联电话管理</li>
			</ul>
		</div>
		<div class="o_right">
			<head-account></head-account>
			<div class="bottom">
				<div class='div_box'>
					<p style='width:35px;height:35px;min-width:35px'><button style="background: #828DA3;"><img style="vertical-align: middle;"
							 src="../assets/img/icon_back.png" alt=""></button></p>
					<p class="p_details">电话详情</p>
					<el-select class='block' v-model="value" placeholder="第一批失联电话">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<p style='width:35px;height:35px;min-width:35px'><button>GO</button></p>
					<h2 style="width: 100%;font-size: 14px;color: #6C7F85;text-align: right;line-height: 35px;">失联修复主号码：011—5653531</h2>
				</div>
				<div class="content">
					<div class="mod_box">
						<div class="box1">
							<h3>电话总数量</h3>
							<h1>5630 <span>个</span></h1>
						</div>
						<div class="box2">
							<h3>已拨打修复电话</h3>
							<h1>560 <span>个</span></h1>
						</div>
						<div class="box3">
							<h3>剩余可联系号码</h3>
							<h1>530 <span>个</span></h1>
						</div>
						<div class="box4">
							<h3>查询结果</h3>
							<h1>8<span>个</span></h1>
						</div>
					</div>
					<div class="table_box">
						<div class="nullImg" v-show="nullTrue">
							<img src="../assets/img/pic_empty.png" alt="">
							<p>暂无失联电话名单，</br>请新建失联修复电话单</p>
						</div>
						<el-table :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)" style="width: 100%">
							<el-table-column align='center' width='100' type="index" label="序列号">
							</el-table-column>
							<el-table-column align='center' width='100' prop="name" label="姓名">
							</el-table-column>
							<el-table-column align='center' prop="idCard" label="身份证号">
							</el-table-column>
							<el-table-column align='center' prop="phone" label="修复电话">
							</el-table-column>
							<el-table-column align='center' prop="yuoxiao" label="有效期">
							</el-table-column>
							<el-table-column align='center' width='250' prop="describe" label="描述">
							</el-table-column>
						</el-table>
						<!-- <table>
							<thead>
								<tr>
									<th width="100">序号</th>
									<th>姓名</th>
									<th>身份证号</th>
									<th>修复电话</th>
									<th>有效期</th>
									<th>描述</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>张三</td>
									<td>13082619890********</td>
									<td>
										<span>15622223333</span>
										<span style="color: rgb(219,73,79);">修复失败</span>
									</td>
									<td>2019/10/16-2019/10/20</td>
									<td>可拨打3次，每次拨打时长30分钟</td>
								</tr>
								
							</tbody>
						</table> -->

					</div>
					<el-pagination @size-change='handleSizeChange' @current-change='handleCurrentChange' :page-size='pagesize' background layout="prev, pager, next" :total="tableData.length">
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
				pagesize:8,
				currpage:1,
				iSfalse: false,
				nullTrue: false,
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
				tableData: [{
					name: '王小虎',
					idCard: '1306821989********',
					phone: '15653223333',
					yuoxiao: '2019/10/16-2019/10/20',
					describe: '可拨打3次，每次拨打时长30分钟'

				}, {
					name: '王小虎',
					idCard: '1306821989********',
					phone: '15653223333',
					yuoxiao: '2019/10/16-2019/10/20',
					describe: '可拨打3次，每次拨打时长30分钟'

				}, {
					name: '王小虎',
					idCard: '1306821989********',
					phone: '15653223333',
					yuoxiao: '2019/10/16-2019/10/20',
					describe: '可拨打3次，每次拨打时长30分钟'

				}, {
					name: '王小虎',
					idCard: '1306821989********',
					phone: '15653223333',
					yuoxiao: '2019/10/16-2019/10/20',
					describe: '可拨打3次，每次拨打时长30分钟'

				}, {
					name: '王小虎',
					idCard: '1306821989********',
					phone: '15653223333',
					yuoxiao: '2019/10/16-2019/10/20',
					describe: '可拨打3次，每次拨打时长30分钟'

				}, {
					name: '王小虎',
					idCard: '1306821989********',
					phone: '15653223333',
					yuoxiao: '2019/10/16-2019/10/20',
					describe: '可拨打3次，每次拨打时长30分钟'

				}, {
					name: '王小虎',
					idCard: '1306821989********',
					phone: '15653223333',
					yuoxiao: '2019/10/16-2019/10/20',
					describe: '可拨打3次，每次拨打时长30分钟'

				}, {
					name: '王小虎',
					idCard: '1306821989********',
					phone: '15653223333',
					yuoxiao: '2019/10/16-2019/10/20',
					describe: '可拨打3次，每次拨打时长30分钟'

				}, {
					name: '王小虎5',
					idCard: '1306821989********',
					phone: '15653223333',
					yuoxiao: '2019/10/16-2019/10/20',
					describe: '可拨打3次，每次拨打时长30分钟'

				}, {
					name: '王小虎4',
					idCard: '1306821989********',
					phone: '15653223333',
					yuoxiao: '2019/10/16-2019/10/20',
					describe: '可拨打3次，每次拨打时长30分钟'

				}, {
					name: '王小虎3',
					idCard: '1306821989********',
					phone: '15653223333',
					yuoxiao: '2019/10/16-2019/10/20',
					describe: '可拨打3次，每次拨打时长30分钟'

				}, {
					name: '王小虎2',
					idCard: '1306821989********',
					phone: '15653223333',
					yuoxiao: '2019/10/16-2019/10/20',
					describe: '可拨打3次，每次拨打时长30分钟'

				}, {
					name: '王小虎1',
					idCard: '1306821989********',
					phone: '15653223333',
					yuoxiao: '2019/10/16-2019/10/20',
					describe: '可拨打3次，每次拨打时长30分钟'

				}]
			}
		},
		methods:{
			handleSizeChange(val){
				// console.log('每页+"val"+条')
				this.pagesize = val
			},
			handleCurrentChange(val){
				// console.log('当前页'+ val)
				this.currpage = val
			}
		}
	}
</script>
<style>
	.el-table tr:nth-child(even){
		background: #F4F6FA;;
	}
</style>
