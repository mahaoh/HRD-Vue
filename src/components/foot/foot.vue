<template>
	<footer>
     <div class="info">
        <div class="first">
            <dl v-for="foot in footList"  v-bind:class="foot.listClass">
                <dt>{{foot.name}}</dt>
                <dd v-for="list in foot.list"><a href="javascript:">{{list}}</a></dd> 
            </dl>
        </div>
        <div class="child">
            <dl>
                <dd v-for="child in childList">
                    <label>{{child.text}}</label>
                    <img v-bind:src="child.src" width="80" height="80" >
                </dd>
               
            </dl>
        </div>
        <div class="last">

            <p class="home_color">400-022-0898</p>
            <p>
                <strong>9:00-21:00（工作日）</strong>
                <strong class="las">9:00-18:00（周末）</strong>
            </p>
            <p id="kefu">在线客服</p>
        </div>
    </div>


    <div class="icp">
        <div class="bgcolor">
        <div class="footer_hao">
            <p>&copy; 2015-2018 惠人贷商务顾问（北京）有限公司 huirendai.cn  版权所有&nbsp;|&nbsp;市场有风险,出借须谨慎</p>
            <p><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502030446" target="_blank">京公网安备11010502030446号&nbsp;</a>&nbsp;<a href="http://www.miitbeian.gov.cn" target="_blank">ICP证:京ICP证140735号&nbsp;&nbsp;京ICP备14055351号-1</a></p>
        </div>
            <div class="srcoll">
                <a href="https://ss.knet.cn/verifyseal.dll?sn=e18061311010574293tplg000000&pa=111332" tabindex="-1" id="urlknet" target="_blank">
                    <img alt="&#x53EF;&#x4FE1;&#x7F51;&#x7AD9;" name="KNET_seal" border="true" src="../../../static/images/footer/kexin.png" width="26" height="26" style="margin-top: 1px"/><span>可信网站身份验证</span>
                </a>
                <a href="http://www.itrust.org.cn/yz/pjwx.asp?wm=1317924703" target="_blank"><img src="../../../static/images/footer/footer-zxin.png" alt="征信"width="30" height="28"/><span>网信认证ICP征信</span></a>
                <a class="last" href="javascript:"><img src=".../../../static/images/footer/footer-beian.png" alt="备案" width="30" height="28"/><span>互联网站备案信息</span></a>
           </div>
       </div>
    </div>
</footer>
</template>
<script>
	export default{
		name:'foot',
		data(){
			return {
				footList:[
					{   
						listClass:'s1',
						name:'关于我们',
						list:['惠人贷简介','平台原理','联系我们']
					},
					{
						listClass:'s2',
						name:'用户协议',
						list:['政策法规','隐私保护','免责条款']
					},
					{
						listClass:'s3',
						name:'常见问题',
						list:['投资人必读','充值提现必读','新手指南']
					}
				],
				childList:[
					{
						text:'下载惠APP',
						src:'../../../static/images/footer/footer-APP.png'
					},
					{
						text:'关注订阅号',
						src:'../../../static/images/footer/footer-dy.png'
					},
					{
						text:'关注服务号',
						src:'../../../static/images/footer/footer-fuwu.png'
					}
				]
			}
		}
	}
</script>
<style scoped lang="less">
	footer{
  width: 100%;
  background: #e5e5e5;
  height: 450px;
  .info{
    width: 1200px;
    height: 363px;
    border-bottom: 1px solid #dadada;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .first{
      height: 120px;
      display: flex;

      .s1,.s2,.s3{
        dt{
          font-size: 16px;
          color: #333333;
          font-weight: bold;
          padding-bottom: 18px;
        }
        dd{
          padding-bottom: 6px;
          a{
            color: #666666;
            font-size: 14px;
          }
          a:hover{
            color: #f56b0f;
          }
        }
      }
      .s2{
        margin-left: 82px;
        margin-right: 90px;
      }
    }
    .child{
      dl{
        display: flex;
        height: 120px;
        dd{
          label{
            display: block;
            font-size: 16px;
            color: #333333;
            font-weight: bold;
            padding-bottom: 17px;
          }
        }
        dd:nth-child(2){
          margin-left: 66px;
          margin-right: 66px;
        }
      }
    }
    .last{
      height: 120px;
      .home_color{
        text-align: right;
        font-size: 30px;
        color: #333333;
        font-weight:500;
      }
      p:nth-child(2){
        padding-bottom: 20px;
        strong{
          color: #666666;
          font-size: 12px;

        }
      }
      #kefu{
        width: 110px;
        height: 30px;
        line-height: 30px;
        background: #f56b0f url("../../../static/images/footer/footer-kefu.png")no-repeat;
        background-size: 12px 12px;
        border-radius: 3px;
       text-indent:3.5em;
        background-position: 23px;
        font-size: 12px;
        color: #fff;
        float: right;
        cursor:pointer;
      }
    }
  }
  .icp{
    width: 1200px;
    margin: 0 auto;

    .bgcolor{
      display: flex;
      height: 88px;
      justify-content: space-between;
      align-items: center;
      .footer_hao{
        font-size: 12px;
        color: #999999;
        a{
          font-size: 12px;
          color: #999999;
        }
      }
      .srcoll{
        display: flex;
        a{
          display: flex;
          margin-left: 20px;
          span{
            width: 50px;
            color: #999999;
            font-size: 12px;
            display: inline-block;
            line-height: 14px;
            margin-left: 6px;
          }

        }
      }
    }
  }
}

</style>