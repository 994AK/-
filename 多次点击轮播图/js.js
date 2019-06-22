window.onload=function(){
    var lik =document.getElementsByTagName("li");
    function fun(i,j){ //显示图片
        lik[i].style.opacity=0;
        lik[j].style.opacity=1;
    }
    // fun(0,1);
    var i =0;//默认值
    setInterval(function(){ //每两秒
        if(++i>=5){ //第一次进入 0  先加后进 flase就 -1；
            i=0;
            fun(0,4);
        }
        else fun(i,i-1);
    },2000)
}




    




