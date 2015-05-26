var oxamUrl = '/portal/hierarchytool/8a98905b-a664-4618-9200-4ceb2118b0d6/advanced';

// load the select fields from oxam
var getOxamData = function($div) {
  var $ = CKEDITOR.plugins.get('jquery-1.11.1').get();
  $div.hide();

  $.ajax({
    dataType: 'html',
    url: oxamUrl,
    async: false,
    success: function(html) {
      var $html = $(html);
      $div.append($html.find('.instruction, #year, #exam'));
    },
  });
};

var getOxamDescription = function($div) {
  $div.html('Either type a search query or choose a year and examination, then click Preview.');
};

var getOxamExamListing = function($select) {
  var $ = CKEDITOR.plugins.get('jquery-1.11.1').get();
  $select.html($('.oxamdata #exam').html());
};

var getOxamExamYears = function($select) {
  var $ = CKEDITOR.plugins.get('jquery-1.11.1').get();
  $select.html($('.oxamdata #year').html());

  // fix option values (from Weblearn they aren't actually the years)
  $select.find('option').each(function(i, option) {
    var $option = $(option);
    var year = $option.html().split('-')[0];

    if ($.isNumeric(year)) {
      $option.attr('value', year);
    }
  });
};

var bindOxamPreviewToTab = function(dialog, $previewButton) {
  var $ = CKEDITOR.plugins.get('jquery-1.11.1').get();
  $previewButton.on('click', function() {
    var query = dialog.getValueOf('tab-search', 'query');
    var exam = dialog.getValueOf('tab-search', 'exam');
    var year = dialog.getValueOf('tab-search', 'year');
    var $oxamEmbed = $('#oxamDialog [data-oxam-embed]')
                      .empty()
                      .attr({
                        'data-query': query,
                        'data-exam': exam,
                        'data-year': year,
                      });

    $oxamEmbed.oxamEmbed();
  });
};
