var getOxPointsDialogHtml = function(path, file) {
  var $ = CKEDITOR.plugins.get('jquery-1.11.1').get();
  var div = $('<div/>');
  var url = path + 'html/' + file;

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
