(function($) {
	$.fn.Super9 = function(opts) {
		// default configuration
		var config = $.extend({}, {
			'step': 'index'
		}, opts);
		
        // main function
        var info = {};        
        var dModal = $('.modal');
        var dLoading = $('.loading');
        var dCloud1 = $('.cloud1');
        var dCloud2 = $('.cloud2');
        var dCloud3 = $('.cloud3');
        var dEarth = $('.earth');
        var dGroup = $('.peopleGroup');
        var dTalkImg = $('.talkImg');
        var dCloud5 = $('.cloud5');
        var dCloud7 = $('.cloud7');
        var dStar1 = $('.star1');
        var dStar2 = $('.star2');
        var dStar3 = $('.star3');
        var dStar4 = $('.star4');
        var dStar5 = $('.star5');
        var dStar6 = $('.star6');
        var dTCloud1 = $('.topcloud1');
        var dTCloud2 = $('.topcloud2');
        var dPlant1 = $('.plant1');
        var dPlant2 = $('.plant2');
        var dPlant3 = $('.plant3');
        var dScene1 = $('.scene1');
        var dScene2 = $('.scene2');
        var dStep1 = $('.register .step1');
        var dStep2 = $('.register .step2');
        var dStep3 = $('.register .step3');
        var dLogin = $('.login_friendo .step1');
        var dFbType = $('.FbType');
        var dRegType = $('.RegType');
        var dQuestion = $('.question');
        var dWheel = $('.wheel');
        var dStatus = $('.status');
        var dContent2 = $('.content2');
        var dContent3 = $('.content3');
        var dContent4 = $('.content4');
        var dStep7 = $('.bonus');
        var dIntroSky = $('.bonusSky');
        var dIntroCloud = $('.bonusCloud');
        var stop = false;
        var stopWheel = false;
        //question
        var counts = 0;
        var max = 0;
        var dNumber = dContent2.find('.number');
        var currentQuestion = 1;
        var questionData = {};
        var answers = [];
        answers[1] = [];
        answers[2] = [];
        answers[3] = [];
        //recommend friend
        var recFriendData = {};
        var dInvBD = dContent3.find('.bd');
        var dInvHD = dContent3.find('.hd');
        var friendList = [];
        var friendListData = '';
        // wish prduct
        var productData = {};
        var maxChances = 9;
        var wishChances = maxChances;
        var wishList = [];
        
        //error handle
        var dBadge = $('.badge');
        dBadge.jrumble();
        var errorTimeout;      
        var showError = function(obj, msg){
            obj.find('span').html(msg);
            obj.addClass('error').show()
            clearTimeout(errorTimeout);
            dBadge.trigger('startRumble');
            errorTimeout = setTimeout(function () { dBadge.trigger('stopRumble'); }, 600);
        };
        //gotoIndex
        var gotoIndex = function(){
            var cloud1 = function () {
                if (!stop) {
                    dCloud1.animate({ 'left': '-500px' }, 20000);
                    dCloud1.animate({ 'left': '0' }, 20000, cloud1);
                }
            };
            dCloud1.animate({ 'top': '500px' }, 500);
            dCloud1.animate({ 'top': '510px' }, 600, cloud1);
            dCloud2.delay(700).animate({ 'top': '400px', 'left': '0px' }, 500).animate({ 'top': '440px', 'left': '0px' }, 300);
            dCloud3.delay(1200).animate({ 'top': '400px', 'left': '0px' }, 500).animate({ 'top': '440px', 'left': '0px' }, 300);
            dCloud5.delay(1300).animate({ 'top': '400px', 'left': '0px' }, 500).animate({ 'top': '440px', 'left': '0px' }, 300);
            dGroup.delay(1700).animate({ 'top': '-30px' }, 500).animate({ 'top': '0px' }, 100);
            var rotate = function () {
                if (!stop) {
                    dEarth.delay(30).animate({ rotate: '+=0.3deg' }, 0, rotate);
                }
            };
            dEarth.delay(1700).animate({ 'top': '242px' }, 500).animate({ 'top': '222px' }, 100, rotate);
            dStar1.delay(700).animate({ 'top': '-200px' }, 500).animate({ 'top': '-260px' }, 100);
            dStar2.delay(800).animate({ 'top': '-255px' }, 300).animate({ 'top': '-315px' }, 100);
            dStar3.delay(700).animate({ 'top': '-210px' }, 300).animate({ 'top': '-270px' }, 100);
            dStar4.delay(800).animate({ 'top': '-330px' }, 100).animate({ 'top': '-390px' }, 100);
            dStar5.delay(1000).animate({ 'top': '-250px' }, 200).animate({ 'top': '-310px' }, 100);
            dStar6.delay(800).animate({ 'top': '-140px' }, 500).animate({ 'top': '-200px' }, 100);
            dTCloud1.delay(1200).animate({ 'top': '-310px' }, 200).animate({ 'top': '-370px' }, 150);
            dTCloud2.delay(1300).animate({ 'top': '-300px' }, 180).animate({ 'top': '-360px' }, 150);
            dPlant1.delay(1500).animate({ 'top': '-110px' }, 300).animate({ 'top': '-170px' }, 250);
            dPlant2.delay(1600).animate({ 'top': '-280px' }, 300).animate({ 'top': '-340px' }, 150);
            dPlant3.delay(1700).animate({ 'top': '-220px' }, 300).animate({ 'top': '-280px' }, 150);

            // guy move
            var domGuy = $('.guy .head');
            domGuy.css({opacity:0});
            var dTalkHover = $('.talkHover');
            var guyMove = function (guy, x, y, type, box_x, box_y) {
                if (type == 'right') {
                    $('.talkImg').removeClass('left');
                    guy.animate({ 'top': '-=' + y, 'left': '+=' + x }, 100).animate({ 'top': '+=' + y, 'left': '-=' + x }, 100);
                }
                else {
                    $('.talkImg').addClass('left');
                    guy.animate({ 'top': '-=' + y, 'left': '-=' + x }, 100).animate({ 'top': '+=' + y, 'left': '+=' + x }, 100);
                }
                //$('.talkImg').hide();
                dTalkHover.delay(150).css({
                    'left': guy.position().left + box_x ,
                    'top': guy.position().top + box_y
                }).show();
                $('.talkImg').hide();
                dTalkHover.animate({ rotate: '-=150deg' }, 80,function(){
                    $('.talkImg').css({ 'width': '187px', 'height': '132px' }).show();
                }).animate({ 'rotate': '+=150deg' }, 80).animate({ rotate: '-=30deg' }, 80).animate({ rotate: '+=30deg' }, 80).animate({ rotate: '-=20deg' }, 80).animate({ rotate: '+=20deg' }, 80);
                $('.talkText').hide().eq(guy.attr('rel')-1).delay(160).fadeIn();
            };
            domGuy.click(function (e) {
                e.stopPropagation();
                switch ($(this).parent('.guy').attr('rel')) {
                    case '1':
                        guyMove($(this).parent('.guy'), '50', '5', 'right', 130, 60);
                        break;
                    case '2':
                        guyMove($(this).parent('.guy'), '30', '40', 'right', 120, 60);
                        break;
                    case '3':
                        guyMove($(this).parent('.guy'), '30', '40', 'right', 100, 40);
                        break;
                    case '4':
                        guyMove($(this).parent('.guy'), '0', '50', 'right', 55, 35);
                        break;
                    case '5':
                        guyMove($(this).parent('.guy'), '30', '40', 'left', -120, 40);
                        break;
                    case '6':
                        guyMove($(this).parent('.guy'), '30', '40', 'left', -120, 50);
                        break;
                    case '7':
                        guyMove($(this).parent('.guy'), '50', '5', 'left', -140, 60);
                        break;
                    default:
                        break;
                }
            });
        };
        //stop index animation
        var stopIndex = function(){
            stop = true;
            dCloud1.stop().stop();
            dEarth.stop();
        };
        //show modal
        var showModal = function(){
            dModal.css({ 'display': 'block', 'opacity': 0.7, 'height': $(document).height() });
        };
        // goto register freindo
        var gotoRegisterFriendo = function(){
            dRegType.show();
            dFbType.hide();
            dStep1.show().animate({ 'top': '50px' }, 400).animate({ 'top': '0px' }, 150);
            dStep1.find('.account').focus();
            dStep1.find('.terms').tinyscrollbar();
        };
        //goto choose sex
        var gotoChooseSex = function(){
            dStep2.delay(300).show().animate({ 'top': '50px' }, 400).animate({ 'top': '0px' }, 150);
        };
        //goto form
        var gotoForm = function(){
            dStep2.find('.sex').removeClass('on');
            dStep3.delay(600).show().animate({ 'top': '50px' }, 400).animate({ 'top': '0px' }, 150);
        };
        //super9 questions
        var getQuestions = function(callback){
            $.ajax({
                url: 'data.php?t=4',
                error: function(xhr) {
                    //error
                },
                success: function(response) {
                    //error
                    if(response && response.Questions){
                        questionData = response;
                        prepareScene();
                    }
                }
            });
        };
        var prepareScene = function(){
            //fill content
            drawQuestion();

            //animation
            $('.content').hide();
            $('.content_intro').hide();
            $('.footer').hide();
            $('.login').hide();
            $('.info').hide();
            $('.content2').css({ 'opacity': 0 }).show();
            dStatus.show();
            //dContent2.css({ 'opacity': 0 }).animate({ 'opacity': '1' }, 1000);

            var rotate2 = function () {
                if(!stopWheel){
                    dWheel.delay(30).animate({ rotate: '+=0.3deg' }, 0, rotate2);
                }
            };
            
            rotate2();
            var cloud7 = function () {
                if(!stopWheel){
                    dCloud7.animate({ 'left': '-500px' }, 20000);
                    dCloud7.animate({ 'left': '0' }, 20000, cloud7);
                }
            };
            cloud7();
        };
        var stopWheelCloud = function(){
            stopWheel = true;
            dWheel.stop();
            dCloud7.stop();
        };
        var drawQuestion = function(){
            dContent2.css({ 'opacity': 0 }).animate({ 'opacity': '1' }, 1000);
            dContent2.find('.scene2').removeClass('q'+(currentQuestion-1));
            dContent2.find('.scene2').addClass('q'+currentQuestion);
            dQuestion.animate({ 'top': '-1000px' }, 500);
            dQuestion.animate({ 'top': '50px' }, 400).animate({ 'top': '0px' }, 150);
            var data = questionData.Questions[currentQuestion-1];
            max = data.Nums;
            counts = 0;
            dContent2.find('.number').text(max);
            dContent2.find('.desc span').text(max);
            dContent2.find('.question .ft').html(data.Question);
            dContent2.find('.item').each(function(index, item){
                $(item).removeClass('on').text(data.Anwsers[index].MasterNodesName).attr('rel',data.Anwsers[index].MasterNodesID);
            });
        };
        var gotoQuestion = function(number){
            if(number == '1'){
                getQuestions(prepareScene);
            }
            else{
                drawQuestion();
            }
        };
        var total = function(arrayData){
            var total = 0;
            $.each(arrayData,function(){
                total += parseInt(this);
            });
            return total;
        };
        
        //goto recommend friend
        var gotoRecFriend = function(){
            //render data
            var HTML = '';
            dContent3.find('.hd .desc').text(recFriendData.Category.join('、'));
            $(recFriendData.Friends).each(function(index, item){
                friendList.push(item.MemberID);
                HTML += [
                    '<div class="item">',
                    '    <div class="donotAdd"></div>',
                    '    <img src="'+item.PicUrl+'">',
                    '    <div class="percent">相似度'+item.Similarity+'%</div>',
                    '    <div class="mask"></div>',
                    '    <a href="#" class="delete" rel="'+item.MemberID+'">刪除</a>',
                    '</div>'
                ].join('');
            });
            dContent3.find('.bd .friend').html(HTML);
            //recFriendData
            
            //render scene
            dContent3.show();
            dInvBD.css({ 'height': $('.container').height() - 224 });
            dInvBD.animate({ 'top': '224px' }, 400);
            dInvHD.animate({ 'top': '70px' }, 400);
            $('.login').hide();
            dStatus.show().addClass('status2');
            dStatus.removeClass('status1');
            
            //bind event
            dContent3.find('.next').click(function(e){
                e.preventDefault();
                friendListData = friendList.join(',');
                saveRecFriends();
            });
            dContent3.find('.donot').click(function(e){
                e.preventDefault();
                friendListData = 'no';
                saveRecFriends();
            });
            dContent3.find('.item').hover(function () {
                $(this).find('.delete').show();
            }, function () {
                $(this).find('.delete').hide();
            });
            dContent3.find('.delete').click(function(e){
                e.preventDefault();
                $(this).parent('.item').find('.donotAdd').fadeIn();
                var removeItem = $(this).attr('rel');
                friendList = $.grep(friendList, function(value) {
                    return value != removeItem;
                });
            });
            dContent3.find('.donotAdd').click(function(){
                $(this).fadeOut();
                friendList.push($(this).parent('.item').find('.delete').attr('rel'));
            });
        };
        var saveRecFriends = function(){
            $.ajax({
                url: 'data.php?t=6',
                type: 'post',
                data: { 
                    'Friends': friendListData,
                    'MemberID': info.guid
                },
                error: function(xhr) {
                    //error
                },
                success: function(response) {
                    //error
                    if(response && response.Products){
                        productData = response;
                        dInvBD.animate({ 'top': '1000px' }, 400);
                        dInvHD.animate({ 'top': '-500px' }, 400);
                        dStatus.removeClass('status2');
                        dContent3.hide();
                        dContent2.hide();
                        gotoWishProduct();
                    }
                }
            });
        };
        var gotoWishProduct = function(){
            dStatus.addClass('status3');
            dContent4.css({ 'opacity': '0' }).show().animate({ 'opacity': '1' }, 1000);
            dContent4.find('.times').text(wishChances);
            
            //render data
            var HTML = '';
            $(productData.Products).each(function(index, item){
                HTML += [
                    '<div class="item" rel="'+item.ProdID+'">',
                    '    <img src="'+item.PicUrl+'">',
                    '    <div class="desc">'+item.ProdName+'</div>',
                    '    <div class="select">',
                    '        <div class="check"></div>',
                    '    </div>',
                    '</div>'
                ].join('');
            });
            dContent4.find('.gift .hd').html(HTML);
            //bind event
            var dItem = $('.content4 .item');
            dItem.hover(function () {
                if (!$(this).hasClass('on')) {
                    $(this).find('.desc').animate({'bottom': '0'},300);
                }
            }, function () {
                if (!$(this).hasClass('on')) {
                    $(this).find('.desc').animate({'bottom': '-40px'},300);
                }
            });
            var dNext = dContent4.find('.next_bonus');
            dItem.click(function () {
                if($(this).hasClass('on')){
                    $(this).removeClass('on');
                    $(this).find('.select').css({ 'opacity': 1 }).show().animate({ 'opacity': '0' }, 'fast');
                    $(this).find('.desc').show();
                    var removeItem = $(this).attr('rel');
                    wishList = $.grep(wishList, function(value) {
                        return value != removeItem;
                    });
                    wishChances++;
                    dContent4.find('.times').text(wishChances);
                }else{
                    if(wishChances>0){
                        $(this).addClass('on');
                        $(this).find('.desc').hide();
                        $(this).find('.select').css({ 'opacity': 0 }).show().animate({ 'opacity': '1' }, 'fast');
                        wishList.push($(this).attr('rel'));
                        wishChances--;
                        dContent4.find('.times').text(wishChances);
                    }
                }
                if((maxChances - wishChances)>2){
                    dNext.removeClass('disabled');
                }
                else{
                    if(!dNext.hasClass('disabled')){
                        dNext.addClass('disabled');
                    }
                }
            });
            dNext.click(function(e){
                e.preventDefault();
                if(!$(this).hasClass('disabled')){
                    //submit
                    $.ajax({
                        url: 'data.php?t=7',
                        type: 'post',
                        data: { 
                            'ProdIDs': wishList.join(','),
                            'MemberID': info.guid
                        },
                        error: function(xhr) {
                            //error
                        },
                        success: function(response) {
                            //error
                            if(response && response.Result == '1'){
                                //goto inivite friend
                                dStep7.css({ height: $(window).height() });
                                dStep7.fadeIn();
                                dIntroCloud.delay(200).animate({ 'top': '-150px' }, 200).animate({ 'top': '-200px' }, 100);
                                dIntroSky.delay(400).animate({ 'top': '-100px' }, 200).animate({ 'top': '-150px' }, 100);
                            }
                        }
                    });
                }
            });
        };
        $('.next_invite').click(function (e) {
            e.preventDefault();
            dIntroCloud.delay(100).animate({ 'top': '-150px' }, 200).animate({ 'top': '-600px' }, 100);
            dIntroSky.delay(300).animate({ 'top': '-100px' }, 200).animate({ 'top': '-600px' }, 100);
            dStep7.delay(800).fadeOut(700);
            //goto invite friend
        });
        //bind answer event
        dContent2.find('.item').click(function(e){
            e.preventDefault();
            if($(this).hasClass('on')){
                var removeItem = $(this).attr('rel');
                answers[currentQuestion] = $.grep(answers[currentQuestion], function(value) {
                    return value != removeItem;
                });
                $(this).removeClass('on');
                dNumber.html(parseInt(dNumber.text())+1);
                counts--;
            }
            else{
                if(dNumber.html() > 0){
                    answers[currentQuestion].push($(this).attr('rel'));
                    $(this).addClass('on');
                    dNumber.html(parseInt(dNumber.text())-1);
                    counts++;
                }
                if(counts == max){
                    //change questions
                    currentQuestion++;
                    if(currentQuestion <4){
                        gotoQuestion(currentQuestion);
                    }
                    else{
                        //submit data
                        //goto recommend firend
                        $.ajax({
                            url: 'data.php?t=5',
                            type: 'post',
                            data: { 
                                'Ans1': total(answers[1]),
                                'Ans2': total(answers[2]),
                                'Ans3': total(answers[3]),
                                'MemberID': info.guid
                            },
                            error: function(xhr) {
                                //error
                            },
                            success: function(response) {
                                if(response && response.Result == '1'){
                                    recFriendData = response;
                                    stopWheelCloud();
                                    gotoRecFriend();
                                }
                            }
                        });
                    }
                }
            }
        });

        //bind event
        dStep1.find('.submit_step1').click(function (e) {
            e.preventDefault();
            var dSubmit = $(this);
            if(!dSubmit.hasClass('disabled')){
                info.account = dStep1.find('.account').val();
                $.ajax({
                    url: 'data.php?t=1',
                    type: 'post',
                    data: { 
                        'Email': info.account, 
                        'Password': dStep1.find('.password').val() 
                    },
                    error: function(xhr) {
                        //error
                        showError(dStep1.find('.message'),'系統錯誤');
                        dSubmit.removeClass('disabled');
                    },
                    success: function(response) {
                        if(response && response.Result == '1'){
                            //success
                            info.guid = response.MemberID;
                            dStep1.animate({ 'top': '-1000px' }, 300);
                            gotoChooseSex();
                        }
                        else if(response && response.Result == '0'){
                            showError(dStep1.find('.message'),response.Message);
                        }
                        else{
                            //error
                            showError(dStep1.find('.message'),'系統錯誤');
                        }
                        dSubmit.removeClass('disabled');
                    }
                });
                dSubmit.addClass('disabled');
            }
        });
        dStep2.find('.sex').click(function(e){
            e.preventDefault();
            if($(this).hasClass('man')){
                info.sex = '1';
            }
            else{
                info.sex = '2';
            }
            $(this).addClass('on').animate({ 'top': '-50px;'}, function(){
                dStep2.animate({ 'top': '-1000px' }, 300);
                gotoForm();            
            });

        });
        dStep3.find('.goback').click(function(e){
            e.preventDefault();
            dStep3.animate({ 'top': '-1000px' }, 300);
            gotoChooseSex();
        });
        dStep3.find('.off').focus(function(e){
            if($(this).val() == '姓氏' || $(this).val() == '名字'){
                $(this).removeClass('off').val('');
            }
        });
        dStep3.find('.off').blur(function(e){
            if($(this).val() == ''){
                if($(this).hasClass('first_name')){
                    $(this).val('姓氏');
                }
                else{
                    $(this).val('名字');
                }
                $(this).addClass('off');
            }
        });
        
        //datepicker
        $.datepicker.regional['zh-TW'] = {
            closeText: '關閉',
            prevText: '<上月',
            nextText: '下月>',
            currentText: '今天',
            monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
            monthNamesShort: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
            dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
            dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
            dayNamesMin: ['日','一','二','三','四','五','六'],
            dateFormat: 'yy-mm-dd', firstDay: 1,
            showMonthAfterYear: false,
            changeMonth: true,
            changeYear: true,
            isRTL: false
        }; 
        var options = {
            'dateFormat': 'yy-mm-dd',
            'minDate': '-70y',
            'maxDate': '-15y',
            'changeMonth': true,
            'changeYear': true,
            'yearRange':'-70y:-15y'            
        };
        dStep3.find('.birthday').datepicker(options);
        $.datepicker.setDefaults($.datepicker.regional['zh-TW']);
        
        $('.next_step3').click(function (e) {
            e.preventDefault();
            var dSubmit = $(this);
            $.ajax({
                url: 'data.php?t=3',
                type: 'post',
                data: { 
                    'MemberID': info.guid, 
                    'Sex': info.sex, 
                    'FirstName': dStep3.find('.first_name').val(), 
                    'LastName': dStep3.find('.last_name').val(), 
                    'Birthday': dStep3.find('.birthday').val(), 
                    'CityID': dStep3.find('.place').val() 
                },
                error: function(xhr) {
                    //error
                    showError(dStep3.find('.message'),'系統錯誤');
                    dSubmit.removeClass('disabled');
                },
                success: function(response) {
                    if(response && response.Result == '1'){
                        //success
                        dStep3.animate({ 'top': '-1000px' }, 300, function(){
                            dModal.fadeOut();
                        });
                        gotoQuestion(currentQuestion);
                        
                    }
                    else if(response && response.Result == '0'){
                        showError(dStep3.find('.message'),response.Message);
                    }
                    else{
                        //error
                        showError(dStep3.find('.message'),'系統錯誤');
                    }
                    dSubmit.removeClass('disabled');
                }
            });
        });
        //login friendo
        $('.login_friendoBtn').click(function (e) {
            e.preventDefault();
            dModal.css({ 'display': 'block', 'opacity': 0.7 });
            stop = true;
            dCloud1.stop().stop();
            dEarth.stop();
            dLogin.show().animate({ 'top': '50px' }, 400).animate({ 'top': '0px' }, 150);
        });
        //cancel_login
        $('.cancel_login').click(function (e) {
            e.preventDefault();
            dLogin.animate({ 'top': '-1000px' }, 500);
            dModal.fadeOut();
        });
        //submit_login
        $('.submit_login').click(function (e) {
            e.preventDefault();
            var dSubmit = $(this);
            if(!dSubmit.hasClass('disabled')){
                $.ajax({
                    url: 'data.php?t=8',
                    type: 'post',
                    data: { 
                        'LoginID': dLogin.find('.account').val(), 
                        'Password': dLogin.find('.password').val()
                    },
                    error: function(xhr) {
                        //error
                        showError(dLogin.find('.message'),'系統錯誤');
                        dSubmit.removeClass('disabled');
                    },
                    success: function(response) {
                        if(response && response.Result == '1'){
                            //success
                            dLogin.animate({ 'top': '-1000px' }, 500);
                            dModal.fadeOut();
                        }
                        else if(response && response.Result == '0'){
                            showError(dLogin.find('.message'),response.Message);
                        }
                        else{
                            //error
                            showError(dLogin.find('.message'),'系統錯誤');
                        }
                        dSubmit.removeClass('disabled');
                    }
                });
                dSubmit.addClass('disabled');
            }
        });
        //init
		var init = function(obj) {
            switch(config.step){
                case 'index':
                    //gotoWishProduct();
                    //gotoQuestion(currentQuestion);
                    gotoIndex();
                    //gotoForm();
                    break;
                case 'register_friendo':
                    stopIndex();
                    showModal();
                    gotoRegisterFriendo();
                    break;
                default:
                    break;
            };
        
		};
		// initialize every element
		this.each(function() {
			//initial
            init($(this));
            
            $(this).find('.registerBtn').click(function(e){
                e.preventDefault();
                config.step = 'register_friendo';
                init($(this));
            });
		});
		return this;
	};
	// auto start
	$(function(){
		$('#super9').Super9();
	});
})(jQuery);