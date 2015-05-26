var VimeoSearchResult = function(path) {
  var $ = CKEDITOR.plugins.get('jquery-1.11.1').get();
  var resultTemplate = $('<div/>').load(path + 'html/result.html');

  this.display = function(result) {
    var template = resultTemplate.clone();

    template.find('h2').html(result.title);
    template.find('p').html(result.description);
    template.find('.result').attr('data-src', result.meta.id);
    template.find('.thumbnail').attr('src', result.meta.thumbnails.m);

    return template.html();
  };
};
