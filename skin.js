// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: SkinEnelGiovanna la desconfiada.ggsk
// Generated 2021-02-01T21:09:07

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
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKD'+
			'Q1IDE2IDE2KSIgcj0iMCIgY3g9IjE2IiBjeT0iMyI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgYmVnaW49IjAuMTI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwLjI1cyIgcmVwZWF0'+
			'Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiByPSIwIiBjeD0iMTYiIGN5PSIzIj4KICA8YW5pbWF0ZSBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBiZWdpbj0iMC4zNzVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwLjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNikiIHI9IjAiIGN4PSIxNiIg'+
			'Y3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwLjYyNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgcj0iMCIgY3g9IjE2IiBjeT0iMyI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgYmVnaW49IjAuNzVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cm'+
			'lidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwLjg3NXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgcj0iMCIgY3g9IjE2IiBjeT0iMyI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgYmVnaW49IjAuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
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
		el=me.__menu=document.createElement('div');
		el.ggId=" Menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 9px;';
		hs+='height : 373px;';
		hs+='position : absolute;';
		hs+='right : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 311px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 100%';
		me.__menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__menu.ggUpdatePosition=function (useTransition) {
		}
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
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : 317px;';
		hs+='visibility : inherit;';
		hs+='width : 61px;';
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
		me._image_16.onclick=function (e) {
			player.openNext("{node89}","");
		}
		me._image_16.ggUpdatePosition=function (useTransition) {
		}
		me.__menu.appendChild(me._image_16);
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
		hs+='height : 46px;';
		hs+='left : 103px;';
		hs+='position : absolute;';
		hs+='top : 317px;';
		hs+='visibility : inherit;';
		hs+='width : 101px;';
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
		me.__menu.appendChild(me._image_17);
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
		hs+='height : 47px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : 267px;';
		hs+='visibility : inherit;';
		hs+='width : 61px;';
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
		me.__menu.appendChild(me._image_18);
		el=me._image_19=document.createElement('div');
		els=me._image_19__img=document.createElement('img');
		els.className='ggskin ggskin_image_19';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAABXCAYAAABV/ZTpAAAL+UlEQVR4nO2dMWzcyBWGf+euEhtdsewMcGqycJpVtJW5XWAKuEsAr8vT1hZySALYjeREaiTgfJfDql5dkkY0kASB6Hbp4ryCtnJBFqlI4FJRjZtx4yIpuDM7HHJXki3Ju8v3AQJWQ+5wSP4z8+bNm9k7uID1VusegNWLziOIOeTN6XD4dtrBO1WJ663WfQC/A/DlDRWKIG6LFMBfAfxFrwgF8a+3WqsAvgfw9W2VjCBuibcAvjodDl+JhF9oJ4Qg4RPLySqAcL3VktaMbPnXW63vAXyjf8MwDDBm3ULZCOL64JwjSdKqQ28B/PJ0OEw/B4D1VsuCJnzDMNDtbqLtujddToK4EbIsQ79/hLPRSE1eBfAMwOYdoNzqG4aBvd1davGJpaDXO8QgDPXkL4'+
			'TNf19N7XY3SfjE0tDtbsIwDD35vhD/PTV1rdm8lUIRxG1gGEaVpu/p3h55MkEsE6ZpltIqxU8QdYDET9QWEj9RW0j8RG0h8RO1hcRP1BYSP1FbSPxEbSHxE7WFxE/UFhI/UVtI/ERtIfETtYXET9QWEj9RW0j8RG0h8RO1hcRP1BYS/ww454ji+FMX49pIkhRZln3qYswNn3/qAnwsgzBEWN6WAmbDRKfzUK7d7PePkKRJZR6u68r9iTjnCIKXGIRhQSimmecnzhP5MYuh292U5yVJiv5RHwDQ3eyCMQvbOzsAUDpX52w0QhAEAADP80qLrqfdA7MYmmtNOLZdOhbFMYKToLB3jVjQrT4fALKcs57PMrHw4j/PzhFFVa1zjLPRSO4/lKTJlPMAx3YA5MLf3tmp3OkryzL0eodgFpuZH3/HZTp/xwFg6nV1+v0jWeE4'+
			'5yXxT7tmFMU4CQK0XRdbW49l+iAM0esdlsvIOQZhWHg+s8oZRTHiKC7kvQwsvPhV9vZ2AUyEmrfiQeGlMWah2+0Wvmc2GgDGLetY+IxZ6HQ6cGwbURzD9314nndj+xlFcVzoaZIkRZKklddjbHIPcRTLXmoQhrKHEs9A8KjTge3kPYPoCTjn2D84wHfPvy3s2NF2XbjtvKX3fR/R+Bp6T7HoLJX4Zbdv2wiCILdxz4s2rmEYleaBEA+Qmzh7u7tSEGvN5o3vZRQO8ms7jo0sO0eWZaWKK1DvwbFteN4D/P4Pf0SWZTgJAnQ6D+H7L+T53e4mNjxP/u/YNvb3D3A2GiHLMpyNRgWzxjRNmT/3PNkjZOfnJP55RQxOR2cj2YI3ddMhSUu2bXezW6gknvdACn8QhjjPzuUx27ErK8/HoFY813Vxnp3j2PcxCMNpu40VMA'+
			'wDbdfFse/LQbo6NlCFL+h0OnIckCYpoJj0WZbJnkiMQaY1GovMUol/e7soasexSwM1znnJtuXveC6AMYwx+TkMw8L5j9C5dhGE4SsAk4Eo5xzHvg8gr3xV4r0IUfkdp7qsjFmTc7VB9CAMC3tbik2Ll42lEv+jTgcnQQDOORzHxt7ubukcxso2P7Os/EOuN8RRLAXuui4c2yl5f66TE6V1DYKX8rPwPF1G/Jxz+dlYMeA4NqIoRhTF4JyXeg/VhcssVjjmODaMFUP2DE+fPlm6Vh9YMj9/p/NQCiWK4kofvei+1T/DMCYVAHnLJ8TUdt3xQK9Rec0kSQvCu2oFUa+VZRmOfV+aLyJN22K7sgzqeIUxqyBoUaFU/HHPAkAOhAWO7WBr67GsMOq5y8RStfxAbq+L1r/XOyx5MrLsvDAYBICG2UDbdbHheTgJAmRZhu2d'+
			'HXieB9M0wTlHptj9QD6WEK1qr3cIb8OT+8EDKFWoqms3zIaco6j6ERBhboWDsDDgVvNRxwsApHnieQ9kxTr2fWRZhuZablKpphxjVuVg3jAMbHgejsfenpMg+CDza55ZOvEL+7TXOxwP2F6i03koj4vWVUWMDbrdTekDT5K00kcuaLsuwvF5Z6NRqXWuGqjq1xamjchPt6uFR0Z4ZWbdg7hvIWThsdre2ZH3pO9Rz5iFp0+eTL3HTuehNPd8/wXarrtUmxgvvPgbZqM0qGu7LkZno3zCKY7g8Qclu1ZFPba19Ri2Y5cGuoxZcGwHrnsfwOQHPPTZYMby+QG1NZ026FTxvAfltA1vMlEWx5X3YKwYsMeVVxcmYxa+e/4tfP9FYR6BMQtrzbWCV0stZ0Mx8brdTenx+dDB97wifpnlf2riv/75j09TGoK4IXz/hd5b/n'+
			'mpBrwEcRVI/ERtIfETtYXET9SWuff2TFtMUjXjmCSp9I7omI1GIShLzVfPi3OOJE3l9zh/d2G+Ij9jZfaPdp+NRkiTFFEcgVkMFsv97NNciGKSKx1PpjHG0Gw2wZhVKqdpmlOfAbOsmW7KLMuQnedzGbOeh8pF9zrvzL349XgdFeEbFy+1f9SfGpP+qNMp+PvDwcTv/d3z54WXeDYaSR//1tbjktuzKl9RzmlhFUmSYv/goOCvF3n2p/zgd79/JEMf1LId+74MOxbXFeWY9Qwcx5YLbHS2d57Jsm1tPS6UJUnTqe9BTIapz3ZRWBizxzRNOI5deHGDMJSTOCqGkce2qH8NLTyhuTbxw+srwUZnI5mP6q+/TL5ViBljIS79XsQssTpRpgtfXE9UdD0kQUctqyCK4srFOvokWtXKOAFjFhzHlr2omEGeNSE4r8x9yy8Q'+
			'MTZA/sD7/SM5E6vP4jJmVba+KmvNJkzTlGaFmF3lnEsR6ubIZfKtwvdfFGZyp6226vUOsfb3v8m4fGAymcaYJcsXxTHWms2Z64v1sp4EAfr9o/zZHfULx8RaAjHjHEX5hFhV7H6325VmUZZl2D84kLFFbttdqAC4hWn5VQzDwNbWY/ly9Gl7IRD1T+8dAMiuPcsy2Rqqra+nzWZeNl8dNehMX5zS1tYPR3EsQ5yBfIaVMatw7x+ysGbD8+R1hLiBYuBcMZjtRXVGCqZpFsIjRCVaFBam5a/CNBv5QE2LpEySso26t7dbapVc976c9YviCIxZ0uRhzCrZxpfNV/+OYNp5zbWmrCBJkiBJJvH117lySs1LrMpSQ6jXmk3ErouTIF/m2K0IhZ6d52LtDLHQ4p9GVYSksVJ+icL2jqIYYRii7bqyFXQrdiu4bL7F76xcWN'+
			'6qMcttIALegEkv6I7FL8y/Zdy1QbCw4uecFxabqzB2edvcdV1EUSzHDoKql36VfAWmaUpbelprKnobYLKTBMYWhLqw5mOJ4kh+ZpYlF7ED+ZhA9yyJSM7ZeU5fFDPvLKTNH8Vxwcuj2+ZXQR3Uipd/3aG7wkYXA3W1pRcmBjBZiKLa9OpxoLgzxWXJsgz7+wfSBSruL9DEXvW9WYPqQRhif/9A/l8VmTrPLEzLL1Y46agDRkEUxfjqN78tpE3zvwtbV11RpbpBr5qvfo7j2Hj65AmSNJFekUEYwnHs0iowMXgUA2Mh8v39g3EPsiJ7uyRNSssxLyorIJZxbuaL3Md5bXhe4Z7FNYF8ECu2MQGmz7uoDohFYWHEr6PvoPYxuG234JG57m1KhLty/2DS+qoTUcJrwpgl09Sd4fKVZFkhv6v2dmIySsTwq54Zz3tQEq4Y'+
			'Cw3CcOacguPYcn+jRWPu4/mrul09VEEwK7zhoqn4WeEJl8l3mnmg55eMQxve8XcALt4KRYwVxPYpDbMhTbXLhjdU3dNF4RhquIPZaMjPKheFTMwTVfH8cy9+grgOaDELQSiQ+InaQuInaguJn6gtJH6itpD4idpC4idqC4mfqC0kfqK2kPiJ2kLiJ2oLiZ+oLSR+oraQ+InaQuInaguJn6gtJH6itpD4idpC4idqC4mfqC2V4r/qr4gTxLxTpWkh/jdqorpLMEEsOuq28wpvhPhfqaknQVD6AQOCWFT0LSLHvPoMAO7evfsfAN+I1Pfv3+On16+x+sUqGFuszUcJQiD2Nf3p9Wv90I+nw6F/R/y33mr9CcCzqkwYW5yduQgCQGkfVIW3ANjpcPj2jpq63modAfj6FspGEJ+CtwDc0+HwDQB8ph75788///vu3burAH'+
			'71KUpGEDdICuDXQvjAeKNanfVWy0JuAn0JYPU2SkYQN8QbAD+cDoc/6gcqxa+z3mrdv+YCEcRNk54Oh+msE/4P2ByK34nDE3cAAAAASUVORK5CYII=';
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
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : 103px;';
		hs+='position : absolute;';
		hs+='top : 267px;';
		hs+='visibility : inherit;';
		hs+='width : 101px;';
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
		me.__menu.appendChild(me._image_19);
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
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : 216px;';
		hs+='visibility : inherit;';
		hs+='width : 61px;';
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
		me._image_20.onclick=function (e) {
			player.openNext("{node28}","");
		}
		me._image_20.ggUpdatePosition=function (useTransition) {
		}
		me.__menu.appendChild(me._image_20);
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
		hs+='height : 48px;';
		hs+='left : 103px;';
		hs+='position : absolute;';
		hs+='top : 216px;';
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
		me.__menu.appendChild(me._image_21);
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
		hs+='height : 73px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 141px;';
		hs+='visibility : inherit;';
		hs+='width : 62px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
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
		me._image_2.onclick=function (e) {
			player.openNext("{node16}","");
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.__menu.appendChild(me._image_2);
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
		hs+='height : 32px;';
		hs+='left : 103px;';
		hs+='position : absolute;';
		hs+='top : 182px;';
		hs+='visibility : inherit;';
		hs+='width : 101px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
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
		me._image_3.onclick=function (e) {
			player.openNext("{node97}","");
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.__menu.appendChild(me._image_3);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,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';
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
		hs+='height : 32px;';
		hs+='left : 213px;';
		hs+='position : absolute;';
		hs+='top : 182px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
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
		me._image_4.onclick=function (e) {
			player.openNext("{node16}","");
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me.__menu.appendChild(me._image_4);
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
		hs+='height : 31px;';
		hs+='left : 103px;';
		hs+='position : absolute;';
		hs+='top : 142px;';
		hs+='visibility : inherit;';
		hs+='width : 101px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_5.ggIsActive=function() {
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
		me._image_5.onclick=function (e) {
			player.openNext("{node32}","");
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me.__menu.appendChild(me._image_5);
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
		hs+='height : 31px;';
		hs+='left : 213px;';
		hs+='position : absolute;';
		hs+='top : 142px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_6.ggIsActive=function() {
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
		me._image_6.onclick=function (e) {
			player.openNext("{node61}","");
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me.__menu.appendChild(me._image_6);
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
		hs+='height : 47px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 92px;';
		hs+='visibility : inherit;';
		hs+='width : 63px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_7.ggIsActive=function() {
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
		me._image_7.onclick=function (e) {
			player.openNext("{node87}","");
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me.__menu.appendChild(me._image_7);
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
		hs+='height : 47px;';
		hs+='left : 103px;';
		hs+='position : absolute;';
		hs+='top : 92px;';
		hs+='visibility : inherit;';
		hs+='width : 101px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_8.ggIsActive=function() {
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
		me._image_8.onclick=function (e) {
			player.openNext("{node59}","");
		}
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		me.__menu.appendChild(me._image_8);
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
		hs+='height : 46px;';
		hs+='left : 213px;';
		hs+='position : absolute;';
		hs+='top : 93px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_9.ggIsActive=function() {
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
		me._image_9.onclick=function (e) {
			player.openNext("{node15}","");
		}
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me.__menu.appendChild(me._image_9);
		me.divSkin.appendChild(me.__menu);
		el=me._x=document.createElement('div');
		el.ggId="X";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._x.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._x.ggUpdatePosition=function (useTransition) {
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
		el=me._image_popup_close=document.createElement('div');
		els=me._image_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._image_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="image_popup_close";
		el.ggDx=25;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 4.13043%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 2%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_popup_close.ggIsActive=function() {
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
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._x.appendChild(me._image_popup_close);
		me.divSkin.appendChild(me._x);
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTk2LjMsNDE0LjdoNDIuN3YtNDRoLTQyLjdWNDE0Ljd6IE0tMTU1LjUsNDEyLjlILTE4M2wxOS0xOC42YzAuMy0wLjMsMC42LTAuNCwxLTAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC43LDAuMSwxLDAuNGw2LjUsNi40VjQxMi45eiBNLTE2Mi45LDM3NmMyLjIsMCw0LDEuOCw0LDRjMCwyLjItMS44LDQtNCw0Yy0yLjIsMC00LTEuOC00LTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNjYuOCwzNzcuOC0xNjUuMSwzNzYtMTYyLjksMzc2eiBNLTE5NC41LDM5Ny44bDkuNy05LjRjMC4zLTAu'+
			'MywwLjYtMC40LDEtMC40YzAuNCwwLDAuNywwLjEsMSwwLjRsMTEuMiwxMC45bC0xMy45LDEzLjZoLTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TC0xOTQuNSwzOTcuOEwtMTk0LjUsMzk3Ljh6Ii8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Uy0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE0OS41LDQyNS41YzAsMS4zLTEsMi4zLTIuMywyLjNoLTQ2LjRjLTEuMywwLTIuMy0xLTIuMy0yLjN2LTU3Yz'+
			'AtMS4zLDEtMi4zLDIuMy0yLjNoNDYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS4zLDAsMi4zLDEsMi4zLDIuM0wtMTQ5LjUsNDI1LjVMLTE0OS41LDQyNS41eiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTEuOCwzNjYuMmgtNDYuNGMtMS4zLDAtMi4zLDEtMi4zLDIuM3Y1N2MwLDEuMywxLDIuMywyLjMsMi4zaDQ2LjRjMS4zLDAsMi4zLTEsMi4zLTIuM3YtNTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNDkuNSwzNjcuMi0xNTAuNSwzNjYuMi0xNTEuOCwzNjYuMnogTS0xNTMuNyw0MTQuN2gtNDIu'+
			'N3YtNDRoNDIuN1Y0MTQuN3oiLz4KICAgPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiByPSI0IiBjeD0iLTE2Mi45IiBjeT0iMzc5LjkiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzEuNywzOTkuM2wtMTEuMi0xMC45Yy0wLjMtMC4zLTAuNi0wLjQtMS0wLjRzLTAuNywwLjEtMSwwLjRsLTkuNyw5LjR2MTUuMWg5TC0xNzEuNywzOTkuM3oiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjMsMzkzLjljLTAuNCwwLTAuNywwLjEtMSwwLjRsLTE5LDE4LjZoMjcuNXYtMTIuMmwtNi41LTYuNEMtMTYyLjIsMzk0LTE2Mi42LDM5My45LTE2MywzOTMuOXoiLz4KICA8L2c+CiA8L2'+
			'c+Cjwvc3ZnPgo=';
		me._ht_image_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTk4LjcsNDE2LjZoNDcuNHYtNDguOWgtNDcuNFY0MTYuNnogTS0xNTMuMyw0MTQuNmgtMzAuNmwyMS4xLTIwLjZjMC4zLTAuMywwLjctMC41LDEuMS0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNCwwLDAuOCwwLjIsMS4xLDAuNWw3LjIsNy4xVjQxNC42eiBNLTE2MS41LDM3My42YzIuNCwwLDQuNCwyLDQuNCw0LjRjMCwyLjQtMiw0LjQtNC40LDQuNHMtNC40LTItNC40LTQuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE2NS45LDM3NS42LTE2NCwzNzMuNi0xNjEuNSwzNzMuNnogTS0xOTYuNywz'+
			'OTcuOWwxMC43LTEwLjVjMC4zLTAuMywwLjctMC41LDEuMS0wLjVzMC44LDAuMiwxLjEsMC40bDEyLjQsMTIuMmwtMTUuNCwxNS4xaC0xMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE5Ni43LDM5Ny45TC0xOTYuNywzOTcuOXoiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTQ2LjcsNDI4LjdjMCwxLjQtMS4xLDIuNi0yLjYsMi42aC01MS'+
			'42Yy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTYzLjRjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDUxLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNCwwLDIuNiwxLjEsMi42LDIuNkwtMTQ2LjcsNDI4LjdMLTE0Ni43LDQyOC43eiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDkuMiwzNjIuOGgtNTEuNmMtMS40LDAtMi42LDEuMS0yLjYsMi42djYzLjRjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDUxLjZjMS40LDAsMi42LTEuMSwyLjYtMi42di02My40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTQ2LjcsMzYz'+
			'LjktMTQ3LjgsMzYyLjgtMTQ5LjIsMzYyLjh6IE0tMTUxLjMsNDE2LjZoLTQ3LjR2LTQ4LjloNDcuNFY0MTYuNnoiLz4KICAgPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiByPSI0LjQiIGN4PSItMTYxLjUiIGN5PSIzNzgiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzEuMywzOTkuNWwtMTIuNC0xMi4yYy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xMC43LDEwLjV2MTYuOGgxMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE3MS4zLDM5OS41eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5My41Yy0wLjQsMC0wLj'+
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