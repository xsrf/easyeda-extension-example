/*
	This script is executed by EasyEDA in a separate scope.
	All you "global" variables will be unavailable from outside or other scripts.
	You can have multiple js files in an extension, but they have different scopes.
	Inside this scope, you have access to "api".
*/

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
	So, this is how you set it to "exposeapi":

	extension-exposeapi-ilovedocumentation
*/

/*
	Also, there is no api (I am aware of) to read back your extension ID programmatically.
	You MAY need this if you don't set the extension ID, but let the user choose.
	So, one "hack" would be to create an UI Dialog. It will get created with the extension ID as part of
	its own ID in the DOM. You can then read this back.
*/
extensionId = api('createDialog',{title:'getId'})[0].id.split('-')[2]; // id = dlg-extension-exposeapi-126594

/*
	The manifest.json has some metadata about your extension. You can access it, alongside
	other data, via easyeda.extension.instances.{extensionid}.manifest
*/
version = easyeda.extension.instances.exposeapi.manifest.version;
manifest = easyeda.extension.instances[extensionId].manifest;

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
			"cmd":"extension-exposeapi-setting"
		},
		{
			"text":"Halt Debugger", 
			"cmd":"extension-exposeapi-debugger"
		},
		{
			"text":"Log selected Shape(s) to Console", 
			"cmd":"extension-exposeapi-logselected"
		}
	]
});
