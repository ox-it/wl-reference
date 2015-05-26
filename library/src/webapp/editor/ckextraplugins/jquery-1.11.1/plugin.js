(function() {
var jqry;
/* add the plugin */
return CKEDITOR.plugins.add('jquery-1.11.1', {
  requires: '',
  icons: '',

  get: function() {
    return jqry;
  },

  init: function(editor) {
    CKEDITOR.scriptLoader.load('//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js', function() {
      // We also want to revert back the jQuery variable as well as $
      jqry = $.noConflict(true);
    });
  }
});
})();
