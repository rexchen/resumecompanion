Ti.include('Friendo.Party.js');

Friendo.Party.TabToday = function() {
	var me = this;
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
		this.renderDescriptionButton();
	};
	this.renderContent = function(){
		//render content		
		var viewToday = [];
		for(var i=0,j=this.productData.length;i<j;i++){
			var item = this.productData[i];
			
			//product image
			var vPic = Ti.UI.createImageView({
				width: 596 * Friendo.Party.widthScale(),
				height: 450 * Friendo.Party.heightScale(),
				image: item.productImage,
				top: 24 * Friendo.Party.heightScale()
			});
			//date
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
			vDate.add(lDate);
			//product name
			var lProductName = Ti.UI.createLabel({
				text: item.productName,
				color: '#fa79a0',
				font: {
					fontSize: 16,
					fontWeight: 'bold'
				},
				top: (24+16) * Friendo.Party.heightScale() + vPic.height
			});

			var vProduct = Ti.UI.createView({
				width: 640 * Friendo.Party.widthScale(),
				height: 545 * Friendo.Party.heightScale(),
				top: 0,
				backgroundColor: '#fff'
			});
			vProduct.add(vPic);
			vProduct.add(vDate);
			vProduct.add(lProductName);
			//product qty
			var lQty = Ti.UI.createLabel({
				text: item.productQty + Ti.Locale.getString('party_qty'),
				color: '#fa79a0',
				font: {
					fontSize: 12,
				},
				top: 54 * Friendo.Party.heightScale(),
				left: 40 * Friendo.Party.widthScale(),
			});
			//time
			var lTime = Ti.UI.createLabel({
				text: '12時12分12秒',
				color: '#fa79a0',
				font: {
					fontSize: 12,
				},
				top: 54 * Friendo.Party.heightScale(),
				left: 176 * Friendo.Party.widthScale(),
			});
			//row background
			var vProductData = Ti.UI.createImageView({
				width: 640 * Friendo.Party.widthScale(),
				height: 102 * Friendo.Party.heightScale(),
				top: vProduct.height,
				image: 'images/bg_productData.png'
			});
			//facebook button
			var vFacebook = Ti.UI.createImageView({
				width: 215 * Friendo.Party.widthScale(),
				height: 59 * Friendo.Party.heightScale(),
				top: 22  * Friendo.Party.heightScale(),
				right: 28  * Friendo.Party.widthScale(),
				image: 'images/btn_facebook.png'
			});
			//bind facebook event
			vFacebook.addEventListener('touchstart',function(){
				this.image = 'images/btn_facebook_hover.png';
			});
			vFacebook.addEventListener('touchend',function(){
				this.image = 'images/btn_facebook.png';
			});
			vFacebook.addEventListener('click',function(){
				//click event
			});
			
			vProductData.add(lQty);
			vProductData.add(lTime);
			vProductData.add(vFacebook);
			
			//product description
			var lDescriptionTitle = Ti.UI.createLabel({
				text: Ti.Locale.getString('party_product_description'),
				color: '#676767',
				font: {
					fontSize: 12,
				},
				left: 64 * Friendo.Party.widthScale(),
				top: 8 * Friendo.Party.heightScale()
			});
			var vDescriptionTitle = Ti.UI.createImageView({
				width: 640 * Friendo.Party.widthScale(),
				height: 56 * Friendo.Party.heightScale(),
				top: vProduct.height + vProductData.height,
				image: 'images/bg_productBar.png'
			});
			vDescriptionTitle.add(lDescriptionTitle);
			var lDescription = Ti.UI.createLabel({
				text: item.description,
				top: vDescriptionTitle.top + vDescriptionTitle.height + 10 * Friendo.Party.heightScale(),
				left: 20 * Friendo.Party.widthScale(),
				right: 20 * Friendo.Party.widthScale(),
				//refine
				height: 500 * Friendo.Party.heightScale(),
				color: '#676767',
				font: {
					fontSize: 12,
				}
			});
			//company name
			var lCompanyTitle = Ti.UI.createLabel({
				text: item.companyName,
				color: '#676767',
				font: {
					fontSize: 12,
				},
				left: 64 * Friendo.Party.widthScale(),
				top: 8 * Friendo.Party.heightScale()
			});
			var vCompanyTitle = Ti.UI.createImageView({
				width: 640 * Friendo.Party.widthScale(),
				height: 56 * Friendo.Party.heightScale(),
				top: lDescription.top + lDescription.height + 20 * Friendo.Party.heightScale(),
				image: 'images/bg_productBar.png'
			});
			vCompanyTitle.add(lCompanyTitle);
			//company logo
			var vCompany = Ti.UI.createImageView({
				height: 100 * Friendo.Party.heightScale(),
				top: vCompanyTitle.top + vCompanyTitle.height + 20 * Friendo.Party.heightScale(),
				left: 0,
				image: item.companyLogo
			});


			//how to get
			var lGetTitle = Ti.UI.createLabel({
				text: Ti.Locale.getString('party_how_to_get'),
				color: '#676767',
				font: {
					fontSize: 12,
				},
				left: 64 * Friendo.Party.widthScale(),
				top: 8 * Friendo.Party.heightScale()
			});
			var vGetTitle = Ti.UI.createImageView({
				width: 640 * Friendo.Party.widthScale(),
				height: 56 * Friendo.Party.heightScale(),
				top: vCompany.top + vCompany.height + 20 * Friendo.Party.heightScale(),
				image: 'images/bg_productBar.png'
			});
			vGetTitle.add(lGetTitle);
			var vHowToGet = Ti.UI.createView({
				height: 400 * Friendo.Party.heightScale(),
				top: vGetTitle.top + vGetTitle.height + 10 * Friendo.Party.heightScale(),
				left: 20 * Friendo.Party.heightScale(),
				right: 20 * Friendo.Party.heightScale()
			});
			var addressHeight = 10;
			if(item.address){
				addressHeight = 47;
				var lAddress = Ti.UI.createLabel({
					text: item.address,
					top: 10 * Friendo.Party.widthScale(),
					left: 5,
					width: 470 * Friendo.Party.widthScale(),
					height: 37 * Friendo.Party.heightScale(),
					color: '#676767',
					font: {
						fontSize: 12,
					}
				});
				var vAddress = Ti.UI.createImageView({
					top: 10 * Friendo.Party.widthScale(),
					right: 20 * Friendo.Party.widthScale(),
					width: 95 * Friendo.Party.widthScale(),
					height: 37 * Friendo.Party.heightScale(),
					image: 'images/btn_map.png'				
				});
				vAddress.addEventListener('touchstart', function(){
					vAddress.image = 'images/btn_map_hover.png';
				});
				vAddress.addEventListener('touchend', function(){
					vAddress.image = 'images/btn_map.png';
				});
				vAddress.addEventListener('click', function(){
					Ti.Platform.openURL('http://maps.google.com/maps?q='+ item.address);
				});
				vHowToGet.add(lAddress);
				vHowToGet.add(vAddress);
			}
			var lAddressDescription = Ti.UI.createLabel({
				text: item.addressDescription,
				top: addressHeight * Friendo.Party.widthScale(),
				//refine
				height: 340 * Friendo.Party.heightScale(),
				color: '#676767',
				font: {
					fontSize: 12,
				},
				left: 10 * Friendo.Party.widthScale(),
				right: 10 * Friendo.Party.widthScale()
			});			
			vHowToGet.add(lAddressDescription);
			
			
			var dataView = Ti.UI.createView();
			dataView.add(vProduct);
			dataView.add(vProductData);
			dataView.add(vDescriptionTitle);
			dataView.add(lDescription);
			dataView.add(vCompanyTitle);
			dataView.add(vCompany);
			dataView.add(vGetTitle);
			dataView.add(vHowToGet);

			if(item.prizeList.length){
				//prize list
				var lPrizeTitle = Ti.UI.createLabel({
					text: Ti.Locale.getString('party_prize'),
					color: '#676767',
					font: {
						fontSize: 12,
					},
					left: 64 * Friendo.Party.widthScale(),
					top: 8 * Friendo.Party.heightScale()
				});
				var vPrizeTitle = Ti.UI.createImageView({
					width: 640 * Friendo.Party.widthScale(),
					height: 56 * Friendo.Party.heightScale(),
					top: vHowToGet.top + vHowToGet.height + 10 * Friendo.Party.heightScale(),
					image: 'images/bg_productBar.png'
				});
				vPrizeTitle.add(lPrizeTitle);
				var vPrize = Ti.UI.createView({
					top: vPrizeTitle.top + vPrizeTitle.height + 10 * Friendo.Party.heightScale(),
				});
				for(var k=0, l=item.prizeList.length; k<l; k++){
					var vList = Ti.UI.createView({
						width: 599 * Friendo.Party.widthScale(),
						height: 58 * Friendo.Party.heightScale(),
						backgroundImage: 'images/bg_dotted.png',
						top: k * 58 * Friendo.Party.heightScale(),
						left: 20 * Friendo.Party.widthScale(),
						right: 20 * Friendo.Party.widthScale()
					});
					var lNo = Ti.UI.createLabel({
						text: item.prizeList[k].tableNo,
						width: 140 * Friendo.Party.widthScale(),
						color: '#676767',
						font: {
							fontSize: 12,
						},
						left: 10 * Friendo.Party.widthScale(),
						textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
					});
					var lName = Ti.UI.createLabel({
						text: item.prizeList[k].name,
						width: 140 * Friendo.Party.widthScale(),
						color: '#676767',
						font: {
							fontSize: 12,
						},
						left: lNo.left + lNo.width + 10 * Friendo.Party.widthScale(),
						textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
					});
					var lEmail = Ti.UI.createLabel({
						text: item.prizeList[k].email,
						width: 270 * Friendo.Party.widthScale(),
						height: 30 * Friendo.Party.widthScale(),
						color: '#676767',
						font: {
							fontSize: 12,
						},
						left: lName.left + lName.width + 10 * Friendo.Party.widthScale(),
						textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
					});
					vList.add(lNo);
					vList.add(lName);
					vList.add(lEmail);
					vPrize.add(vList);
				}
				dataView.add(vPrizeTitle);
				dataView.add(vPrize);			
			}

			var scrollViewer = Ti.UI.createScrollView({
				showVerticalScrollIndicator:true,
				contentHeight: 'auto'
			});
			scrollViewer.add(dataView);
			viewToday.push(scrollViewer);
		}
		this.svToday = Ti.UI.createScrollableView({
			views: viewToday,
			showPagingControl: false,
			top: this.viewNav.height
		});
	};
	this.renderGoBack = function(){
		var lGoBack = Ti.UI.createLabel({
			color: '#fff',
			text: Ti.Locale.getString('party_today'),
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
			me.winToday.remove(me.svDescription);
			me.viewNav.remove(me.vGoBack);
			me.renderDescriptionButton();
		});			
		this.vGoBack.add(lGoBack);
		this.viewNav.add(this.vGoBack);
	};
	this.renderDescriptionButton = function(){
		var labelDescription = Ti.UI.createLabel({
			color: '#fff',
			text: Ti.Locale.getString('party_description'),
			font: {
				fontSize: 11,
				fontWeight: 'bold'
			}
		});
		this.viewDescription = Ti.UI.createImageView({
			width: 122 * Friendo.Party.widthScale(),
			height: 60 * Friendo.Party.heightScale(),
			right: 10 * Friendo.Party.widthScale(),
			image: 'images/btn.png'
		});
		
		labelDescription.addEventListener('touchstart',function(){
			me.viewDescription.image = 'images/btn_hover.png';
		});
		labelDescription.addEventListener('touchend',function(){
			me.viewDescription.image = 'images/btn.png';
		});
		this.viewDescription.addEventListener('touchstart',function(){
			this.image = 'images/btn_hover.png';
		});
		this.viewDescription.addEventListener('touchend',function(){
			this.image = 'images/btn.png';
		});
		this.viewDescription.addEventListener('click',function(){
			//click event
			me.renderDescription();
			me.viewNav.remove(me.viewDescription);
			me.renderGoBack();
		});			
		this.viewDescription.add(labelDescription);
		this.viewNav.add(this.viewDescription);
	};
	this.renderDescription = function(){		
		this.svDescription = Ti.UI.createScrollView({
			backgroundImage: 'images/bg.png',
			width: 640 * Friendo.Party.widthScale(),
			top: this.viewNav.height,
			showVerticalScrollIndicator:true,
			contentHeight: 'auto'
		});
		var lH1 = Ti.UI.createLabel({
			text: Ti.Locale.getString('party_description'),
			font: {
				fontSize: 24,
				fontWeight: 'bold'
			},
			top: 40 * Friendo.Party.heightScale(),
			left: 34 * Friendo.Party.widthScale()
		});
		var lH2 = Ti.UI.createLabel({
			text: Ti.Locale.getString('party_slogan'),
			font: {
				fontSize: 16
			},
			top: 106 * Friendo.Party.heightScale(),
			left: 34 * Friendo.Party.widthScale()
		});
		var vDescription = Ti.UI.createView({
			borderColor: '#bbb',
			borderRadius: 10,
			borderWidth: 2,
			width: 600 * Friendo.Party.widthScale(),
			height: 530,
			top: 165 * Friendo.Party.heightScale(),
			zIndex: 2,
			backgroundColor: '#fff'
		});
		var l1Title = Ti.UI.createLabel({
			text: Ti.Locale.getString('party_content_1'),
			color: '#333',
			font: {
				fontSize: 14,
				fontWeight: 'bold'
			},
			left: 20 * Friendo.Party.widthScale(),
			top: 20 * Friendo.Party.heightScale()
		});
		var l1Des = Ti.UI.createLabel({
			text: Ti.Locale.getString('party_content_1_des'),
			color: '#333',
			font: {
				fontSize: 14
			},
			left: 20 * Friendo.Party.widthScale(),
			top: l1Title.top + 45 * Friendo.Party.heightScale()
		});
		var l2Title = Ti.UI.createLabel({
			text: Ti.Locale.getString('party_content_2'),
			color: '#333',
			font: {
				fontSize: 14,
				fontWeight: 'bold'
			},
			left: 20 * Friendo.Party.widthScale(),
			top: l1Des.top + 65 * Friendo.Party.heightScale()
		});
		var l2Des = Ti.UI.createLabel({
			text: Ti.Locale.getString('party_content_2_des'),
			color: '#333',
			font: {
				fontSize: 14
			},
			left: 20 * Friendo.Party.widthScale(),
			right: 20 * Friendo.Party.widthScale(),
			top: l2Title.top + 45 * Friendo.Party.heightScale()
		});
		var l3Title = Ti.UI.createLabel({
			text: Ti.Locale.getString('party_content_3'),
			color: '#333',
			font: {
				fontSize: 14,
				fontWeight: 'bold'
			},
			left: 20 * Friendo.Party.widthScale(),
			top: l2Des.top + 240 * Friendo.Party.heightScale()
		});
		var l3Des = Ti.UI.createLabel({
			text: Ti.Locale.getString('party_content_3_des'),
			color: '#333',
			font: {
				fontSize: 14
			},
			left: 20 * Friendo.Party.widthScale(),
			top: l3Title.top + 45 * Friendo.Party.heightScale()
		});
		var l4Title = Ti.UI.createLabel({
			text: Ti.Locale.getString('party_content_4'),
			color: '#333',
			font: {
				fontSize: 14,
				fontWeight: 'bold'
			},
			left: 20 * Friendo.Party.widthScale(),
			top: l3Des.top + 65 * Friendo.Party.heightScale()
		});
		var l4Des = Ti.UI.createLabel({
			text: Ti.Locale.getString('party_content_4_des'),
			color: '#333',
			font: {
				fontSize: 14
			},
			left: 20 * Friendo.Party.widthScale(),
			right: 20 * Friendo.Party.widthScale(),
			top: l4Title.top + 45 * Friendo.Party.heightScale()
		});
		var l5Title = Ti.UI.createLabel({
			text: Ti.Locale.getString('party_content_5'),
			color: '#333',
			font: {
				fontSize: 14,
				fontWeight: 'bold'
			},
			left: 20 * Friendo.Party.widthScale(),
			top: l4Des.top + 280 * Friendo.Party.heightScale()
		});
		var l5Des = Ti.UI.createLabel({
			text: Ti.Locale.getString('party_content_5_des'),
			color: '#333',
			font: {
				fontSize: 14
			},
			left: 20 * Friendo.Party.widthScale(),
			right: 20 * Friendo.Party.widthScale(),
			top: l5Title.top + 45 * Friendo.Party.heightScale()
		});
		vDescription.add(l1Title);
		vDescription.add(l1Des);
		vDescription.add(l2Title);
		vDescription.add(l2Des);
		vDescription.add(l3Title);
		vDescription.add(l3Des);
		vDescription.add(l4Title);
		vDescription.add(l4Des);
		vDescription.add(l5Title);
		vDescription.add(l5Des);
		
		this.svDescription.add(lH1);
		this.svDescription.add(lH2);
		this.svDescription.add(vDescription);
		this.winToday.add(this.svDescription);
	};
	this.requestProductData = function() {
		var url = "http://huijun.org/titanium/data.php?t=1";
		var client = Ti.Network.createHTTPClient({
		    // function called when the response data is available
		    onload : function(e) {
		        this.responseText = JSON.parse(this.responseText);
		        //alert("Received text: " + this.responseText.productList);
		        
		        me.productData = this.responseText.productList;
				//render content
				me.renderContent();
				me.winToday.add(me.svToday);
		    },
		    // function called when an error occurs, including a timeout
		    onerror : function(e) {
		    	Ti.API.debug(e.error);
		        alert('error');
		    },
		    timeout : 5000  // in milliseconds
		});
		// Prepare the connection.
		client.open("GET", url);
		// Send the request.
		client.send(); 
	};
	this.init = function() {
		//today main window
		this.winToday = Ti.UI.createWindow({
			navBarHidden: true,
			backgroundImage: 'images/bg.png'
		});
		/*
		this.vLoading = Ti.UI.createActivityIndicator({
			message: 'Loading...',
			top:100,
			height:'auto',
			width:'auto'
		});
		this.winToday.add(this.vLoading);
		*/	
		//render title
		this.renderTitle();
		
		this.winToday.add(me.viewNav);
		//request data
		this.requestProductData();
		
		//today main tab
		this.tab = Ti.UI.createTab({
			icon: 'images/tabToday.png',
			title: Ti.Locale.getString('party_today'),
			window: this.winToday
		});
	};
	this.init();
};
Friendo.Party.TabToday.prototype.getTab = function() {
    return this.tab;
};
module.exports = Friendo.Party.TabToday;