//qq客服弹出对话框
var online= new array();
var urlroot = "http://gdp.istudy.com.cn/";
var tout = -1;
var drag = false;
var g_safenode = null;
lastscrolly = 0;
var kfguin;
var ws;
var companyname;
var welcomeword;
var type;
var wpadomain;
var eid;

var browser = {
	ie:/msie/.test(window.navigator.useragent.tolowercase()),
	moz:/gecko/.test(window.navigator.useragent.tolowercase()),
	opera:/opera/.test(window.navigator.useragent.tolowercase()),
	safari:/safari/.test(window.navigator.useragent.tolowercase())
};


if(kfguin)
{
	
  //_ten_rightdivhtml = '<div id="_ten_rightdiv" style="position:absolute; top:160px; right:1px; display:none;">';

  //_ten_rightdivhtml += kf_getpopup_ten_rightdivhtml(kfguin,ws,wpadomain);
  
  //_ten_rightdivhtml += '</div>';
  
  //document.write(_ten_rightdivhtml);
  if(type==1 && kf_getcookie('hasshown')==0)
  {
  	  companyname = companyname.substr(0,15);	   	  
      welcomeword = kf_processwelcomeword(welcomeword);
  	  
  	  kfguin = kf_getsafehtml(kfguin);
  	  companyname = kf_getsafehtml(companyname);
  	  
  	  welcomeword = welcomeword.replace(/<br>/g,'\r\n');
  	  welcomeword = kf_getsafehtml(welcomeword);
  	  welcomeword = welcomeword.replace(/\r/g, "").replace(/\n/g, "<br>");
  
      window.settimeout("kf_sleepshow()",200);
  }
  window.settimeout("kf_movewithscroll()",1);
}

function kf_getsafehtml(s)
{
	var html = "";
	var safenode = g_safenode;
	if(!safenode){
		safenode = document.createelement("textarea");
	}
	if(safenode){
		if(browser.moz){
			safenode.textcontent = s;
		}
		else{
			safenode.innertext = s;
		}
		html = safenode.innerhtml;
		if(browser.moz){
			safenode.textcontent = "";
		}
		else{
			safenode.innertext = "";
		}
		g_safenode = safenode;
	}
	return html;
}

function kf_movewithscroll() 
{ 
	 if(typeof window.pageyoffset != 'undefined') { 
        nowy = window.pageyoffset; 
     } 
     else if(typeof document.compatmode != 'undefined' && document.compatmode != 'backcompat') { 
        nowy = document.documentelement.scrolltop; 
     } 
     else if(typeof document.body != 'undefined') { 
        nowy = document.body.scrolltop; 
     }  

		percent = .1*(nowy - lastscrolly);
		if(percent > 0) 
		{
			percent=math.ceil(percent);
		} 
		else
		{
			percent=math.floor(percent);
		}

	 //document.getelementbyid("_ten_rightdiv").style.top = parseint(document.getelementbyid("_ten_rightdiv").style.top) + percent+"px";
	 if(document.getelementbyid("kfpopupdiv"))
	 {
	 	document.getelementbyid("kfpopupdiv").style.top = parseint(document.getelementbyid("kfpopupdiv").style.top) + percent+"px";
	 }
	 lastscrolly = lastscrolly + percent;
	 tout = window.settimeout("kf_movewithscroll()",1);
}

function kf_hide() 
{
	if(tout!=-1)
	{
		cleartimeout(tout);   
		tout=-1;
	}
	//document.getelementbyid("_ten_rightdiv").style.visibility = "hidden";
	//document.getelementbyid("_ten_rightdiv").style.display = "none";
	kf_setcookie('hasshown', 1, '', '/', wpadomain); 
}

function kf_hidekfpopup()
{
	if(tout!=-1)
	{
		cleartimeout(tout);   
		tout=-1;
	}
	document.getelementbyid("kfpopupdiv").style.visibility = "hidden";
	document.getelementbyid("kfpopupdiv").style.display = "none";
	tout=window.settimeout("kf_movewithscroll()",1);
	kf_setcookie('hasshown', 1, '', '/', wpadomain); 
}

function kf_getpopupdivhtml(kfguin,reference,companyname,welcomeword, wpadomain)
{
	var temp = '';
  	temp += '<span class="zixun0704_x"><a href="javascript:void(0);" onclick="kf_hidekfpopup();return false;"><!--关闭--></a></span>';
  	temp += '<img src="'+urlroot+'web/pic_zixun0704_nv.jpg" class="zixun0704_img" />';
  	temp += '<p class="zixun0704_font">'+welcomeword+'</p>';
  	temp += '<div class="zixun0704_button"><a href="javascript:void(0);" onclick="kf_openchatwindow(1,\'b\',\''+kfguin+'\')"><img src="'+urlroot+'web/pic_zixun0704qq.jpg" /></a>&nbsp;<a href="javascript:void(0);" onclick="kf_hidekfpopup();return false;"><img src="'+urlroot+'web/pic_zixun0704_later.jpg" /></a></div>';
	
    return temp;
}

//function kf_getpopup_ten_rightdivhtml(kfguin,reference, wpadomain)
//{	
//	var temp = "";
//	
//	temp += '<div style="width:90px; height:150px;">';
//	temp += '<div style="width:8px; height:150px; float:left; background:url('+urlroot+'bg_1.gif);"></div>';
//	temp += '<div style="float:left; width:74px; height:150px; background:url('+urlroot+'middle.jpg); background-position: center;">';
//	temp += '<div ><h1 style="line-height:17px; font-size:14px; color:#ffffff; margin:0px; padding:10px 0 13px 8px; display:block; background:none; border:none; float:none; position:static;">&nbsp;</h1></div>';
//	temp += '<div style="height:83px; padding:0 0 0 2px; clear:both;"><div style="width:70px; height:70px; float:left; background:url('+urlroot+'face.jpg);"></div></div>';
//	temp += '<div style="clear:both;"><a href="#" onclick="kf_openchatwindow(0,\''+wpadomain+'\',\''+kfguin+'\')" style="width:69px; height:21px; background:url('+urlroot+'btn_2.gif); margin:0 0 0 2px; display:block;"></a></div></div>';
//	temp += '<div style="width:8px; height:150px; float:left; background:url('+urlroot+'bg_1.gif) right;"></div></div>';
//	
//	return temp;
//}

//added by simon 2008-11-04
function kf_openchatwindow(flag, wpadomain, kfguin)
{
	window.open('http://b.qq.com/webc.htm?new=0&sid='+kfguin+'&eid='+eid+'&o=&q=7', '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
	if(flag==1)
	{
		kf_hidekfpopup();
	}
	return false;
}
//added by simon 2008-11-04 end

function kf_validatewelcomeword(word)
{
	var count = 0;
	
	for(var i=0;i<word.length;i++)
	{
		if(word.charat(i)=='\n')
		{
			count++;
		}
		if(count>2)
		{
				return 2;
		}
	}
	if(word.length > 57+2*count)
	{
		return 1;
	}
	
	count = 0;
  var temp = word.indexof('\n');
  while(temp!=-1)
  {
  	word = word.substr(temp+1); 
  	if(temp-1<=19) 
  	{
  		count += 19;
  	}
  	else if(temp-1<=38)
  	{
  		count += 38;
  	}
  	else if(temp-1<=57)
  	{
  		count += 57;
  	}
  	
  	temp = word.indexof('\n');
  }
  count+=word.length;	
  if(count>57)
  {
  	return 3;
  }
  
  return 0;
}

function kf_processwelcomeword(word)
{
	word = word.substr(0,57+10);
	var result = '';
	var count = 0;	
	var temp = word.indexof('<br>');
	
  while(count<57 && temp!=-1)
  {

  	if(temp<=19) 
  	{
  		count += 19;
  		if(count<=57)
  		{
  		   result += word.substr(0,temp+5);
  	  }
  	  else
  	  {
  	  	 result += word.substr(0,57-count>word.length?word.length:57-count);
  	  }
  	}
  	else if(temp<=38)
  	{
  		count += 38;
  		if(count<=57)
  		{
  		   result += word.substr(0,temp+5);
  	  }
  	  else
  	  {
  	  	 result += word.substr(0,57-count>word.length?word.length:57-count);
  	  }
  	}
  	else if(temp<=57)
  	{
  		count += 57;
  		if(count<=57)
  		{
  		   result += word.substr(0,temp+5);
  	  }
  	  else
  	  {
  	  	 result += word.substr(0,57-count>word.length?word.length:57-count);
  	  }
  	}
  	
  	word = word.substr(temp+5); 
  	temp = word.indexof('<br>');
  }
  
  if(count<57)
  {
      result += word.substr(0,57-count>word.length?word.length:57-count);
  }
  
  return result;
}

function kf_setcookie(name, value, exp, path, domain)
{
	var nv = name + "=" + escape(value) + ";";

	var d = null;
	if(typeof(exp) == "object")
	{
		d = exp;
	}
	else if(typeof(exp) == "number")
	{
		d = new date();
		d = new date(d.getfullyear(), d.getmonth(), d.getdate(), d.gethours(), d.getminutes() + exp, d.getseconds(), d.getmilliseconds());
	}
	
	if(d)
	{
		nv += "expires=" + d.togmtstring() + ";";
	}
	
	if(!path)
	{
		nv += "path=/;";
	}
	else if(typeof(path) == "string" && path != "")
	{
		nv += "path=" + path + ";";
	}

	if(!domain && typeof(vs_cookiedm) != "undefined")
	{
		domain = vs_cookiedm;
	}
	
	if(typeof(domain) == "string" && domain != "")
	{
		nv += "domain=" + domain + ";";
	}

	document.cookie = nv;
}

function kf_getcookie(name)
{
	var value = "";
	var cookies = document.cookie.split("; ");
	var nv;
	var i;

	for(i = 0; i < cookies.length; i++)
	{
		nv = cookies[i].split("=");

		if(nv && nv.length >= 2 && name == kf_rtrim(kf_ltrim(nv[0])))
		{
			value = unescape(nv[1]);
		}
	}

	return value;
} 

function kf_sleepshow()   
{   
	kf_setcookie('hasshown', 0, '', '/', wpadomain); 
	var position_1 = (document.documentelement.clientwidth-381)/2+document.body.scrollleft;
	var position_2 = (document.documentelement.clientheight-159)/2+document.body.scrolltop; 
	popupdivhtml = '<div class="zixun0704" id="kfpopupdiv" onmousedown="mymove.move(\'kfpopupdiv\',event,1);"  style="z-index:10000; position: absolute; top: '+position_2+'px; left: '+position_1+'px;color:#000;font-size: 12px;cursor:move;height: 159px;width: 381px;">';
  	popupdivhtml += kf_getpopupdivhtml(kfguin,ws,companyname,welcomeword, wpadomain);
  	popupdivhtml += '</div>';
	if(document.body.insertadjacenthtml)
	{
  		document.body.insertadjacenthtml("beforeend",popupdivhtml);
	}
	else
	{
		$("#footer").before(popupdivhtml);
//		swhere="beforeend";
//		shtml=popupdivhtml;
//		alert(htmlelement.prototype.insertadjacenthtml);
//		htmlelement.prototype.insertadjacenthtml = function(swhere, shtml){
//            var df = null,r = this.ownerdocument.createrange();
//            switch (string(swhere).tolowercase()) {
//                case "beforebegin":
//                    r.setstartbefore(this);
//                    df = r.createcontextualfragment(shtml);
//                    this.parentnode.insertbefore(df, this);
//                    break;
//                case "afterbegin":
//                    r.selectnodecontents(this);
//                    r.collapse(true);
//                    df = r.createcontextualfragment(shtml);
//                    this.insertbefore(df, this.firstchild);
//                    break;
//                case "beforeend":				
//                    r.selectnodecontents(this);
//                    r.collapse(false);
//                    df = r.createcontextualfragment(shtml);
//                    this.appendchild(df);
//                    break;
//                case "afterend":
//                    r.setstartafter(this);
//                    df = r.createcontextualfragment(shtml);
//                    this.parentnode.insertbefore(df, this.nextsibling);
//                    break;
//            }
//        };
	}
} 

function kf_dealerrors() 
{
	kf_hide();
	return true;
}

function kf_ltrim(str)
{
  while (str.charat(0) == " ")
  {
    str = str.slice(1);
  }
  return str;
}

function kf_rtrim(str)
{
  var ilength = str.length;
  while (str.charat(ilength - 1) == " ")
  {
    str = str.slice(0, ilength - 1);
	ilength--;
  }
  return str;
}

window.onerror = kf_dealerrors;
var mymove = new tong_movediv();   

function tong_movediv()
{ 
 	  this.move=function(id,evt,t) 
 	  {    
 	  	if(id == "") 
		{
			return;
		} 
 	  	var o = document.getelementbyid(id);    
 	  	if(!o) 
		{
			return;
		}    
 	    evt = evt ? evt : window.event;    
 	    o.style.position = "absolute";    
 	    o.style.zindex = 9999;    
 	    var obj = evt.srcelement ? evt.srcelement : evt.target;   
 	    var w = o.offsetwidth;      
 	    var h = o.offsetheight;      
 	    var l = o.offsetleft;      
 	    var t = o.offsettop;  
 	    var div = document.createelement("div");  
 	    document.body.appendchild(div);   
 	    div.style.csstext = "filter:alpha(opacity=10,style=0);opacity:0.2;width:"+w+"px;height:"+h+"px;top:"+t+"px;left:"+l+"px;position:absolute;background:#000";      
 	    div.setattribute("id", id +"temp");    
 	    this.move_onlymove(id,evt,t); 
 	}  
 	
 	this.move_onlymove = function(id,evt,t) 
 	{    
 		  var o = document.getelementbyid(id+"temp");    
 		  if(!o)
		  {
			return;
		  }   
 		  evt = evt?evt:window.event; 
 		  var relleft = evt.clientx - o.offsetleft;
 		  var reltop = evt.clienty - o.offsettop;    
 		  if(!window.captureevents)    
 		  {      
 		  	 o.setcapture();           
 		  }   
 		  else   
 		  {     
 		  	 window.captureevents(event.mousemove|event.mouseup);      
 		  }       
 		  			  
	      document.onmousemove = function(e)
	      {
	            if(!o)
	            {
	                return;
	            }
	            e = e ? e : window.event;
	
	        	var bh = math.max(document.body.scrollheight,document.body.clientheight,document.body.offsetheight,
	        						document.documentelement.scrollheight,document.documentelement.clientheight,document.documentelement.offsetheight);
	        	var bw = math.max(document.body.scrollwidth,document.body.clientwidth,document.body.offsetwidth,
	        						document.documentelement.scrollwidth,document.documentelement.clientwidth,document.documentelement.offsetwidth);
	        	var sbw = 0;
	        	if(document.body.scrollwidth < bw)
	        		sbw = document.body.scrollwidth;
	        	if(document.body.clientwidth < bw && sbw < document.body.clientwidth)
	        		sbw = document.body.clientwidth;
	        	if(document.body.offsetwidth < bw && sbw < document.body.offsetwidth)
	        		sbw = document.body.offsetwidth;
	        	if(document.documentelement.scrollwidth < bw && sbw < document.documentelement.scrollwidth)
	        		sbw = document.documentelement.scrollwidth;
	        	if(document.documentelement.clientwidth < bw && sbw < document.documentelement.clientwidth)
	        		sbw = document.documentelement.clientwidth;
	        	if(document.documentelement.offsetwidth < bw && sbw < document.documentelement.offsetwidth)
	        		sbw = document.documentelement.offsetwidth;
	             
	            if(e.clientx - relleft <= 0)
	            {
	                o.style.left = 0 +"px";
	            }
	            else if(e.clientx - relleft >= bw - o.offsetwidth - 2)
	            {
	                o.style.left = (sbw - o.offsetwidth - 2) +"px";
	            }
	            else
	            {
	                o.style.left = e.clientx - relleft +"px";
	            }
	            if(e.clienty - reltop <= 1)
	            {
	                o.style.top = 1 +"px";
	            }
	            else if(e.clienty - reltop >= bh - o.offsetheight - 30)
	            {
	                o.style.top = (bh - o.offsetheight) +"px";
	            }
	            else
	            {
	                o.style.top = e.clienty - reltop +"px";
	            }
	      }
 		   
 		  document.onmouseup = function()      
 		  {       
 		   	   if(!o) return;       
 		   	   	
 		   	   if(!window.captureevents) 
			   {
			   	  o.releasecapture();  
			   }         		   	   	      
 		   	   else  
			   {
			   	  window.releaseevents(event.mousemove|event.mouseup); 
			   }     
 		   	   	        
 		   	   var o1 = document.getelementbyid(id);       
 		   	   if(!o1) 
			   {
			      return; 
			   }        		   	   	
 		   	   var l0 = o.offsetleft;       
 		   	   var t0 = o.offsettop;       
 		   	   var l = o1.offsetleft;       
 		   	   var t = o1.offsettop;   
 		   	   
 		   	   //alert(l0 + " " +  t0 +" "+ l +" "+t);     
 		   	   
 		   	   mymove.move_e(id, l0 , t0, l, t,t);       
 		   	   document.body.removechild(o);       
 		   	   o = null;      
 		}  
 	}  
 	
 	
 	this.move_e = function(id, l0 , t0, l, t,t)     
 	{      
 		    if(typeof(window["ct"+ id]) != "undefined") 
			{
				  cleartimeout(window["ct"+ id]);   
			}
 		    
 		    var o = document.getelementbyid(id);      
 		    if(!o) return;      
 		    var sl = st = 8;      
 		    var s_l = math.abs(l0 - l);      
 		    var s_t = math.abs(t0 - t);      
 		    if(s_l - s_t > 0)  
			{
				if(s_t) 
				{
					sl = math.round(s_l / s_t) > 8 ? 8 : math.round(s_l / s_t) * 6; 
				}       
 		    		      
 		        else
				{
					sl = 0; 
				}            		      
			}        		    	   
 		    else
			{
				if(s_l)
				{
					st = math.round(s_t / s_l) > 8 ? 8 : math.round(s_t / s_l) * 6;   
				}          		    		    
 		        else  
			    {
			  	    st = 0;
			    }       		      	  
			}       
 		    	       		      	
 		    if(l0 - l < 0) 
			{
				sl *= -1; 
			}  		    	     
 		    if(t0 - t < 0) 
			{
				st *= -1; 
			}   		    	     
 		    if(math.abs(l + sl - l0) < 52 && sl) 
			{
 		    	sl = sl > 0 ? 2 : -2; 					
			}    
 		    if(math.abs(t + st - t0) < 52 && st) 
			{
	        	st = st > 0 ? 2 : -2;  					
			}      
 		    if(math.abs(l + sl - l0) < 16 && sl) 
			{
 		    	sl = sl > 0 ? 1 : -1;  					
			}   
 		    if(math.abs(t + st - t0) < 16 && st) 
			{
 		    	st = st > 0 ? 1 : -1;    					
			} 
 		    if(s_l == 0 && s_t == 0)
			{
     		    return;   				
			} 
 		    if(t)      
 		    {    
 		    	o.style.left = l0 +"px";    
 		    	o.style.top = t0 +"px";    
 		    	return;      
 		    }      
 		    else      
 		    {    
 		    	if(math.abs(l + sl - l0) < 2) 
				{
					o.style.left = l0 +"px";  
				}       		    		 
 		    	else     
				{
					o.style.left = l + sl +"px";   
				}   		    	 
 		    	if(math.abs(t + st - t0) < 2) 
				{
					o.style.top = t0 +"px";   
				}        		    		 
 		    	else    
				{
					o.style.top = t + st +"px";   
				}
 		    		         		    	
 		    	window["ct"+ id] = window.settimeout("mymove.move_e('"+ id +"', "+ l0 +" , "+ t0 +", "+ (l + sl) +", "+ (t + st) +","+t+")", 1);      
 		    }     
 		}   
} 
	
function wpa_count()
{ 
    var body = document.getelementsbytagname('body').item(0);
    var img = document.createelement('img');
	var now = new date();
    img.src = "http://"+wpadomain+".qq.com/cgi/wpac?kfguin=" + kfguin + "&ext=0" + "&time=" + now.gettime() + "ip=172.23.30.15&";
    img.style.display = "none";
    body.appendchild(img);
}