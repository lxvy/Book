$(document).ready(function(){
  var books = [
    {
      "title":"精通CSS:高级Web标准解决方案",
      "src":"https://img1.doubanio.com/lpic/s11187739.jpg",
      "href":"https://book.douban.com/subject/4736167/",
      "desc":""
    },{
      "title":"HTML5秘籍（第2版）",
      "src":"https://img3.doubanio.com/lpic/s28024394.jpg",
      "href":"https://book.douban.com/subject/26342322/",
      "desc":""
    },{
      "title":"如何阅读一本书",
      "src":"https://img1.doubanio.com/lpic/s1670978.jpg",
      "href":"https://book.douban.com/subject/1013208/",
      "desc":"本书讲述了一些技巧，发现有一些技巧在看过较多书籍后自然而然就知道了。所以学习是一个积累的过程,当时可能没有意思到，但已经深入骨髓中了。"
    },{
      "title":"CSS网页设计标准教程（第2版）",
      "src":"http://img3x8.ddimg.cn/23/22/23640728-1_w_1.jpg",
      "href":"http://product.dangdang.com/23640728.html",
      "desc":""
    },{
      "title":"JavaScript DOM编程艺术",
      "src":"https://img3.doubanio.com/lpic/s4677623.jpg",
      "href":"https://book.douban.com/subject/6038371/",
      "desc":"入门书籍，可以对javascript DOM基础体系架构有一个基本的认识。"
    },{
      "title":"学习之道",
      "src":"https://img3.doubanio.com/lpic/s6507306.jpg",
      "href":"https://book.douban.com/subject/2345548/",
      "desc":"天才、庸才。"
    },{
      "title":"JavaScript高级程序设计",
      "src":"https://img3.doubanio.com/lpic/s8958650.jpg",
      "href":"https://book.douban.com/subject/10546125/",
      "desc":""
    },{
      "title":"Head First jQuery（中文版）",
      "src":"https://img3.doubanio.com/lpic/s26679535.jpg",
      "href":"https://book.douban.com/subject/21668010/",
      "desc":""
    },{
      "title":"拆掉思维里的墙",
      "src":"https://img1.doubanio.com/lpic/s6907698.jpg",
      "href":"https://book.douban.com/subject/4953695/",
      "desc":"改变思维。但是没有说明怎样改变思维，只是列举了没有改变和改变思维的劣势和好处。"
    },{
      "title":"锋利的jQuery",
      "src":"https://img1.doubanio.com/lpic/s28026858.jpg",
      "href":"https://book.douban.com/subject/10792216/",
      "desc":""
    },{
      "title":"高性能JavaScript",
      "src":"https://img3.doubanio.com/lpic/s6245861.jpg",
      "href":"https://book.douban.com/subject/5362856/",
      "desc":""
    },{
      "title":"JavaScript语言精粹",
      "src":"https://img3.doubanio.com/lpic/s27993864.jpg",
      "href":"https://book.douban.com/subject/11874748/",
      "desc":""
    },{
      "title":"JavaScript权威指南",
      "src":"https://img3.doubanio.com/lpic/s1504052.jpg",
      "href":"https://book.douban.com/subject/1232061/",
      "desc":""
    },{
      "title":"一万小时天才理论",
      "src":"https://img3.doubanio.com/lpic/s4595192.jpg",
      "href":"https://book.douban.com/subject/4726323/",
      "desc":"积累。"
    },{
      "title":"编写可维护的JavaScript",
      "src":"https://img3.doubanio.com/lpic/s25808235.jpg",
      "href":"https://book.douban.com/subject/21792530/",
      "desc":""
    },{
      "title":"4点起床・最养生和高效的时间管理",
      "src":"https://img1.doubanio.com/lpic/s6948198.jpg",
      "href":"https://book.douban.com/subject/6828163/",
      "desc":"成功的人都是有好习惯的人。"
    },{
      "title":"JAVASCRIPT语言精髓与编程实践",
      "src":"https://img3.doubanio.com/lpic/s2970031.jpg",
      "href":"https://book.douban.com/subject/3012828/",
      "desc":""
    },{
      "title":"Secrets of the JavaScript Ninja",
      "src":"https://img1.doubanio.com/lpic/s24947497.jpg",
      "href":"https://book.douban.com/subject/3176860/",
      "desc":""
    },{
      "title":"自控力",
      "src":"https://img3.doubanio.com/lpic/s10685385.jpg",
      "href":"https://book.douban.com/subject/10786473/",
      "desc":"每天都有选择。"
    },{
      "title":"如何高效学习",
      "src":"https://img1.doubanio.com/lpic/s27172838.jpg",
      "href":"https://book.douban.com/subject/25783654/",
      "desc":"学不会。成功是不可复制的，只能好好学习。如果成功可以复制，为何古往经来成功的人总是少数人。"
    },{
      "title":"JavaScript模式",
      "src":"https://img1.doubanio.com/lpic/s11337059.jpg",
      "href":"https://book.douban.com/subject/11506062/",
      "desc":""
    },{
      "title":"明朝那些事儿",
      "src":"https://img3.doubanio.com/lpic/s3792001.jpg",
      "href":"https://book.douban.com/subject/3674537/",
      "desc":"特别好看。"
    },{
      "title":"JavaScript设计模式",
      "src":"https://img3.doubanio.com/lpic/s3398900.jpg",
      "href":"https://book.douban.com/subject/3329540/",
      "desc":""
    },{
      "title":"基于MVC的JavaScript Web富应用开发",
      "src":"https://img1.doubanio.com/lpic/s27269298.jpg",
      "href":"https://book.douban.com/subject/10733304/",
      "desc":""
    },{
      "title":"富爸爸女人一定要有钱",
      "src":"https://img3.doubanio.com/lpic/s28014171.jpg",
      "href":"https://book.douban.com/subject/1003598/",
      "desc":""
    },{
      "title":"富爸爸，穷爸爸",
      "src":"https://img3.doubanio.com/lpic/s1002230.jpg",
      "href":"https://book.douban.com/subject/25816950/",
      "desc":"在看《富爸爸穷爸爸》的时候，感觉突然眼前一亮，打开的一种新的思考方式。"
    },{
      "title":"高性能网站建设指南",
      "src":"https://img3.doubanio.com/lpic/s5914296.jpg",
      "href":"https://book.douban.com/subject/3132277/",
      "desc":""
    },{
      "title":"高性能网站建设进阶指南",
      "src":"https://img1.doubanio.com/lpic/s4231089.jpg",
      "href":"https://book.douban.com/subject/4719162/",
      "desc":""
    },{
      "title":"web性能实践日志",
      "src":"https://img1.doubanio.com/lpic/s27287707.jpg",
      "href":"https://book.douban.com/subject/25891125/",
      "desc":""
    },{
      "title":"Web性能权威指南",
      "src":"https://img1.doubanio.com/lpic/s27249387.jpg",
      "href":"https://book.douban.com/subject/25856314/",
      "desc":""
    },{
      "title":"一万种补水方法",
      "src":"https://img1.doubanio.com/lpic/s28061799.jpg",
      "href":"https://book.douban.com/subject/24749414/",
      "desc":"百度内容。"
    }
  ];
  for(var i = 0; i<books.length;i++){
    if((i+1)%5 == 1){
      $(".btitle5").append("<div class='btoc'><a href='"+books[i]["href"]+"'><img src='"+books[i]["src"]+"'></a><div class='atitle'>"+books[i]["title"]+"</div><div class='descript'>"+books[i]["desc"]+"</div></div>");
    }
    else if((i+1)%5 == 2){
      $(".btitle4").append("<div class='btoc'><a href='"+books[i]["href"]+"'><img src='"+books[i]["src"]+"'></a><div class='atitle'>"+books[i]["title"]+"</div><div class='descript'>"+books[i]["desc"]+"</div></div>");
    }
    else if((i+1)%5 == 3){
      $(".btitle3").append("<div class='btoc'><a href='"+books[i]["href"]+"'><img src='"+books[i]["src"]+"'></a><div class='atitle'>"+books[i]["title"]+"</div><div class='descript'>"+books[i]["desc"]+"</div></div>");
    }
    else if((i+1)%5 == 4){
      $(".btitle2").append("<div class='btoc'><a href='"+books[i]["href"]+"'><img src='"+books[i]["src"]+"'></a><div class='atitle'>"+books[i]["title"]+"</div><div class='descript'>"+books[i]["desc"]+"</div></div>");
    }
    else if((i+1)%5 == 0){
      $(".btitle1").append("<div class='btoc'><a href='"+books[i]["href"]+"'><img src='"+books[i]["src"]+"'></a><div class='atitle'>"+books[i]["title"]+"</div><div class='descript'>"+books[i]["desc"]+"</div></div>");
    }
  }
});
