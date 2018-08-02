import Mock from 'mockjs';
// const data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  // 'foods|10-50': [{
  //   'name': "@ctitle(2,10)",
  //   "img": "@image('600x600',#b7ef7c)",
  //   "brief": "@csentence(1,50)",
  //   "price|0-20.0-2": 1,
  //   "num": 0,
  //   "minusFlag": true,
  //   "time": "@time",
  //   "peisongfei|0-100.0-2": 1,
  //   "limit|0-50": 1
  // }]
    // "name":"2222",
    // "pwd":'mahao'
// });
// 
// export default {
//   data
// }
// const Mock = require('mockjs');
// // 获取 mock.Random 对象
// const Random = Mock.Random;
// // // mock一组数据
// const produceNewsData = function() {
//     let articles = [];
//     for (let i = 0; i < 100; i++) {
//         let newArticleObject = {
//             title: Random.csentence(5, 30), //  Random.csentence( min, max )
//             thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
//             author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//             date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//         }
//         articles.push(newArticleObject)
//     }

//     return {
//         articles: articles
//     }
// }
 
// // Mock.mock( url, post/get , 返回的数据)；
// Mock.mock('/news/index', 'post', produceNewsData);
// 
// 
// 
     let uTable = {
    'password': '123456',
    'username':"admin"
}
const data = Mock.mock('http://user.com/login', (param) => {
    let dataJson = JSON.parse(param.body);
    console.log(param)
    if((dataJson.username == uTable.username) && (dataJson.password == uTable.password)) {
       return 'ok'
    } else {
      return 'no'
    }
})

export default {
    data
}