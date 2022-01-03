var pagestatus = 0;
function go(direction) {
    if (direction == 'left') {
        document.getElementById('index-page').style.left = '70vw';
        document.getElementsByClassName('go-right')[0].style.display = 'block';
        document.getElementById('aboutme-page').style.left = '0';
        document.getElementById('offers-page').style.right = '-100vw';
        pagestatus = 1;
    }
    if (direction == 'right') {
        document.getElementById('index-page').style.left = '-70vw';
        document.getElementsByClassName('go-left')[0].style.display = 'block';
        document.getElementById('offers-page').style.right = '0';
        document.getElementById('aboutme-page').style.left = '-100vw';
        pagestatus = 5;
    }
    if (direction == 'center') {
        document.getElementById('index-page').style.left = '0';
        document.getElementsByClassName('go-left')[0].style.display = 'none';
        document.getElementsByClassName('go-right')[0].style.display = 'none';
        document.getElementById('offers-page').style.right = '-100vw';
        document.getElementById('aboutme-page').style.left = '-100vw';
        pagestatus = 0;
    }
}

function openMenu(target) {
    if (target !='offers') {
        if (document.getElementById(target + '-menu-container').style.height != '300px') {
            document.getElementById(target + '-menu-container').style.height = '300px';
        }
        else {
            document.getElementById(target + '-menu-container').style.height = '0';
        }
    }
    else {
        if (document.getElementById(target + '-menu-container').style.height != '375px') {
            document.getElementById(target + '-menu-container').style.height = '375px';
        }
        else {
            document.getElementById(target + '-menu-container').style.height = '0';
        }
    }
}

function openPage(pageid,direction) {
    go(direction);
    for (var i = 1; i <= 9; i++) {
        if (i==pageid) {
            document.getElementById('cv-page-' + i + '').style.display = 'block';
            document.getElementById('cv-page-' + i + '').style.visibility = 'visible';
        }
        else {
            document.getElementById('cv-page-' + i + '').style.display = 'block';
            document.getElementById('cv-page-' + i + '').style.visibility = 'hidden';
        }
    }
    for (var i = 0; i < document.getElementsByClassName('nav-item').length; i++) {

        if (i+1==pageid) {
            document.getElementsByClassName('nav-item')[i].classList.add('nav-active');
        }
        else {
            document.getElementsByClassName('nav-item')[i].classList.remove('nav-active');
        }
        
    }

    if (pageid==1) {
        document.getElementById('cv-page-1').style.top = '0';
        document.getElementById('cv-page-2').style.top = '100vh';
        document.getElementById('cv-page-3').style.top = '200vh';
        document.getElementById('cv-page-4').style.top = '300vh';
        document.getElementById('cv-page-1').style.transform = 'rotate(0deg)';
        document.getElementById('cv-page-2').style.transform = 'rotate(-45deg)';
        document.getElementById('cv-page-3').style.transform = 'rotate(-45deg)';
        document.getElementById('cv-page-4').style.transform = 'rotate(-45deg)';
        pagestatus = 1;
    }
    else if (pageid == 2){
        document.getElementById('cv-page-1').style.top = '-100vh';
        document.getElementById('cv-page-2').style.top = '0';
        document.getElementById('cv-page-3').style.top = '100vh';
        document.getElementById('cv-page-4').style.top = '200vh';
        document.getElementById('cv-page-1').style.transform = 'rotate(45deg)';
        document.getElementById('cv-page-2').style.transform = 'rotate(0deg)';
        document.getElementById('cv-page-3').style.transform = 'rotate(-45deg)';
        document.getElementById('cv-page-4').style.transform = 'rotate(-45deg)';
        pagestatus = 2;
    }
    else if (pageid == 3) {
        document.getElementById('cv-page-1').style.top = '-200vh';
        document.getElementById('cv-page-2').style.top = '-100vh';
        document.getElementById('cv-page-3').style.top = '0';
        document.getElementById('cv-page-4').style.top = '100vh';
        document.getElementById('cv-page-1').style.transform = 'rotate(45deg)';
        document.getElementById('cv-page-2').style.transform = 'rotate(45deg)';
        document.getElementById('cv-page-3').style.transform = 'rotate(0deg)';
        document.getElementById('cv-page-4').style.transform = 'rotate(-45deg)';
        pagestatus = 3;
    }
    else if (pageid == 4) {
        document.getElementById('cv-page-1').style.top = '-300vh';
        document.getElementById('cv-page-2').style.top = '-200vh';
        document.getElementById('cv-page-3').style.top = '-100vh';
        document.getElementById('cv-page-4').style.top = '0';
        document.getElementById('cv-page-1').style.transform = 'rotate(45deg)';
        document.getElementById('cv-page-2').style.transform = 'rotate(45deg)';
        document.getElementById('cv-page-3').style.transform = 'rotate(45deg)';
        document.getElementById('cv-page-4').style.transform = 'rotate(0deg)';
        pagestatus = 4;
    }

    if (pageid == 5) {
        document.getElementById('cv-page-5').style.top = '0';
        document.getElementById('cv-page-6').style.top = '100vh';
        document.getElementById('cv-page-7').style.top = '200vh';
        document.getElementById('cv-page-8').style.top = '300vh';
        document.getElementById('cv-page-9').style.top = '400vh';
        document.getElementById('cv-page-5').style.transform = 'rotate(0deg)';
        document.getElementById('cv-page-6').style.transform = 'rotate(45deg)';
        document.getElementById('cv-page-7').style.transform = 'rotate(45deg)';
        document.getElementById('cv-page-8').style.transform = 'rotate(45deg)';
        document.getElementById('cv-page-9').style.transform = 'rotate(45deg)';
        pagestatus = 5;
    }
    else if (pageid == 6) {
        document.getElementById('cv-page-5').style.top = '-100vh';
        document.getElementById('cv-page-6').style.top = '0';
        document.getElementById('cv-page-7').style.top = '100vh';
        document.getElementById('cv-page-8').style.top = '200vh';
        document.getElementById('cv-page-9').style.top = '300vh';
        document.getElementById('cv-page-5').style.transform = 'rotate(-45deg)';
        document.getElementById('cv-page-6').style.transform = 'rotate(0deg)';
        document.getElementById('cv-page-7').style.transform = 'rotate(45deg)';
        document.getElementById('cv-page-8').style.transform = 'rotate(45deg)';
        document.getElementById('cv-page-9').style.transform = 'rotate(45deg)';
        pagestatus = 6;
    }
    else if (pageid == 7) {
        document.getElementById('cv-page-5').style.top = '-200vh';
        document.getElementById('cv-page-6').style.top = '-100vh';
        document.getElementById('cv-page-7').style.top = '0';
        document.getElementById('cv-page-8').style.top = '100vh';
        document.getElementById('cv-page-9').style.top = '200vh';
        document.getElementById('cv-page-5').style.transform = 'rotate(-45deg)';
        document.getElementById('cv-page-6').style.transform = 'rotate(-45deg)';
        document.getElementById('cv-page-7').style.transform = 'rotate(0deg)';
        document.getElementById('cv-page-8').style.transform = 'rotate(45deg)';
        document.getElementById('cv-page-9').style.transform = 'rotate(45deg)';
        pagestatus = 7;
    }
    else if (pageid == 8) {
        document.getElementById('cv-page-5').style.top = '-300vh';
        document.getElementById('cv-page-6').style.top = '-200vh';
        document.getElementById('cv-page-7').style.top = '-100vh';
        document.getElementById('cv-page-8').style.top = '0';
        document.getElementById('cv-page-9').style.top = '100vh';
        document.getElementById('cv-page-5').style.transform = 'rotate(-45deg)';
        document.getElementById('cv-page-6').style.transform = 'rotate(-45deg)';
        document.getElementById('cv-page-7').style.transform = 'rotate(-45deg)';
        document.getElementById('cv-page-8').style.transform = 'rotate(0deg)';
        document.getElementById('cv-page-9').style.transform = 'rotate(45deg)';
        pagestatus = 8;
    }

    else if (pageid == 9) {
        document.getElementById('cv-page-5').style.top = '-400vh';
        document.getElementById('cv-page-6').style.top = '-300vh';
        document.getElementById('cv-page-7').style.top = '-200vh';
        document.getElementById('cv-page-8').style.top = '-100vh';
        document.getElementById('cv-page-9').style.top = '0';
        document.getElementById('cv-page-5').style.transform = 'rotate(-45deg)';
        document.getElementById('cv-page-6').style.transform = 'rotate(-45deg)';
        document.getElementById('cv-page-7').style.transform = 'rotate(-45deg)';
        document.getElementById('cv-page-8').style.transform = 'rotate(-45deg)';
        document.getElementById('cv-page-9').style.transform = 'rotate(0deg)';
        pagestatus = 9;
    }
}

window.addEventListener('wheel', function (e) {
    if (e.deltaY < 0) {
        if (pagestatus > 1 && pagestatus <= 4) {
            openPage(pagestatus - 1, 'left');
        }
        else if (pagestatus > 5 && pagestatus <= 9) {
            openPage(pagestatus - 1, 'right');
        }
    }
    else if (e.deltaY > 0) {
        if (pagestatus >= 1 && pagestatus < 4) {
            openPage(pagestatus + 1, 'left');
        }
        else if (pagestatus >= 5 && pagestatus < 9) {
            openPage(pagestatus + 1, 'right');
        }
    }
});


window.addEventListener('mousemove', e => {
    var x = e.clientX - window.innerWidth/2;
    var y = e.clientY - window.innerHeight/2;
    var tot = x - y;
    document.getElementsByClassName('backgroundlayer1')[0].style.transform = 'translate(' + x / 1000 + '%,' + y / 1000 + '%) rotateZ(' + tot / 1000 + 'deg)';
    for (var i = 0; i < document.getElementsByTagName('h1').length; i++) {
        document.getElementsByTagName('h1')[i].style.transform = 'translate(' + -x / 10000 + '%,' + -y / 10000 + '%) rotateZ(' + tot / 10000 + 'deg)';
    }
});

var moveup = 0;
var movedown = 0;
var moveleft = 0;
var moveright = 0;

window.addEventListener('keydown', event => {
    if (document.getElementById('arrowkeys')) {
        document.getElementById('arrowkeys').remove();
    }
    if (event.keyCode === 87) {
        moveup = 1;
        move('up');
        move('left');
        move('down');
        move('right');
    }

    if (event.keyCode === 65) {
        moveleft = 1;
        move('up');
        move('left');
        move('down');
        move('right');
    }

    if (event.keyCode === 83) {
        movedown = 1;
        move('up');
        move('left');
        move('down');
        move('right');
    }

    if (event.keyCode === 68) {
        moveright = 1;
        move('up');
        move('left');
        move('down');
        move('right');
    }

    if (event.keyCode === 39) {
        /*SAĞ*/
        if (pagestatus == 0) {
            openPage('5', 'right');
        }
        else if (pagestatus >= 1 && pagestatus <= 4){
            go('center');
        }
    }
    if (event.keyCode === 37) {
        /*SOL*/
        if (pagestatus == 0) {
            openPage('1', 'left');
        }
        else if (pagestatus >= 5 && pagestatus <= 9) {
            go('center');
        }
    }
    if (event.keyCode === 38) {
        /*YUKARI*/
        if (pagestatus > 1 && pagestatus <= 4) {
            openPage(pagestatus - 1, 'left');
        }
        else if (pagestatus > 5 && pagestatus <= 9) {
            openPage(pagestatus - 1, 'right');
        }
    }
    if (event.keyCode === 40) {
        /*AŞAĞI*/
        if (pagestatus >= 1 && pagestatus < 4) {
            openPage(pagestatus + 1, 'left');
        }
        else if (pagestatus >= 5 && pagestatus < 9) {
            openPage(pagestatus + 1, 'right');
        }
    }
});

window.addEventListener('keyup', event => {
    if (event.keyCode === 87) {
        moveup = 0;
        move('up');
        move('left');
        move('down');
        move('right');
    }

    if (event.keyCode === 65) {
        moveleft = 0;
        move('up');
        move('left');
        move('down');
        move('right');
    }

    if (event.keyCode === 83) {
        movedown = 0;
        move('up');
        move('left');
        move('down');
        move('right');
    }

    if (event.keyCode === 68) {
        moveright = 0;
        move('up');
        move('left');
        move('down');
        move('right');
    }
});

var totaldistanceX = window.innerWidth / 2;
var totaldistanceY = window.innerHeight / 2;

function move(direction) {
    speed = 120;
    if (direction == 'left' && moveleft==1) {
        totaldistanceX -= speed;
        if (totaldistanceX<=200) {
            totaldistanceX = 200;
        }
        document.getElementById('logolayer2').style.left = totaldistanceX + 'px';
        document.getElementById('logolayer2').style.transform = 'translate(-50%,-50%) scale(1) rotate(180deg)';
    }
    else if (direction == 'right' && moveright == 1) {
        totaldistanceX += speed;
        if (totaldistanceX >= window.innerWidth-200) {
            totaldistanceX = window.innerWidth-200;
        }
        document.getElementById('logolayer2').style.left = totaldistanceX + 'px';
        document.getElementById('logolayer2').style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)';
    }
    else if (direction == 'up' && moveup == 1) {
        totaldistanceY -= speed;
        if (totaldistanceY <= 0) {
            totaldistanceY = 0;
        }
        document.getElementById('logolayer2').style.top = totaldistanceY + 'px';
        document.getElementById('logolayer2').style.transform = 'translate(-50%,-50%) scale(1) rotate(270deg)';
    }
    else if (direction == 'down' && movedown == 1) {
        totaldistanceY += speed;
        if (totaldistanceY >= window.innerHeight) {
            totaldistanceY = window.innerHeight;
        }
        document.getElementById('logolayer2').style.top = totaldistanceY + 'px';
        document.getElementById('logolayer2').style.transform = 'translate(-50%,-50%) scale(1) rotate(90deg)';
    }

    setTimeout[250];
}

document.addEventListener("DOMContentLoaded", function () {

});

document.addEventListener('click', function (e) {
    if (e.target != document.getElementById('offers-menu-container') && e.target != document.getElementsByClassName('offers-label')[0]) {
        document.getElementById('offers-menu-container').style.height = '0';
    }
    if (e.target != document.getElementById('aboutme-menu-container') && e.target != document.getElementsByClassName('aboutme-label')[0]) {
        document.getElementById('aboutme-menu-container').style.height = '0';
    }
});