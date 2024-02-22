window.onload = function() {
    var mainElements = document.querySelectorAll('main');
    mainElements.forEach(function(element) {
        element.style.opacity = '1';  // 设置透明度为1，使其渐显
    });
}
window.addEventListener('scroll', function() {
    var mainElements = document.querySelectorAll('main');

    mainElements.forEach(function(element) {
        var positionFromTop = element.getBoundingClientRect().top;  // 获取元素距离视口顶部的距离

        if (positionFromTop - window.innerHeight <= 0) { // 当元素到达或接近视口的底部
            element.style.transform = 'translateY(0)'; // 重置Y轴的位置
            element.style.opacity = '1'; // 设置透明度为1
        }
    });
});
// !function(e,t,a){function n(){c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 500%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),o(),r()}function r(){for(var e=0;e<d.length;e++)d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");requestAnimationFrame(r)}function o(){var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),i(e)}}function i(e){var a=t.createElement("div");a.className="heart",d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),t.body.appendChild(a)}function c(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}function s(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}var d=[];e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(),n()}(window,document);
// !function () {
//     //封装方法，压缩之后减少文件大小
//     function get_attribute(node, attr, default_value) {
//         return node.getAttribute(attr) || default_value;
//     }

//     //封装方法，压缩之后减少文件大小
//     function get_by_tagname(name) {
//         return document.getElementsByTagName(name);
//     }

//     //获取配置参数
//     function get_config_option() {
//         var scripts = get_by_tagname("script"),
//             script_len = scripts.length,
//             script = scripts[script_len - 1]; //当前加载的script
//         return {
//             l: script_len, //长度，用于生成id用
//             z: get_attribute(script, "zIndex", -1), //z-index
//             o: get_attribute(script, "opacity", 0.8), //opacity
//             c: get_attribute(script, "color", "255,255,255"), //color
//             n: get_attribute(script, "count", 350) //count
//         };
//     }

//     //设置canvas的高宽
//     function set_canvas_size() {
//         canvas_width = the_canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
//             canvas_height = the_canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//     }

//     //绘制过程
//     function draw_canvas() {
//         context.clearRect(0, 0, canvas_width, canvas_height);
//         //随机的线条和当前位置联合数组
//         var e, i, d, x_dist, y_dist, dist; //临时节点
//         //遍历处理每一个点
//         random_points.forEach(function (r, idx) {
//             r.x += r.xa,
//                 r.y += r.ya, //移动
//                 r.xa *= r.x > canvas_width || r.x < 0 ? -1 : 1,
//                 r.ya *= r.y > canvas_height || r.y < 0 ? -1 : 1, //碰到边界，反向反弹
//                 context.fillRect(r.x - 0.5, r.y - 0.5, 1, 1); //绘制一个宽高为1的点
//             //从下一个点开始
//             for (i = idx + 1; i < all_array.length; i++) {
//                 e = all_array[i];
//                 // 当前点存在
//                 if (null !== e.x && null !== e.y) {
//                     x_dist = r.x - e.x; //x轴距离 l
//                     y_dist = r.y - e.y; //y轴距离 n
//                     dist = x_dist * x_dist + y_dist * y_dist; //总距离, m

//                     dist < e.max && (e === current_point && dist >= e.max / 2 && (r.x -= 0.03 * x_dist, r.y -= 0.03 * y_dist), //靠近的时候加速
//                         d = (e.max - dist) / e.max,
//                         context.beginPath(),
//                         context.lineWidth = d / 2,
//                         context.strokeStyle = "#000000",
//                         context.moveTo(r.x, r.y),
//                         context.lineTo(e.x, e.y),
//                         context.stroke());
//                 }
//             }
//         }), frame_func(draw_canvas);
//     }

//     //创建画布，并添加到body中
//     var the_canvas = document.createElement("canvas"), //画布
//         config = get_config_option(), //配置
//         canvas_id = "c_n" + config.l, //canvas id
//         context = the_canvas.getContext("2d"), canvas_width, canvas_height,
//         frame_func = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (func) {
//             window.setTimeout(func, 1000 / 40);
//         }, random = Math.random,
//         current_point = {
//             x: null, //当前鼠标x
//             y: null, //当前鼠标y
//             max: 20000 // 圈半径的平方
//         },
//         all_array;
//     the_canvas.id = canvas_id;
//     the_canvas.style.cssText = "position:fixed;top:0;left:0;z-index:" + config.z + ";opacity:" + config.o;
//     get_by_tagname("body")[0].appendChild(the_canvas);

//     //初始化画布大小
//     set_canvas_size();
//     window.onresize = set_canvas_size;
//     //当时鼠标位置存储，离开的时候，释放当前位置信息
//     window.onmousemove = function (e) {
//         e = e || window.event;
//         current_point.x = e.clientX;
//         current_point.y = e.clientY;
//     }, window.onmouseout = function () {
//         current_point.x = null;
//         current_point.y = null;
//     };
//     //随机生成config.n条线位置信息
//     for (var random_points = [], i = 0; config.n > i; i++) {
//         var x = random() * canvas_width, //随机位置
//             y = random() * canvas_height,
//             xa = 2 * random() - 1, //随机运动方向
//             ya = 2 * random() - 1;
//         // 随机点
//         random_points.push({
//             x: x,
//             y: y,
//             xa: xa,
//             ya: ya,
//             max: 6000 //沾附距离
//         });
//     }
//     all_array = random_points.concat([current_point]);
//     //0.1秒后绘制
//     setTimeout(function () {
//         draw_canvas();
//     }, 100);
// }();
const box=document.getElementById('rainBox');
//用绑定id的形式把‘rainBox’绑定

let boxHeight=box.clientHeight;
//自动获取box窗口的最新高度

let boxWidth=box.clientWidth;
//自动获取box窗口的最新宽度

window.onload=function(){
    boxHeight=box.clientHeight;
    boxWidth=box.clientWidth;
}
//这里触发一个onload函数，对象为window，并设置获取的box窗口的最新的宽和高

//每隔一段时间添加雨点
setInterval(()=>{
    const rain=document.createElement('div');
    //使用js的创建动态生成层方法，无需改变html代码创建一个div，并且赋值给常量rain

    rain.classList.add('rain');
    //用js添加新的类名写法，给上面定义的常量rain来创建一个calss类名

    rain.style.top=0;
    //返回定位元素的顶部位置

    //利用random随机数，来随机刷新雨点的位置
    rain.style.left=Math.random()*boxWidth+'px'

    //随机雨点透明度
    rain.style.opacity=Math.random();
    box.appendChild(rain); 
    
    //每隔一段时间雨点落下  
    let race=1;
    const timer=setInterval(()=>{
        if(parseInt(rain.style.top)>boxHeight){
            clearInterval(timer);
            box.removeChild(rain)
        }
        race++;
        rain.style.top=parseInt(rain.style.top)+race+'px'
    },20)

},50)