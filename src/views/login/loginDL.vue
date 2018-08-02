<template>
<div class="TopLevel">


    <div class="loginLogin">
        <div class="info">
            <a href="/"><img src="../../../static/images/login/denglu-logo.png" alt="惠人贷logo"  width="215" height="37" ></a>
            <span class="hai">还没有账号？<a>请注册</a></span>
        </div>
    </div>

    <div class="loginMenu"><div class="info-content">

        <div class="info">
            <div class="card">
                <ol>
                    <li class="first show"><a href="javascript:">个人登录</a></li>
                    <li><a href="http://sh.huirendai.com/loginshow">企业登录</a></li>
                </ol>
                <div class="ul">
                    <div class="input_phone"><input type="text" id="login_phone" placeholder="请输入用户名或手机号码" autocomplete="off"></div>
                    <div class="input_password"><input type="password" id="login_password" placeholder="请输入登录密码" autocomplete="off"></div>
                    <div class="code_img">
                        <input type="text" placeholder="请输入数字之和" autocomplete="off">
                        <p>
                            <img class="ImgRefresh" src="/static/images/v3/builtv3/s_codeImg.png">
                            <strong class="refresh">&nbsp;</strong>
                        </p>
                    </div>
                </div>
                <div class="login-sport">
                    <p id="login-radio">
                        <input name="sport" type="radio" class="radioShi">
                        <label id="sport" class="radioShi"><a style="color:#7a7a7a;">记住用户名</a></label>
                    </p>
                    <a href="javascript:">忘记密码</a>
                </div>
                <div class="loginError"></div>
                <button id="loginSubmit" class="loginSubmit">立即登录</button>
                <div class="loginBao"></div>
              
            </div>
        </div>

    </div></div>

    <div class="loginFooter"></div>


</div>
</template>
<script>
	export default{
		name:'loginDL',
		data(){
			return{
				msg:'这是登录页面'
			}
		},
	    created(){
		 //   if(this.$route.name=="loginDL"){
		 //   	this.$parent.headsShow=false;
		 //   	this.$parent.footShow=false;
		 // }
       },
	}
</script>