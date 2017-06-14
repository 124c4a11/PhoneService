'use strict';

module.exports = function() {
  $.gulp.task('clean-fonts', function(cb) {
    return $.del($.config.root + '/theme/phoneservice/fonts', cb);
  });
};
