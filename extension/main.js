/*
	Setting your extension ID:
	Every Extension has a unique extension ID. The extension ID is extracted from this
	JavaScript File using regular expressions.
	The expression is looking for extension-{extensionid}-{whatever}.
	So, this is how you set it to "exposeapi" within this comment:

	extension-exposeapi-ilovedocumentation

	Since you probably also need the extension ID in you code, you better use this:
*/
const extensionId = 'extension-exposeapi-name'.split('-')[1];
const instance = easyeda.extension.instances[extensionId];

/*
	Expose "api" to the global window object. This way you can use api() also from
	within the Browsers console, which makes developing easier.
	This instance of api() will however be scoped to this extension.
*/
window.api = api;
console.log("You can now use api() in the Browser console!");

/*
	The manifest.json has some metadata about your extension. You can access it, alongside
	other data, via easyeda.extension.instances.{extensionid}.manifest
*/
const manifest = instance.manifest;

/*
	The following code uses Helper-Functions declared in easyeda-helper.js.
	Commands are used as actions on UI elements like Buttons or Menu Items.
	You can also execute commands within your script, but you can just use regular functions there.
	Commands are also a way to communicate between different scripts.
*/

const H = instance.Helper; // Helper class declared in easyeda-helper.js

var cmds = {};
cmds.apply = H.createCommand(() => { console.log("extension-exposeapi-apply executed!"); });
cmds.setting = H.createCommand(() => { 
	regularFunction(); // call a regular function from a command
 });
cmds.debugger = H.createCommand(() => { debugger; });
cmds.logselected = H.createCommand(() => { 
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
			cmd: cmds.apply, 
			title: 'Submenu Item Tooltip',
			icon: api('getRes', { file: 'icon.svg' })
		},
		{
			"text":"Button 2 Label", 
			"cmd": cmds.setting,
		},
		{
			"text":"Halt Debugger", 
			"cmd":cmds.debugger
		},
		{
			"text":"Log selected Shape(s) to Console", 
			"cmd":cmds.logselected
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
	This loads and executes a function that is loaded from a bundled js module
*/
(async ()=>{
	var myModule;
	myModule = await H.loadExtensionModule('module.js');
	myModule.myModuleFunction();
})();

/*
	This loads and executes a function that is loaded from a regular bundled js file
*/
(async ()=>{
	eval(await H.getExtensionScript('lib.js'));
	myLibraryFunction();
	myLibraryFunctionVar();
})();

/*
	Check GitHub for Updates
*/
H.checkUpdate();