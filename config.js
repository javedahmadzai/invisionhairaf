module.exports = {

    // Assets Path
    assets: 'src/app/resources/assets',

    // Styles
    styles: {
        dir:    'src/app/resources/assets/styles/**/*.scss',
        src:    'src/app/resources/assets/styles/app.scss',
        dist:   'src/css/app.css'
    },

    // Scripts
    scripts: {
        dir:    'src/app/resources/assets/scripts/**/*.js',
        src:    'src/app/resources/assets/scripts/app.js',
        dist:   'src/js/app.js'
    },

    // CSS Compatibility
    compatibility: [
        'last 2 versions',
        'ie >= 9',
        'Android >= 2.3',
        'ios >= 7'
    ]
};
