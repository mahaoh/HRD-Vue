<template>
	<div id="index-homepage">
      <div class="banner-reg">
        <div class="banner-info-new">
            <div class="banner-card">
                <ol>
                    <li class="first show"><a href="javascript:">注册账户</a></li>
                    <li><a href="javascript:"><em>已有账号？</em>立即登录</a></li>
                </ol>
                <span class="remo" @click="loginHomeshow"><em></em></span>
                <ul class="ul">
                    <li class="show">
                        <div class="input_phone"><input type="text" id="userPhone" placeholder="请输入11位手机号码" autocomplete="off" v-model="phoneMsg"></div>
                        <div class="input_password"><input type="password" id="userPassWord" placeholder="密码为8-16位数字、字母、符号组成" autocomplete="off"></div>
                        <div class="input_new_password"><input type="password" id="userNewPassWord" placeholder="请再次输入登录密码" autocomplete="off"></div>
                        <div class="code_img">
                            <input id="bannerLogin-user-codeImg" type="text" placeholder="请输入数字之和" autocomplete="off">
                            <p>
                                <img class="ImgRefresh" src="../../../static/images/home/s_codeImg.png" width="48" height="11">
                                <strong class="refresh">&nbsp;</strong>
                            </p>
                        </div>
                        <div class="code_phone">
                            <input id="code_phone" class="" type="text" placeholder="输入短信验证码" autocomplete="off">
                            <button id="refresh" class="refresh" @click="getCode" :disabled="isdisabled">{{getCodes}}</button>
                        </div>
                        <div class="yuyin"><p>收不到短信？请使用<a href="javascript:;">语音验证码</a></p>
                        </div>
                        <div id="user-radio" class="login-radio">
                            <input name="sport" type="radio" class="radio" checked="checked">
                            <label id="sport" class="radio checked">我已经阅读并同意<a href="javascript:">《惠人贷网站使用协议》</a></label>
                        </div>
                        <div class="loginError">{{loginError}}</div>
                        <button id="userSubmit" class="userSubmit" @click="login">立即注册享新手四重好礼</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>
<script>
	export default{
		name:'loginHomeAlert',
		data(){
			return {
			   loginError:'',
			   phoneMsg:'',
			   getCodes:"获取验证码",
			   isdisabled:false
		   }
		},
		methods:{
			//关闭弹窗按钮
			loginHomeshow:function(){
				this.$parent.loginHomeshow = false;
				this.loginError="";
				this.phoneMsg="";
			},
			//注册按钮
			login:function(){
				// if(this.msg==''){
				// 	this.loginError="手机号不能为空";
				// }
			},
			//获取验证码
			getCode:function(){
				if(this.phoneMsg==""){
					this.loginError='手机号不能为空';
					return;
				}else if(!/^(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57]|16[6]|19[9])\d{8}$|^170[0125789]\d{7}$/.test(this.phoneMsg)){
					this.loginError="手机号输入不正确！"
					return;
				};
				this.codeTime(10);
			},
			//验证码倒计时
			codeTime:function(time){
				this.loginError="";
				var id=setInterval(()=>{
					time--;
					this.getCodes=time+'S后重新获取';
					this.isdisabled=true;
					if(time==0){
						this.getCodes="获取验证码";
						clearInterval(id);
						this.isdisabled=false;
					}
				},1000)
				
			}
		},
		mounted(){
		},
		computed:{
		}
	}
</script>
<style lang="less" scoped>
#index-homepage{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .banner-reg{
    position: static;
    display: block;
    overflow: hidden;
    .banner-info-new{
      position: static;
      height: 0;
      top: 0;
	  left: 50%;
	  margin-left: -600px;
      .banner-card{
        position: absolute;
        width: 480px;
        height: 600px;
        background: #fff;
        left: 50%;
        top: 50%;
        margin-top: -300px;
        margin-left: -240px;
        z-index: 999;
        float: right;
        ol{
          height: 30px;
          width: 382px;
          margin: 0 auto;
          display: flex;
          margin-top: 46px;
          margin-bottom: 22px;
          justify-content: space-between;
          li{
            height: 30px;
            line-height: 30px;
            margin-top: 0;
            margin-bottom: 0;
            border: none;
            width: 50%;
		    float: left;
		    text-align: center;
		    color: #fff;
            font-size: 16px;
          }
          li:first-child{
            a{
              text-align: left;
              color: #333333;
              font-size: 20px;
              font-weight: 500;
              display: block;
            }
          }
          li:last-child{
            position: relative;
            a{
              text-align: right;
              font-size: 14px;
              color: #f56b0f;
              display: block;
              em{
                color: #999999;
              }
            }

          }
        }
        span.remo{
          position: absolute;
          display: inline-block;
          width:40px;
          height: 40px;
          right: 0;
          top: 0;
          cursor: pointer;
          //background: url("../../../static/images/home/remo.png")no-repeat center;
          em{
            width: 16px;
            height: 16px;
            display: block;
            background: url("../../../static/images/home/remo.png")no-repeat center;
            margin: 0 auto;
            margin-top: 12px;
            background-position-x:0px;
          }
        }
        span.remo:hover{
          em{
            background-position-x:-16px;
          }
        }
        .ul{
          width: 382px;
          margin: 0 auto;
          li{
            width: 100%;
            display: block;
            .input_phone,.input_password,.input_new_password,.code_phone,.code_img{
              margin-bottom: 20px;
              width: 100%;
              height: 44px;
              border: 1px solid #dddddd;
              box-sizing: border-box;
              input{
                width: 94%;
                height: 100%;
                font-size: 14px;
                color: #999999;
                border: none;
                padding-left: 18px;
                outline: none;
              }
            }
            .code_phone{
              display: flex;
              input{
                width: 240px;
              }
              button{
                width:140px;
                height: 100%;
                color: #2b7de1;
                font-size: 14px;
                line-height: 44px;
                cursor:pointer;
                background: none;
                border: none;
                outline: none;
              }
            }
            .code_img{
              display: flex;
              input{
                width: 240px;
              }
              p{
                width:140px;
                height: 100%;
                border: none;
                border-left: 1px solid #dddddd;
                position: relative;
                img{
                  left: 28px;
                  width: 67px;
				  height: 24px;
				  position: absolute;
                  top: 7px;
                }
                strong{
                  right: 20px;
                  top: 12px;
                      width: 14px;
			    height: 14px;
			    position: absolute;
			    cursor: pointer;
			    background: url('../../../static/images/home/icon_refresh.png') center no-repeat;
			    background-size: 14px 14px;
                }
              }
            }
            .yuyin{
              width: 100%;
              margin-bottom: 20px;
              float: left;
              p{
                font-size: 14px;
                float: left;
                color: #999999;
                a{
                  color: #2b7de1;
                }
              }
            }
            .login-radio{
              width: 100%;
              margin: 0 auto 5px auto;
			    font-size: 12px;
			    color: #8e8e8e;
              label{
                font-size: 14px;
                color: #999999;
                a{
                  color: #2b7de1;
                }
              }
              label.radio{
                background: url("../../../static/images/home/icon_input_label_no.png")no-repeat left center;
                background-size: 14px 14px;
                padding-left: 17px;
			    height: 17px;
			    line-height: 17px;
			    display: inline-block;
			    cursor: pointer;display: flex;
              }
              label.radio.checked{
                background: url("../../../static/images/home/icon_input_label_off.png")no-repeat left center;
                background-size: 14px 14px;
              }
            }
            .loginError{
              font-size: 14px;
              width: 100%;
              height: 17px;
			  line-height: 20px;
			  margin: 3px auto 3px auto;
			  color: red;
			  text-align: left;
            }
            #userSubmit{
              width: 100%;
              height: 44px;
              background: #f56b0f;
              color: #fff;
              font-size: 16px;
              margin-top: 10px;
              line-height: 36px;
              display: block;
              border:none;
              outline: none;
            }
            #userSubmit:hover{
              background: #e96309;
            }
          }
        }
      }
    }
  }
}
input.radio[type="radio"], input.radioShi[type="radio"] {
    display: none;
}
</style>