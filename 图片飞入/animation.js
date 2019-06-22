function getStyle(ele) {
    return ele.currentStylle || getComputedStyle(ele)
}
window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {
    return setTimeout(fn, 1000 / 60)
}
window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout

function animation(ele, data, time, cd){
    //存放初始属性值
    var startValue = {}
    //存放属性变化值
    var changeValue = {}
    //获取初始时间
    var date = new Date()//初始时间
    //获取初始属性
    var startStyle = getStyle(ele)
    for (var key in data) {
        //key =>健名  width height
        //获取属性值目标值
        // startValue[key] = parseFloat(startStyle[key])
        var val = parseFloat(startStyle[key])//转为数组
        val = isNaN(val) ? 0 : val//是Nan就等于0
        startValue[key] = val//初始属性值
        //往属性变化值里添加属性
        changeValue[key]=parseFloat(data[key]) - startValue[key]
      
        

    }

    run();
    function run() {
        //获取当前时间
        //进行赋值操作
        var nowtime = new Date()//初始时间

        //用来判断 是否到达目标时间
        var isSuc = nowtime - date

        if (isSuc >= time) {//到达了目标时间
            isSuc = time
        }
        else {//没有到达目标时间
          requestAnimationFrame(run)//一直运行
        }
             
        for (var key in data) {
            /* 当前时间搓 - 初始时间/time = 当前属性 - 初始属性/属性目标值 - 属性初始值 */
            var val1 = (isSuc/time) * changeValue[key] + startValue[key]
            ele.style[key] = val1 + "px"
        }
        
        if (isSuc === time) {
            cd()
            
            
        }
    }
}