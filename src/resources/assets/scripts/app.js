'use strict';

require('./partials/spinner.js');
require('./partials/accordion.js');
require('./partials/navbar-toggle.js');
require('./partials/back-to-top.js');
require('./partials/image-model.js');
require('./partials/range-slider.js');
require('./partials/window-load.js');

if(document.getElementById('slider')) {
    require('./partials/image-slider.js');
}
