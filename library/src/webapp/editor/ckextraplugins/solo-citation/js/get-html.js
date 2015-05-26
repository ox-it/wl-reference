var getSoloCitationDialogHtml = function(path, template) {
  var $ = CKEDITOR.plugins.get('jquery-1.11.1').get();
  var div = $('<div/>');
  var url = path + 'html/' + template + '.html';

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
