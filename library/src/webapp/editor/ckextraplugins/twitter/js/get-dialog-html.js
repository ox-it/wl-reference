var getTwitterDialogHtml = function(filename) {
  var $ = CKEDITOR.plugins.get('jquery-1.11.1').get();
  var div = $('<div/>');

  $.ajax({
    url: filename,
    dataType: 'html',
    async: false,
    success: function(html) {
      div.html(html);
    }
  });

  return div.html();
};
