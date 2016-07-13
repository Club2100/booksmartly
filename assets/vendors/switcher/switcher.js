$(document).ready(function () {

    var styleswitcherstr = ' \
		<h3>Style Switcher <a href="#"><i class="fa fa-wrench"></i></a></h3> \
		<div class="content"> \
		<h5>Choose Skin Color</h5> \
		<div class="switcher-box fixed"> \
		<a id="default" class="styleswitch color"></a> \
		<a id="purple" class="styleswitch color"></a> \
		<a id="green" class="styleswitch color"></a> \
		<a id="orange" class="styleswitch color"></a> \
		</div><!-- End switcher-box --> \
		</div><!-- End content --> \
		';

    $(".switcher").prepend(styleswitcherstr);

});

/* Template Skins */

$(document).ready(function () {

    var cookieName = 'thrump-skin';

    function changeSkin(skin) {
        $.cookie(cookieName, skin);
        document.location.reload();
    }

    $("#default").click(function () {
        changeSkin('default');
    });
    $("#green").click(function () {
        changeSkin('green');
    });
	$("#orange").click(function () {
        changeSkin('orange');
    });
	$("#purple").click(function () {
        changeSkin('purple');
    });

});

/* Switcher */

$(document).ready(function () {
	
    $('.switcher').animate({
        left: '-200px'
    });

    $('.switcher h3 a').click(function (e) {
        e.preventDefault();
        var div = $('.switcher');
        if (div.css('left') === '-200px') {
            $('.switcher').animate({
                left: '20px'
            }, 300);
        } else {
            $('.switcher').animate({
                left: '-200px'
            }, 300);
        }
    });

});