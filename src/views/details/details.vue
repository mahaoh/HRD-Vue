<template>
<div class="list-page by-hr">
    <div class="calc">
        <div class="calc-left">
            <div class="calc-title">
                <label class="type"></label>
                <h3 class="H3"><a href="javascript:">{{this.$route.query.projectNmae}}</a><strong>先息后本</strong></h3>
                <p>
                    <em class="zhuan-30"></em>
                    <em class="zhuan-90"></em>
                    <em class="geren"></em>
                    <em class="qiye"></em>
                    <em class="xin"></em>
                    <em class="shi"></em>
                </p>
            </div>
            <div class="calc-info">
                <dl>
                    <dd class="first">
                        <label><strong class="invest-first-strong">15</strong>%+<em class="rate-xi">5</em>%</label>
                        <span>年利率</span>
                    </dd>
                    <dd class="child">
                        <label><strong>30</strong>天</label>
                        <span>投资期限</span>
                    </dd>
                    <dd class="moddle">
                        <label><strong>2500</strong>元</label>
                        <span>剩余可投金额</span>
                    </dd>
                    <dd class="chiled">
                        <label><strong>2500000</strong>元</label>
                        <span>借款总额</span>
                    </dd>
                    <dd class="last">
                        <label><strong>8</strong>笔</label>
                        <span>已完成投资</span>
                    </dd>
                </dl>
                <p>
                    <strong><em style="width:40.7%"><b>&nbsp;</b></em></strong>
                    <label>40.7%</label>
                </p>
            </div>

            <div class="calc-rate">
                <p><span>开始时间:</span><em>2018年3月12日</em></p>
                <div class="jiang"><span></span>最后一位投资成功的用户奖励一张5元现金券</div>
            </div>
            <strong class="calc-Time" data-openTime="5" data-remainTime="5"></strong>
        </div>
        <!--登录前-->
        <div class="calc-right" style="display:block">
            <div class="calc-ba">
                账户余额：<strong data-alert="login">登录</strong>后可见
                <a href="javascript:;" class="chong">充值</a>
            </div>
            <div class="calc-button">

                <span>加入金额：</span><input class="input_money text_input_money" type="text" disabled="disabled" placeholder="请输入投资金额" autocomplete="off" />
                <a href="javascript:;" data-alert="modal-sum" data-modal-url="http://127.0.0.1/%E6%8A%95%E8%B5%84%E8%AF%A6%E6%83%85.html" ata-count-key="6395" data-count-limit="3个月" data-count-style="6" data-count_income="1.00" data-count-apr="13" data-count-most="不限" class="jx"></a>
                <ul class="calc-but-txt">
                    <li class="calc-xj">现金券：<span class="but-off">暂无可用现金劵</span><a href="javascript:;" class="xj-hover"></a></li>
                    <li class="calc-jx">加息券：<span class="but-off">暂无可用加息卷</span><a href="javascript:;" class="xj-hover"></a></li>
                    <!--<li>-->
                        <!--<div class="calc-input">-->
                            <!--<input name="sport" type="radio" class="radio" value="0">-->
                            <!--<label class="radio"><span>暂无可用惠米</span></label>-->
                        <!--</div>-->
                    <!--</li>-->
                </ul>
                <span id="out-input" class="but-txt">&nbsp;</span>
                <a class="calc-but" data-pay="off" href="javascript:;" >马上投资</a>
            </div> 
        </div>


        <!--登陆后-->
  <!--       <div class="calc-right" style="display: none">

                <div class="calc-ba">
                    账户余额：<strong>10002</strong><em>元</em>
                    <a href="javascript:;" class="ling">领劵</a>
                    <a href="javascript:;" class="chong">充值</a>
                </div>

                <div class="calc-button">

                    <span>加入金额：</span><input id="input_money" class="input_money" type="text" placeholder="投资金额（50～20000）" autocomplete="off"  /><strong class="totally"></strong>
                    <a href="javascript:;" data-alert="modal-sum" data-modal-url="http://127.0.0.1/%E6%8A%95%E8%B5%84%E8%AF%A6%E6%83%85.html" ata-count-key="6395" data-count-limit="3个月" data-count-style="6" data-count_income="1.00" data-count-apr="13" data-count-most="不限" class="jx"></a>
                    <em>元</em>
                    <ul class="calc-but-txt">
                        <li id="calc-xj" class="calc-xj">现金券：
                            <span><em class="but-off"></em>使用现金劵(<b>无可用</b>）</span><a href="javascript:;" class="xj-hover"></a>
                            <p class="details-xj">现金券是惠人贷用户通过注册会员、参与活动等形式发放给用户，用于增加出借金额，获取更多收益的优惠措施。本现金券仅限在惠人贷平台内符合出借条件时方可使用,不可直接提现</p>
                            <div class="but-off-text">
                                <b class="but-off-txt">暂无可用现金劵</b>
                            </div>
                        </li>
                        <li id="calc-jx" class="calc-jx">加息券：
                            <span><em class="but-off"></em>使用加息劵(<b>无可用</b>）</span><a href="javascript:;" class="jx-hover"></a>
                            <p class="details-jx">加息券是由惠人贷平台发放给用户，用于增加出借人年化收益的增值礼券。加息券在出借时，满足使用条件即可选择使用。出借成功后，加息收益将随每期利息回款按期返还至用户的惠人贷账户。  </p>
                            <div class="but-off-text">
                                <b class="but-off-txt">暂无可用加息劵</b>
                            </div>
                        </li>
                    </ul>
                    <span id="but-txt">&nbsp;</span>
                    <a class="calc-but disabled" id="calc-nth" data-pay="off" href="javascript:;" >马上投资</a>
                </div>
            </div> -->
    </div>
</div>
</template>
<script>
	export default{
		name:'detailss',
		data(){
			return {
				msg:'这是详情页面'
			}
		}
	}
</script>
<style scoped lang="less">
@import url('../../../static/css/derive.css');
	.by-hr{
  padding-top: 30px;
  .calc{
    width: 1200px;
    height: 340px;
    margin: 0 auto 40px auto;
    padding: 0;
    .calc-left{
      width: 780px;
      .calc-title{
        height: 56px;
        position: relative;
        width: 690px;
        margin-left: 40px;
        label.newbie{
          position: absolute;
          top: 0;
          left: 0;
          background: url("../../../static/images/details/details-xs.png")no-repeat center;
          width: 46px;
          height: 56px;
        }
        label.turnover{
          position: absolute;
          top: 0;
          left: 0;
          background: url("../../../static/images/details/details-ph.png")no-repeat center;
          width: 46px;
          height: 56px;
        }
        label.consume{
          position: absolute;
          top: 0;
          left: 0;
          background: url("../../../static/images/details/details-xf.png")no-repeat center;
          width: 46px;
          height: 56px;
        }
        h3{
          padding-left: 64px;
          color: #999999;
          font-size: 16px;
          strong{
            color: #666666;
            font-size: 16px;
            height: 15px;
          }
        }
        p{
          em{
            width: 30px;
            height: 33px;
            margin-left: 0;
          }
          em.geren{
            background:  url("../../../static/images/details/geren.png")no-repeat center;
            background-size: 29px 16px;
          }
          em.qiye{
            background:  url("../../../static/images/details/qiye.png")no-repeat center;
            background-size: 29px 16px;
            margin-top: 0;
          }
          em.xin{
            background:  url("../../../static/images/details/xin.png")no-repeat center;
            background-size: 17px 16px;
            width: 17px;
          }
          em.shi{
            background:  url("../../../static/images/details/shi.png")no-repeat center;
            background-size: 17px 16px;
            width: 17px;
          }
        }
      }
      .calc-info{
        width: 690px;
        margin-left: 40px;
        dl{
          height: 70px;
          margin-top: 50px;
          dd.first{
            label{
              font-size: 16px;
              strong{
                font-size: 36px;
                font-weight: 500;
              }
              em{
                font-weight: 500;
              }
            }
          }
          dd.child{
            margin-top: 16px;
            label{
              font-size: 16px;
              strong{
                font-size: 26px;
                font-weight: 500;
              }
            }
          }
          dd.moddle{
            margin-top: 16px;
            label{
              font-size: 16px;
              strong{
                font-size: 26px;
                font-weight: 500;
              }
            }
          }
          dd.chiled{
            margin-top: 16px;
            label{
              font-size: 16px;
              strong{
                font-size: 26px;
                color: #333333;
                font-weight: 500;
              }
            }
          }
          dd.last{
            margin-top: 16px;
            label{
              font-size: 16px;
              strong{
                font-size: 26px;
                color: #333333;
                font-weight: 500;
              }
            }
          }
          dd{
            span{
              margin-top: 0px;
              font-size: 14px;
              color: #999999;
            }
          }
        }
        p{
          width: 100%;
          height: 18px;
          display: flex;
          align-items: center;
          margin-top: 56px;
          strong{
            width: 630px;
            height: 10px;
            margin-top: 0;
            border-radius: 5px;
            background: #f1f1f1;
            position: relative;
            em{
              display: inline-block;
              height: 10px;
              border-radius: 5px;
              background: #f9ba93;
            }
          }
          label{
            margin-left: 20px;
            font-size: 16px;
            color: #999999;
          }
        }
      }
      .calc-rate{
        width: 690px;
        margin: 0 auto;
        height: 16px;
        margin-top: 28px;
        display: flex;
        justify-content: space-between;
      p{
        height: 16px;
        span{
          font-size: 12px;
          color: #999999;
          line-height: 16px;

        }
        em{
          color: #666666;
          font-size: 12px;
          line-height: 16px;
        }
      }
        .jiang{
          position: static;
          font-size: 14px;
          color: #666666;
          line-height: 16px;
          display: flex;
          background: none;
          span{
            width: 16px;
            height: 16px;
            background:url("../../../static/images/details/details-jiang.png")no-repeat center ;
            display: inline-block;
            margin-right: 10px;
          }
        }

      }
      .calc-Time{
        display: block;
        width: 690px;
        margin: 0 auto;
        color: #999999;
        em{
          color: #666666;
        }
      }
    }
    .calc-right{
      width: 420px;
      margin-top: 40px;
      .calc-ba{
        width: 310px;
        display: flex;
        align-items: center;
        height: 36px;
        font-size: 14px;
        color: #999999;
        font-weight: 500;
        position: relative;
        margin-left: 43px;
        a{
          margin-right: 0;
        }
        a.chong{
          font-size: 14px;
          color: #2b7de1;
          position: absolute;
          right: 0;
        }
        a.ling{
          font-size: 16px;
          color: #f76223;
          position: absolute;
          right: 48px;
        }
        em{
          font-weight: 500;
          color: #333333;
          font-size: 16px;
        }
      }
      .calc-button{
        margin-left: 43px;
        margin-top: 22px;
        width: 310px;
        position: relative;
        #input_money{
            margin: 0;
          font-size: 12px;
          color: #999999;
          float: right;
          height: 32px;
          line-height: 32px;
          border: none;
          width: 230px;
          background: #f0f0f0;
        }
        .input_money{
          margin: 0;
          font-size: 12px;
          color: #999999;
          float: right;
          height: 32px;
          line-height: 32px;
          border: none;
          width: 230px;
          background: #f0f0f0;
        }
        span{
          line-height: 32px;
          color: #999999;
          display: inline-block;
          font-weight: 500;
          font-size: 14px;
        }
        em{
          display: inline-block;
          position: absolute;
          right: 12px;
          top: 6px;
          font-size: 14px;
          color: #999999;
        }
        .calc-but-txt{
          li.calc-xj{
            line-height: 32px;
            color: #999999;
            display: inline-block;
            font-weight: 500;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            margin-top: 16px;
            margin-bottom: 16px;
            position: relative;
            span{
              width: 230px;
              height: 32px;
              // background: #f0f0f0 url('/static/images/v3/builtv3/at_invest_ul.png') 97% center no-repeat;
              font-size: 12px;
              color: #999999;
              text-align: left;
              padding-left: 10px;
            }
            a{
              position: absolute;
              // background:url(/static/images/v4/issue1.png) no-repeat center;
              width: 16px;
              height: 16px;
              display: inline-block;
              top: 10px;
              right: -26px;
            }
            a:hover{
              // background:url(/static/images/v4/issue2.png) no-repeat center;
            }
            .details-xj{
              width: 210px;
              background: #fff;
              position: absolute;
              right: -42px;
              top: 34px;
              border-radius: 5px;
              box-shadow: 0 0 20px #ccc;
              z-index: 9;
              font-size: 12px;
              color: #999999;
              line-height: 18px;
              padding: 15px;
              display: none;
            }
          }
          li{
            .but-off-text{
              position: absolute;
              top: 32px;
              right: 0px;
              width: 230px;
            }
          }
          li.calc-jx{
            line-height: 32px;
            color: #999999;
            display: inline-block;
            font-weight: 500;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            span{
              width: 230px;
              height: 32px;
              // background: #f0f0f0 url(/static/images/v3/builtv3/at_invest_ul.png) 97% center no-repeat;
              font-size: 12px;
              color: #999999;
              text-align: left;
              padding-left: 10px;
            }

              a{
                position: absolute;
                background:url('../../../static/images/details/issue1.png') no-repeat center;
                width: 16px;
                height: 16px;
                display: inline-block;
                top: 10px;
                right: -26px;
              }
              a:hover{
                background:url('../../../static/images/details/issue2.png') no-repeat center;
              }
            p.details-jx{
              width: 210px;
              background: #fff;
              position: absolute;
              right: -42px;
              top: 34px;
              border-radius: 5px;
              box-shadow: 0 0 20px #ccc;
              z-index: 9;
              font-size: 12px;
              color: #999999;
              line-height: 18px;
              padding: 15px;
              display: none;
            }
          }
        }
        #but-txt{
          height: 34px;
          text-align: center;
          font-size: 12px;
          line-height: 34px;
        }
        .calc-but{
          width: 100%;
          height: 40px;
          line-height: 40px;
          background: #f56b0f;
          margin-left: 0;
          font-size: 16px;
        }
        a.jx{
          position: absolute;
          top: 8px;
          display: inline-block;
          right: -25px;
          width: 15px;
          height: 16px;
          background: url("../../../static/images/details/details-js.png")no-repeat center;
        }
      }
    }
  }
}
.loginLogin{
  height: 76px;
  line-height: 76px;
  .info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    a:last-child{
      font-size: 16px;
      color: #666666;
      em{
        color:#f56b0f ;
        font-size: 16px;
        margin-left: 18px;
      }
    }
  }
}



</style>