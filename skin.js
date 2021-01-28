// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: SkinTourEnel.ggsk
// Generated 2021-01-27T22:50:12

function pano2vrSkin(player,base) {
	player.addVariable('vis_image_popup', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._screentint_image=document.createElement('div');
		el.ggId="screentint_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_image.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_image.style[domTransition]='';
				if (me._screentint_image.ggCurrentLogicStateVisible == 0) {
					me._screentint_image.style.visibility=(Number(me._screentint_image.style.opacity)>0||!me._screentint_image.style.opacity)?'inherit':'hidden';
					me._screentint_image.ggVisible=true;
				}
				else {
					me._screentint_image.style.visibility="hidden";
					me._screentint_image.ggVisible=false;
				}
			}
		}
		me._screentint_image.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
		}
		me._screentint_image.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_image);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup.style[domTransition]='';
				if (me._image_popup.ggCurrentLogicStateVisible == 0) {
					me._image_popup.style.visibility=(Number(me._image_popup.style.opacity)>0||!me._image_popup.style.opacity)?'inherit':'hidden';
					me._image_popup.ggVisible=true;
				}
				else {
					me._image_popup.style.visibility="hidden";
					me._image_popup.ggVisible=false;
				}
			}
		}
		me._image_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIiBmaWxsPSJ3aGl0ZSIgaGVpZ2h0PSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMCIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKD'+
			'Q1IDE2IDE2KSIgcj0iMCIgY3g9IjE2IiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBkdXI9IjFzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjEyNXMiIGNhbGNNb2RlPSJzcGxpbmUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5'+
			'U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4yNXMiIGNhbGNNb2RlPSJzcGxpbmUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiByPSIwIiBjeD0iMTYiIGN5PSIzIj4KICA8YW5pbWF0ZSB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49Ij'+
			'AuMzc1cyIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC41cyIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNikiIHI9IjAiIGN4PSIxNiIg'+
			'Y3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC42MjVzIiBjYWxjTW9kZT0ic3BsaW5lIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgcj0iMCIgY3g9IjE2IiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBkdXI9IjFzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLj'+
			'g7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjc1cyIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC44NzVzIiBjYWxjTW9kZT0ic3BsaW5l'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgcj0iMCIgY3g9IjE2IiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBkdXI9IjFzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIiBjYWxjTW9kZT0ic3BsaW5lIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._image_popup.appendChild(me._loading_image);
		el=me._popup_image=document.createElement('div');
		els=me._popup_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._popup_image.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="popup_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_image.style[domTransition]='';
				if (me._popup_image.ggCurrentLogicStateVisible == 0) {
					me._popup_image.style.visibility=(Number(me._popup_image.style.opacity)>0||!me._popup_image.style.opacity)?'inherit':'hidden';
					me._popup_image.ggSubElement.src=me._popup_image.ggText;
					me._popup_image.ggVisible=true;
				}
				else {
					me._popup_image.style.visibility="hidden";
					me._popup_image__img.src = '';
					me._popup_image.ggVisible=false;
				}
			}
		}
		me._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var img = me._popup_image__img;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = parentHeight * aspectRatioImg;
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = parentWidth / aspectRatioImg;
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._image_popup.appendChild(me._popup_image);
		me.divSkin.appendChild(me._image_popup);
		el=me._image_popup_close=document.createElement('div');
		els=me._image_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4x'+
			'LTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMtMC4zLTAuNC0wLjYtMC40'+
			'LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._image_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0w'+
			'LjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4x'+
			'LTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._image_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="image_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 636px;';
		hs+='top : 214px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_popup_close.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_close.style[domTransition]='';
				if (me._image_popup_close.ggCurrentLogicStateVisible == 0) {
					me._image_popup_close.style.visibility=(Number(me._image_popup_close.style.opacity)>0||!me._image_popup_close.style.opacity)?'inherit':'hidden';
					me._image_popup_close.ggVisible=true;
				}
				else {
					me._image_popup_close.style.visibility="hidden";
					me._image_popup_close.ggVisible=false;
				}
			}
		}
		me._image_popup_close.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
		}
		me._image_popup_close.onmouseover=function (e) {
			me._image_popup_close__img.style.visibility='hidden';
			me._image_popup_close__imgo.style.visibility='inherit';
		}
		me._image_popup_close.onmouseout=function (e) {
			me._image_popup_close__img.style.visibility='inherit';
			me._image_popup_close__imgo.style.visibility='hidden';
		}
		me._image_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_popup_close);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : 1595px;';
		hs+='position : absolute;';
		hs+='top : 653px;';
		hs+='visibility : inherit;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_2.onclick=function (e) {
			player.openNext("{node16}","");
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_2);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : 1704px;';
		hs+='position : absolute;';
		hs+='top : 653px;';
		hs+='visibility : inherit;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_3.onclick=function (e) {
			player.openNext("{node60}","");
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_3);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,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'+
			'ps/46DIAz0K5QuKuOqu6pHr2o6ZfMHYYCHqK9f9TVJdZx3fdVdLaVRxwDmRuh8f7xNWm1qU4INg9DqBXrm59NJB+PccdBYa5REpsLTF6VbdD6IJfqEmFx1if6tdPAJeR9QLIRYQrEQYgnFQoglFAshllAshFhCsRBiCcVCiCUUCyGWUCyEWEKxEGIJxUKIJRQLIZZQLIRYQrEQYgnFQoglFAshllAshFhCsRBiCcVCiCUUCyGWUCyEWEKxEGIJxUKIJRQLIZZQLIRYQrEQYgnFQoglFAshllAshFhCsRBiCcVCiCUUCyGWUCyEWEKxEGIJxUKIJVWxvDYPbH8+mpAPgZJYXg0GbwC8Mc/N+/14Qm4jQoi6QeBNXdoqdWbYS/Og3z+ClPJqJSNkgZBS4umzZ9XTo1eDweu69FXqxPJ380AIgUePv+IIQ241WZ5jd28P'+
			'RTGqXvreNo+Vs7Oz6cHKCgDg7vr6jwA+u34RCVloXr8aDD4BAFMH85gXDdtExdknZMl4g3E7t6ZWLBNHPwLw0w0UipBF4yWAT2x9FUWtGWZyd339HoAvMTbLPr5OCQl5z/wE4H+vBoN/VC/YmGErNokIIZzBJ8QaioUQS/4PRW/e12a2ruoAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : 1808px;';
		hs+='position : absolute;';
		hs+='top : 653px;';
		hs+='visibility : inherit;';
		hs+='width : 108px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_4.onclick=function (e) {
			player.openNext("{node32}","");
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_4);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 66px;';
		hs+='left : 1595px;';
		hs+='position : absolute;';
		hs+='top : 723px;';
		hs+='visibility : inherit;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_5.onclick=function (e) {
			player.openNext("{node34}","");
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_5);
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : 1704px;';
		hs+='position : absolute;';
		hs+='top : 722px;';
		hs+='visibility : inherit;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_6.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_6.onclick=function (e) {
			player.openNext("{node35}","");
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_6);
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 66px;';
		hs+='left : 1808px;';
		hs+='position : absolute;';
		hs+='top : 722px;';
		hs+='visibility : inherit;';
		hs+='width : 108px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_7.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_7.onclick=function (e) {
			player.openNext("{node59}","");
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_7);
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : 1595px;';
		hs+='position : absolute;';
		hs+='top : 788px;';
		hs+='visibility : inherit;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_8.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_8.onclick=function (e) {
			player.openNext("{node61}","");
		}
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_8);
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : 1704px;';
		hs+='position : absolute;';
		hs+='top : 788px;';
		hs+='visibility : inherit;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_9.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_9.onclick=function (e) {
			player.openNext("{node56}","");
		}
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_9);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAAB6CAYAAAARbafjAAAKh0lEQVR4nO3aP2zbVh4H8K8PncIlizmLszh0kmF1Cb1WwV1awOpw/6ylLWDh2mZwlhi4ZEmAJkWhAEkXubi7IQrQNkCUVcxSGdbSDORMzczi5WX1DfR7fqRI6RcnlZXi+wEMWPyn96j3fX8orZ2cnICIFvvTRReA6H3BsBAJfWC/WFtbqzxws9n8EMDl37tARL+Xw/H4RdU+yXJkzT6oGJbNZvMygK8A/ANA7TwFJFohxwCeAvj6cDw+tne8VVhOR5IDAB++o4ISrYpjANfskebcYdlsNmsAfgOnXfTHFujAvE1YfkPJiOL79XdSQqJlS5IplFLFzccAvMPx+FgSlg+KGzabzX+iEBTfr6O7uwvXdc9fWqILpJRCv3+AURjamy8D+A7AjuQaZY+O/2'+
			'y/8Lwabt+6xaDQe81xHHS7u9gKguKuv0ivURaW3MmdTuccRSNaTZ3ODhzHsTdd3mw2r0jOzYXldGGf49e5TqE/Dsdx4Hm1c51bHFlyV+GCnugMf+5CJMSwEAkxLERCDAuREMNCJMSwEAkxLERCDAuREMNCJMSwEAkxLERCDAuREMNCJMSwEAkxLERCDAuREMNCJMSwEAkxLERCDAuREMNCJMSwEAkxLERCDAuREMNCJMSwEAkxLERCDAuREMNCJMSwEAkxLERCDAuREMNCJMSwEAkxLERCDAuREMNCJMSwEAkxLERCDAuREMNCJMSwEAkxLERCHyz7DaM4nrvfueTAddeRTKel+zyvtvDa7vo6XNfN7UvTFOmrV6XXUUqZ9/NqNTiOY/aNwhCv0ldIkgSe56HRaJhzk2QK9VqVlqV4HaUUjiYTTJMpkmkCv+6j5tWw'+
			'0WjkzrPLMq/uxePK6lwsn1+vz1xXH1N1b6s+r7JrFa87mUyQJAkcxzF1XVRGrXj/VsHSw3Lz5v7c/b5fR7vdrjzO9+u4sbc3cyNHYYhe7wEAwHVd/PDoYW5/GL7A48EAAOA4Du7f+9Z8cMl0at7v9u1b8Ot1KKVwc38fSTI11ziaTPB4MMBn7Tba7W30D/qIovLGpK+jy9bvH0Cps0ahz3NdFzf29s4CaJVlXt2Lx3leDffv3TOvlVL45vr13Pm//PxT7nWaprljfnj0cKYxz/u8toIAnc7OTKdw5+7d2fsSAv3+Aa62Wuh0dszmqnvoOA46nR1sBUHl+y/b0qdhvl83f5rjOGabV/Nyx3teLdvu1QBkjUyHwjYcDs3/aZrOHcGUUuj3D+aWczh8boKyFQT4rN2G52W9XaMwGhTr5ft1OJeyBnQ0maDXe2CCouujG2'+
			'Wapri5v480TWeuKa07kPXQ9jWOJpO59dN1tIXhi8pjXdfNlQXIOoGb+/u5TuDm/r5p/Pbnqj0bDkvvvX2s4zhQSqHXe5DrrC7a0keW27dumf+vffIpgKxR2Nvtht7pdEwP3es9wCgMZxpCkkzNTdU3OhyFc6cKR5MJojiuPCaKIwBZI+l2dwEA7fY20jSd6X2L9bLZDaPb3c31lLo+Orw3buzlzpXU3RaGL9BubwMAJkeLwzIKQwBn92wUhub8oq0gMPt0eUdhiCSZYjh8jnZ727wGzj5TPeokydQE69lwiCAIcsHTxwNZB/L5F19m9ZhM5k69l+m9WuCnr7Kes9hY9ajieTXzgY7CsLS31scByPX4Re76Wc9v93BlQakSxbEpw1YQzEwput1dc71FI0FV3QGYdY9u/Hp9ZO8r0iEFYEKapqm5xjyO4+TKrs8JrXOL'+
			'U2XPq+WmX5M59dVrSwBYd9cXlmdZlj6yvKl+v5/N0ZOp+XDtRqd7RAAIThuk7s3tntbW3e3im+vXkaYphsPnqPuzo0ur1cLRZGKuPwpDuK6LTmentAHqUVL75eefkCSJeV32HkDWmJ+dhr045VhUd62x0cDRZII0TbNRdpq9r+u68DyvNIi6g9loNODXs+lVkkwRhqF4neC669mDk9MOwe5QqkLdO/3fvjf6XD3y2LOEqrBfhJUfWZJkiiiKoZQyPZodAHvevRUEuRtc1Ut6Xg1XWy0AwOPBoHK9cP/et7jaauXWF3fu3BWtBwCInuZUjWzA4rprWShqALLeXU/BWq2PS68bxbFpkMFWFozgNCBRFFeOyIssqu+8uiqlEEVn5dpoNHD/3rcr9URs5cNy+/YtfNZuA8huaLHHsgPx17/9Hdc++dQ05nnTinZ723wQVY'+
			't9PZL88Ohhbj1hP0ywy2n/Acg9rAhLyqGUMuszx5l9dLuo7rbWafjtdU1VrxyOzspy585dXPvk09w9GAyeVL6PXXZ7fQJkj3uB6gcsdidTHGl9v47//fc/5jNRr+fX9yKsfFiArIc8a9h9s11PPeYpa6TA2bwbKO/xlFK5RlP2HYHNr9dzf0DWiPQ5URSb6Za+fr9/YMpf1bCr6l6kz9d1sZ+4Feu1aF2ip59VojjOPQXTQW1snNWh3+/nPpsojmfuZ5HjOGbEj6JYPIIvy8qvWYDsJrbb2+j3D5AkUwwGT9Bub5se3nGcmSdJw2fD7InXnGnFRqMB36/PPOe3v2MZhSE2Gg1EcWSuU/bouMqNvT3TsPr9AwwGT+B5tdx76hHsTepedtxGo2EaWFCx7rCnrfYiHQDiKMbjwcA8ILDXLo8HA/M9lc1+cLEVBIij2DwV'+
			'+/yLL+F5NSj1OvcZdDo7lR1Pq/WxeTjT6z2A/+jhykzF3ouRBUBu7fBsOEQUx6bB6UWq/de62jLnzptWdHd3S7f7dR9ANqV4NhzmvnPRvZ+E52WPRHXZ9dzcvI9fXzg3L9a9Kvy6Z5+3MNajiuu62AqC/D2zRrFFUzH9SF2Pzlq3u5u7P/b3P3o0n3f/dOcAzI7uF23t5OTEvGh+9NEVAGaM9v165fcH74KZrwt/fmL/ZMVW9dMI+/qOc8mcW/xuxf7JRfH9jiYTvFavASD3U5fieYt+/qHLE58G5ZJzCX7dn1mnSOrurq+bb/GLx0VxnLuf9nlerWbOKft5TFmdytYeVefa9LrlVZq9d82rwa/XZz6nqp/b2O8rubdvwv7i9FQw/vXXF4vOu9CwEF2E84blvZmGEV00hoVIiGEhEmJYiIQYFiIhhoVIiGEhEmJYiI'+
			'QYFiIhhoVIiGEhEmJYiIQYFiIhhoVIiGEhEmJYiIQYFiIhhoVIiGEhEmJYiIQYFiIhhoVIiGEhEmJYiIQYFiIhhoVIiGEhEmJYiIQYFiIhhoVIiGEhEmJYiIQYFiIhhoVIiGEhEmJYiIQYFiIhhoVIiGEhEmJYiIQYFiKhuWFRSi2rHEQrrxiWl/aLJJkuryRES3LeQSAXlsPx+BjAsb1tFIbnLxXRikmSadkgMLOhTNk07Kn9ot8/4AhDfwhKKfQe9Iqbp4fj8VRy/trJycnZi7U1bDabNQCJfZDjOLjaaiEIrsB13bcrMdGSKaVwNJlgMHiCNE2Lu3cOx+Mf7RxUmQkLAGw2m98B+OrdFZdoJb04HI8DAJCEpfRp2OF4/DWAH99psYhWy0sA197khMpHx4fj8Q6Af79tiYhW0FMAwekDLbHSaZjtdA3zLwBXAHz4'+
			'NiUkukAvT/++PxyPXxZ3vvGahYiq8ecuREIMC5HQ/wHgjh1AwMDGogAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : 1808px;';
		hs+='position : absolute;';
		hs+='top : 788px;';
		hs+='visibility : inherit;';
		hs+='width : 108px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_10.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_10.onclick=function (e) {
			player.openNext("{node64}","");
		}
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_10);
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 68px;';
		hs+='left : 1595px;';
		hs+='position : absolute;';
		hs+='top : 853px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_11.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_11.onclick=function (e) {
			player.openNext("{node74}","");
		}
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_11);
		el=me._image_12=document.createElement('div');
		els=me._image_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_12';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 68px;';
		hs+='left : 1664px;';
		hs+='position : absolute;';
		hs+='top : 853px;';
		hs+='visibility : inherit;';
		hs+='width : 57px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_12.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_12.onclick=function (e) {
			player.openNext("{node28}","");
		}
		me._image_12.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_12);
		el=me._image_13=document.createElement('div');
		els=me._image_13__img=document.createElement('img');
		els.className='ggskin ggskin_image_13';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 68px;';
		hs+='left : 1723px;';
		hs+='position : absolute;';
		hs+='top : 853px;';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_13.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_13.onclick=function (e) {
			player.openNext("{node36}","");
		}
		me._image_13.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_13);
		el=me._image_14=document.createElement('div');
		els=me._image_14__img=document.createElement('img');
		els.className='ggskin ggskin_image_14';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 14";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 68px;';
		hs+='left : 1784px;';
		hs+='position : absolute;';
		hs+='top : 853px;';
		hs+='visibility : inherit;';
		hs+='width : 63px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_14.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_14.onclick=function (e) {
			player.openNext("{node15}","");
		}
		me._image_14.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_14);
		el=me._image_15=document.createElement('div');
		els=me._image_15__img=document.createElement('img');
		els.className='ggskin ggskin_image_15';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAACCCAYAAABrRMfpAAAH6ElEQVR4nO2dPWzbRhiGXxedwiWLbiZnckgWGWYX06sZoJPprbWWJIAF9A+wF7ttuiRTWyRA20XKGHlpATOrmaUUxMkDOVMzNdQLu6aDdBeSomJJlhIX3/cAAmLekbzjcz8fLwBv4+3bt2Bo8cnHLgDz4WHpBGHpBGHpBPlU/mNjY2Mqccu2twF8AUAHsP2BysTM5grA5eT3az8Mh9UM8wTmGzJTUfqWbesAumDRt51fAPzYD8MreWAp6Vu2fQ9AAODuOkrJrJxLAI4UP4/00py+Zdt3AfwJFv5/4h7Gzuam1NO3bLsL4MtiBsPQ4bouNptNaJq2mmIyS5GmQ8RJjF7vDHmeV5MP+mH4cqHh3f7ss7sA/ikmbjabOD4+WlGRmVWR5zm++fY7ZFlWPH'+
			'zZD8P7iw7vnxcTNE1Du324mlIyK2WGm3uTAPxaitJLJ+w4Dg/ntxjLNGEYevXw1IE6Zi7OsPDbz7KOeEWOICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydICydIJ9en4W5CVmWIRuNoN3R6j7r+VHgnr5G8jzHyen3ePr02ccuSgnu6WtkEEUQooHWwdGt6eXAEtIHUYRhOgQAeN5eKS1OEiRxAgAwLVP9u4ppmbBME73eGQDgjnYHD1xXpWdZhiB4c+11ZDoAlcfz9krlqJaxri7V+xdJ0yGiKEKcxNDuaDAtE5vNJoQQM++T5zkGUaTSgiBAOtSx'+
			'4zila18EAUbZCADgurulD/zKZ+M42xBCzKzDMiwsPc9zvOr1AAC6oWOz2VRp/rk/ad0CpmWqfFX24cEyy+lCCHWtbDRSafvwZl5HpgNQeTxvD0mclP6eRafTVR/KlyKr6ee+Xzo2iCJ0Ol0cHx9hmA6n7pOmQzx99qz0Af54Ir/XO8Px0bteHwSBSsvzHK3WgTpHXte0zJVLX3hOL27rEQ0idVy2bpmnyL7nlX6ydxbpdLp1W1SgIRqwLBOWZar7apqmjjVEY9EqABj3sqIY2bOK5ZHChRB44LrY9zwIIWAYOixzug5ZluHk9FRdd8dxsO95qofL9Lp6nvs+0skIum4W7umapmGz2cRFEGAQRWhPjsfJuyHYdXeRjUbq7/f1NkmWZfD911N5dxxHPbST01PEcQLD0PHTkycqT1XYPARBAACwLBNxnGAQRWjlOTRNQ5'+
			'ZlSri8l2xwrrsLoP5b68W9VY6Pj0qN37RMPH/+Anme19YTADrdTqle62Kp6N2dzH/F3i17vVUzHPV6Z6VfZe8RJfVVr/dBWnuaDtWw2j48hKZppboUG7DneSXBmqbN/Li+PM8w9KnRbsdx1HOJk3gqDRhPA9XpZB0sJd0wdFUBGazIB+ZUghVgLLP4K44CAODsOLAmQ36n21mmSAvhTx6sbKBSkBwxZHAFLLZ7gmzMhm7UposZU5EQAvuep8pQN/yvkqVf2Vx3F51OF4MogmmZyCdDYzVCBaAqJBGN6cq3Dw/x8NFjxHEC0QiWLda1FHu0oRuIkwS6oQPBWFqcJKU4YREBQghkWYZ0mNamZ9mo9jgwngJlnNHpdOe+5zIsvTijIu0sQ28SaVaHNInn7ZV+ddFosbVfBOuTfhEESuS57+Pk5LT0kIOLoBSk+ZXhNs/z'+
			'mVOQPG+8f1r5NbMYOFqmVXu+3IFpnfUHbtDT5bA4iCL1ENwZ77rVQKshGrUjguvuTkXVN6V474ZowPdfAxgP7cWHHycx4jjBRRCg1TrAA9fFue8jjhM8fPRYlVc2mrqAy/P2MIii8UrcySkeuK4KDKVITdNUMFjFMk31TNfJjVbkmpvvCmgY+sxVp+p7tmWZtdLlfmMnJ6c3KdbMe8uADYDaVVLiZNt4+OgxAMD3X6PVOkCe56oRVutQN4QLIfDTkyfqtawalAkhcHx09N44od0+RPzo8Vrn9RtJ33EcFfRU371FozE1l0vknCnTi3O8ZZpotQ7wb/7v1HmO48Ayral3c9My1SJN3d91VKciIYS6r7x+u30IZ8dBcBEgG70L0lx3V63IVe9jGDr++P03XAQBokmHkCt51b3uZH2Kz042fLnqWRf/3JTitps/APheJu'+
			'x73lzv18zHQ65bFHDCv/9+c915/L9sBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBGHpBJkpvbrlBHO7eN9356+jKP2vYoLczIa5ndRs+3HVD8M385yrpPfD8BLAsJj4/PkLFn8L6fXO6jb4+asubx3q098bGxvYsu3PAfxZzSSEgGWuflM4ZjHSNEWcJHUbAFwBuN8Pw6H0+T5K0gFgy7Z/BvDVSkvLrJuDfhi+BIB5pE8Fcv0w/BrALysvFrMOrlAQPi+10ftEvAPgzY2LxayLlxgP6S8XPXFqeK+yZds6AB3A9nJlY1bIFYBLAJf9'+
			'MLyqy7DQnM7QgVfkCMLSCcLSCcLSCcLSCcLSCcLSCcLSCfIfaMpQGb6a+8wAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 15";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 68px;';
		hs+='left : 1849px;';
		hs+='position : absolute;';
		hs+='top : 853px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_15.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_15.onclick=function (e) {
			player.openNext("{node97}","");
		}
		me._image_15.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_15);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_image_changenode = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image_image && hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_configloaded = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_mouseover = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_hastouch = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image_image && hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.onclick=function (e) {
			skin._popup_image.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._popup_image.ggSubElement.style.width = '0px';
			skin._popup_image.ggSubElement.style.height = '0px';
			skin._popup_image.ggSubElement.src='';
			skin._popup_image.ggSubElement.src=skin._popup_image.ggText;
			player.setVariableValue('vis_image_popup', true);
			skin._image_popup.style[domTransition]='none';
			skin._image_popup.style.visibility=(Number(skin._image_popup.style.opacity)>0||!skin._image_popup.style.opacity)?'inherit':'hidden';
			skin._image_popup.ggVisible=true;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._tt_ht_image.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ontouchend=function (e) {
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_image=document.createElement('div');
		els=me._ht_image_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTk2LjMsNDE0LjdoNDIuN3YtNDRoLTQyLjdWNDE0Ljd6IE0tMTU1LjUsNDEyLjlILTE4M2wxOS0xOC42YzAuMy0wLjMsMC42LTAuNCwxLTAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC43LDAuMSwxLDAuNGw2LjUsNi40VjQxMi45eiBNLTE2Mi45LDM3NmMyLjIsMCw0LDEuOCw0LDRjMCwyLjItMS44LDQtNCw0Yy0yLjIsMC00LTEuOC00LTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNjYuOCwzNzcuOC0xNjUuMSwzNzYtMTYyLjksMzc2eiBNLTE5NC41LDM5Ny44bDkuNy05LjRjMC4zLTAuMywwLjYtMC40LDEtMC40'+
			'YzAuNCwwLDAuNywwLjEsMSwwLjRsMTEuMiwxMC45bC0xMy45LDEzLjZoLTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TC0xOTQuNSwzOTcuOEwtMTk0LjUsMzk3Ljh6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Uy0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE0OS41LDQyNS41YzAsMS4zLTEsMi4zLTIuMywyLjNoLTQ2LjRjLTEuMywwLTIuMy0xLTIuMy0yLjN2LTU3YzAtMS4zLDEtMi4zLDIuMy'+
			'0yLjNoNDYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS4zLDAsMi4zLDEsMi4zLDIuM0wtMTQ5LjUsNDI1LjVMLTE0OS41LDQyNS41eiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xNTEuOCwzNjYuMmgtNDYuNGMtMS4zLDAtMi4zLDEtMi4zLDIuM3Y1N2MwLDEuMywxLDIuMywyLjMsMi4zaDQ2LjRjMS4zLDAsMi4zLTEsMi4zLTIuM3YtNTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNDkuNSwzNjcuMi0xNTAuNSwzNjYuMi0xNTEuOCwzNjYuMnogTS0xNTMuNyw0MTQuN2gtNDIuN3YtNDRoNDIuN1Y0MTQu'+
			'N3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPGNpcmNsZSByPSI0IiBmaWxsPSIjRkZGRkZGIiBjeD0iLTE2Mi45IiBjeT0iMzc5LjkiLz4KICAgPHBhdGggZD0iTS0xNzEuNywzOTkuM2wtMTEuMi0xMC45Yy0wLjMtMC4zLTAuNi0wLjQtMS0wLjRzLTAuNywwLjEtMSwwLjRsLTkuNyw5LjR2MTUuMWg5TC0xNzEuNywzOTkuM3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNjMsMzkzLjljLTAuNCwwLTAuNywwLjEtMSwwLjRsLTE5LDE4LjZoMjcuNXYtMTIuMmwtNi41LTYuNEMtMTYyLjIsMzk0LTE2Mi42LDM5My45LTE2MywzOTMuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2'+
			'c+Cjwvc3ZnPgo=';
		me._ht_image_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTk4LjcsNDE2LjZoNDcuNHYtNDguOWgtNDcuNFY0MTYuNnogTS0xNTMuMyw0MTQuNmgtMzAuNmwyMS4xLTIwLjZjMC4zLTAuMywwLjctMC41LDEuMS0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNCwwLDAuOCwwLjIsMS4xLDAuNWw3LjIsNy4xVjQxNC42eiBNLTE2MS41LDM3My42YzIuNCwwLDQuNCwyLDQuNCw0LjRjMCwyLjQtMiw0LjQtNC40LDQuNHMtNC40LTItNC40LTQuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE2NS45LDM3NS42LTE2NCwzNzMuNi0xNjEuNSwzNzMuNnogTS0xOTYuNywzOTcuOWwxMC43LTEwLjVj'+
			'MC4zLTAuMywwLjctMC41LDEuMS0wLjVzMC44LDAuMiwxLjEsMC40bDEyLjQsMTIuMmwtMTUuNCwxNS4xaC0xMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE5Ni43LDM5Ny45TC0xOTYuNywzOTcuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTQ2LjcsNDI4LjdjMCwxLjQtMS4xLDIuNi0yLjYsMi42aC01MS42Yy0xLjQsMC0yLjYtMS'+
			'4xLTIuNi0yLjZ2LTYzLjRjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDUxLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNCwwLDIuNiwxLjEsMi42LDIuNkwtMTQ2LjcsNDI4LjdMLTE0Ni43LDQyOC43eiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xNDkuMiwzNjIuOGgtNTEuNmMtMS40LDAtMi42LDEuMS0yLjYsMi42djYzLjRjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDUxLjZjMS40LDAsMi42LTEuMSwyLjYtMi42di02My40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTQ2LjcsMzYzLjktMTQ3LjgsMzYyLjgt'+
			'MTQ5LjIsMzYyLjh6IE0tMTUxLjMsNDE2LjZoLTQ3LjR2LTQ4LjloNDcuNFY0MTYuNnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPGNpcmNsZSByPSI0LjQiIGZpbGw9IiNGRkZGRkYiIGN4PSItMTYxLjUiIGN5PSIzNzgiLz4KICAgPHBhdGggZD0iTS0xNzEuMywzOTkuNWwtMTIuNC0xMi4yYy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xMC43LDEwLjV2MTYuOGgxMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE3MS4zLDM5OS41eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE2MS42LDM5My41Yy0wLjQsMC0wLjgsMC4yLTEuMSwwLjVsLT'+
			'IxLjEsMjAuNmgzMC42VjQwMWwtNy4yLTcuMUMtMTYwLjgsMzkzLjctMTYxLjIsMzkzLjUtMTYxLjYsMzkzLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_image_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_image_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_image.style[domTransition]='';
				if (me._ht_image_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image_image.style.visibility="hidden";
					me._ht_image_image.ggVisible=false;
				}
				else {
					me._ht_image_image.style.visibility=(Number(me._ht_image_image.style.opacity)>0||!me._ht_image_image.style.opacity)?'inherit':'hidden';
					me._ht_image_image.ggVisible=true;
				}
			}
		}
		me._ht_image_image.onmouseover=function (e) {
			me._ht_image_image__img.style.visibility='hidden';
			me._ht_image_image__imgo.style.visibility='inherit';
		}
		me._ht_image_image.onmouseout=function (e) {
			me._ht_image_image__img.style.visibility='inherit';
			me._ht_image_image__imgo.style.visibility='hidden';
		}
		me._ht_image_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image.appendChild(me._ht_image_image);
		el=me._tt_ht_image=document.createElement('div');
		els=me._tt_ht_image__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_image.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_image.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_image.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_image.style.top='-47px';
					me._tt_ht_image.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_image.ggDx=0;
					me._tt_ht_image.style.top='24px';
					me._tt_ht_image.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_image.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_image.style.visibility=(Number(me._tt_ht_image.style.opacity)>0||!me._tt_ht_image.style.opacity)?'inherit':'hidden';
					me._tt_ht_image.ggVisible=true;
				}
				else {
					me._tt_ht_image.style.visibility="hidden";
					me._tt_ht_image.ggVisible=false;
				}
			}
		}
		me._tt_ht_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_image.appendChild(me._tt_ht_image);
		el=me._ht_image_customimage=document.createElement('div');
		els=me._ht_image_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_image_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_customimage.style[domTransition]='';
				if (me._ht_image_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_image_customimage.style.visibility="hidden";
					me._ht_image_customimage__img.src = '';
					me._ht_image_customimage.ggVisible=false;
				}
				else {
					me._ht_image_customimage.style.visibility=(Number(me._ht_image_customimage.style.opacity)>0||!me._ht_image_customimage.style.opacity)?'inherit':'hidden';
					me._ht_image_customimage.ggSubElement.src=me._ht_image_customimage.ggText;
					me._ht_image_customimage.ggVisible=true;
				}
			}
		}
		me._ht_image_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_image_customimage.clientWidth;
			var parentHeight = me._ht_image_customimage.clientHeight;
			var img = me._ht_image_customimage__img;
			var aspectRatioDiv = me._ht_image_customimage.clientWidth / me._ht_image_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_image.appendChild(me._ht_image_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_image;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_image';
			hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_image_changenode();;
			me.callChildLogicBlocksHotspot_ht_image_configloaded();;
			me.callChildLogicBlocksHotspot_ht_image_mouseover();;
			me.callChildLogicBlocksHotspot_ht_image_hastouch();;
			me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				hotspotTemplates['ht_image'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._screentint_image.logicBlock_visible();
	me._image_popup.logicBlock_visible();
	me._popup_image.logicBlock_visible();
	me._image_popup_close.logicBlock_visible();
	player.addListener('changenode', function(args) { me._screentint_image.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._image_popup_close.logicBlock_visible(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me._screentint_image.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._image_popup_close.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_image_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_image_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_image_mouseover(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_ht_image_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};