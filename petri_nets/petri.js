c = document.getElementById("canvas");

ctx = c.getContext("2d");

ctx.strokeStyle="black";
ctx.lineWidth=1;
ctx.lineCap="square";
ctx.fillStyle="black";

 ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(100,100);
ctx.stroke(); 

tile_size=16;
map_width=40;
map_height=40;
map_dim=40;

function drawRect(ctx, x, y, w, h){
	ctx.closePath();
	ctx.moveTo(x,y);
	ctx.rect(tu(x), tu(y), tu(w), tu(h));
	ctx.stroke();
	ctx.closePath();
}

function tu(u){
	return u*tile_size;
}

drawRect(ctx, 5, 5, 3, 3);


