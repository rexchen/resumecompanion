Ti.include('Friendo.Party.js');
Ti.include('memberData.js');

Friendo.Party.TabRecord = function() {
	var me = this;
	this.havePrize = function(tickets){
		var award = false;
		for(var i=0,j=tickets.length;i<j;i++){
			if(tickets[i].award){
				award = true;
			}
		}
		return award;
	};
	this.renderGoBack = function(){
		var lGoBack = Ti.UI.createLabel({
			color: '#fff',
			text: Ti.Locale.getString('party_record'),
			font: {
				fontSize: 11,
				fontWeight: 'bold'
			},
			right: 10 * Friendo.Party.widthScale()
		});
		this.vGoBack = Ti.UI.createImageView({
			width: 127 * Friendo.Party.widthScale(),
			height: 60 * Friendo.Party.heightScale(),
			left: 10 * Friendo.Party.widthScale(),
			image: 'images/btn_left.png'
		});

		lGoBack.addEventListener('touchstart',function(){
			me.vGoBack.image = 'images/btn_left_hover.png';
		});
		lGoBack.addEventListener('touchend',function(){
			me.vGoBack.image = 'images/btn_left.png';
		});
		this.vGoBack.addEventListener('touchstart',function(){
			this.image = 'images/btn_left_hover.png';
		});
		this.vGoBack.addEventListener('touchend',function(){
			this.image = 'images/btn_left.png';
		});
		this.vGoBack.addEventListener('click',function(){
			//click event
			me.winRecord.remove(me.vDetail);
			me.viewNav.remove(me.vGoBack);
		});
		this.vGoBack.add(lGoBack);
		this.viewNav.add(this.vGoBack);
	};
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
		var recordData = [];
		for(var i=0,j=memberData.length;i<j;i++){
			var item = memberData[i];
			var data = {};
			data.title = item.date + ' ' + item.productName;
			if(this.havePrize(item.tickets)){
				data.leftImage = 'images/bg_gift_award.png';				
			}
			else{
				data.leftImage = 'images/bg_gift.png';
			}
			data.hasChild = true;
			data.height = 110 * Friendo.Party.heightScale();
			data.id = i;
			recordData.push(data);
		}
		var tableRecord = Ti.UI.createTableView({
		    top: this.viewNav.height,
		    data: recordData
		});

		tableRecord.addEventListener('click', function(e){
			var item = memberData[e.rowData.id];
			var award = me.havePrize(item.tickets);
			me.vDetail = Ti.UI.createScrollView({
				backgroundImage: 'images/bg.png',
				width: 640 * Friendo.Party.widthScale(),
				top: me.viewNav.height,
				showVerticalScrollIndicator:true,
				contentHeight: 'auto'
			});
			me.winRecord.add(me.vDetail);
			
			//render goback button
			me.renderGoBack();
			
			var vProduct = Ti.UI.createView({
				width: 640 * Friendo.Party.widthScale(),
				height: 416 * Friendo.Party.heightScale(),
				top: 0,
				backgroundColor: '#fff'
			});
			var lDate = Ti.UI.createLabel({
				text: item.date,
				color: '#fa79a0',
				font: {
					fontSize: 14,
					fontWeight: 'bold'
				},
				top: 74 * Friendo.Party.heightScale()
			});
			var vDate = Ti.UI.createImageView({
				width: 159 * Friendo.Party.widthScale(),
				height: 131 * Friendo.Party.heightScale(),
				image: 'images/bg_date.png',
				top: 0,
				left: 20 * Friendo.Party.widthScale()
			});
			var vProductPicture = Ti.UI.createImageView({
				width: 412 * Friendo.Party.widthScale(),
				height: 312 * Friendo.Party.heightScale(),
				image: item.productPicture,
				top: 24 * Friendo.Party.heightScale(),
				right: 24 * Friendo.Party.widthScale()
			}); 
			if(award){
				var vMsg = Ti.UI.createView({
					bottom: 0,
					height: 60 * Friendo.Party.heightScale(),
					width: vProductPicture.width,
					backgroundColor: '#000',
					opacity: 0.6,
					zIndex: 2
				});
				var lMsg = Ti.UI.createLabel({
					text: Ti.Locale.getString('party_get_award'),
					color: '#fff',
					font: {
						fontSize: 13,
						fontWeight: 'bold'
					},
					bottom: 14 * Friendo.Party.heightScale(),
					zIndex: 3
				});
				var vAwardIcon = Ti.UI.createImageView({
					image: 'images/ico_award.png',
					height: 90 * Friendo.Party.heightScale(),
					width: 91 * Friendo.Party.widthScale(),
					top: 262 * Friendo.Party.heightScale(),
					left: 172 * Friendo.Party.widthScale(),
					zIndex: 4
				});
				vProduct.add(vAwardIcon);
				vProductPicture.add(lMsg);
				vProductPicture.add(vMsg);
			}
			var lProductName = Ti.UI.createLabel({
				text: item.productName,
				color: '#fa79a0',
				font: {
					fontSize: 16,
					fontWeight: 'bold'
				},
				top: (24+16) * Friendo.Party.heightScale() + vProductPicture.height
			});
			for(var k=0,l=item.tickets.length;k<l;k++){
	  			var vTicket = Ti.UI.createImageView({
					width: 151 * Friendo.Party.widthScale(),
					height: 99 * Friendo.Party.heightScale(),
					top: (99 * k + 140) * Friendo.Party.heightScale(),
					left: 24 * Friendo.Party.widthScale(),
					image: 'images/ticket'+(k+1)+'.png'
				});
				if(item.tickets[k].award){
					vTicket.image = 'images/ticket'+(k+1)+'_award.png';
				}
				var lTicket = Ti.UI.createLabel({
					text: item.tickets[k].table + Ti.Locale.getString('table') + item.tickets[k].number + Ti.Locale.getString('number'),
					bottom: 16 * Friendo.Party.heightScale(),
					color: '#fa79a0',
					font: {
						fontSize: 12,
						fontWeight: 'bold'
					}
				});
				vTicket.add(lTicket);
				vProduct.add(vTicket);
			}
			
			vDate.add(lDate);
			vProduct.add(vDate);
			vProduct.add(vProductPicture);
			vProduct.add(lProductName);
			
			var vShadow = Ti.UI.createImageView({
				width: 640 * Friendo.Party.widthScale(),
				height: 8,
				image: 'images/bg_shadow.png',
				top:  vProduct.height
			}); 
			
			var vRegion = Ti.UI.createView({
				width: 640 * Friendo.Party.widthScale(),
				height: 0,
				top: vProduct.height + vShadow.height
			});
			
			if(item.productActive){
				vRegion.height = 120 * Friendo.Party.heightScale();
				var vFBInvite = Ti.UI.createImageView({
					width: 587 * Friendo.Party.widthScale(),
					height: 59 * Friendo.Party.heightScale(),
					image: 'images/btn_invite.png'
				});
				vFBInvite.addEventListener('touchstart',function(){
					this.image = 'images/btn_invite_hover.png';
				});
				vFBInvite.addEventListener('touchend',function(){
					this.image = 'images/btn_invite.png';
				});
				vFBInvite.addEventListener('click',function(){
					//bind click event
				});
				vRegion.add(vFBInvite);
			}
			else if(!award){
				vRegion.height = 120 * Friendo.Party.heightScale();
				var vTomorrow = Ti.UI.createImageView({
					width: 97 * Friendo.Party.widthScale(),
					height: 82 * Friendo.Party.heightScale(),
					image: 'images/bg_blue_doll.png',
					right: 40 * Friendo.Party.widthScale()
				});
				var lTomorrow = Ti.UI.createLabel({
					text: Ti.Locale.getString('party_tomorrow'),
					color: '#56b0d5',
					font: {
						fontSize: 15,
						fontWeight: 'bold'
					},
					left: 40 * Friendo.Party.widthScale()
				});
				vRegion.add(vTomorrow);
				vRegion.add(lTomorrow);
			}
			
			var lMoreTitle = Ti.UI.createLabel({
				text: Ti.Locale.getString('party_more'),
				color: '#676767',
				font: {
					fontSize: 12,
				},
				left: 64 * Friendo.Party.widthScale(),
				top: 8 * Friendo.Party.heightScale()
			});
			var vMoreTitle = Ti.UI.createImageView({
				width: 640 * Friendo.Party.widthScale(),
				height: 56 * Friendo.Party.heightScale(),
				top: vProduct.height + vShadow.height + vRegion.height,
				image: 'images/bg_productBar.png'
			});
			vMoreTitle.add(lMoreTitle);
			var lMoreDes = Ti.UI.createLabel({
				text: Ti.Locale.getString('party_more_des'),
				color: '#676767',
				font: {
					fontSize: 12,
				},
				left: 40 * Friendo.Party.widthScale(),
				top: vMoreTitle.top + vMoreTitle.height + 20 * Friendo.Party.heightScale()
			});
			
			me.vDetail.add(vProduct);
			me.vDetail.add(vShadow);
			me.vDetail.add(vRegion);
			me.vDetail.add(vMoreTitle);
			me.vDetail.add(lMoreDes);
			me.winRecord.add(me.vDetail);
		});
		this.winRecord.add(tableRecord);

		
	};
	this.init = function() {
		//render title
		this.renderTitle();

		//main window
		this.winRecord = Ti.UI.createWindow({
			navBarHidden: true,
			backgroundImage: 'images/bg.png'
		});
		this.winRecord.add(this.viewNav);

		//render content
		this.renderContent();
		
		//today main tab
		this.tab = Ti.UI.createTab({
			icon: 'images/tabRecord.png',
			title: Ti.Locale.getString('party_record'),
			window: this.winRecord
		});
	};
	this.init();
};
Friendo.Party.TabRecord.prototype.getTab = function() {
    return this.tab;
};
module.exports = Friendo.Party.TabRecord;