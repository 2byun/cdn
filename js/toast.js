
(function ($) {

    $.fn.customtoast = function (msg) {
        var html = $('<div class="default_toast" style="background: rgba(0,0,0,.8);' +
            'border-radius: 1rem;' +
            'color: #fff;' +
            'padding:.5rem;' +
            'font-size:1.2rem;' +
            'line-height: 1.5;' +
            'position: fixed;' +
            'z-index: 11000;' +
            'width: auto;' +
            'left: 50%;' +
            'margin-top: 0;' +
            'top: 50%;' +
            'text-align: center;' +
            'border-radius:.1rem;' +
            '-webkit-transform: translate3d(0,0,0) scale(1.185);' +
            'transform: translate3d(0,0,0) scale(1.185);' +
            '-webkit-transform: translate(-50%,-50%);' +
            'transform: translate(-50%,-50%)"' +
            '>' +
            msg + '</div>').appendTo(this);
        var t = setTimeout(function () {
            $(".default_toast").remove();
            clearTimeout(t);
        }, 1500)
    };
    $.fn.customDialog = function (msg) {
        var html = $('<div class="default_dialog" style=" position: fixed; z-index: 11000;top: 0;left: 0;bottom: 0;background: rgba(0,0,0,0.7);height: 100%;width: 100%;">' +
            '<div style="color: #fff;font-size: 1.2rem;line-height: 1.5;position: absolute;left: 50%;top: 50%;-webkit-transform: translate3d(0,0,0) scale(1.185);transform: translate3d(0,0,0) scale(1.185);-webkit-transform: translate(-50%,-50%);transform: translate(-50%,-50%); width: 76vw;  max-width:414px;min-height: 388px; background: #fff; border-radius: 5px; box-shadow: 1px 2px 3px #333; color: #555; padding: 10px; text-align: center; "> ' +
            '<div class="close_dialog" style=" position: absolute; right: -21px; color: #fff; top: -22px; border-radius: 50%; border: 2px solid; padding: 5px 12px; background: rgba(0,0,0,0.4); ">X</div><img src="'+img_host+'images/theme/default/logo_300x300.png" style=" width: 70px; margin-top: 10px; ">'+
            msg + '<div class="bg_red close_dialog" style=" color: #fff; padding: 5px; border-radius: 8px; width: 88%; margin: 0 auto; margin-top: 10px; ">我知道了</div></div>').appendTo(this);
        $(".close_dialog").on('click',function(){
            $(".default_dialog").remove();
        })
    };

    $.fn.imgtoast = function (msg) {
        var html = $('<div class="default_toast" style=" position: fixed; z-index: 11000;top: 0;left: 0;bottom: 0;background: rgba(0,0,0,0.7);height: 100%;width: 100%;"><div  style="color: #fff;font-size: 1.2rem;line-height: 1.5;position: absolute;left: 50%;top: 50%;-webkit-transform: translate3d(0,0,0) scale(1.185);transform: translate3d(0,0,0) scale(1.185);-webkit-transform: translate(-50%,-50%);transform: translate(-50%,-50%);">' +
            msg + '<i class="toast-close" style="position: absolute;border: 1px solid;border-radius: 50%;list-style: none;text-decoration: none;font-style: normal;padding: 0 9px;cursor: pointer;">X</i></div>').appendTo(this);
            $(".toast-close").on('click',function(){
                $(".default_toast").remove();
            })
    };
    $.fn.customloading = function (msg) {
        var html = $('<div class="default_loading" style=" position: fixed; z-index: 11000;top: 0;left: 0;bottom: 0;background: rgba(0,0,0,0.7);height: 100%;width: 100%;"><div  style="color: #fff;font-size: 1.2rem;line-height: 1.5;position: absolute;left: 50%;top: 50%;-webkit-transform: translate3d(0,0,0) scale(1.185);transform: translate3d(0,0,0) scale(1.185);-webkit-transform: translate(-50%,-50%);transform: translate(-50%,-50%);">'+msg+'</div></div>').appendTo(this);
            return  $(".default_loading");
    };

    $.extend({
        openToast: function (msg) {
            $('body').customtoast(msg);
        },
        openLoading:function(){
          return  $('body').customloading('正在操作。。。。');
        },
        openCustomLoading:function(msg){
          return  $('body').customloading(msg);
        },
        openImgToast:function(img){
            return  $('body').imgtoast(img);
        },
        customDialog:function(html){
            return $('body').customDialog(html);
        }
    });
})(jQuery);