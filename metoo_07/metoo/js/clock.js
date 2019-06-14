function time(){
  clock();
  setInterval(clock,1000);//调用clock函数执行动画操作，千分之一秒
}
function clock(){
  var now = new Date();	//实例化对象
  var context = document.getElementById('canvas').getContext('2d');
  context.save();	//保存当前状态
  context.clearRect(0,0,150,150);	//擦除画布
  context.translate(75,75);	//向左，向下平移75个单位
  context.scale(0.4,0.4);	//图形缩放0.4
  context.rotate(-Math.PI/2);	//逆时针旋转90度
  context.strokeStyle = "black";	//设置图形边框的样式颜色为黑色
  context.fillStyle = "white";	//填充颜色为白色
  context.lineWidth = 8;	//设置线宽为8
  context.lineCap = "round";	//线段端为默认的圆形

  // Hour marks
  context.save();//保存当前状态
  for (var i=0;i<12;i++){	//通过for循环设置表盘的小时时间隔
    context.beginPath();	//创建设置小时的路径
    context.rotate(Math.PI/6);//顺时针旋转30度
    context.moveTo(100,0);	//将当前位置移动到指定的位置
    context.lineTo(120,0);	
    context.stroke();	//绘制时钟小时的时间隔
  }
  context.restore();	//调用restore从栈中取出之前保存的图形

  // Minute marks
  context.save();
  context.lineWidth = 5;
  for (i=0;i<60;i++){	//通过for循环设置表盘的分钟间隔
    if (i%5!=0) {	//通过if语句判断结果，如果相除结果不为0，则继续执行循环
      context.beginPath();	//创建设置分钟的路径
      context.moveTo(117,0);
      context.lineTo(120,0);
      context.stroke();
    }
    context.rotate(Math.PI/30);	//顺时针旋转6度
  }
  context.restore();
  
  var sec = now.getSeconds();	//设置秒钟时间变量
  var min = now.getMinutes();	//设置分钟时间变量
  var hr  = now.getHours();		//设置小时时间变量
  hr = hr>=12 ? hr-12 : hr;

  context.fillStyle = "black";

  // 绘制时针
  context.save();
  context.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
  context.lineWidth = 14;
  context.beginPath();
  context.moveTo(-20,0);
  context.lineTo(80,0);
  context.stroke();
  context.restore();

  // write Minutes
  context.save();
  context.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
  context.lineWidth = 10;
  context.beginPath();
  context.moveTo(-28,0);
  context.lineTo(112,0);
  context.stroke();
  context.restore();
  
  // Write seconds
  context.save();
  context.rotate(sec * Math.PI/30);
  context.strokeStyle = "#D40000";
  context.fillStyle = "#D40000";
  context.lineWidth = 6;
  context.beginPath();
  context.moveTo(-30,0);
  context.lineTo(83,0);
  context.stroke();
  context.restore();
  
  context.beginPath();
  context.lineWidth = 14;
  context.strokeStyle = '#325FA2';
  context.arc(0,0,142,0,Math.PI*2,true);
  context.stroke();
  context.restore();
}
