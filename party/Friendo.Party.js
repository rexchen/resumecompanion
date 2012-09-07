var Friendo = {};
Friendo.Party = {
    version: '0.1',
    widthScale: function(){
    	var width = (Ti.Platform.displayCaps.platformWidth/640);
    	return width;
    },
    heightScale: function(){
    	var height = (Ti.Platform.displayCaps.platformHeight/960);
    	return height;
	}
};