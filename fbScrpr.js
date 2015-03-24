
// var system = require('system');
// var page = require('webpage').create();
// page.onResourceRequested = function (request) {
//     system.stderr.writeLine('= onResourceRequested()');
//     system.stderr.writeLine('  request: ' + JSON.stringify(request, undefined, 4));
// };
 
// page.onResourceReceived = function(response) {
//     system.stderr.writeLine('= onResourceReceived()' );
//     system.stderr.writeLine('  id: ' + response.id + ', stage: "' + response.stage + '", response: ' + JSON.stringify(response));
// };
 
// page.onLoadStarted = function() {
//     system.stderr.writeLine('= onLoadStarted()');
//     var currentUrl = page.evaluate(function() {
//         return window.location.href;
//     });
//     system.stderr.writeLine('  leaving url: ' + currentUrl);
// };
 
// page.onLoadFinished = function(status) {
//     system.stderr.writeLine('= onLoadFinished()');
//     system.stderr.writeLine('  status: ' + status);
// };
 
// page.onNavigationRequested = function(url, type, willNavigate, main) {
//     system.stderr.writeLine('= onNavigationRequested');
//     system.stderr.writeLine('  destination_url: ' + url);
//     system.stderr.writeLine('  type (cause): ' + type);
//     system.stderr.writeLine('  will navigate: ' + willNavigate);
//     system.stderr.writeLine('  from page\'s main frame: ' + main);
// };
 
// page.onResourceError = function(resourceError) {
//     system.stderr.writeLine('= onResourceError()');
//     system.stderr.writeLine('  - unable to load url: "' + resourceError.url + '"');
//     system.stderr.writeLine('  - error code: ' + resourceError.errorCode + ', description: ' + resourceError.errorString );
// };
 
// page.onError = function(msg, trace) {
//     system.stderr.writeLine('= onError()');
//     var msgStack = ['  ERROR: ' + msg];
//     if (trace) {
//         msgStack.push('  TRACE:');
//         trace.forEach(function(t) {
//             msgStack.push('    -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function + '")' : ''));
//         });
//     }
//     system.stderr.writeLine(msgStack.join('\n'));
// };
// page.open('https://www.facebook.com/settings/?tab=applications&locale=fr_FR', function(status){
// 	if(status === "success"){
// 		console.log("status: " + status);
// 		//console.log(document.getElementById("email").value);
// 		//this.echo(this.getTitle());
// 		console.log(document.body.innerHTML);
// 		page.evaluate(function(){
// 			console.log(document.body.innerHTML);
// 		});
// 		phantom.exit(0);
// 	} else {
// 		console.log("Error openeing url \"" + page.reason_url + "\": " + page.reason);
// 		phantom.exit(1);
// 	}
	
// });\

var casper = require('casper').create({
	verbose : true,
	logLevel : 'info'
});
var email="";
var pass="";
	// email = casper.echo(casper.cli.get(0));
	// pass = casper.echo(casper.cli.get(1)


var login_username = /*   */;
var login_password = /*    */;

casper.start('https://www.facebook.com/settings/?tab=applications&locale=fr_FR', function(){
	this.echo(this.getTitle());
	this.fill('form#login_form', {
		'email': login_username,
		'pass': login_password
	}, true);
});

casper.thenOpen('https://www.facebook.com/settings/?tab=applications&locale=fr_FR', function(){
	this.echo(this.getTitle());
	casper.each(this.getElementsInfo('div._4bl7'), function(casper, element, j){
		console.log(element);
	});
});

casper.run();

