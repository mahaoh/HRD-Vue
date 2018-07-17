<template>
<div class="header-box" id="components-demo">
	<div class="top">
    	<div class="wrap">
        	<h6><a href="javascript:;">客服热线&nbsp;:<em>400-022-0898</em></a></h6>
        	<div class="panel">
	            <p><router-link to="/loginDL/" tag="a"href="javascript:;" data-alert="login" class="login">您好,请登录</router-link><router-link to="/login/" tag="a" href="javascript:;" class="reg">免费注册</router-link></p>
	            <p><a href="javascript:" class="help">帮助中心</a></p>
	            <p><a href="javascript:" class="help">信息披露</a></p>
	            <p class="header-APP"><a href="javascript:" class="help">下载APP</a><em></em><span></span></p>
	            <p class="header-weat"><a href="javascript:" class="help">关注微信</a><em></em><span></span></p>
        	</div>
    	</div>
    </div>
	<header>
	    <div class="wrap">
	        <div class="logo">
	            <a href="javascript:;" title="logo">
	                <img src="../../assets/images/header/header-logo.png" alt="惠人贷logo"  width="173" height="37" >
	            </a>
	        </div>
	        <ul class="user">
	            <li><a href="javascript:" class="show as">首页</a></li>
	            <li><a href="javascript:"class="as">理财投资</a></li>
	            <li><a href="javascript:"class="as">债权转让</a></li>
	            <li><a href="javascript:"class="as">会员中心</a></li>
	            <li><em></em><a href="javascript:"class="as">我的账户</a></li>
	        </ul>
	    </div>
	</header>
</div>
</template>
<script>
	export default{
		name:'heads',
		data(){
			return {
				date:new Date()
			}
		},
		methods:{
		
		},

		created:function(){
			// console.log(this,'实例创建完成之后调用')
		},
		mounted:function(){
			var _this = this;
		},
		beforeDestroy:function(){
			// console.log('组件销毁之前')
		}
	}
	
</script>
<style scoped lang="less"> 
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, img, abbr, acronym, b, address, big, cite, code, del, dfn, em, font, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, hgroup, menu, nav, summary, time, mark, audio, video, header, footer {
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: normal;
  font-style: normal;
  font-family:"PingFangSC-Regular","Microsoft YaHei", "微软雅黑";
}

a {
  text-decoration: none;
}

ul, li {
  list-style: none;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  height: 100%;
}
header .wrap .user li a.as:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: -20px;
  left: 0;
  background-color: rgba(225,225,225,0.5);
  visibility: hidden;
  -webkit-transform: scaleX(0);
  -moz-transform: scaleX(0);
  -ms-transform: scaleX(0);
  -o-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -ms-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -ms-border-radius: 2px;
  border-radius: 2px;
  box-sizing: border-box;
}
header .wrap .user li:hover a.as:before{
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  background-color: #f56b0f;
}
.top{
  width: 100%;
  height: 30px;
  position: relative;
  z-index: 999;
  background: #111111;
  .wrap{
    width: 1200px;
    margin: 0 auto;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .panel{
      height: 30px;
      display: flex;

      p{
        width: 88px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        a{
          color: #cccccc;
          font-size: 12px;
        }
        em{
          display: inline-block;
          width:7px ;
          height: 4px;
          background: url("../../assets/images/header/header.png")no-repeat;

          position: absolute;
          top: 13px;
          margin-left: 6px;
        }
      }
      P:first-child{
        width: 176px;
        a:nth-child(2){
          color: #f56b0f;
          width: 88px;
          text-align: center;
          display: inline-block;

        }
        a:nth-child(1){
          width: 88px;
          text-align: center;
          display: inline-block;
          color: #cccccc;
        }
        a.login:hover{
          color: #f56b0f;
        }

      }


      .header-weat{
        a.help{
          color: #cccccc;
        }
      }
      .header-weat:hover{
        a{
          color: #f56b0f;
        }
      }
      .header-APP:hover,.header-weat:hover{
        background: #fff;
        border: 1px solid #dddddd;
        border-top:none;
        border-bottom: none;
        z-index: 999;
         em{
           background: url("../../assets/images/header/header.png")no-repeat;
           background-position-x: -7px;
         }
        span{
          display: block;
        }
      }
      .header-weat{
        position: relative;
        span{
          display: none;
          position: absolute;
          width: 220px;
          height: 141px;
          right: -2px;
          top: 30px;
          background:#fff url("../../assets/images/header/header-weat.png")no-repeat;
        }
      }
      .header-APP{
        position: relative;
        span{
          display: none;
          position: absolute;
          width: 120px;
          height: 141px;
          right: -2px;
          top: 30px;
          z-index: 99;
          background:#fff url("../../assets/images/header/header-APP.png")no-repeat;
        }
      }
      p:hover{
        a{
          color: #f56b0f;
        }
      }
      .user{
        color: #cccccc;
        font-size: 12px;
        line-height: 30px;
        width: 88px;
        text-align: right;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .user:hover{
        color: #f56b0f;
      }
    }
    h6{
      font-size: 12px;
      em{
        display: inline-block;
        margin-left: 8px;
      }
      a{
        color: #cccccc;
        cursor:default;
      }
    }
  }
}
header{
  height: 66px;
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
  position: relative;
  z-index: 998;
  border-bottom: 1px solid #eeeeee;
  .wrap{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .logo{
      height: 37px;
    }
  }
  .user{
    display: flex;
    li{
      width: 122px;
      text-align: center;
      line-height: 37px;
      a{
        font-size: 16px;
        position: relative;
        color: #333333;
      }
      em{
        display: inline-block;
        width: 17px;
        height: 18px;
        background: url("../../assets/images/header/header-wode.png")no-repeat center;
        margin-right: 8px;
      }
    }
    li.show{
      a{
        color: #f56b0f;
      }
    }
    li:last-child{
      position: relative;
      span{
        width: 22px;
        height: 10px;
        font-size: 6px;
        text-align: center;
        border-radius: 5px;
        line-height: 10px;
        color: #fff;
        background: #f56b0f;
        position: absolute;
        top: 0px;
        right:4px;
      }
      label{
        display: inline-block;
        width:9px ;
        height: 6px;
        background: url("../../assets/images/header/header-bottom.png")no-repeat;
      }
    }
    .login-show:hover{
      label{
        background: url("../../assets/images/header/header-top.png")no-repeat;
      }
      .user-list{
        display: block;
      }
    }
    li:hover{
      .as{
        color: #f56b0f;
      }
    }
    .user-list{
      position: absolute;
      display: none;
      right: 0;
      top: 37px;
      width: 196px;
      background: #fff;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
      border-top-left-radius: 3px;
      z-index: 999;
      dd{
        height: 34px;
        line-height: 34px;
        font-size: 14px;
        a{
          padding-left: 25px;
          color: #666666;
         float:left;
        }
        span{
          float: right;
          width: 22px;
          height: 10px;
          font-size: 6px;
          text-align: center;
          color: #fff;
          background: #f56b0f;
          border-radius: 5px;
          line-height: 10px;
          position: static;
          margin-right: 24px;
          margin-top: 10px;
        }
      }
      dd:first-child{
        margin-top: 16px;
      }
      dd:last-child{
        margin-bottom: 20px;
      }
    }
    .user-list dd:hover{
      color: #f56b0f;
      background: #f3f3f3;
      a{
        color: #f56b0f;
      }
    }
  }
}
</style>