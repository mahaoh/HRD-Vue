<template>
	<div>
		<p>{{msg}}</p>
	</div>
</template>
<script>
	export default{
		name:'login',
		data(){
			return{
				msg:'这是注册页面'
			}
		},
		created(){
		 //   if(this.$route.name=="login"){
		 //   	this.$parent.headsShow=false;
		 //   	this.$parent.footShow=false;
		 // }
       },
	}
</script>