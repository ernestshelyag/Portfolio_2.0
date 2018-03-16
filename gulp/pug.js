'use strict';

module.exports = function () {
  $.gulp.task('pug', function () {
    return $.gulp.src($.path.pug + 'pages/*.pug')
      .pipe($.plumber({
        errorHandler: $.notify.onError(function (err) {
          return {
            title: 'error in PUG',
            message: 'this is da way - ' + err.message,
            icon: $.daWay.join(__dirname, '../source/assets/404.png')
          };
        })
      }))
      .pipe($.pug({pretty: true}))
      .pipe($.gulp.dest($.path.app));
  });
};
