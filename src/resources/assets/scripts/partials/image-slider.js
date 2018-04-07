var options = {
    $AutoPlay: true,
    $SlideDuration: 800,
    $SlideEasing: $Jease$.$OutQuint,
    $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
    }
};

var slider = new $JssorSlider$('slider', options);

function scaleSlider() {
    var refSize = slider.$Elmt.parentNode.clientWidth;
    if (refSize) {
        refSize = Math.min(refSize, 1920);
        slider.$ScaleWidth(refSize);
    }
    else {
        window.setTimeout(scaleSlider, 30);
    }
}

scaleSlider();

$(window).bind('load', scaleSlider);
$(window).bind('resize', scaleSlider);
$(window).bind('orientationchange', scaleSlider);
