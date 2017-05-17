<template>

	<div class="CarIndex">
		<div class="call-time" :class="{hide: search}">
			<div style="margin-bottom:-1px;">
				<span class="now" :class="{active: type == 0 }" @click="tabClick">现在叫车</span>
				<span class="latter" :class="{active: type == 1 }" @click="tabClick">30分钟后</span>
			</div>
		</div>
		<div class="container" :class="{search: search}">
			<div class="addrs" :class="{hide: search}">
				<div class="start">
					<label>目的地</label>
					<input type="text" name="start" style="opacity:0.4;" disabled value="北京丽都医疗美容医院"/>
				</div>
				<div class="end">
					<label>出发地</label>
					<input type="text" name="end" @click="search = true" :value="addrObj.Start_Name"/>
				</div>
			</div>
			<div class="search-bar" :class="{hide: !search}">
				<div class="search-icon"><i class="md md-search" style="font-size:18px;">search</i></div>
				<div>
					<input type="text" name="searchName" class="search-input" placeholder="我的位置" v-model="searchStr" v-focus="search"/>
				</div>
			</div>
			<div class="addr-list">
				<div class="addr" v-for="addr in addrs" @click="addrCheck($event,addr)" >
					<div class="icon">
						<i class="md md-place" style="font-size:16px;">place</i>
					</div>
					<div class="addr-info">
						<p>{{addr.Start_Name}}</p>
						<p>{{addr.Start_Address}}</p>
					</div>
				</div>
			</div>
			<div class="call-btn" :class="{hide: search}">
				<button class="callCar call-now" @click="callCar">{{ type == 0 ? "免费" : "预约" }}叫车</button>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		name: "CarIndex",
		mounted () {
			axios.get("/static/data/address.json").then(response => { this.addrs = response.data })
		},
		data () {
			return {
				searchStr: "",
				addrs: [],
				addrObj: {Start_Name: "", Start_Address: "", Flng: "", flng: "", type: 0},
				search: false,
				type: 0
			}
		},
		watch: {
			searchStr: {
				handler (val, oldVal) {
					axios.get("/static/data/search.json", { input: val }).then(response => {
						this.addrs = response.data.filter(item => {
							return (item.Start_Name.indexOf(val) !== -1)
						})
					})
				}
			}
		},
		methods: {
			tabClick (event) {
				this.type = (event.target.classList[0] === "now" ? 0 : 1)
			},
			addrCheck (event, selectedAddr) {
				this.addrObj = selectedAddr
				this.searchStr = ""
				this.search = false
			},
			callCar () {
				axios.post("/Car/AddOrder").then(response => {
					if (response.data.ResultType === 0) {
						alert("打车成功！")
					} else {
						alert("打车失败！")
					}
				})
			}
		},
		directives: {
			focus: {
				update: (el, {value}) => {
					console.log(el)
					if (value) {
						el.focus()
					}
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import "https://modao.cc/webpack/font-icons-46e2fcfcd08e004748897c1b24829140.css";

	.call-time {
		padding: 0 10px;
		border-bottom: 1px solid #d9d9d9;
		width: 100%;
		overflow: hidden;
	}

	.now, .latter {
		position: relative;
		float: left;
		display: inline-block;
		width: 50%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-size: 16px;
		color: #101010;
	}

	.now.active:after, .latter.active:after {
		content: '';
		position: absolute;
		left: 50%;
		bottom: 0;
		margin-left: -50px;
		border-radius: 1px;
		display: inline-block;
		width: 100px;
		height: 6px;
		background: #ff6091;
	}

	.container {
		padding: 0.9rem;
		overflow: auto;
		width: 100%;
		height: calc(100vh - 40px);
	}

	.container.search {
		height: 100vh;
	}

	.start, .end {
		margin-bottom: 10px;
		padding: 11px 0;
		border: 1px solid #d9d9d9;
		width: 25rem;
		height: 44px;
		line-height: 22px;
		font-size: 14px;
		color: #101010;
	}

	.start label, .end label {
		position: relative;
		padding-left: 2rem;
		display: inline-block;
		border-right: 1px solid #d9d9d9;
		width: 6rem;
		height: 22px;
	}

	.start label:after, .end label:after {
		content: '';
		position: absolute;
		top: 8px;
		left: 12px;
		border-radius: 50%;
		width: 6px;
		height: 6px;
		background: #ff7043;
	}

	.start input, .end input {
		padding-left: 10px;
		border: none;
		background: transparent;
		width: 17.5rem;
		height: 17px;
		font-size: 14px;
	}

	.addr-list {
		margin: 0 0.2rem;
		border: 1px solid #d9d9d9;
		width: 24.6rem;
		height: calc(100vh - 196px - 7rem);
		overflow: auto;
	}

	.container.search .addr-list {
		border: none;
		height: calc(100vh - 64px);
	}

	.addr-list .icon {
		opacity: 0.4;
	}

	.addr {
		width: 24.6rem;
		height: 64px;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-user-select: none;
	}

	.icon {
		float: left;
		width: 2.5rem;
		height: 64px;
		line-height: 64px;
		text-align: center;
	}

	.addr-info {
		float: left;
		padding-top: 12px;
		border-bottom: 1px solid #d9d9d9;
		width: 22rem;
		height: 64px;
	}

	.addr-info p:first-child {
		font-size: 14px;
		color: #101010;
	}

	.addr-info p:last-child {
		font-size: 12px;
		color: #101010;
		opacity: 0.6;
	}

	.callCar {
		margin: 2.6rem 1.8rem;
		border: none;
		border-radius: 30px;
		width: 21.6rem;
		height: 48px;
		color: #FFF;
		font-size: 14px;
		background-color: #FF6091;
		cursor: pointer;
	}

	.search-bar {
		margin: 0 0.2rem 8px;
		padding: 0.3rem;
		border: 1px solid #d9d9d9;;
		width: 24.6rem;
		height: 30px;
	}

	.search-icon {
		float: left;
		padding: 2px 0 0 2px;
		border-right: 1px solid #d9d9d9;
		width: 1.6rem;
		height: 20px;
	}

	.search-icon + div {
		float: left;
		padding-left: 0.4rem;
		width: 22.2rem;
	}

	.search-icon + div input {
		padding-left: 10px;
		border: none;
	}
</style>
