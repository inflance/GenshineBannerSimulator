var zhongchoushu = 0;
var gailv5 = 0;
var gailv4 = 0;
var choushu5 = 0;
var choushu4 = 0;
var flag = 0;//小保底
var names = new Array();
var nums = new Array();
var stars = new Array();
var stars4 = new Array();
var stars5 = new Array();
var colors = new Array();
var index = 0;
var x = document.querySelector(".x");
var cards = document.querySelectorAll('.card-item');
var cardP = document.getElementsByClassName("card");
var bf = document.querySelector('.bofang');
var btn = document.querySelector('.btn');
var video = document.getElementById('video');

fadeout(cardP[0]);
fadeout(bf);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
function getnumber() {
    zhongchoushu++;
    choushu5++;
    choushu4++;
    if (choushu5 <= 73) {
        gailv5 = 6;
    } else if (choushu5 > 73 && choushu5 < 90) {
        gailv5 += 60;
    } else {
        gailv5 = 1000;
    }

    if (choushu4 < 9) {
        gailv4 = gailv5 + 51;
    } else if (choushu4 == 9) {
        gailv4 = gailv5 + 561;
    } else {
        gailv4 = gailv5 + 1000;
    }
    var rand = getRndInteger(0, 1000);
    if (rand <= gailv5) {
        choushu5 = 0;
        gailv5 = 0;
        return 5;
    } else if (gailv5 < rand && rand <= gailv4) {
        choushu4 = 0;
        gailv4 = 0;
        return 4;
    } else {
        return 3;
    }
}

function chouka(num) {
    var max = 0;
    var item = document.getElementsByClassName('card-item');
    for (var i = 0; i < num; i++) {
        var star = getnumber();
        if (star == 3) {
            if (max < 3) {
                max = 3;
            }
            item[i].style.backgroundImage = 'url(img/3star/1.png)';
            item[i].style.border = "4px solid rgb(108, 208, 241)";
        } else if (star == 4) {
            if (max < 4) {
                max = 4;
            }
            var j = getRndInteger(1, 2);
            if (j == 1) {
                var k = getRndInteger(1, 15);
                switch (k) {
                    case 1: item[i].style.backgroundImage = 'url(img/4star/Sucrose.jpg)';
                        names[index] = "砂糖";
                        colors[index] = "class='green'";
                        break;
                    case 2: item[i].style.backgroundImage = 'url(img/4star/Rosaria.jpg)';
                        names[index] = "罗莎莉亚";
                        colors[index] = "class='lightblue'";
                        break;
                    case 3: item[i].style.backgroundImage = 'url(img/4star/Bennett.jpg)';
                        names[index] = "班尼特";
                        colors[index] = "class='red'";
                        break;
                    case 4: item[i].style.backgroundImage = 'url(img/4star/Fischl.jpg)';
                        names[index] = "菲谢尔";
                        colors[index] = "class='purple'";
                        break;
                    case 5: item[i].style.backgroundImage = 'url(img/4star/Xingqiu.jpg)';
                        names[index] = "行秋";
                        colors[index] = "class='blue'";
                        break;
                    case 6: item[i].style.backgroundImage = 'url(img/4star/Noelle.jpg)';
                        names[index] = "诺艾尔";
                        colors[index] = "class='yellow'";
                        break;
                    case 7: item[i].style.backgroundImage = 'url(img/4star/Xinyan.jpg)';
                        names[index] = "辛焱";
                        colors[index] = "class='red'";
                        break;
                    case 8: item[i].style.backgroundImage = 'url(img/4star/Chongyun.jpg)';
                        names[index] = "重云";
                        colors[index] = "class='lightblue'";
                        break;
                    case 9: item[i].style.backgroundImage = 'url(img/4star/Razor.jpg)';
                        names[index] = "雷泽";
                        colors[index] = "class='purple'";
                        break;
                    case 10: item[i].style.backgroundImage = 'url(img/4star/Xiangling.jpg)';
                        names[index] = "香菱";
                        colors[index] = "class='red'";
                        break;
                    case 11: item[i].style.backgroundImage = 'url(img/4star/KujouSara.jpg)';
                        names[index] = "九条";
                        colors[index] = "class='purple'";
                        break;
                    case 12: item[i].style.backgroundImage = 'url(img/4star/Ningguang.jpg)';
                        names[index] = "凝光";
                        colors[index] = "class='yellow'";
                        break;
                    case 13: item[i].style.backgroundImage = 'url(img/4star/Beidou.jpg)';
                        names[index] = "北斗";
                        colors[index] = "class='purple'";
                        break;
                    case 14: item[i].style.backgroundImage = 'url(img/4star/Yanfei.jpg)';
                        names[index] = "烟绯";
                        colors[index] = "class='red'";
                        break;
                    case 15: item[i].style.backgroundImage = 'url(img/4star/Barbara.jpg)';
                        names[index] = "芭芭拉";
                        colors[index] = "class='blue'";
                        break;
                }

            } else {
                var k = getRndInteger(1, 3);
                switch (k) {
                    case 1: item[i].style.backgroundImage = 'url(img/4star/Diona.jpg)';
                        names[index] = "迪奥娜";
                        colors[index] = "class='lightblue'";
                        break;
                    case 2: item[i].style.backgroundImage = 'url(img/4star/Sayu.jpg)';
                        names[index] = "早柚";
                        colors[index] = "class='green'";
                        break;
                    case 3: item[i].style.backgroundImage = 'url(img/4star/Thoma.jpg)';
                        names[index] = "托马";
                        colors[index] = "class='red'";
                        break;
                }
            }
            stars[index] = "4星";
            nums[index] = zhongchoushu;
            index++;
            item[i].style.border = "4px solid rgb(189, 132, 243)";
        } else {
            if (max < 5) {
                max = 5;
            }
            var j = getRndInteger(1, 2);
            if (flag == 0) {
                if (j == 1) {
                    item[i].style.backgroundImage = 'url(img/5star/HuTao.jpg)';
                    names[index] = "胡桃";
                    colors[index] = "class='red'";
                    flag = 0;
                } else {
                    var k = getRndInteger(1, 5);
                    switch (k) {
                        case 1: item[i].style.backgroundImage = 'url(img/5star/Diluc.jpg)';
                            names[index] = "迪卢克";
                            colors[index] = "class='red'";
                            break;
                        case 2: item[i].style.backgroundImage = 'url(img/5star/Qiqi.jpg)';
                            names[index] = "七七";
                            colors[index] = "class='lightblue'";
                            break;
                        case 3: item[i].style.backgroundImage = 'url(img/5star/Keqing.jpg)';
                            names[index] = "刻晴";
                            colors[index] = "class='purple'";
                            break;
                        case 4: item[i].style.backgroundImage = 'url(img/5star/Mona.jpg)';
                            names[index] = "莫娜";
                            colors[index] = "class='blue'";
                            break;
                        case 5: item[i].style.backgroundImage = 'url(img/5star/Jean.jpg)';
                            names[index] = "琴";
                            colors[index] = "class='green'";

                    }
                    flag = 1;
                }
            } else {
                item[i].style.backgroundImage = 'url(img/5star/HuTao.jpg)';
                names[index] = "胡桃";
                colors[index] = "class='red'";
                flag = 0;
            }
            stars[index] = "5星";
            nums[index] = zhongchoushu;
            index++;
            item[i].style.border = "4px solid rgb(252, 255, 87)";
        }
        var choushu = document.querySelector(".choushu");
        var zcs = document.querySelector(".zongchoushu");
        zcs.innerHTML = "总抽数：" + zhongchoushu;
        choushu.innerHTML = choushu5;
    }
    bofang(bf, max);
}
function ended() {
    var video = document.getElementById('video');
    video.currentTime = 6.5;
}
function fadeout(item) {
    item.style.display = 'none';
}
function fadein(item) {
    item.style.display = 'block';
}
function bofang(item, num) {
    item.innerHTML = '<video src="video/' + num + 'star.mp4"  autoplay onended="jieshu()" id="video"></video><div class="skip" onclick = "ended()">跳过</div>';
}
function jieshu() {
    fadeout(bf);
    cards.forEach(((item) => {
        item.classList.add("current");
    }));
}

function choukalishi() {
    var ckls = document.querySelector('.ckls');
    var ls = document.querySelector(".cklishi");
    ls.innerHTML = "";
    ckls.style.display = "flex";
    for (let i = 0; i < names.length; i++) {
        ls.innerHTML += "<p "+colors[i]+">" +"第"+ nums[i] + "抽：" +stars[i] +" "+ names[i] + "<p>";
    }
}
function cklsclose(){
    var ls = document.querySelector(".ckls");
    ls.style.display = "none";
}
x.addEventListener('click', function () {
    fadeout(cardP[0]);
    cards.forEach(((item) => {
        item.classList.remove("current");
    }));
});

btn.addEventListener('click', function () {
    fadein(bf);
    fadein(cardP[0]);
    chouka(10);
});
