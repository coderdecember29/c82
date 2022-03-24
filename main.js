var mouseEvent = "empty";
var last_position_of_X,last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    curent_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    curent_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last position of X and Y");
        console.log("x = " + last_position_of_X + " , y = " + last_position_of_y);
        ctx.moveTo(last_position_of_X,last_position_of_Y);
        console.log("current position of x and y");
        console.log("x = " + curent_position_of_mouse_x + " , y = " + curent_position_of_mouse_y);
        ctx.lineTo(curent_position_of_mouse_x,curent_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_X = curent_position_of_mouse_x;
    last_position_of_Y = curent_position_of_mouse_y;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e)
{
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e)
{
    mouseEvent = "mouseEleave";
}