<template>
	<div class="content">
		<!--标题-->
		<div class="zcheadline text-c"><h2>同意函</h2></div>
		<div class="zctextarea clearfix">
			<div class="test_box" contenteditable="false">
				<span style="margin-top:16px;">尊贵的客人,您现在正在预定丽都为您提供的专车接驾服务：</span>
				<p class="m-t-20">1、此项服务是丽都医院和滴滴公司合作开发的线上系统,能够实现自助操作,仅为丽都会员专属使用,包含滴滴系统中的专车和快车,司机随机就近接单。</p>
				<p class="m-t-20">
					2、来院就诊,丽都新朋友们每月可以在北京市区内免费乘专车1次,银卡会员3次，金卡及金卡以上会员6次,
					均为单程180元内,单程30公里以内每月500元封顶。
				</p>

				<p class="m-t-20">3、如您在使用过程中发现滴滴司机有如下违规行为，请即刻联络丽都工作人员保障您的权益：
				<p class="text-i">(1)恶意绕路.延误您的行程,未按实际路程行驶的;</p>
				<p class="text-i">(2)要求您支付打车费用,服务态度恶劣的;</p>
				<p class="text-i">(3)接单后又取消订单或未送您到目的地的;</p>

				<p class="m-t-20">4、同时，您在使用过程中系统也自动记录信息，如出现以下行为则按照失信记录在系统中：
				<p class="text-i">(1)目的地与实际订单记录不符;</p>
				<p class="text-i">(2)中途行车里程与预定信息不匹配的;</p>
				<p class="m-t-20">5、如您在使用中有失信记录出现,系统将自动把您的信息及地址列入黑名单,您将不能继续使用滴滴用车服务</p>
			</div>
			<div class="_divbut_ text-c" style="">
				<router-link class="_buthref" to="/CarIndex">同意并打车</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CarConfim"
	}
</script>

<style scoped>
	.zcheadline {margin-top: 14px;}
	.zcheadline h2{font-size:16px;color:#101010;}
	.zctextarea{margin:0 20px;}
	.test_box{padding-top:16px;font-size: 13px;color:#101010;line-height:18px;}
	.text_box p{height:18px;}
	.text-i{margin:5px 0 0 20px;}
	.m-t-20{margin-top:20px;}
	._divbut_ {bottom: 20px;}
	._buthref{display:inline-block;color:#FFF;font-size: 13px;background-color: #FF6091;margin-top:20px;padding-left: 30px;padding-right: 30px;padding-bottom: 10px;padding-top: 10px;cursor: pointer;border-radius: 30px;border: 1px solid rgba(255, 0, 0, 0.57);}
</style>
