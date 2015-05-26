var embedYouTubeIframe = function(node) {
  var $ = CKEDITOR.plugins.get('jquery-1.11.1').get();
  var iframe = $('<iframe width="640" height="360" frameborder="0" allowfullscreen></iframe>');
  var src = node.getAttribute('data-src');

  // set the iframe src
  iframe.attr('src', '//www.youtube.com/embed/' + src);

  // embed the iframe
  node.setHtml($('<div>').append(iframe).html());
};
