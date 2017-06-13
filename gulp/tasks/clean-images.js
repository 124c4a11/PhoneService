'use strict';

module.exports = function() {
  $.gulp.task('clean-images', function(cb) {
    return $.del($.config.root + 'theme/phoneservice/image', cb);
  });
};
