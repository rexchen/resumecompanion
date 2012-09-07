

//include module
var TabToday = require('Friendo.Party.TabToday');
var TabRecord = require('Friendo.Party.TabRecord');
var TabInvite = require('Friendo.Party.TabInvite');
var TabAbout = require('Friendo.Party.TabAbout');

//main function
var tabGroup = Ti.UI.createTabGroup();
var tabToday = new TabToday();
var tabRecord = new TabRecord();
var tabInvite = new TabInvite();
var tabAbout = new TabAbout();

tabGroup.addTab(tabToday.getTab());
tabGroup.addTab(tabRecord.getTab());
tabGroup.addTab(tabInvite.getTab());
tabGroup.addTab(tabAbout.getTab());
tabGroup.open();


/*
Ti.Facebook.appid = '420268887995054';
Ti.Facebook.permissions = ['publish_stream'];
var Cloud = require('ti.cloud');
var label = Ti.UI.createLabel();
// call the ACS Facebook SocialIntegrations API to link logged in states
function ACSsubscribe(deviceToken,osname){
	Cloud.PushNotifications.subscribe({
		channel : 'friend_request',
		device_token : deviceToken,
		type : osname
	}, function(e) {
		if(e.success) {
			alert('ACSsubscribe:success');
		} else {
			alert('ACSsubscribe:error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	}); 
}
function updateLoginStatus() {
    if (Ti.Facebook.loggedIn) {
        label.text = 'Logging in to ACS as well, please wait...';
        Cloud.SocialIntegrations.externalAccountLogin({
            type: 'facebook',
            token: Ti.Facebook.accessToken
        }, function (e) {
            if (e.success) {
                var user = e.users[0];
                label.text = 'Logged in! You are now logged in as ' + user.id;
                
                
                // register push notification
				Titanium.Network.registerForPushNotifications({
					types: [
						Titanium.Network.NOTIFICATION_TYPE_BADGE,
						Titanium.Network.NOTIFICATION_TYPE_ALERT,
						Titanium.Network.NOTIFICATION_TYPE_SOUND,
						Titanium.Network.NOTIFICATION_TYPE_NEWSSTAND
					],
					success:function(e)
					{
						ACSsubscribe(e.deviceToken,'ios');
						var deviceToken = e.deviceToken;
						label.text = "Device registered. Device token: \n\n"+deviceToken;
						Ti.API.info("Push notification device token is: "+deviceToken);
						Ti.API.info("Push notification types: "+Titanium.Network.remoteNotificationTypes);
						Ti.API.info("Push notification enabled: "+Titanium.Network.remoteNotificationsEnabled);
					},
					error:function(e)
					{
						label.text = "Error during registration: "+e.error;
					},
					callback:function(e)
					{
						// called when a push notification is received.
						alert("Received a push notification\n\nPayload:\n\n"+JSON.stringify(e.data));
					}
				});
                
                
                
            }
            else {
                error(e);
            }
        });
    }
    else {
        label.text = 'Please login to Facebook.';
    }
}

// when the user logs into or out of Facebook, link their login state with ACS
Ti.Facebook.addEventListener('login', updateLoginStatus);
Ti.Facebook.addEventListener('logout', updateLoginStatus);

// add the Facebook login button
var win = Ti.UI.createWindow({
	backgroundColor: '#fff'
});
win.add(label);
win.add(Ti.Facebook.createLoginButton({
    top: 10
}));
win.open();
*/