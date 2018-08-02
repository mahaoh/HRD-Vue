<template>
	<div class="home">
		<slide></slide>
    <!-- 首页公告 -->
		<div class="notice">
	    <div class="notice-info">
	        <div class="notice-top">
	            <p><em></em><span>[公告]关于农商银行、农业银行的系统维护通知</span><label>2018-06-01</label></p>
	            <a href="javascript:;">更多<em></em></a>
	        </div>
	        <div class="notice-bottom">
	            <div class="notice-left">
	                <dl v-for="notice in noticeList">
	                    <dt><img :src="notice.src" alt="" :width="notice.imgw" :height="notice.imgh"></dt>
	                    <dd>
	                        <label>{{notice.title}}</label>
	                        <span>{{notice.introduce}}</span>
	                    </dd>
	                </dl>
	            </div>
	            <div class="indexDate">
	                <div class="info">
	                    <label><em>累计成交金额</em><strong class="first">{{dataFloor}}</strong>亿元</label>
	                    <label><em>累计注册用户</em><strong data-floor="21.5" class="last">{{dataFloor2}}</strong>万元</label>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
  <!--新手标-->
<div class="greenHand">
    <div class="greenHand-info">
        <div class="greenHand-top">
            <div class="greenHand-left">
                <span id="greenHand-alert" @click="loginHomeshow=true">注册享新手四重好礼</span>
            </div>
            <div class="greenHand-right">
                <dl>
                    <dd>
                        <p><strong>6.5</strong>%+<span>5</span>%</p>
                        <em>预期年化回报率</em>
                    </dd>
                    <dd>
                        <h6><label>1</label>个月</h6>
                        <em>借款期限</em>
                    </dd>
                    <dd>
                        <h6><label>200000</label>元</h6>
                        <em>剩余金额</em>
                    </dd>
                    <dd>
                        <a href="javascript:;">立即加入</a>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="greenHand-bottom">
            <ul class="uls">
                <li v-for="(NewStandard,i) in NewStandardList" 
                :class="{'noAccomplish' : i!=0}" 
                @click="goDetails(NewStandard.id,
                                  NewStandard.projectNmae,
                                  NewStandard.reimbursement,
                                  NewStandard.rate,
                                  NewStandard.reimbursements,
                                  NewStandard.total,
                                  NewStandard.remaining)">
                    <span>{{NewStandard.projectNmae}}</span>
                    <span>{{NewStandard.reimbursement}}</span>
                    <span>{{NewStandard.rate}}</span>
                    <span>{{NewStandard.reimbursements}}</span>
                    <span>{{NewStandard.total}}<em>元</em></span>
                    <span>{{NewStandard.remaining}}<em>元</em></span>
                    <span><a href="javascript:;">{{NewStandard.type}}</a></span>
                </li>
            </ul>
        </div>
    </div>
</div>
<p v-for="ss in a">{{ss.id}}</p>
<loginHomeAlert v-show="loginHomeshow==true"></loginHomeAlert>
</div>
</template>
<script>
import slide from '../../components/swiper.vue'
import loginHomeAlert from '../../components/login/loginHomeAlert.vue'
	export default{
		name:'home',
		data() {
		    return {
		     	noticeList:[
		     		{
		     			src:'../../../static/images/home/home.png',
		     			imgw:42,
		     			imgh:56,
		     			title:"品质风控",
		     			introduce:'多重风控保驾护航'
		     		},
		     		{
		     			src:'../../../static/images/home/home2.png',
		     			imgw:50,
		     			imgh:50,
		     			title:"数据披露",
		     			introduce:'运营数据全部披露'
		     		},
		     		{
		     			src:'../../../static/images/home/home1.png',
		     			imgw:55,
		     			imgh:56,
		     			title:"稳健运营",
		     			introduce:'五年稳健持续运营'
		     		}
		     	],
          dataFloor:54.69,
          dataFloor2:99.32,
          loginHomeshow:false,
          NewStandardList:[
            {
              projectNmae:'项目名称',
              reimbursement:'还款方式',
              rate:'预期年化回报率',
              reimbursements:'借款期限',
              total:'借款总额',
              remaining:"剩余总额",
              type:'状态'
            },
            {
              id:4,
              projectNmae:'新手标XY-1001-106330',
              reimbursement:'等额本息',
              rate:'6.5%+5%',
              reimbursements:'2个月',
              total:'34000',
              remaining:"834000",
              type:'立即加入'
            },
             {
              id:5,
              projectNmae:'新手标XY-1001-106440',
              reimbursement:'等额本息',
              rate:'6%+5%',
              reimbursements:'3个月',
              total:'190000',
              remaining:"80540",
              type:'立即加入'
            },
              {
              id:6,
              projectNmae:'新手标XY-1001-106770',
              reimbursement:'等额本息',
              rate:'6.5%',
              reimbursements:'1个月',
              total:'36000',
              remaining:"80660",
              type:'立即加入'
            }
          ],
          a:''
		    }
    	}, 
    	mounted(){
        //  axios({
        //   method: 'get',
        //   url: '../../json/test.json',
         
        // });
this.$axios.post('http://user.com/login',{
    username: '122',
    password:'2233'
    })
  .then(function(response){
    // this.a=response.data;
    console.log(response.data,222)
  })
  .catch(function (error) {
    console.log(error);
  });

    	},
  		computed:{  
  		},
  		methods:{
        goDetails:function(id,projectNmae,reimbursement,rate,reimbursements,total,remaining){
         this.$router.push({
          name:'detailss',
          query:{
            id:id,
            projectNmae:projectNmae,
            reimbursement:reimbursement,
            rate:rate,
            reimbursements:reimbursements,
            total:total,
            remaining:remaining
          }
        })
        }
  		},
  		components:{
  			slide,
        loginHomeAlert
  		},
      created(){
       if(this.$route.name!="login"|| this.$route.name!="loginDL"){
        this.$parent.headsShow=true;
        this.$parent.footShow=true;
     }
       },
	};
	
</script>
<style lang="less" scoped>
	.notice{
    width: 1200px;
    position: relative;
    z-index: 99;
    margin: 0 auto;
    margin-top: -90px;
  .notice-info{
    width: 1200px;
    height: 160px;
    margin: 0 auto;
    background: #fff;
    .notice-top{
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #f3f3f3;
      box-sizing: border-box;
      display: flex;
      cursor:pointer;
      justify-content: space-between;
      p{
        height:100%;
        display: flex;
        align-items: center;
        em{
          display: inline-block;
          width: 19px;
          height: 22px;
          background: url("../../../static/images/home/notice-top.png")no-repeat center;
          background-size: 19px 17px;
          margin-left: 30px;
          margin-right: 20px;
        }
        span{
          font-size: 14px;
          margin-right: 36px;
          color: #666666;
        }
        label{
          color: #999999;
          font-size: 14px;
        }
      }
      a{
        display: inline-block;
        color: #999999;
        font-size: 14px;
        display: flex;
        align-items: center;
        margin-right: 30px;
        em{
          display: inline-block;
          background: url("../../../static/images/home/right.png")no-repeat;
          background-size: 11px 10px;
          width: 11px;
          height: 10px;
          margin-left: 5px;
        }
      }
      a:hover{
        color: #f56b0f;
      }
    }
    .notice-bottom{
      display: flex;
      margin-top: 23px;
      .notice-left{
        width: 870px;
        height: 70px;
        border-right: 1px solid #f3f3f3;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        dl{
          display: flex;
          dd{
            margin-left: 18px;
            label{
              display: block;
              color: #333333;
              padding-bottom: 4px;
              font-size: 18px;
              text-align: left;
            }
            span{
              color: #999999;
              font-size: 14px;
            }
          }
        }
      }
      .indexDate{
        width: 330px;
        height: 70px;
        .info{
          display: flex;
          height: 70px;
          align-items: center;
          label{
            color: #333333;
            font-size: 12px;
            em{
              color: #999999;
              font-size: 12px;
              display: block;
            }
            strong{
              font-size: 26px;
              color: #333333;
              font-weight: 600;
            }
          }
          label:first-child{
            margin-left: 70px;
            margin-right: 44px;
          }
        }
      }
    }
  }
}
.greenHand{
  width: 1200px;
  background: #fff;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 60px;
  .greenHand-info{
    width: 1200px;
    .greenHand-top{
      height: 160px;
      display: flex;
      .greenHand-left{
        background: url("../../../static/images/home/xinshou.png")no-repeat;
        width: 285px;
        height: 160px;
        span{
          width: 232px;
          margin: 0 auto;
          height: 40px;
          line-height: 40px;
          text-align: center;
          color:#df1b1b;
          font-size: 16px;
          display: block;
          margin-top: 98px;
          font-weight: bold;
          cursor:pointer;
        }
      }
      .greenHand-right{
        border-bottom: 1px solid #e7e7e7;
        box-sizing: border-box;
        width: 915px;
        dl{
          display: flex;
          height: 160px;
          justify-content: space-around;
          dd{
            em{
              color: #999999;
              display: block;
              font-size: 14px;
            }
            p{
              color: #f56b0f;
              font-size: 20px;
              strong{
                font-size: 40px;
                font-weight: bold;
              }
              span{
                font-size: 28px;
                font-weight: bold;
              }
            }
            h6{
              color: #333333;
              font-size: 16px;
              padding-bottom: 6px;
              label{
                font-size: 20px;
                font-weight: 600;
              }
            }
            a{
              display: inline-block;
              width: 180px;
              height: 40px;
              text-align: center;
              line-height: 40px;
              color: #fff;
              border-radius: 3px;
              font-size: 16px;
              background: #f56b0f;
              transition: background .6s;
            }
            a:hover{
              background: #e96309;
            }
          }
          dd:nth-child(2),dd:nth-child(3){
            margin-top: 64px;
          }
          dd:first-child{
            margin-top:50px;
          }
          dd:last-child{
            display: flex;
            align-items: center;
          }
        }
      }
    }
    .greenHand-bottom{
      .uls{
        width: 1200px;
        background: #f6f6f6;
        li{
          line-height: 60px;
          border-bottom: 1px solid #eeeeee;
          font-size: 14px;
          color: #999999;
          display: flex;
          span{
            text-align: center;
            display: inline-block;
            a{
              color: #999999;
            }
          }
          span:first-child{
            width: 285px;
          }
          span:nth-child(2),span:nth-child(4){
            width: 130px;
          }
          span:nth-child(3){
            width: 178px;
          }
          span:nth-child(5),span:nth-child(6){
            width: 160px;
          }
          span:last-child{
            width:156px;
          }

        }
        li:nth-child(2),li:nth-child(3),li:nth-child(4){
          span:nth-child(6){
            font-weight: 600;
          }
        }
        li:nth-child(2):hover{
          background: #fff;
          span:nth-child(7){
            a{
              width: 130px;
              height: 34px;
              line-height: 34px;
              display: inline-block;
              transition: background .6s;
              background:#f56b0f;
              color: #fff;
              border-radius: 3px;
            }
          }
          span:nth-child(6){
           color: #f56b0f;
          }
        };
        li:nth-child(3):hover{
          background: #fff;
          span:nth-child(7){
            a{
              width: 130px;
              height: 34px;
              line-height: 34px;
              display: inline-block;
              transition: background .6s;
              background:#f56b0f;
              color: #fff;
              border-radius: 3px;
            }
          }
          span:nth-child(6){
            color: #f56b0f;
          }
        };
        li:nth-child(4):hover{
          background: #fff;
          span:nth-child(7){
            a{
              width: 130px;
              height: 34px;
              line-height: 34px;
              display: inline-block;
              transition: background .6s;
              background:#f56b0f;
              color: #fff;
              border-radius: 3px;
            }
          }
          span:nth-child(6){
            color: #f56b0f;
          }
        };
        .noAccomplish{
          cursor: pointer;
          display: flex;
          span{
            color: #333333;
            font-size: 14px;
            text-align: center;
          }
         span:nth-child(7){
            a{
              color: #f56b0f;
              width: 130px;
              height: 34px;
              line-height: 34px;
              display: inline-block;
              transition: background .6s;
            }
            a:hover{
              background:#f56b0f;
              color: #fff;
              border-radius: 3px;
            }
          }
          span:nth-child(3){

              color: #f56b0f;

          }
        }
        .accomplish{
          span,a{
            color: #999999;
            font-size: 14px;
            text-align: center;

          }
        }
      }
    }
  }
}
</style>