// var http = require('http');

// var url = 'https://www.facebook.com/settings/?tab=applications&locale=fr_FR';

// console.log("hello, world");


// var request = require('request');
// var cheerio = require('cheerio');

// // Connect to url
// request(url, function(err, resp, html){
// 	if (typeof html !== 'undefined'){
// 		var full_html = html;
// 		// html = html.replace(/\n/ig,"   ");
// 		// html = html.replace(/^.*uiBoxYellow"/ig, "\n");
// 		console.log(html);
// 	}
// });
var system = require('system');
var page = require('webpage').create();
page.onResourceRequested = function (request) {
    system.stderr.writeLine('= onResourceRequested()');
    system.stderr.writeLine('  request: ' + JSON.stringify(request, undefined, 4));
};
 
page.onResourceReceived = function(response) {
    system.stderr.writeLine('= onResourceReceived()' );
    system.stderr.writeLine('  id: ' + response.id + ', stage: "' + response.stage + '", response: ' + JSON.stringify(response));
};
 
page.onLoadStarted = function() {
    system.stderr.writeLine('= onLoadStarted()');
    var currentUrl = page.evaluate(function() {
        return window.location.href;
    });
    system.stderr.writeLine('  leaving url: ' + currentUrl);
};
 
page.onLoadFinished = function(status) {
    system.stderr.writeLine('= onLoadFinished()');
    system.stderr.writeLine('  status: ' + status);
};
 
page.onNavigationRequested = function(url, type, willNavigate, main) {
    system.stderr.writeLine('= onNavigationRequested');
    system.stderr.writeLine('  destination_url: ' + url);
    system.stderr.writeLine('  type (cause): ' + type);
    system.stderr.writeLine('  will navigate: ' + willNavigate);
    system.stderr.writeLine('  from page\'s main frame: ' + main);
};
 
page.onResourceError = function(resourceError) {
    system.stderr.writeLine('= onResourceError()');
    system.stderr.writeLine('  - unable to load url: "' + resourceError.url + '"');
    system.stderr.writeLine('  - error code: ' + resourceError.errorCode + ', description: ' + resourceError.errorString );
};
 
page.onError = function(msg, trace) {
    system.stderr.writeLine('= onError()');
    var msgStack = ['  ERROR: ' + msg];
    if (trace) {
        msgStack.push('  TRACE:');
        trace.forEach(function(t) {
            msgStack.push('    -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function + '")' : ''));
        });
    }
    system.stderr.writeLine(msgStack.join('\n'));
};
page.open('https://www.facebook.com', function(status){
	console.log("status: " + status);
	if(status === "success"){
		page.render('example.png');
		phantom.exit(0);
	} else {
		console.log("Error openeing url \"" + page.reason_url + "\": " + page.reason);
		phantom.exit(1);
	}
	
});
// var casper = require('casper').create();
// casper.start('https://twitter.com/', function(){
// 	this.echo(this.getTitle());
// });

// casper.thenOpen('https://www.facebook.com/', function(){
// 	this.echo(this.getTitle());
// });

// casper.run();

//https://www.facebook.com/settings/?tab=applications&locale=fr_FR'