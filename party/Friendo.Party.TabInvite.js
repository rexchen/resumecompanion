Ti.include('Friendo.Party.js');
Ti.include('memberData.js');

Friendo.Party.TabInvite = function() {
	this.firstTime = true;
	var me = this;
	this.friendData = {};
	this.inviteFriendList = [];

	this.sortByName = function(a, b) { 
	    //notice how I am sorting by last_name which is a special field
	    var x = a.name.toLowerCase();  
	    var y = b.name.toLowerCase();  
	    return ((x < y) ? -1 : ((x > y) ? 1 : 0));  
	};

	this.loginFacebook = function(){
		if(Ti.Facebook.getLoggedIn()){
			this.getFbFriendList();
			
		}
		else{
			Ti.Facebook.appid = '420268887995054';
			Ti.Facebook.permissions = ['publish_stream'];
			Ti.Facebook.authorize();
			Ti.Facebook.addEventListener('login', function(e) {
			    if (e.success) {
			        this.getFbFriendList();
			    } else if (e.error) {
			        alert(e.error);
			    } else if (e.cancelled) {
			        alert(Ti.Locale.getString('cancel_login'));
			    }
			});			
		}
	};
	this.postToFriendWall = function(UID){
		var message = Ti.Locale.getString('party_invite_message');
		var msgData = {
			link: 'http://www.friendo.com.tw/party/',
			message: message,
			picture: 'http://huijun.org/invitation.jpg',
			description: '100大品牌 X 免費100天 X 每天100份',
			caption: '粉多網路辦桌'
		};
		Ti.Facebook.requestWithGraphPath(UID+'/feed', msgData, 'POST', function(e) {
		    if (e.success) {
		        //alert("Success!  From FB: " + e.result);
		        //Titanium.Facebook.requestWithGraphPath(FbPostID+'/comments', {message: 我要留言}, 'POST', callbackAfterComment});
		    } else {
		        if (e.error) {
		            //alert(e.error);
		        } else {
		            //alert("Unkown result");
		        }
		    }
		});
	},
	this.getFbFriendList = function(){
		Ti.Facebook.requestWithGraphPath('me/friends?fields=id,name,picture', {}, 'GET', function(e) {
		    if(e.success){
		    	var result = JSON.parse(e.result);
		    	me.friendData = result.data.sort(me.sortByName);
		        me.renderTable();
		        //renderContent();
		    }
		    else if(e.error){
		        alert(e.error);
		    }
		    else{
		        alert(Ti.Locale.getString('system_error'));
		    }
		});
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
		
		var lInviteFriend = Ti.UI.createLabel({
			color: '#fff',
			text: Ti.Locale.getString('party_inviteFriend'),
			font: {
				fontSize: 11,
				fontWeight: 'bold'
			}
		});
		this.vInviteFriend = Ti.UI.createImageView({
			width: 122 * Friendo.Party.widthScale(),
			height: 60 * Friendo.Party.heightScale(),
			right: 10 * Friendo.Party.widthScale(),
			image: 'images/btn.png'
		});
		/*
		lInviteFriend.addEventListener('touchstart',function(){
			me.vInviteFriend.image = 'images/btn_hover.png';
		});
		lInviteFriend.addEventListener('touchend',function(){
			me.vInviteFriend.image = 'images/btn.png';
		});
		this.vInviteFriend.addEventListener('touchstart',function(){
			this.image = 'images/btn_hover.png';
		});
		this.vInviteFriend.addEventListener('touchend',function(){
			this.image = 'images/btn.png';
		});
		*/
		this.vInviteFriend.addEventListener('click',function(){
			//click event
			//alert(me.inviteFriendList);
			for(var i=0,j=me.inviteFriendList.length;i<j;i++){
				me.postToFriendWall(me.inviteFriendList[i]);	
			}
			alert(Ti.Locale.getString('party_inviteSuccess'));
		});			
		this.vInviteFriend.add(lInviteFriend);
		this.viewNav.add(this.vInviteFriend);
	};

	this.renderTable = function(){
		//reset selected data
		this.inviteFriendList = [];
		var rowData = [];
		for(var i=0, j=me.friendData.length; i<j; i++){
			var item = me.friendData[i];
			
			var imgSrc = '';
			/*
			if(item.picture){
				imgSrc = item.picture.split('_q.jpg')[0]+'_n.jpg';
			}
			*/
			var row = Ti.UI.createTableViewRow({
				height: 40,
				uid: item.id,
				name: item.name
			});
			
			var img = Ti.UI.createImageView({
				image: item.picture,
				left: 10,
				width: 30,
				height: 30
			});
			
			var label = Ti.UI.createLabel({
				font: {
					fontSize: 16
				},
				text: item.name,
				left: 50,
				height: 30
			});
			row.add(img);
			row.add(label);
			rowData[i] = row;
		}
		this.tableFriendList.setData(rowData, { animationStyle : Titanium.UI.iPhone.RowAnimationStyle.DOWN });
		
		if(this.firstTime){
			var number = 10;
			this.tableFriendList.addEventListener('click',function(e){
				var row = e.row;
				//alert(e.rowData.uid);
		        if(row.hasCheck === true) {
		        	var idx = me.inviteFriendList.indexOf(e.rowData.uid);
		        	if(idx!=-1){
		        		me.inviteFriendList.splice(idx, 1);
		    		}
		            row.hasCheck = false;
		            number++;
		        }
		        else if(number>0){
		    		me.inviteFriendList.push(e.rowData.uid);
		            row.hasCheck = true;
		            number--;
		        }else if(number==0){
		        	alert(Ti.Locale.getString('invite_max'));//winInvite.rightNavButton(btnInviteFriend);
		        }
		       // winInvite.title = Ti.Locale.getString('party_invite1')+number+Ti.Locale.getString('party_invite2');
			});
		}
		this.firstTime = false;
	};

	this.init = function() {
		//render title
		this.renderTitle();
		//main window
		this.winInvite = Ti.UI.createWindow({
			navBarHidden: true,
			backgroundImage: 'images/bg.png'
		});
		this.winInvite.add(this.viewNav);
		
		this.searchbar = Ti.UI.createSearchBar({
		    showCancel: false
		});
		this.tableFriendList = Ti.UI.createTableView({
			top: this.viewNav.height,
			search: this.searchbar,
			filterAttribute: 'name' 
		});
		this.winInvite.add(this.tableFriendList);
		
		//today main tab
		this.tab = Ti.UI.createTab({
			icon: 'images/tabInvite.png',
			title: Ti.Locale.getString('party_invite'),
			window: this.winInvite
		});
		this.tab.addEventListener('focus',function(){
			//FB Login
			me.loginFacebook();
		});
	};
	this.init();
};
Friendo.Party.TabInvite.prototype.getTab = function() {
    return this.tab;
};
module.exports = Friendo.Party.TabInvite;