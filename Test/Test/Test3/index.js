let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let bird = new Image();
let bg = new Image();
let fg = new Image();
let ongtren = new Image();
let ongduoi = new Image();

bird.src = "bird.png";
bg.src = "bg.png";
fg.src = "fg.png";
ongtren.src = "ongtren.png";
ongduoi.src = "ongduoi.png";

let gap = 320;
let constant = ongtren.height+gap;

let bX = 80;
let bY = 350;
let gravity = 2

document.addEventListener("keydown",function (){
    bY -= 120;
})

let ong = [];

ong[0] = {
    x : cvs.width,
    y: 0
}

function draw() {
    ctx.drawImage(bg,0,0);
    for (let i=0; i<ong.length;i++) {
        ctx.drawImage(ongtren,ong[i].x,ong[i].y)
        ctx.drawImage(ongduoi,ong[i].x,ong[i].y+constant);
        ong[i].x--;

        if (ong[i].x == 300) {
            ong.push({
                x : cvs.width,
                y : Math.floor(Math.random()*ongtren.height) - ongtren.height
            })
        }
        if (bX + bird.width >= ong[i].x && bX <= ong[i].x + ongtren.width
            && (bY <= ong[i].y + ongtren.height || bY+bird.height >=
                ong[i].y+constant) || bY + bird.height >= cvs.height - fg.height) {
            location.reload();
        }
    }

    ctx.drawImage(fg,0,cvs.height - fg.height);
    ctx.drawImage(bird,bX,bY);
    bY += gravity;
    requestAnimationFrame(draw)

}



draw();
