
window.api = api;
console.log("You can now use api() in the Browser console!");

function regularFunction() {
	console.log("regularFunction");
}

/*
	createCommand Command router is used to register extension specific commands.
	Use 'extension-{extensionid}-{command} syntax.
	{extensionid} will become the unique id of your extension when imported.
	Thus, your extension may need at least one command registered...
*/

api('createCommand', {
	'extension-exposeapi-apply' : () => {
		console.log("extension-exposeapi-apply executed!");
	},
	'extension-exposeapi-setting' : () => {
		regularFunction();
	}
});

/*
	createToolbarButton actually creates a menu... the Title of the menue is the extension
	title from manifest. Icons do work for menu items, not for the main menu.
*/

api('createToolbarButton', {
	icon: api('getRes', {file:'icon.svg'}),
	title:'Main Menu Item Tooltip',
	fordoctype:'pcb,sch',
	menu:[
		{
			text:"Button 1 Label", 
			cmd:"extension-exposeapi-apply", 
			title:'Submenu Item Tooltip',
			icon: api('getRes', {file:'icon.svg'})
		},
		{
			"text":"Button 2 Label", 
			"cmd":"extension-exposeapi-setting"
		}
	]
});
