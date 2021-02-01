// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: prueba3.ggsk
// Generated 2021-02-01T02:02:47

function pano2vrSkin(player,base) {
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('category_visible', 2, false);
	player.addVariable('node_visible', 2, false);
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
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSI2NCIgZmlsbD0id2hpdGUiIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIHRyYW5zZm9ybT0icm'+
			'90YXRlKDQ1IDE2IDE2KSIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4xMjVzIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIg'+
			'MC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuMjVzIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiBjeT0iMyIgY3g9IjE2Ij4KICA8YW5pbWF0ZSBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjM3NXMiIHZhbHVlcz0iMD'+
			'szOzA7MCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNXMiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNikiIGN5PSIzIiBj'+
			'eD0iMTYiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNjI1cyIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOD'+
			'swLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC43NXMiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuODc1cyIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJy'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC41cyIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0x'+
			'LjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMt'+
			'MC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._image_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
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
		el=me._menu_background=document.createElement('div');
		el.ggId="menu_background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.501961);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_background.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_background.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('category_visible') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_background.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_background.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_background.style[domTransition]='opacity 500ms ease 0ms';
				if (me._menu_background.ggCurrentLogicStateAlpha == 0) {
					me._menu_background.style.visibility=me._menu_background.ggVisible?'inherit':'hidden';
					me._menu_background.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu_background.style.opacity == 0.0) { me._menu_background.style.visibility="hidden"; } }, 505);
					me._menu_background.style.opacity=0;
				}
			}
		}
		me._menu_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_scroller=document.createElement('div');
		els=me._node_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 99px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 149.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me._node_scroller.ggScrollByX = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosX = (me._node_scroller__horScrollFg.offsetLeft + diffX);
			me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
			me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			me._node_scroller__content.style.left = -(Math.round(me._node_scroller.ggScrollPosX / me._node_scroller.ggHPercentVisible)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
		}
		me._node_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._node_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._node_scroller.ggScrollPosX >= me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth)) {
					me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._node_scroller.ggScrollPosX <= 0)) {
					me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			me._node_scroller__content.style.left = -(Math.round(me._node_scroller.ggScrollPosX / me._node_scroller.ggHPercentVisible)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._node_scroller.ggScrollByY = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosY = (me._node_scroller__vertScrollFg.offsetTop + diffY);
			me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
			me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			me._node_scroller__content.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
		}
		me._node_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._node_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._node_scroller.ggScrollPosY >= me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight)) {
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._node_scroller.ggScrollPosY <= 0)) {
					me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			me._node_scroller__content.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._node_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._node_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._node_scroller.offsetWidth - (me._node_scroller.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._node_scroller.offsetWidth - (me._node_scroller.ggVertScrollVisible ? 15 : 0))) * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._node_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._node_scroller.offsetHeight - (me._node_scroller.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._node_scroller.offsetHeight - (me._node_scroller.ggHorScrollVisible ? 15 : 0))) * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._node_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._node_scroller__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaX *= 0.65;
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByX(me._node_scroller.ggDragInertiaX);
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._node_scroller__content.ontouchend = null;
				me._node_scroller__content.ontouchmove = null;
				me._node_scroller__content.onpointerup = null;
				me._node_scroller__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._node_scroller__content.onpointerup = me._node_scroller__content.ontouchend;
		}
			me._node_scroller__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._node_scroller.ggDragLastX) * me._node_scroller.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._node_scroller.ggDragLastY) * me._node_scroller.ggVPercentVisible;
				me._node_scroller.ggDragInertiaX = -diffX;
				me._node_scroller.ggDragInertiaY = -diffY;
				me._node_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller.ggScrollByX(-diffX);
				me._node_scroller.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._node_scroller__content.onpointermove = me._node_scroller__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._node_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 920px; background-color: rgba(0,0,0,0.12549); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._node_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 920px; background-color: rgba(255,255,255,0.25098); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._node_scroller.ggScrollPosY = 0;
		me._node_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._node_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = e.clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._node_scroller.ggScrollHeight;
			if (e.offsetY < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._node_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._node_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._node_scroller.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._node_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="node_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : calc(100%  -  50px);';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_scroller.ggIsActive=function() {
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
		me._node_scroller.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('category_visible') == true)) && 
				((player.getVariableValue('node_visible') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._node_scroller.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._node_scroller.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._node_scroller.style[domTransition]='opacity 500ms ease 0ms';
				if (me._node_scroller.ggCurrentLogicStateAlpha == 0) {
					me._node_scroller.style.visibility=me._node_scroller.ggVisible?'inherit':'hidden';
					me._node_scroller.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._node_scroller.style.opacity == 0.0) { me._node_scroller.style.visibility="hidden"; } }, 505);
					me._node_scroller.style.opacity=0;
				}
			}
		}
		me._node_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._node_scroller.ggHorScrollVisible && contentHeight > this.offsetHeight - 15) || (!me._node_scroller.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me._node_scroller__vertScrollBg.style.visibility = 'inherit';
					me._node_scroller__vertScrollFg.style.visibility = 'inherit';
					me._node_scroller.ggVertScrollVisible = true;
				} else {
					me._node_scroller__vertScrollBg.style.visibility = 'hidden';
					me._node_scroller__vertScrollFg.style.visibility = 'hidden';
					me._node_scroller.ggVertScrollVisible = false;
				}
				if(me._node_scroller.ggVertScrollVisible) {
					me._node_scroller.ggAvailableWidth = me._node_scroller.offsetWidth - 15;
					if (me._node_scroller.ggHorScrollVisible) {
						me._node_scroller.ggAvailableHeight = me._node_scroller.offsetHeight - 15;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height - me._node_scroller__vertScrollBg.getBoundingClientRect().width;
						me._node_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._node_scroller.ggAvailableHeight = me._node_scroller.offsetHeight;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height;
						me._node_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._node_scroller__vertScrollBg.style.height = me._node_scroller.ggAvailableHeight + 'px';
					me._node_scroller.ggVPercentVisible = contentHeight != 0 ? me._node_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._node_scroller.ggVPercentVisible > 1.0) me._node_scroller.ggVPercentVisible = 1.0;
					me._node_scroller.ggScrollHeight =  Math.round(me._node_scroller__vertScrollBg.offsetHeight * me._node_scroller.ggVPercentVisible);
					me._node_scroller__vertScrollFg.style.height = me._node_scroller.ggScrollHeight + 'px';
					me._node_scroller.ggScrollPosY = me._node_scroller.ggScrollPosYPercent * me._node_scroller.ggAvailableHeight;
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
					if (me._node_scroller.ggVPercentVisible < 1.0) {
						me._node_scroller__content.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._node_scroller.ggAvailableWidth = me._node_scroller.offsetWidth;
					me._node_scroller.ggScrollPosY = 0;
					me._node_scroller.ggScrollPosYPercent = 0.0;
					me._node_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._node_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._node_scroller.ggHorScrollVisible || vertScrollWasVisible != me._node_scroller.ggVertScrollVisible) {
					me.updateSize(me._node_scroller);
					me._node_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner=document.createElement('div');
		el.ggPermeable=false;
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 140;
		el.ggHeight = 100;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._node_cloner.callChildLogicBlocks_changenode = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_active = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._node_cloner.ggHeight) + 'px';
				parameter.left=(column * me._node_cloner.ggWidth) + 'px';
				parameter.width=me._node_cloner.ggWidth + 'px';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._node_cloner.callChildLogicBlocks_changenode();
			me._node_cloner.callChildLogicBlocks_mouseover();
			me._node_cloner.callChildLogicBlocks_active();
			me._node_cloner.callChildLogicBlocks_changevisitednodes();
			me._node_cloner.callChildLogicBlocks_activehotspotchanged();
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nop_";
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 10px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_cloner.ggIsActive=function() {
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
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
				me._node_cloner.ggUpdate();
		}
		me._node_cloner.ggNodeChange=function () {
			me._node_cloner.ggUpdateConditionNodeChange();
		}
		me._node_scroller__content.appendChild(me._node_cloner);
		me._menu_background.appendChild(me._node_scroller);
		el=me._category_scroller=document.createElement('div');
		els=me._category_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 149px;';
		hs+="";
		els.setAttribute('style',hs);
		me._category_scroller.ggScrollByX = function(diffX) {
			if(!me._category_scroller.ggHorScrollVisible || diffX == 0 || me._category_scroller.ggHPercentVisible >= 1.0) return;
			me._category_scroller.ggScrollPosX = (me._category_scroller__horScrollFg.offsetLeft + diffX);
			me._category_scroller.ggScrollPosX = Math.max(me._category_scroller.ggScrollPosX, 0);
			me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
			me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
			me._category_scroller__content.style.left = -(Math.round(me._category_scroller.ggScrollPosX / me._category_scroller.ggHPercentVisible)) + me._category_scroller.ggContentLeftOffset + 'px';
			me._category_scroller.ggScrollPosXPercent = (me._category_scroller__horScrollFg.offsetLeft / me._category_scroller__horScrollBg.offsetWidth);
		}
		me._category_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._category_scroller.ggHorScrollVisible || diffX == 0 || me._category_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._category_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._category_scroller.ggScrollPosX >= me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth)) {
					me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._category_scroller.ggScrollPosX <= 0)) {
					me._category_scroller.ggScrollPosX = Math.max(me._category_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
			me._category_scroller__content.style.left = -(Math.round(me._category_scroller.ggScrollPosX / me._category_scroller.ggHPercentVisible)) + me._category_scroller.ggContentLeftOffset + 'px';
			me._category_scroller.ggScrollPosXPercent = (me._category_scroller__horScrollFg.offsetLeft / me._category_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._category_scroller.ggScrollByY = function(diffY) {
			if(!me._category_scroller.ggVertScrollVisible || diffY == 0 || me._category_scroller.ggVPercentVisible >= 1.0) return;
			me._category_scroller.ggScrollPosY = (me._category_scroller__vertScrollFg.offsetTop + diffY);
			me._category_scroller.ggScrollPosY = Math.max(me._category_scroller.ggScrollPosY, 0);
			me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
			me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
			me._category_scroller__content.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + me._category_scroller.ggContentTopOffset + 'px';
			me._category_scroller.ggScrollPosYPercent = (me._category_scroller__vertScrollFg.offsetTop / me._category_scroller__vertScrollBg.offsetHeight);
		}
		me._category_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._category_scroller.ggVertScrollVisible || diffY == 0 || me._category_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._category_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._category_scroller.ggScrollPosY >= me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight)) {
					me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._category_scroller.ggScrollPosY <= 0)) {
					me._category_scroller.ggScrollPosY = Math.max(me._category_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
			me._category_scroller__content.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + me._category_scroller.ggContentTopOffset + 'px';
			me._category_scroller.ggScrollPosYPercent = (me._category_scroller__vertScrollFg.offsetTop / me._category_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._category_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._category_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._category_scroller.ggHPercentVisible);
					me._category_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._category_scroller.offsetWidth - (me._category_scroller.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._category_scroller.offsetWidth - (me._category_scroller.ggVertScrollVisible ? 15 : 0))) * me._category_scroller.ggHPercentVisible);
					me._category_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._category_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._category_scroller.ggVPercentVisible);
					me._category_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._category_scroller.offsetHeight - (me._category_scroller.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._category_scroller.offsetHeight - (me._category_scroller.ggHorScrollVisible ? 15 : 0))) * me._category_scroller.ggVPercentVisible);
					me._category_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._category_scroller__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaX *= 0.65;
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByX(me._category_scroller.ggDragInertiaX);
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._category_scroller__content.ontouchend = null;
				me._category_scroller__content.ontouchmove = null;
				me._category_scroller__content.onpointerup = null;
				me._category_scroller__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._category_scroller__content.onpointerup = me._category_scroller__content.ontouchend;
		}
			me._category_scroller__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._category_scroller.ggDragLastX) * me._category_scroller.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._category_scroller.ggDragLastY) * me._category_scroller.ggVPercentVisible;
				me._category_scroller.ggDragInertiaX = -diffX;
				me._category_scroller.ggDragInertiaY = -diffY;
				me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._category_scroller.ggScrollByX(-diffX);
				me._category_scroller.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._category_scroller__content.onpointermove = me._category_scroller__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._category_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 178px; height: 15px; background-color: rgba(128,128,128,0.752941); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._category_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 178px; height: 15px; background-color: rgba(192,192,192,0.752941); pointer-events: auto;');
		me._category_scroller.ggScrollPosX = 0;
		me._category_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._category_scroller.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaX *= 0.65;
					me._category_scroller.ggScrollByX(me._category_scroller.ggDragInertiaX);
					if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._category_scroller.ggDragLastX;
				me._category_scroller.ggDragInertiaX = diffX;
				me._category_scroller.ggDragLastX = e.clientX;
				me._category_scroller.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaX *= 0.65;
					me._category_scroller.ggScrollByX(me._category_scroller.ggDragInertiaX);
					if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._category_scroller.ggDragLastX;
				me._category_scroller.ggDragInertiaX = diffX;
				me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._category_scroller.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._category_scroller.ggScrollWidth;
			if (e.offsetX < me._category_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._category_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._category_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._category_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._category_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._category_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._category_scroller.ggScrollByXSmooth(20 * wheelDelta);
		});
		elVertScrollBg = me._category_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 480px; background-color: rgba(128,128,128,0.752941); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._category_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 480px; background-color: rgba(192,192,192,0.752941); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._category_scroller.ggScrollPosY = 0;
		me._category_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._category_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragInertiaY = diffY;
				me._category_scroller.ggDragLastY = e.clientY;
				me._category_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragInertiaY = diffY;
				me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._category_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._category_scroller.ggScrollHeight;
			if (e.offsetY < me._category_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._category_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._category_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._category_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._category_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._category_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._category_scroller.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._category_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="category_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : calc(100%  -  50px);';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._category_scroller.ggIsActive=function() {
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
		me._category_scroller.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('node_visible') == true)) || 
				((player.getVariableValue('category_visible') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._category_scroller.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._category_scroller.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._category_scroller.style[domTransition]='opacity 500ms ease 0ms';
				if (me._category_scroller.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._category_scroller.style.opacity == 0.0) { me._category_scroller.style.visibility="hidden"; } }, 505);
					me._category_scroller.style.opacity=0;
				}
				else {
					me._category_scroller.style.visibility=me._category_scroller.ggVisible?'inherit':'hidden';
					me._category_scroller.style.opacity=1;
				}
			}
		}
		me._category_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = -(Math.round(me._category_scroller.ggScrollPosX / me._category_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._category_scroller__horScrollBg.style.visibility = 'inherit';
					me._category_scroller__horScrollFg.style.visibility = 'inherit';
					me._category_scroller.ggHorScrollVisible = true;
				} else {
					me._category_scroller__horScrollBg.style.visibility = 'hidden';
					me._category_scroller__horScrollFg.style.visibility = 'hidden';
					me._category_scroller.ggHorScrollVisible = false;
				}
				if ((me._category_scroller.ggHorScrollVisible && contentHeight > this.offsetHeight - 15) || (!me._category_scroller.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me._category_scroller__vertScrollBg.style.visibility = 'inherit';
					me._category_scroller__vertScrollFg.style.visibility = 'inherit';
					me._category_scroller.ggVertScrollVisible = true;
					if (!me._category_scroller.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me._category_scroller__vertScrollBg.getBoundingClientRect().width)) {
						me._category_scroller__horScrollBg.style.visibility = 'inherit';
						me._category_scroller__horScrollFg.style.visibility = 'inherit';
						me._category_scroller.ggHorScrollVisible = true;
					}
				} else {
					me._category_scroller__vertScrollBg.style.visibility = 'hidden';
					me._category_scroller__vertScrollFg.style.visibility = 'hidden';
					me._category_scroller.ggVertScrollVisible = false;
				}
				if(me._category_scroller.ggHorScrollVisible) {
					me._category_scroller.ggAvailableHeight = me._category_scroller.offsetHeight - 15;
					if (me._category_scroller.ggVertScrollVisible) {
						me._category_scroller.ggAvailableWidth = me._category_scroller.offsetWidth - 15;
						me._category_scroller.ggAvailableWidthWithScale = me._category_scroller.getBoundingClientRect().width - me._category_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._category_scroller.ggAvailableWidth = me._category_scroller.offsetWidth;
						me._category_scroller.ggAvailableWidthWithScale = me._category_scroller.getBoundingClientRect().width;
					}
					me._category_scroller__horScrollBg.style.width = me._category_scroller.ggAvailableWidth + 'px';
					me._category_scroller.ggHPercentVisible = contentWidth != 0 ? me._category_scroller.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._category_scroller.ggHPercentVisible > 1.0) me._category_scroller.ggHPercentVisible = 1.0;
					me._category_scroller.ggScrollWidth = Math.round(me._category_scroller__horScrollBg.offsetWidth * me._category_scroller.ggHPercentVisible);
					me._category_scroller__horScrollFg.style.width = me._category_scroller.ggScrollWidth + 'px';
					me._category_scroller.ggScrollPosX = me._category_scroller.ggScrollPosXPercent * me._category_scroller.ggAvailableWidth;
					me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
					me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
					if (me._category_scroller.ggHPercentVisible < 1.0) {
						me._category_scroller__content.style.left = -(Math.round(me._category_scroller.ggScrollPosX / me._category_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._category_scroller.ggAvailableHeight = me._category_scroller.offsetHeight;
					me._category_scroller.ggScrollPosX = 0;
					me._category_scroller.ggScrollPosXPercent = 0.0;
					me._category_scroller__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me._category_scroller.ggVertScrollVisible) {
					me._category_scroller.ggAvailableWidth = me._category_scroller.offsetWidth - 15;
					if (me._category_scroller.ggHorScrollVisible) {
						me._category_scroller.ggAvailableHeight = me._category_scroller.offsetHeight - 15;
						me._category_scroller.ggAvailableHeightWithScale = me._category_scroller.getBoundingClientRect().height - me._category_scroller__vertScrollBg.getBoundingClientRect().width;
						me._category_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._category_scroller.ggAvailableHeight = me._category_scroller.offsetHeight;
						me._category_scroller.ggAvailableHeightWithScale = me._category_scroller.getBoundingClientRect().height;
						me._category_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._category_scroller__vertScrollBg.style.height = me._category_scroller.ggAvailableHeight + 'px';
					me._category_scroller.ggVPercentVisible = contentHeight != 0 ? me._category_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._category_scroller.ggVPercentVisible > 1.0) me._category_scroller.ggVPercentVisible = 1.0;
					me._category_scroller.ggScrollHeight =  Math.round(me._category_scroller__vertScrollBg.offsetHeight * me._category_scroller.ggVPercentVisible);
					me._category_scroller__vertScrollFg.style.height = me._category_scroller.ggScrollHeight + 'px';
					me._category_scroller.ggScrollPosY = me._category_scroller.ggScrollPosYPercent * me._category_scroller.ggAvailableHeight;
					me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
					me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
					if (me._category_scroller.ggVPercentVisible < 1.0) {
						me._category_scroller__content.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._category_scroller.ggAvailableWidth = me._category_scroller.offsetWidth;
					me._category_scroller.ggScrollPosY = 0;
					me._category_scroller.ggScrollPosYPercent = 0.0;
					me._category_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._category_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._category_scroller.ggHorScrollVisible || vertScrollWasVisible != me._category_scroller.ggVertScrollVisible) {
					me.updateSize(me._category_scroller);
					me._category_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._category_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 140;
		el.ggHeight = 37;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		el.ggUpdate = function(filter) {
			if(me._category_cloner.ggUpdating == true) return;
			me._category_cloner.ggUpdating = true;
			var el=me._category_cloner;
			var curNumCols = 0;
			curNumCols = me._category_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._category_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var firstNode;
			for (var i=0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k]) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				var parameter={};
				parameter.top=(row * me._category_cloner.ggHeight) + 'px';
				parameter.left=(column * me._category_cloner.ggWidth) + 'px';
				parameter.width=me._category_cloner.ggWidth + 'px';
				parameter.height=me._category_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_category_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._category_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._category_cloner.parentNode.classList.contains('ggskin_subelement') && me._category_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._category_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			{tag:"",title:"All"},
			];
		el.ggId="category_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 10px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._category_cloner.ggIsActive=function() {
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
		me._category_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._category_cloner.childNodes.length; i++) {
				var child=me._category_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._category_cloner.ggUpdatePosition=function (useTransition) {
				me._category_cloner.ggUpdate();
		}
		me._category_cloner.ggNodeChange=function () {
			me._category_cloner.ggUpdateConditionNodeChange();
		}
		me._category_scroller__content.appendChild(me._category_cloner);
		me._menu_background.appendChild(me._category_scroller);
		me.divSkin.appendChild(me._menu_background);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 373px;';
		hs+='left : 1602px;';
		hs+='position : absolute;';
		hs+='top : 538px;';
		hs+='visibility : inherit;';
		hs+='width : 311px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 291px;';
		hs+='left : 27px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 286px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
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
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_1);
		el=me._image_16=document.createElement('div');
		els=me._image_16__img=document.createElement('img');
		els.className='ggskin ggskin_image_16';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 16";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 47px;';
		hs+='left : 34px;';
		hs+='position : absolute;';
		hs+='top : 314px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_16.ggIsActive=function() {
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
		me._image_16.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_16);
		el=me._image_17=document.createElement('div');
		els=me._image_17__img=document.createElement('img');
		els.className='ggskin ggskin_image_17';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : 102px;';
		hs+='position : absolute;';
		hs+='top : 313px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_17.ggIsActive=function() {
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
		me._image_17.onclick=function (e) {
			player.openNext("{node89}","");
		}
		me._image_17.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_17);
		el=me._image_18=document.createElement('div');
		els=me._image_18__img=document.createElement('img');
		els.className='ggskin ggskin_image_18';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 18";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : 264px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_18.ggIsActive=function() {
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
		me._image_18.onclick=function (e) {
			player.openNext("{node74}","");
		}
		me._image_18.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_18);
		el=me._image_19=document.createElement('div');
		els=me._image_19__img=document.createElement('img');
		els.className='ggskin ggskin_image_19';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 19";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 48px;';
		hs+='left : 102px;';
		hs+='position : absolute;';
		hs+='top : 264px;';
		hs+='visibility : inherit;';
		hs+='width : 102px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_19.ggIsActive=function() {
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
		me._image_19.onclick=function (e) {
			player.openNext("{node83}","");
		}
		me._image_19.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_19);
		el=me._image_20=document.createElement('div');
		els=me._image_20__img=document.createElement('img');
		els.className='ggskin ggskin_image_20';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 20";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : 34px;';
		hs+='position : absolute;';
		hs+='top : 214px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_20.ggIsActive=function() {
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
		me._image_20.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_20);
		el=me._image_21=document.createElement('div');
		els=me._image_21__img=document.createElement('img');
		els.className='ggskin ggskin_image_21';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : 101px;';
		hs+='position : absolute;';
		hs+='top : 213px;';
		hs+='visibility : inherit;';
		hs+='width : 101px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_21.ggIsActive=function() {
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
		me._image_21.onclick=function (e) {
			player.openNext("{node28}","");
		}
		me._image_21.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_21);
		el=me._show_controller_button=document.createElement('div');
		els=me._show_controller_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczphPSJodH'+
			'RwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB2aWV3Qm94PSItMzU2NiAtMjYwNiAzMiAzMiIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIGhlaWdodD0iMzJweCIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzU2NiAtMjYwNiAzMiAzMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMnB4Ij4KIDxnIGlkPSJMYXllcl8xIi8+CiA8ZyBpZD0iRWJlbmVfMSIvPgogPGcgaWQ9IkxheWVy'+
			'XzIiPgogIDxnPgogICA8Zz4KICAgIDxjaXJjbGUgcj0iMi43NiIgb3BhY2l0eT0iMC40IiBjeT0iLTI1OTAuMzc2IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBjeD0iLTM1NTkuMzMzIi8+CiAgICA8Y2lyY2xlIHI9IjIuNzYiIGN5PSItMjU5MC4zNzYiIGZpbGw9IiNGRkZGRkYiIGN4PSItMzU1OS4zMzMiLz4KICAgIDxjaXJjbGUgcj0iMi43NiIgY3k9Ii0yNTkwLjM3NiIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMiIgY3g9Ii0zNTU5LjMzMyIvPgogIC'+
			'A8L2c+CiAgIDxnPgogICAgPGNpcmNsZSByPSIyLjc2IiBvcGFjaXR5PSIwLjQiIGN5PSItMjU5MC4zNzYiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGN4PSItMzU0MC42NjciLz4KICAgIDxjaXJjbGUgcj0iMi43NiIgY3k9Ii0yNTkwLjM3NiIgZmlsbD0iI0ZGRkZGRiIgY3g9Ii0zNTQwLjY2NyIvPgogICAgPGNpcmNsZSByPSIyLjc2IiBjeT0iLTI1OTAuMzc2IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC4yIiBjeD0iLTM1NDAuNjY3Ii8+CiAgIDwvZz4K'+
			'ICA8L2c+CiAgPGc+CiAgIDxjaXJjbGUgcj0iMi43NiIgb3BhY2l0eT0iMC40IiBjeT0iLTI1OTAuMzc2IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBjeD0iLTM1NTAiLz4KICAgPGNpcmNsZSByPSIyLjc2IiBjeT0iLTI1OTAuMzc2IiBmaWxsPSIjRkZGRkZGIiBjeD0iLTM1NTAiLz4KICAgPGNpcmNsZSByPSIyLjc2IiBjeT0iLTI1OTAuMzc2IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC4yIiBjeD0iLTM1NTAiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._show_controller_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._show_controller_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczphPSJodH'+
			'RwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB2aWV3Qm94PSItMzU2NiAtMjU3MS4zMzMgMzIgMzIiIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiBoZWlnaHQ9IjMycHgiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTM1NjYgLTI1NzEuMzMzIDMyIDMyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMycHgiPgogPGcgaWQ9IkxheWVyXzEiLz4KIDxnIGlkPSJFYmVuZV8xIi8+CiA8ZyBp'+
			'ZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxnPgogICAgPGNpcmNsZSByPSIzLjAzNiIgb3BhY2l0eT0iMC40IiBjeT0iLTI1NTUuNzA5IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBjeD0iLTM1NjAuMjY2Ii8+CiAgICA8Y2lyY2xlIHI9IjMuMDM2IiBjeT0iLTI1NTUuNzA5IiBmaWxsPSIjRkZGRkZGIiBjeD0iLTM1NjAuMjY2Ii8+CiAgICA8Y2lyY2xlIHI9IjMuMDM2IiBjeT0iLTI1NTUuNzA5IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC4yIiBjeD0iLTM1Nj'+
			'AuMjY2Ii8+CiAgIDwvZz4KICAgPGc+CiAgICA8Y2lyY2xlIHI9IjMuMDM2IiBvcGFjaXR5PSIwLjQiIGN5PSItMjU1NS43MDkiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGN4PSItMzUzOS43MzMiLz4KICAgIDxjaXJjbGUgcj0iMy4wMzYiIGN5PSItMjU1NS43MDkiIGZpbGw9IiNGRkZGRkYiIGN4PSItMzUzOS43MzMiLz4KICAgIDxjaXJjbGUgcj0iMy4wMzYiIGN5PSItMjU1NS43MDkiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwLjIiIGN4PSItMzUzOS43'+
			'MzMiLz4KICAgPC9nPgogIDwvZz4KICA8Zz4KICAgPGNpcmNsZSByPSIzLjAzNiIgb3BhY2l0eT0iMC40IiBjeT0iLTI1NTUuNzA5IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBjeD0iLTM1NTAiLz4KICAgPGNpcmNsZSByPSIzLjAzNiIgY3k9Ii0yNTU1LjcwOSIgZmlsbD0iI0ZGRkZGRiIgY3g9Ii0zNTUwIi8+CiAgIDxjaXJjbGUgcj0iMy4wMzYiIGN5PSItMjU1NS43MDkiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwLjIiIGN4PSItMzU1MCIvPgogIDwvZz'+
			'4KIDwvZz4KPC9zdmc+Cg==';
		me._show_controller_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="show_controller_button";
		el.ggDx=-139;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 341px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._show_controller_button.ggIsActive=function() {
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
		me._show_controller_button.onclick=function (e) {
			me._hide_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._show_controller_button.onmouseover=function (e) {
			me._show_controller_button__img.style.visibility='hidden';
			me._show_controller_button__imgo.style.visibility='inherit';
			me.elementMouseOver['show_controller_button']=true;
			me._tt_show_controller.logicBlock_visible();
		}
		me._show_controller_button.onmouseout=function (e) {
			me._show_controller_button__img.style.visibility='inherit';
			me._show_controller_button__imgo.style.visibility='hidden';
			me.elementMouseOver['show_controller_button']=false;
			me._tt_show_controller.logicBlock_visible();
		}
		me._show_controller_button.ontouchend=function (e) {
			me.elementMouseOver['show_controller_button']=false;
			me._tt_show_controller.logicBlock_visible();
		}
		me._show_controller_button.ggUpdatePosition=function (useTransition) {
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
			}
		}
		el=me._hide_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=5000;
		el.ggId="hide_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer.ggIsActive=function() {
			return (me._hide_timer.ggTimestamp + me._hide_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_timer.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._controller.style[domTransition]='none';
			} else {
				me._controller.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._controller.style.opacity='1';
			me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._show_controller_button.style[domTransition]='none';
			} else {
				me._show_controller_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._show_controller_button.style.opacity='0';
			me._show_controller_button.style.visibility='hidden';
		}
		me._hide_timer.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._show_controller_button.style[domTransition]='none';
			} else {
				me._show_controller_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._show_controller_button.style.opacity='1';
			me._show_controller_button.style.visibility=me._show_controller_button.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._controller.style[domTransition]='none';
			} else {
				me._controller.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._controller.style.opacity='0';
			me._controller.style.visibility='hidden';
		}
		me._hide_timer.ggUpdatePosition=function (useTransition) {
		}
		me._show_controller_button.appendChild(me._hide_timer);
		el=me._tt_show_controller=document.createElement('div');
		els=me._tt_show_controller__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_show_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show Controller";
		el.appendChild(els);
		me._tt_show_controller.ggIsActive=function() {
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
		me._tt_show_controller.logicBlock_position = function() {
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
			if (me._tt_show_controller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_show_controller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_show_controller.style[domTransition]='left 0s, top 0s';
				if (me._tt_show_controller.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_show_controller.style.top='-25px';
					me._tt_show_controller.ggUpdatePosition(true);
				}
				else {
					me._tt_show_controller.ggDx=0;
					me._tt_show_controller.style.top='32px';
					me._tt_show_controller.ggUpdatePosition(true);
				}
			}
		}
		me._tt_show_controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['show_controller_button'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_show_controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_show_controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_show_controller.style[domTransition]='left 0s, top 0s';
				if (me._tt_show_controller.ggCurrentLogicStateVisible == 0) {
					me._tt_show_controller.style.visibility=(Number(me._tt_show_controller.style.opacity)>0||!me._tt_show_controller.style.opacity)?'inherit':'hidden';
					me._tt_show_controller.ggVisible=true;
				}
				else {
					me._tt_show_controller.style.visibility="hidden";
					me._tt_show_controller.ggVisible=false;
				}
			}
		}
		me._tt_show_controller.ggUpdatePosition=function (useTransition) {
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
		}
		me._show_controller_button.appendChild(me._tt_show_controller);
		me._container_1.appendChild(me._show_controller_button);
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
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
		me._controller.onmouseover=function (e) {
			me.elementMouseOver['controller']=true;
		}
		me._controller.onmouseout=function (e) {
			me.elementMouseOver['controller']=false;
		}
		me._controller.ontouchend=function (e) {
			me.elementMouseOver['controller']=false;
		}
		me._controller.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._controller);
		me.divSkin.appendChild(me._container_1);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._node_cloner.ggUpdate();
			me._category_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._node_scroller.ggUpdatePosition();
			me._category_scroller.ggUpdatePosition();
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
		if (me._hide_timer.ggLastIsActive!=me._hide_timer.ggIsActive()) {
			me._hide_timer.ggLastIsActive=me._hide_timer.ggIsActive();
			if (me._hide_timer.ggLastIsActive) {
				if (player.transitionsDisabled) {
					me._controller.style[domTransition]='none';
				} else {
					me._controller.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._controller.style.opacity='1';
				me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
				if (player.transitionsDisabled) {
					me._show_controller_button.style[domTransition]='none';
				} else {
					me._show_controller_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._show_controller_button.style.opacity='0';
				me._show_controller_button.style.visibility='hidden';
			} else {
				if (player.transitionsDisabled) {
					me._show_controller_button.style[domTransition]='none';
				} else {
					me._show_controller_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._show_controller_button.style.opacity='1';
				me._show_controller_button.style.visibility=me._show_controller_button.ggVisible?'inherit':'hidden';
				if (player.transitionsDisabled) {
					me._controller.style[domTransition]='none';
				} else {
					me._controller.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._controller.style.opacity='0';
				me._controller.style.visibility='hidden';
			}
		}
		if (me.elementMouseOver['controller']) {
			me._hide_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_timer.ggTimestamp=skin.ggCurrentTime;
		}
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTk2LjMsNDE0LjdoNDIuN3YtNDRoLTQyLjdWNDE0Ljd6IE0tMTU1LjUsNDEyLjlILTE4M2wxOS0xOC42YzAuMy0wLjMsMC42LTAuNCwxLTAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC43LDAuMSwxLDAuNGw2LjUsNi40VjQxMi45eiBNLTE2Mi45LDM3NmMyLjIsMCw0LDEuOCw0LDRjMCwyLjItMS44LDQtNCw0Yy0yLjIsMC00LTEuOC00LTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNjYuOCwzNzcuOC0xNjUuMSwzNzYtMTYyLjksMzc2eiBNLTE5NC41LDM5Ny44bDkuNy05LjRjMC4zLTAu'+
			'MywwLjYtMC40LDEtMC40YzAuNCwwLDAuNywwLjEsMSwwLjRsMTEuMiwxMC45bC0xMy45LDEzLjZoLTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TC0xOTQuNSwzOTcuOEwtMTk0LjUsMzk3Ljh6Ii8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Uy0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE0OS41LDQyNS41YzAsMS4zLTEsMi4zLTIuMywyLjNoLTQ2LjRjLTEuMywwLTIuMy0xLTIuMy0yLjN2LTU3Yz'+
			'AtMS4zLDEtMi4zLDIuMy0yLjNoNDYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS4zLDAsMi4zLDEsMi4zLDIuM0wtMTQ5LjUsNDI1LjVMLTE0OS41LDQyNS41eiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTEuOCwzNjYuMmgtNDYuNGMtMS4zLDAtMi4zLDEtMi4zLDIuM3Y1N2MwLDEuMywxLDIuMywyLjMsMi4zaDQ2LjRjMS4zLDAsMi4zLTEsMi4zLTIuM3YtNTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNDkuNSwzNjcuMi0xNTAuNSwzNjYuMi0xNTEuOCwzNjYuMnogTS0xNTMuNyw0MTQuN2gtNDIu'+
			'N3YtNDRoNDIuN1Y0MTQuN3oiLz4KICAgPGNpcmNsZSByPSI0IiBjeT0iMzc5LjkiIGZpbGw9IiNGRkZGRkYiIGN4PSItMTYyLjkiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzEuNywzOTkuM2wtMTEuMi0xMC45Yy0wLjMtMC4zLTAuNi0wLjQtMS0wLjRzLTAuNywwLjEtMSwwLjRsLTkuNyw5LjR2MTUuMWg5TC0xNzEuNywzOTkuM3oiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjMsMzkzLjljLTAuNCwwLTAuNywwLjEtMSwwLjRsLTE5LDE4LjZoMjcuNXYtMTIuMmwtNi41LTYuNEMtMTYyLjIsMzk0LTE2Mi42LDM5My45LTE2MywzOTMuOXoiLz4KICA8L2c+CiA8L2'+
			'c+Cjwvc3ZnPgo=';
		me._ht_image_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTk4LjcsNDE2LjZoNDcuNHYtNDguOWgtNDcuNFY0MTYuNnogTS0xNTMuMyw0MTQuNmgtMzAuNmwyMS4xLTIwLjZjMC4zLTAuMywwLjctMC41LDEuMS0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNCwwLDAuOCwwLjIsMS4xLDAuNWw3LjIsNy4xVjQxNC42eiBNLTE2MS41LDM3My42YzIuNCwwLDQuNCwyLDQuNCw0LjRjMCwyLjQtMiw0LjQtNC40LDQuNHMtNC40LTItNC40LTQuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE2NS45LDM3NS42LTE2NCwzNzMuNi0xNjEuNSwzNzMuNnogTS0xOTYuNywz'+
			'OTcuOWwxMC43LTEwLjVjMC4zLTAuMywwLjctMC41LDEuMS0wLjVzMC44LDAuMiwxLjEsMC40bDEyLjQsMTIuMmwtMTUuNCwxNS4xaC0xMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE5Ni43LDM5Ny45TC0xOTYuNywzOTcuOXoiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTQ2LjcsNDI4LjdjMCwxLjQtMS4xLDIuNi0yLjYsMi42aC01MS'+
			'42Yy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTYzLjRjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDUxLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNCwwLDIuNiwxLjEsMi42LDIuNkwtMTQ2LjcsNDI4LjdMLTE0Ni43LDQyOC43eiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDkuMiwzNjIuOGgtNTEuNmMtMS40LDAtMi42LDEuMS0yLjYsMi42djYzLjRjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDUxLjZjMS40LDAsMi42LTEuMSwyLjYtMi42di02My40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTQ2LjcsMzYz'+
			'LjktMTQ3LjgsMzYyLjgtMTQ5LjIsMzYyLjh6IE0tMTUxLjMsNDE2LjZoLTQ3LjR2LTQ4LjloNDcuNFY0MTYuNnoiLz4KICAgPGNpcmNsZSByPSI0LjQiIGN5PSIzNzgiIGZpbGw9IiNGRkZGRkYiIGN4PSItMTYxLjUiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzEuMywzOTkuNWwtMTIuNC0xMi4yYy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xMC43LDEwLjV2MTYuOGgxMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE3MS4zLDM5OS41eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5My41Yy0wLjQsMC0wLj'+
			'gsMC4yLTEuMSwwLjVsLTIxLjEsMjAuNmgzMC42VjQwMWwtNy4yLTcuMUMtMTYwLjgsMzkzLjctMTYxLjIsMzkzLjUtMTYxLjYsMzkzLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
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
	function SkinCloner_node_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 140px; height: 100px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_image_cloner=document.createElement('div');
		els=me._node_image_cloner__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/node_image_cloner_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_Image_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image_cloner.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image_cloner.onclick=function (e) {
			if (
				(
					((me._node_image_cloner.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._node_image_cloner.onmouseover=function (e) {
			me.elementMouseOver['node_image_cloner']=true;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.onmouseout=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.ontouchend=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 1px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 136px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 136px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
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
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style[domTransition]='';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
				else {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
			}
		}
		me._node_title.ggUpdatePosition=function (useTransition) {
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
		}
		me._node_image_cloner.appendChild(me._node_title);
		el=me._node_visited=document.createElement('div');
		el.ggId="node_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 87px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_visited.ggIsActive=function() {
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
		me._node_visited.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['node_image_cloner'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me._node_visited.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else if (
				((player.nodeVisited(me._node_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateBorderColor = 2;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._node_visited.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._node_visited.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._node_visited.style[domTransition]='border-color 0s';
				if (me._node_visited.ggCurrentLogicStateBorderColor == 0) {
					me._node_visited.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 1) {
					me._node_visited.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 2) {
					me._node_visited.style.borderColor="rgba(209,209,209,1)";
				}
				else {
					me._node_visited.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._node_visited.ggUpdatePosition=function (useTransition) {
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
		me._node_image_cloner.appendChild(me._node_visited);
		me.__div.appendChild(me._node_image_cloner);
	};
	function SkinCloner_category_cloner_Class(item, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 140px; height: 37px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			var tags = player.userdata.tags;
			if (tags.indexOf(me.ggTag) == -1) return false;
			for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
				if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
			}
			return true;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._category_text=document.createElement('div');
		els=me._category_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 140px;';
		hs+='height: 35px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggTitle+" ("+me.ggNodeCount+")";
		el.appendChild(els);
		me._category_text.ggIsActive=function() {
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
		me._category_text.onclick=function (e) {
			skin._node_cloner.ggText=me.ggTag;
			if (skin._node_cloner.ggText=='') {
				skin._node_cloner.ggUpdate([]);
			} else {
				skin._node_cloner.ggUpdate(skin._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			player.setVariableValue('node_visible', true);
		}
		me._category_text.ggActivate=function () {
			skin._node_cloner.ggText=me.ggTag;
			if (skin._node_cloner.ggText=='') {
				skin._node_cloner.ggUpdate([]);
			} else {
				skin._node_cloner.ggUpdate(skin._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
		}
		me._category_text.ggUpdatePosition=function (useTransition) {
		}
		me._category_text.ggNodeChange=function () {
			if (me._category_text.ggLastIsActive!=me._category_text.ggIsActive()) {
				me._category_text.ggLastIsActive=me._category_text.ggIsActive();
				if (me._category_text.ggIsActive()) {
					if (me._category_text.ggActivate) me._category_text.ggActivate();
				} else {
					if (me._category_text.ggDeactivate) me._category_text.ggDeactivate();
				}
			}
		}
		me.__div.appendChild(me._category_text);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._screentint_image.logicBlock_visible();
	me._image_popup.logicBlock_visible();
	me._popup_image.logicBlock_visible();
	me._image_popup_close.logicBlock_visible();
	me._menu_background.logicBlock_alpha();
	me._node_scroller.logicBlock_alpha();
	me._category_scroller.logicBlock_alpha();
	me._tt_show_controller.logicBlock_position();
	player.addListener('changenode', function(args) { me._screentint_image.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._image_popup_close.logicBlock_visible();me._menu_background.logicBlock_alpha();me._node_scroller.logicBlock_alpha();me._category_scroller.logicBlock_alpha(); });
	player.addListener('configloaded', function(args) { me._tt_show_controller.logicBlock_position(); });
	player.addListener('hastouch', function(args) { me._tt_show_controller.logicBlock_position(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me._screentint_image.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._image_popup_close.logicBlock_visible(); });
	player.addListener('varchanged_category_visible', function(args) { me._menu_background.logicBlock_alpha();me._node_scroller.logicBlock_alpha();me._category_scroller.logicBlock_alpha(); });
	player.addListener('varchanged_node_visible', function(args) { me._node_scroller.logicBlock_alpha();me._category_scroller.logicBlock_alpha(); });
	player.addListener('changenode', function(args) { me._node_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._node_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._node_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._node_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me._node_cloner.callChildLogicBlocks_activehotspotchanged(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_image_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_image_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_image_mouseover(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_ht_image_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};