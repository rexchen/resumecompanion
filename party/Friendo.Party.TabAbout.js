Ti.include('Friendo.Party.js');

Friendo.Party.TabAbout = function() {
	this.renderTitle = function(){
		var viewLogo = Ti.UI.createImageView({
			image: 'images/logo.png',
			width: 212 * Friendo.Party.widthScale(),
			height: 40 * Friendo.Party.heightScale()
		});
		this.viewNav = Ti.UI.createImageView({
			image: 'images/bg_bar.jpg',
			width: 640 * Friendo.Party.widthScale(),
			height: 88 * Friendo.Party.heightScale(),
			top: 0
		});
		this.viewNav.add(viewLogo);
	};
	this.renderContent = function(){
		var lH1 = Ti.UI.createLabel({
			text: Ti.Locale.getString('party_about'),
			font: {
				fontSize: 24,
				fontWeight: 'bold'
			},
			top: 40 * Friendo.Party.heightScale(),
			left: 34 * Friendo.Party.widthScale()
		});
		var lH2 = Ti.UI.createLabel({
			text: Ti.Locale.getString('party_domain'),
			font: {
				fontSize: 16
			},
			top: 106 * Friendo.Party.heightScale(),
			left: 34 * Friendo.Party.widthScale(),
			zIndex: 2
		});
		var vDoll = Ti.UI.createImageView({
			image: 'images/bg_doll.png',
			width: 313 * Friendo.Party.widthScale(),
			height: 165 * Friendo.Party.heightScale(),
			top: 12 * Friendo.Party.widthScale(),
			right: 24 * Friendo.Party.heightScale(),
			zIndex: 1
		});
		var vDescription = Ti.UI.createView({
			borderColor: '#bbb',
			borderRadius: 10,
			borderWidth: 2,
			width: 600 * Friendo.Party.widthScale(),
			height: 580,
			top: 165 * Friendo.Party.heightScale(),
			zIndex: 2,
			backgroundColor: '#fff'
		});
		var lDescription = Ti.UI.createLabel({
			text: Ti.Locale.getString('party_about_description'),
			color: '#333',
			font: {
				fontSize: 14
			},
			width: 560 * Friendo.Party.widthScale(),
			top: 185 * Friendo.Party.heightScale(),
			zIndex: 3
		});
		this.vAbout = Ti.UI.createScrollView({
			top: this.viewNav.height,
			contentHeight: 'auto',
			showVerticalScrollIndicator:true
		});
		this.vAbout.add(lH1);
		this.vAbout.add(lH2);
		this.vAbout.add(vDoll);
		this.vAbout.add(vDescription);
		this.vAbout.add(lDescription);
	};
	this.init = function() {
		//render title
		this.renderTitle();
		//render content
		this.renderContent();
		//main window
		var winAbout = Ti.UI.createWindow({
			navBarHidden: true,
			backgroundImage: 'images/bg.png'
		});
		winAbout.add(this.viewNav);
		winAbout.add(this.vAbout);
		//today main tab
		this.tab = Ti.UI.createTab({
			icon: 'images/tabAbout.png',
			title: Ti.Locale.getString('party_about'),
			window: winAbout
		});
	};
	this.init();
};
Friendo.Party.TabAbout.prototype.getTab = function() {
    return this.tab;
};
module.exports = Friendo.Party.TabAbout;