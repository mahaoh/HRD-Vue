)<template>
	<div class="slide" id="slide">
		<div class="swiper-container banner-swiper" id="banner-swiper">
		    <div class="swiper-wrapper">
		    	<div class="swiper-slide"
					v-for="slideI in slideImg">
					<a href="javascript:;">
					<img :style="slideI" src="" alt="">
					</a>

					</div>
		       
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination" id="banner-pagination"></div>
		    
		    <!-- 如果需要导航按钮 -->
		    <div class="swiper-button-prev" id="swiper-button-prev"></div>
		    <div class="swiper-button-next" id="swiper-button-next"></div>
		</div>
	</div>
</template>
<script>
    import Swiper from 'swiper'
	export default{
		name:"slide",
		data(){
			return {
				slideImg:[
					'background-image:url(https://res.huirendai.com/thumb/5b46ed2ac96da1904b8949fd.jpg)',
					'background-image:url(https://res.huirendai.com/thumb/5b21c099c96da19227472153.jpg)',
					'background-image:url(https://res.huirendai.com/thumb/5b39e4eac96da1a413d579ff.png)',
					'background-image:url(https://res.huirendai.com/thumb/5b487c68c96da1ab13fe3cb9.png)',
					'background-image:url(https://res.huirendai.com/thumb/5b32002ac96da11342bfaa07.png)',
					'background-image:url(https://res.huirendai.com/thumb/5b486d44c96da16813472153.png)'
				]
			}
		},
		mounted(){
		     new Swiper ('.swiper-container', {
		     	loop:true,
		   		autoplay:true,
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			      clickable :true
			    },
			    // 如果需要前进后退按钮
			    navigation: {
			      nextEl: '#swiper-button-next',
			      prevEl: '#swiper-button-prev',
			    }

		  	})        
  		}
	}
</script>

<style scoped lang="less">

 #banner-swiper{
  height: 460px;
}
#banner-swiper:hover{
  #banner-prev,#banner-next{
    display: block;
  }
}
.banner-swiper{
  width: 100%;
  .swiper-slide{
    img{
    background-position:center;
    background-repeat:no-repeat;
      display: block;
      width: 100%;
      height: 460px;
    }
  }
  #banner-pagination{
    position: absolute;
    bottom: 110px;
   
    span.swiper-pagination-bullet{
      width: 14px;
      height: 14px;
    }
  }
  #banner-prev,#banner-next{
    width: 41.5px;
    height: 79px;
    // background: url("/static/images/v4/page.png")no-repeat;
    position: absolute;
    display: none;
    top:50%;
    margin-top: -40px;
  }
  #banner-next{
    background-position-x: -41.5px;
    right: 70px;
  }
  #banner-next:hover{
    background-position-y: -83px;
  }
  #banner-prev:hover{
    background-position-y:-83px;
  }
  #banner-prev{
    left: 70px;
  }
}
 span.swiper-pagination-bullet-active{
      background: #f5f5f5;
    }
</style>
