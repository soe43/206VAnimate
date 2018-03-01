var board = document.getElementById("board");
var clearButt = document.getElementById("clear");
var stopButt = document.getElementById("stop");
var circButt = document.getElementById("circle");
var dvdButt = document.getElementById("dvd");

var timerID;

var ns = "http://www.w3.org/2000/svg"

var animateCirc = function(){
    var r = 0;
    var isSmall = true;
    stop();
    var circ=function(){
	clear();
	if(r==250){
	    isSmall = false;
	}
	if(isSmall){
	    var c = document.createElementNS(ns, "circle");
	    c.setAttribute("cx", 250);
	    c.setAttribute("cy", 250);
	    c.setAttribute("r", r);
	    c.setAttribute("fill", "magenta");
	    c.setAttribute("stroke", "lightsteelblue");
	    board.appendChild(c);
	    r++;
	}
	else{
	    var c = document.createElementNS(ns, "circle");
	    c.setAttribute("cx", 250);
	    c.setAttribute("cy", 250);
	    c.setAttribute("r", r);
	    c.setAttribute("fill", "magenta");
	    c.setAttribute("stroke", "lightsteelblue");
	    board.appendChild(c);
	    r--;
	    if(r==0){
		isSmall = true;
	    }
	}
    }
    timerID = setInterval(circ, 10);
}

var animateDVD = function(){
    var centerX = 250;
    var centerY = 250;
    var angle = Math.PI / 8;
    stop();
    
    var dx = Math.cos(angle) * 4;
    var dy = Math.sin(angle) * 4;

    var move = function(){
	clear();
	var dvd = document.createElementNS(ns, "rect");
	dvd.setAttribute("x",centerX - 40);
	dvd.setAttribute("y",centerY - 20);
	dvd.setAttribute("width", 80);
	dvd.setAttribute("height", 40);
	dvd.setAttribute("fill", "aqua");
	dvd.setAttribute("stroke", "black");
	board.appendChild(dvd);

	if(centerX <= 40 || centerX >= 460){
	    angle = Math.PI / Math.floor((Math.random() * 8) + 3);
	    dx *= -1;
	}
	if(centerY <= 20 || centerY >= 480){
	    angle = Math.PI / Math.floor((Math.random() * 8) + 3);
	    dy *= -1;
	}

	centerX += dx;
	centerY += dy;
    }
    timerID = setInterval(move, 16.67);
}

var clear = function(){
    while(board.hasChildNodes()){
	board.removeChild(board.childNodes[0]);
    }
}

var stop = function(){
    clearInterval(timerID);
}

circButt.addEventListener("click", animateCirc);
clearButt.addEventListener("click", clear);
stopButt.addEventListener("click", stop);
dvdButt.addEventListener("click", animateDVD);

