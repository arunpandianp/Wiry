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
top_bar=b.appendChild(document.createElement('div'));
top_bar.id='topdiv';
b.appendChild(document.createElement('canvas')).id='can';
function save_png()
{
            var c=document.getElementById("can");
                    var image = c.toDataURL("image/png").replace("image/png", "image/octet-stream");
                            window.location.href=image; // it will save locally
}
document.getElementById('topdiv').innerHTML='<style type="text/css">.classname {        -moz-box-shadow:inset 0px 1px 0px 0px #e184f3;  -webkit-box-shadow:inset 0px 1px 0px 0px #e184f3;       box-shadow:inset 0px 1px 0px 0px #e184f3;       background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05,#c123de), color-stop(1, #a20dbd) ); background:-moz-linear-gradient( center top, #c123de 5%, #a20dbd 100% );filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#c123de", endColorstr="#a20dbd");      background-color:#c123de;       webkit-border-top-left-radius:20px;     -moz-border-radius-topleft:20px;        border-top-left-radius:20px;    -webkit-border-top-rightradius:20px;    -moz-border-radius-topright:20px;       border-top-right-radius:20px;   -webkit-border-bottom-right-radius:20px;        -moz-border-radius-bottomright:20px;    border-bottom-right-radius:20px;        -webkit-border-bottom-left-radius:20px; -mozborder-radius-bottomleft:20px;      border-bottom-left-radius:20px; text-indent:0;  border:1px solid #a511c0;       display:inline-block;   color:#ffffff;  font-family:Arial;      font-size:15px; font-weight:bold;       font-style:italic;      height:20px;    lineheight:20px;        width:100px;    text-decoration:none;   text-align:center;      text-shadow:1px 1px 0px #9b14b3;}.classname:hover {     background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #a20dbd), color-stop(1, #c123de) );        background:moz-linear-gradient( center top, #a20dbd 5%, #c123de 100% ); filter:progid:DXImageTransform.Microsoft.gradien(startColorstr="#a20dbd", endColorstr="#c123de");       background-color:#a20dbd;}.classname:active {   position:relative;      top:1px;}</style><a href="#" class="classname" onclick="save_png()">Save as png</a></div>';
var c=document.getElementById("can");
c.width=w;
c.height=h;
var ctx=c.getContext("2d");
for(i=0;i<a.length;i++)
{
            if(a[i]['width']>0 && a[i]['height']>0)
                        ctx.rect(a[i]['left'],a[i]['top'],a[i]['width'],a[i]['height']);
}
ctx.setLineWidth=1;
ctx.stroke();

