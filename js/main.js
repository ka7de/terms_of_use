$(function(){
    var btn = $('#next');
    $('#check').on('click',function(){
        if(this.checked){
            btn.html('<a href="item.html">商品を選ぶ</a>');
            $('#next').css('opacity','1');
        } else {
            btn.html('商品を選ぶ');
            $('#next').css('opacity','0.5');
        }
    });

    if (navigator.userAgent.indexOf('Android') > 0) {
        let body = document.getElementsByTagName('body')[0];
        body.classList.add('Android');
    };
});