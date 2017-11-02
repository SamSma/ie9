import React,{ Component } from 'react';

export default class WaterMark extends Component{
    render(){
        var img = new Image();
        img.src = require("../../common/images/baseshop/defaultImg.png");
        img.onload=function(){
            //准备canvas环境
            var canvas=document.getElementById("myCanvas");
            var ctx=canvas.getContext("2d");
            // 绘制图片
            ctx.drawImage(img,0,0);
            // 绘制水印
            ctx.font="20px microsoft yahei";
            ctx.fillStyle = "rgba(255,255,255,0.5)";
            ctx.fillText("my images",100,100);
        }
        console.log(this.props.position);
        return(
            <div>
                <canvas id="myCanvas" width="600" height="420" >
                    Your browser does not support the HTML5 canvas tag.
                </canvas>
            </div>
        )
    }
}