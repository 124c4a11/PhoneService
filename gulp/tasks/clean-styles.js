'use strict';

module.exports = function() {
  $.gulp.task('clean-styles', function(cb) {
    return $.del($.config.root + '/theme/phoneservice/stylesheet', cb);
  });
};
