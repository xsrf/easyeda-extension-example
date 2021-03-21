/*
	This script is executed by EasyEDA in a separate scope via eval().
	"this" is set to window. All your global variables are attached to window.
	You can have multiple js files in an extension, but they have different scopes.
	Inside this scope, you have access to "api".
*/

// These will be globally available via window object (don't use):
testVariableGlobal = 42;
eval('testVariableEvalGlobal = 42');

// These will be only available within this script:
var testVariableVar = 42; 
let testVariableLet = 42;
const testVariableConst = 42;
eval('var testVariableEvalVar = 42');

/*
	Expose "api" to the global window object. This way you can use api() also from
	within the Browsers console, which makes developing easier.
	This instance of api() will however be scoped to this extension.
*/
window.api = api;
console.log("You can now use api() in the Browser console!");

/*
	Setting your Extension-ID:
	Every Extension has a unique extension ID. The extension ID is extracted from this
	JavaScript File using regular expressions.
	The expression is looking for extension-{extensionid}-{whatever}.
	So, this is how you set it to "exposeapi" within this comment:

	extension-exposeapi-ilovedocumentation
*/

/*
	Also, there is no api (I am aware of) to read back your extension ID programmatically.
	You MAY need this if you don't set the extension ID, but let the user choose.
	So, one "hack" would be to create an UI Dialog. It will get created with the extension ID as part of
	its own ID in the DOM. You can then read this back.
*/
var extensionId = api('createDialog',{title:'getId'})[0].id.split('-')[2]; // id = dlg-extension-exposeapi-126594

/*
	A cleaner way is to set the extension ID and also declare it as a variable in one step:
*/
var extensionId = 'extension-exposeapi-ilovedocumentation'.split('-')[1];


/*
	The manifest.json has some metadata about your extension. You can access it, alongside
	other data, via easyeda.extension.instances.{extensionid}.manifest
*/
const instance = easyeda.extension.instances[extensionId];
const manifest = instance.manifest;

/*
	createCommand Command router is used to register extension specific commands.
	Use 'extension-{extensionid}-{command} syntax.
	This is also a way to set your extension ID, because the format matches the
	requirement mentioned above.
	Commands are used as actions on UI elements like Buttons or Menu Items.
	You can also execute commands within your script, but you can just use regular functions there.
	Commands are also a way to communicate between different scripts.
*/

api('createCommand', {
	'extension-exposeapi-apply' : () => {
		console.log("extension-exposeapi-apply executed!");
	},
	'extension-exposeapi-setting' : () => {
		regularFunction(); // call a regular function from a command
	},
	'extension-exposeapi-debugger' : () => {
		dbg = this;
		debugger;
	},
	'extension-exposeapi-logselected' : () => {
		// shapes = api('getSelectedIds').split(',').map(v => v.replace(/fake-[0-9]+/,'')).filter((v, i, a) => a.indexOf(v) === i);
		ids = api('getSelectedIds');
		if(ids) {
			// IDs are comma separated value, sometimes prefixed with "fake-nn" when track segments are selected
			console.log(`Selected ids: ${ids}`);
			ids = ids.split(',');
			ids = ids.map(v => v.replace(/fake-[0-9]+/,'')).filter((v, i, a) => a.indexOf(v) === i); // remove "fake-nnn"
			ids.forEach((i) => {
				shape = api('getShape', { id: i });
				console.log(shape);
			});
		} else {
			$.messager.error("No shape selected. Select a shape and try again!");
		}
	}
});

function regularFunction() {
	console.log("regularFunction"); // called from command
}

/*
	createToolbarButton actually creates a menu, not a toolbar... 
	The Title of the menue is the extension title from manifest. 
	Icons do work for menu items, not for the main menu?!
*/

api('createToolbarButton', {
	icon: api('getRes', { file: 'icon.svg' }),
	title: 'Main Menu Item Tooltip',
	fordoctype: 'pcb,sch', // Available in Schematic view, PCB view or both. More options are available...
	menu:[
		{
			text: "Button 1 with Icon", 
			cmd: "extension-exposeapi-apply", 
			title: 'Submenu Item Tooltip',
			icon: api('getRes', { file: 'icon.svg' })
		},
		{
			"text":"Button 2 Label", 
			"cmd":"extension-exposeapi-setting",
		},
		{
			"text":"Halt Debugger", 
			"cmd":"extension-exposeapi-debugger"
		},
		{
			"text":"Log selected Shape(s) to Console", 
			"cmd":"extension-exposeapi-logselected"
		},
		{
			// horizontal bar
		},
		{
			text: 'More menu stuff',
			submenu: [

				{
					text: 'Checkbox 1',
					group: 'checkbox:groupIdNotSure',
					onclick: (e)=>{console.log('onClick',e)},
				},
				{
					text: 'Checkbox 2',
					group: 'checkbox:groupIdNotSure',
					checked: true,
					onclick: (e)=>{console.log('onClick',e)},
				},
				{
					text: 'Radiogroup 1 Option 1',
					group: 'radio:grp1',
					onclick: (e)=>{console.log('onClick',e)},
				},
				{
					text: 'Radiogroup 1 Option 2',
					group: 'radio:grp1',
					checked: true,
					onclick: (e)=>{console.log('onClick',e)},
				},
				{
					text: 'Radiogroup 1 Option 3',
					group: 'radio:grp1',
					disabled: true
				},
				{},
				{
					text: 'Disabled Item with Hotke',
					hotkey: 'Key+Key',
					disabled: true
				},
				{
					text: 'Data-Icon and href',
					href: 'https://www.google.com/',
					icon: 'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
				},
				{
					text: 'Only in PCB',
					fordoctype: 'pcb'
				},
				{
					text: 'With Handler/onclick',
					id: 'myTestId',
					onclick: (e)=>{console.log('onClick',e,arguments)},
					handler: (e)=>{console.log('handler',e,arguments)},
				},
				{
					text: 'Submenu',
					submenu:[
						{
							text: "Text"
						}
					]
				},
		

			]
		},
	]
});


/*
	Load additional modules/libraries/scripts from the extension
*/

const loadExtensionModule = async (filename) => {
	try {
		const url = api('getRes',{file: filename});
		if(!url) throw 'blob-url undefined';
		return await import(url);	
	} catch (error) {
		const msg = `Failed to load module '${filename}' of extension '${extensionId}'. Maybe you didn't select all files for install?! Please reinstall! ${error}`;
		$.messager.error(msg);
		throw msg;
	}	
}


const loadExtensionScript = async (filename) => {
	try {
		const response = await fetch(api('getRes',{file: filename}));
		const body = await response.text();
		return eval(body);
	} catch (error) {
		const msg = `Failed to load script '${filename}' of extension '${extensionId}'. Maybe you didn't select all files for install?! Please reinstall! ${error}`;
		$.messager.error(msg);
		throw msg;
	}	
}

const getExtensionScript = async (filename) => {
	try {
		const url = api('getRes',{file: filename});
		if(!url) throw 'blob-url undefined';
		const response = await fetch(url);
		const body = await response.text();
		return body;
	} catch (error) {
		const msg = `Failed to load script '${filename}' of extension '${extensionId}'. Maybe you didn't select all files for install?! Please reinstall! ${error}`;
		$.messager.error(msg);
		throw msg;
	}	
}

var myModule;

(async ()=>{
	myModule = await loadExtensionModule('module.js');
	myModule.myModuleFunction();
	eval(await getExtensionScript('lib.js'));
	myLibraryFunction();
	myLibraryFunctionVar();
})();


/*
	Self-Contained Update-Notification.
	Relies on "instance" pointing to easyeda.extension.instances[extensionId]
	"updatebaseurl" being set in the manifest
	"homepage" being set in the manifest
*/
(async ()=>{
	try {
		var skipVersion = localStorage.getItem(`extension-${instance.id}-update-skip`) || instance.manifest.version;
		var cmds = {};
		cmds[`extension-${instance.id}-update-page`] = ()=>{ window.open(instance.manifest.homepage,'_blank') };
		cmds[`extension-${instance.id}-update-skip`] = ()=>{ localStorage.setItem(`extension-${instance.id}-update-skip`,skipVersion) };
		api('createCommand', cmds);
		var response = await fetch(instance.manifest.updatebaseurl + 'manifest.json');
		var onlineManifest = await response.json();
		if(onlineManifest.version != instance.manifest.version && onlineManifest.version != skipVersion) {
			skipVersion = onlineManifest.version;
			$.messager.show({
				title: `Update Available for <b>${instance.manifest.name}</b>`,
				msg: `<table>
						<tr><td>Installed:</td><td>${instance.manifest.name} ${instance.manifest.version}</td></tr>
						<tr><td>Available:</td><td>${onlineManifest.name} ${onlineManifest.version}</td></tr>
					</table>
					<div class="dialog-button">
						<a tabindex="0" cmd="extension-${instance.id}-update-page;dialog-close" class="l-btn"><span class="l-btn-left"><span class="l-btn-text i18n">Download</span></span></a>
						<a tabindex="0" cmd="extension-${instance.id}-update-skip;dialog-close" class="l-btn"><span class="l-btn-left"><span class="l-btn-text i18n">Skip Version</span></span></a>
					</div>
					`,
				height: 'auto',
				timeout: 30e3,
				showType: "slide"
			});
		}			
	} catch (error) {
		console.log('Update check failed: '+error);
	}
})();