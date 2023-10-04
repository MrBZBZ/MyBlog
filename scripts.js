window.addEventListener("load", function() {
    var loader = document.getElementById("loader");
    loader.style.display = "none";
});
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
