

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

