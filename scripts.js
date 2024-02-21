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
