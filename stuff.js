/*
	Stuff I've used and copied around while developing.
	There is no structure, at least half of the code will not work or is not even proper code!
*/

$dlgTheme = api('createDialog', {
	title: "Theme Colors",
	content : '<div id="dlg-theme-setting-items" style="padding:10px;"></div>'
			+'<div id="dlg-theme-setting-preset" style="padding:0 10px 10px;">'
			+'<div><strong>Common used:</strong></div>'
			+'<div><a href="#" data-style="black">White on Black</a></div>'
			+'<div style="margin-top:4px"><a href="#" data-style="white">Black on White</a></div>'
			+'</div>',
	width : 280,
	height : 400,
	modal : true, // will fade out background
	collapsible: true,
	resizable: true,
	minimizable: !0,
    maximizable: !0,
	state: "open",
	buttons : [{
			text : 'Apply',
			iconCls : 'icon-ok',
			cmd : 'extension-theme-apply;dialog-close'
		}, {
			text : 'Cancel',
			cmd : 'dialog-close'
		}
	]
});

$dlgTheme.dialog('open');
$dlgTheme.dialog('close');
$dlgTheme.dialog('expand');
$dlgTheme.dialog('collapse');
$dlgTheme.dialog('destroy');

// Ways to get ID
extensionId = api('createDialog',{title:'getId'})[0].id.split('-')[2]; // dlg-extension-exposeapi-126594
extensionId = Object.entries(easyeda.extension.instances).filter(e => e[1].blobURLs && e[1].blobURLs['manifest.json'] == api('getRes',{file:'manifest.json'}))[0][0]
extensionId = Object.entries(easyeda.extension.instances).filter(e => e[1].blobURLs && e[1].blobURLs['manifest.json'] == api('getRes',{file:'manifest.json'}))[0][1].id

$.messager.error("Not a *.js file")
$.messager.warn("Please select an item at first.")

$.messager.show({
	title: "Information",
	msg: "Your browser doesn't support Auto Save,Try chrome ,Firefox,Safari,IE10!",
	timeout: 5e3,
	showType: "slide"
});

$.messager.show({
	title: e,
	width: 150,
	height: 150,
	showSpeed: 100,
	msg: $("#win-loading-messager").html(),
	timeout: 0,
	showType: "slide"
});

$.messager.progress({
	title: "Processing",
	value: 5,
	text: "Loading...",
	interval: 10,
	closable: true
});

$.messager.progress({
	title: "Processing",
	value: 5,
	text: "{value}%",
	interval: 10,
	closable: true
});

x = $.messager.progress({
	title: "Processing",
	value: 5,
	text: "{value}%",
	interval: 0,
	closable: true
});

x.progressbar({
	title: "Processing",
	value: 10,
	text: "{value}%",
	interval: 0,
	closable: true
});


$.messager.progress("close", x);


x = $.messager.progress({
	title: "Processing",
	value: 5,
	text: "{value}%",
	interval: 0,
	closable: true
});
x.progressbar();
x.progressbar('setValue',50);

x = $.messager.progress({
	title: "Processing",
	value: 5,
	text: "{value}%",
	interval: 0,
	closable: true
});
x.progressbar({value: 50});




$.messager.progress({
	value: 50
},x);

$.data(x, "progressbar");
x.progressbar("stepToValue", 10);
x.progressbar({
	title: "Processing",
	value: 50,
	text: "{value}%",
	interval: 0,
	closable: true
});


progressbar("setValue", 100);

var o = $.messager.progress("bar", i);
o.progressbar("stepToValue", e);
o.progressbar("stepToValue", e)

var o = $.messager.progress("bar", i);
o.progressbar("stepToValue", e);
o.progressbar("stepToValue", e)


api("getActiveJson");
api("getActiveCompressStr")

cc: Object
checkCompressStr: ƒ (e,t,n)
getActiveCompressStr: ƒ (e)
getActiveJson: ƒ (e)
getActiveProjectAllSchJson: ƒ (e)
getActiveProjectOpenedSchJson: ƒ ()
getActiveProjectSchCompressStr: ƒ (e)
getAllCompressStr: ƒ (e)
getAllJson: ƒ (e,t)
getCompressStr: ƒ (e,t,n)
getJson: ƒ (e)
getProjectAllPrefixNames: ƒ (e)
getProjectAllSchJson: ƒ (e)

function ht(e, t) {
	if (el.loading && el.loading.is(":visible")) {
		var n = el.loading.data("loadCount") || 1;
		el.loading.data("loadCount", n ? n + 1 : 1)
	} else
		el.loading = $.messager.progress({
			title: e || "Processing",
			value: 0,
			text: Ac.i18n("Loading..."),
			interval: 10,
			closable: !t
		});
	el.loading.dialog("setTitle", e || "Processing")
}
function mt(e) {
	e = e || "Connecting to server";
	if ($("#win-loading")[0])
		$("#win-loading").window("setTitle", e).window("open");
	else
		var t = $.messager.show({
			title: e,
			width: 150,
			height: 150,
			showSpeed: 100,
			msg: $("#win-loading-messager").html(),
			timeout: 0,
			showType: "slide"
		});
	t && t.attr("id", "win-loading")
}
function Ct() {
	$("#win-loading").window("close");
	if (el.loading) {
		var e = el.loading.data("loadCount");
		if (e && 1 !== e)
			el.loading.data("loadCount", e - 1);
		else {
			el.loading.dialog("close");
			el.loading = null
		}
	}
}

easyeda.extension...

api('getSelectedIds')

api('editorCall', 'getConfig')

api('editorCall', 'placePart', []);

api('editorCall','fitview');

api('editorCall', { cmd: 'pathToPolygons', args: ['M 10,10 L 15,15 L 15,20 Z']});
api('editorCall', { cmd: 'pathToPolygons', args: ["M 4632 3103.5 Q 4642 3113.5 4652 3103.5 Q 4662 3093.5 4652 3123.5 Q 4642 3153.5 4632 3123.5 L 4632 3103.5"]})

api('editorCall', { cmd: 'pathToPolygons', args: ["M 0 0 C 1 1 2 1 3 0"]})


api('editorCall', { cmd: 'placePart', args: [api('getSelectedIds')]});


api('createShape', {shapeType:'TRACK'});

api('createToolbarButton', {
	icon: api('getRes', {file:'icon.svg'}),
	title:'ApiTitle',
	fordoctype:'pcb,sch',
	menu:[
		{
			"text":"Button 1 Label", 
			"cmd":"extension-exposeapi-apply", 
			icon: api('getRes', {file:'icon.svg'})
		},
		{
			"text":"Button 2 Label", 
			"cmd":"extension-exposeapi-setting",
			group: '123',
			checked: true
		}
	]
});

.dialog("setTitle", a)

api('createToolbarButton', {
	icon: api('getRes', {file:'icon.svg'}),
	title:'ApiTitle',
	fordoctype:'pcb,sch',
	"text":"Button 2 Label", 
	"cmd":"extension-exposeapi-setting"
});


api('createExtensionMenu', {
	icon: api('getRes', {file:'icon.svg'}),
	title:'ApiTitle',
	fordoctype:'pcb,sch',
	"text":"Button 2 Label", 
	"cmd":"extension-exposeapi-setting"
});


buttons: [{
	title: "Pin",
	cmd: "place_part(pin)",
	icon: "icon-eda-pin"
}, {
	title: "Line",
	cmd: "draw(polyline)",
	icon: "icon-eda-line"
}


addButtons = function(e) {
	for (var n in e)
		var a = ($.trim(e[n].title),
		e[n].buttons)
			, r = $("#" + n + " .btns");
		if (a.length > 0)
			for (var i = 0; i < a.length; i++)
				a[i].cmd && $("<div>", a[i]).addClass("toolbarbutton " + (a[i].icon || "")).attr("data-i18n-attr", "title").attr("title", a[i].title).data("i18n-attr-en", {
					title: a[i].title
				}).appendTo(r)
};

addButtons({
	'toolbar-drawPCB' : { 
		title : '123', 
		buttons: [{
			title: "Pin",
			cmd: "place_part(pin)",
			icon: "icon-eda-pin"
		}, {
			title: "Line2",
			cmd: "extension-svgimport-open",
			icon: "icon-eda-line"
		}] 
	}
});

t.dialog({
    buttons: [{
        text: "Update",
        iconCls: "icon-eda-check",
        handler: function() {
            if (e) {
                var n, a = {
                    target: e.target
                };
                $(".line:visible input[name],.line:visible select[name]", t).each(function() {
                    if ($(this).attr("oldval") !== $(this).val()) {
                        n = Yl.validate(this);
                        a = $.extend(a, n)
                    }
                })
            }
            t.dialog("close");
            delete a.target;
            delete a.cmdKey;
            f(a)
        }
    }, {
        text: "Cancel",
        handler: function() {
            t.dialog("destroy").remove()
        }
	}]
	


	easyeda.extension.extendApi({
		getShape: function(e) {
			return Ha("gJsonCache", [e])
		},
		deleteShapes: function(e) {
			e = $.isArray(e) ? e : [e];
			Ha("delete", [e])
		},
		updateShape: function(e) {
			if (e.jsonCache && e.jsonCache.gId) {
				var t = e.jsonCache.gId
				  , n = e.shapeType;
				"pcblib" == n && (n = e.shapeType = "FOOTPRINT");
				var a = Ha("gJsonCache", [{
					cmdKey: n,
					id: t
				}]);
				if (a) {
					var r = $.extend(!0, {}, a, e.jsonCache)
					  , i = "schlib, rect, polyline, polygon, wire, bus, image, circle, ellipse, line, path, arc, annotation, junction, netlabel, busentry, arrowhead, noconnectflag, pin, netflag, FOOTPRINT, TRACK, COPPERAREA, SOLIDREGION, RECT, CIRCLE, TEXT, ARC, DIMENSION, PAD, VIA, HOLE".split(", ");
					if (S(zc, n) && i.indexOf(n) > -1) {
						var o = zc[n](r, 1);
						if (o)
							return Ha("updateShape", [{
								id: t,
								svg: o
							}])
					}
				}
			}
		},
		createShape: function e(t) {
			if ($.isArray(t))
				for (var n = 0; n < t.length; n++)
					e(t[n]);
			else if (t && t.shapeType) {
				var a = ["wire", "bus", "text", "image", "rect", "polyline", "polygon", "circle", "ellipse", "line", "path", "bezier", "arc", "pie"]
				  , r = ["TRACK", "DIMENSION", "COPPERAREA", "SOLIDREGION", "RECT", "CIRCLE", "ARC"]
				  , i = t.shapeType;
				"pcblib" == i && (i = t.shapeType = "FOOTPRINT");
				if (t.jsonCache && "object" == typeof t.jsonCache) {
					var o = "schlib, rect, polyline, polygon, wire, bus, image, circle, ellipse, line, path, arc, annotation, junction, netlabel, busentry, arrowhead, noconnectflag, pin, netflag, FOOTPRINT, TRACK, COPPERAREA, SOLIDREGION, RECT, CIRCLE, TEXT, ARC, DIMENSION, PAD, VIA, HOLE".split(", ");
					if (S(zc, i) && o.indexOf(i) > -1) {
						var s = zc[i](t.jsonCache, 1);
						"schlib" == i || "FOOTPRINT" == i ? s && Ha("importPart", [s, t]) : s && Ha("importShape", [s, t])
					}
				} else {
					if (a.indexOf(i) > -1 || r.indexOf(i) > -1)
						return Ha("drawShape", [t]);
					if ("FOOTPRINT" == i || "schlib" == i) {
						t.libtype = "FOOTPRINT" == i ? Os.PCBLIB : Os.SCHLIB;
						if (t.shortUrl || t.uuid)
							return or(t);
						if (t.title && ("GeneralPackages" == t.from || "EasyEDALibs" == t.from))
							return or(t)
					} else
						Ha("placePart", [t])
				}
			}
		}
	});





	api('getShape',{id: api('getSelectedIds')}).pointArr


api('createShape',{
	shapeType:'TRACK',
	gId: "gge"+Math.floor(Math.random() * 9e6),
	layerid: "10",
	points: api('getShape',{id: api('getSelectedIds')}).pointArr
});

api('createShape',{
	shapeType:'TRACK',
	"jsonCache": {
		gId: "gge"+Math.floor(Math.random() * 9e6),
		layerid: "10",
		pointArr: [{x:"4760.5", y:"3189.25"},{x:4760.5+10, y:"3189.25"},{x:"4760.5", y:3189.25+10},{x:"4760.5", y:"3189.25"}]
	}
});

api('createShape',{
	shapeType:'TRACK',
	"jsonCache": {
		gId: "gge"+Math.floor(Math.random() * 9e6),
		layerid: "10",
		pointArr: api('getShape',{id: api('getSelectedIds')}).pointArr.map((p)=>{return p.x == null ? { x:p[0] , y:p[1]} : p })
	}
});


points = api('getShape',{id: api('getSelectedIds')}).pointArr.map((p)=>{return p.x == null ? { x:p[0] , y:p[1]} : p });
if( points[points.length-1].x != points[0].x || points[points.length-1].y != points[0].y) points.push(points[0]); // close path
api('createShape',{
	shapeType:'TRACK',
	"jsonCache": {
		gId: "gge"+Math.floor(Math.random() * 9e6), // optional
		layerid: "10",
		pointArr: points
	}
});

var shapes = api('getSelectedIds').split(',').map(v => v.replace(/fake-[0-9]+/,'')).filter((v, i, a) => a.indexOf(v) === i);


api('createShape',{
	shapeType:'wire',
	"jsonCache": {
		pointArr: [{x:10,y:10}, {x:20,y:20}],
		locked: '0',
		strokeColor: '#008800',
		strokeWidth: '1',
		strokeStyle: '0',
		fillColor: 'none',
	}
});



shape = api('getShape',{id: api('getSelectedIds')});
if(shape && shape.pointArr) { 
	api('createShape',{
		shapeType:'SOLIDREGION',
		'jsonCache': {
			layerid: shape.layerid,
			type: 'solid',
			pathStr: 'M ' + shape.pointArr.map(p => `${p.x} ${p.y}` ).join(' L ') + ' Z'
		}
	});
} else {
	$.messager.error("No points from selected shape!");
}

document.querySelector('#root').addEventListener('mousemove',(e)=>{console.log(e); if(e.isTrusted) { e.stopImmediatePropagation(); f = new Event('mousemove', e); x=e.clone(); delete x.isTrusted; console.log(x); Object.assign(f,x); e.target.dispatchEvent(f);} },{capture: true});

document.querySelector('#root').addEventListener('mousemove',(e)=>{console.log(e); if(e.isTrusted) { e.stopImmediatePropagation(); f = new MouseEvent('mousemove', e); f.x = 1200-f.x; f.clientX = f.x; f.movementX*=-1; console.log(f); e.target.dispatchEvent(f);} },{capture: true});

document.querySelector('#root').addEventListener('mousemove',(e)=>{console.log(e); if(e.isTrusted) { e.stopImmediatePropagation(); f = new MouseEvent('mousemove', {clienX: 1200-e.clientX; movementX: e.movementX*-1}); console.log(f); e.target.dispatchEvent(f);} },{capture: true});

document.querySelector('#root').addEventListener('mousemove',(e)=>{
	console.log(e); 
	if(e.isTrusted) { 
		e.stopImmediatePropagation(); 
		w = document.querySelector('#root').clientWidth;
		f = new MouseEvent('mousemove', {
			x: w-e.x, 
			y: e.y,
			clientX: w-e.clientX, 
			clientY: e.clientY,
			movementX: e.movementX*-1,
			movementY: e.movementY,
			button: e.button,
			buttons: e.buttons,
			view: e.view,
			composed: e.composed,
			screenX: e.screenX,
			screenY: e.screenY,
			target: e.target,
			path: e.path,
			bubbles: e.bubbles
		}); 
		console.log(f); 
		e.target.dispatchEvent(f);
	}
},{capture: true});

document.querySelector('#root').addEventListener('mousemove',(e)=>{console.log(e); if(e.isTrusted) { e.stopImmediatePropagation(); f = new MouseEvent('mousemove',e); console.log(f); e.target.dispatchEvent(f);} },{capture: true});




flipmousevent = (e) => {
	//console.log(e); 
	if(e.isTrusted) { 
		e.stopImmediatePropagation(); 
		w = document.querySelector('#root').clientWidth;
		f = new MouseEvent(e.type, {
			x: w-e.x, 
			y: e.y,
			clientX: w-e.clientX, 
			clientY: e.clientY,
			movementX: e.movementX*-1,
			movementY: e.movementY,
			button: e.button,
			buttons: e.buttons,
			view: e.view,
			composed: e.composed,
			screenX: e.screenX,
			screenY: e.screenY,
			target: e.target,
			path: e.path,
			bubbles: e.bubbles
		}); 
		//console.log(f); 
		e.target.dispatchEvent(f);
	}	
}
obj = document.querySelectorAll('#tabbar_bodies div[uuid]').filter(e=>e.style.display=='block')[0]; // get active tab
obj.addEventListener('mousemove',flipmousevent,{capture: true});
obj.addEventListener('mouseup',flipmousevent,{capture: true});
obj.addEventListener('mousedown',flipmousevent,{capture: true});
obj.style.transform = 'scalex(-1)';



flipmousevent = (e) => {
	if(e.isTrusted) { 
		e.stopImmediatePropagation(); 
		w = document.querySelector('#root').clientWidth;
		f = new MouseEvent(e.type, {
			x: w-e.x, 
			y: e.y,
			clientX: w-e.clientX, 
			clientY: e.clientY,
			movementX: e.movementX*-1,
			movementY: e.movementY,
			button: e.button,
			buttons: e.buttons,
			screenX: e.screenX,
			screenY: e.screenY,
			bubbles: e.bubbles
		}); 
		e.target.dispatchEvent(f);
	}	
}
obj = document.querySelectorAll('#tabbar_bodies div[uuid]').filter(e=>e.style.display=='block')[0]; // get active tab
obj = obj.querySelector('iframe');
obj.addEventListener('mousemove',flipmousevent,{capture: true});
obj.addEventListener('mouseup',flipmousevent,{capture: true});
obj.addEventListener('mousedown',flipmousevent,{capture: true});
obj.style.transform = 'scalex(-1)';



// Reset NetPort Mark alignment (select Ports first)
s = api('getSource','json'); 
api('getSelectedIds').split(',').forEach((k)=>{
	if(s.netflag[k] && s.netflag[k].mark) {
		s.netflag[k].mark.x = Number(s.netflag[k].configure.x) + (23 * (s.netflag[k].configure.rotation == 0 ? -1:1));
		s.netflag[k].mark.y = Number(s.netflag[k].configure.y) + 3.5;
		s.netflag[k].mark.textAnchor = (s.netflag[k].configure.rotation == 0) ? 'end' : 'start';
	}
}); 
api('applySource',{source: s, createNew: false}); 
api('editorCall','fitview');



// Reset NetPort Mark alignment (select Ports first)
s = api('getSource','json'); 
api('getSelectedIds').split(',').forEach((k)=>{
	netflag = s.netflag[k];
	if(netflag && netflag.mark) {
		netflag.mark.x = Number(netflag.configure.x) + (23 * (netflag.configure.rotation == 0 ? -1:1));
		netflag.mark.y = Number(netflag.configure.y) + 3.5;
		netflag.mark.textAnchor = (netflag.configure.rotation == 0) ? 'end' : 'start';
		netflag.gId = netflag.configure.gId;
		api('updateShape',{ shapeType:'netflag', "jsonCache": netflag });
	}
});


// Reset NetPort Mark alignment (select Ports first)
api('getSelectedIds').split(',').forEach((k)=>{
	netflag = api('getShape',{id: k});
	if(netflag && netflag.mark && netflag.configure) {
		netflag.mark.x = Number(netflag.configure.x) + (23 * (netflag.configure.rotation == 0 ? -1:1));
		netflag.mark.y = Number(netflag.configure.y) + 3.5;
		netflag.mark.textAnchor = (netflag.configure.rotation == 0) ? 'end' : 'start';
		netflag.gId = netflag.configure.gId;
		api('updateShape',{ shapeType:'netflag', "jsonCache": netflag });
	}
});

window.Locale.i18n('Expose')
window.Locale.i18n('Expose {name}',{name: 'test'});
window.Locale.i18n('Expose {0}',['test']);

api('editorCall',{cmd: 'changeFootprintLayerId', args: [ $('g#gge2203') ]});
callCommand('changeFootprintLayerId', [ $('g#gge4334') ]);

callCommand('changeFootprintLayerId', [ callCommand('getSelected') ]);



importByPathD ('path str'), select_none, attrpanel_data, getSelected, canvas_config, getActiveLayer, isPlaneLayer, getDocStatus, 
dragMoveSwitch, gJsonCache, getBBox, moveTrackTopWhenSelected


api('editorCall',{ cmd:'importByPathD', args:['M3.93 0L3.93-5.68L4.73-5.68L4.73  3.30Z']})


1: "SCH"
2: "SCHLIB"
3: "PCB"
4: "PCBLIB"
5: "PRJ"
6: "SUBPART"
7: "SPICESYMBOL"
8: "SUBCKT"
9: "NETLIST"
10: "WAVEFORM"
11: "SCHLIB3D"
12: "PHOTOVIEW"
13: "SCHMODULE"
14: "PCBMODULE"
15: "VIEW3D"
16: "PCBLIB3D"

var db;
var request = window.indexedDB.open('DBEasyEDA');
var objectStore;
request.onerror = function(event) {
	alert("Warum haben Sie meiner Webapp nicht erlaubt IndexedDB zu verwenden?!");
};
request.onsuccess = function(event) {
	db = request.result;
	objectStore = db.transaction("fonts").objectStore("fonts");
	objectStore.openCursor().onsuccess = function(event) {
		var cursor = event.target.result;
		if (cursor) {
		  console.log("Name for SSN " + cursor.key + " is " + cursor.value);
		  v = new Uint8Array(cursor.value);
		  console.log('x=new Uint8Array(['+v.join(',') +']).buffer');
		  cursor.continue();
		}
		//objectStore.add({key: 'Test', value: ArrayBuffer([0,1,2])});
	  };
};


api('createShape',{"shapeType":"SVGNODE","jsonCache":{"layerid":"1","nodeName":"path","nodeType":1,"attrs":{"d":"M 4123 3291 Q 4133 3301 4143 3291 Q 4153 3281 4143 3311 Q 4133 3341 4123 3311 L 4123 3291","layerid":"1","stroke":"none"}}});

'<path d="M 4123 3291 Q 4133 3301 4143 3291 Q 4153 3281 4143 3311 Q 4133 3341 4123 3311 L 4123 3291" layerid="1" stroke="none"></path>'

api('editorCall',{cmd: 'importShape', args: [
	'<path d="M 4123 3291 Q 4133 3301 4143 3291 Q 4153 3281 4143 3311 Q 4133 3341 4123 3311 L 4123 3291" layerid="1" stroke="none"></path>',
	{"shapeType":"SVGNODE","jsonCache":{"layerid":"1","nodeName":"path","nodeType":1,"attrs":{"d":"M 4123 3291 Q 4133 3301 4143 3291 Q 4153 3281 4143 3311 Q 4133 3341 4123 3311 L 4123 3291","layerid":"1","stroke":"none"}}}
]})


api('editorCall',{cmd: 'importShape', args: [
	'<path d="M 4123 3291 Q 4133 3301 4143 3291 Q 4153 3281 4143 3311 Q 4133 3341 4123 3311 L 4123 3291" layerid="1" stroke="none"></path>'
]})


easyeda.extension.instances.onlinetest = {"basepath": "http://127.0.0.1:5500/online-extension/"}
easyeda.extension.instances.onlinetest.basepath = 'http://127.0.0.1:5500/online-extension/'
easyeda.extension.instances.onlinetest.isLocal = false
easyeda.extension.unload('onlinetest')
easyeda.extension.load('onlinetest');

