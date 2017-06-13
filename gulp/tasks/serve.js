'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      proxy: 'iphoneservice',
      notify: false,
      open: false
    });

    $.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css'], $.browserSync.reload);
  });
};
