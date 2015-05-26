var getPluginDialogHtml = function(pluginPath, htmlFile) {
  var $ = CKEDITOR.plugins.get('jquery-1.11.1').get();
  var div = $('<div/>');
  var url = pluginPath + 'html/' + htmlFile;

  $.ajax({
    url: url,
    dataType: 'html',
    async: false,
    success: function(html) {
      div.html(html);
    }
  });

  return div.html();
};
