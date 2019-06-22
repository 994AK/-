
/* 获取区域 */
let aprice = document.getElementsByClassName("price"),//获取单价
    aSub = document.getElementsByClassName("reduce"),//获取减-按钮
    aNum = document.getElementsByTagName("input"),//获取input标签
    aAdd = document.getElementsByClassName("add"),//获取加+按钮
    aMoney = document.getElementsByClassName("subtotal"),//小计
    numTotal = document.querySelectorAll("#foot div em")[0],//已选择多少个
    moneyTotal = document.querySelectorAll("#foot div span")[0],//多少价格0.0$
    len = aprice.length;//for循环里面的1



    /* 属性值 */
for (let i = 0; i < len; i++) {
    /* 加区 */
    aAdd[i].onclick = function () {
        aNum[i].value++ //value 每次点击加 1 
        aMoney[i].innerHTML = aNum[i].value * aprice[i].innerHTML; //+=是不会转换的 转换字符串
        count();
    }
    aSub[i].onclick = function () {
        if (aNum[i].value / 1 === 0) {//到0的时候 弹出
            return
        }
        /* 减区 */
        aNum[i].value-- //减
        aMoney[i].innerHTML = aNum[i].value * aprice[i].innerHTML; //+=是不会转换的 转换字符串
        count();
    }
    aNum[i].oninput = function () {
        aMoney[i].innerHTML = aNum[i].value * aprice[i].innerHTML;//算单个商品的总价
        count();
    }
}

/* 调用值 */
function count() {
    let num1 = 0;
    let num2 = 0;
    for (let i = 0; i < len; i++) {//已选多少个
        num1 += aNum[i].value * 1 //字符串转数组
        num2 += aMoney[i].innerHTML * 1 //单价放到小计
    }
    numTotal.innerHTML = num1;//已选 多少个
    moneyTotal.innerHTML = num2;//小计放到 0.00￥
}