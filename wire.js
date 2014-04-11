li=document.getElementsByTagName("*")
a=Array(li.length)
    for(i=0;i<li.length;i++)
{
            a[i]=li[i].getBoundingClientRect();
}
var b=document.getElementsByTagName("body")[0];
var w=b.getBoundingClientRect()['width'];
var h=b.getBoundingClientRect()['height'];
b.innerHTML="";
b.appendChild(document.createElement('canvas')).id='can';
var c=document.getElementById("can");
var ctx=c.getContext("2d");
c.width=w;
c.height=h;
for(i=0;i<a.length;i++)
{
            if(a[i]['width']>0 && a[i]['height']>0)
                        ctx.rect(a[i]['left'],a[i]['top'],a[i]['width'],a[i]['height']);
}
ctx.setLineWidth=1;
ctx.stroke();
