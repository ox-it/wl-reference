/**
  * This adds new methods to CKEditor's API for handling dialog ui select
  * elements with multiple-select enabled
  */

// returns array of values selected from existing dialog element
CKEDITOR.ui.dialog.uiElement.prototype.getValues = function() {
  // get the options from the dialog's input element
  var select = this.getInputElement();
  var selectedOptions = select.$.selectedOptions;
  if (!!navigator.userAgent.match(/Trident\/7\./)){    // http://stackoverflow.com/questions/18684099/jquery-fail-to-detect-ie-11
      selectedOptions = select.$.options.children;
  }
  var values = [];

  // add values to array
  for (i = 0; i < selectedOptions.length; i++) {
    if (selectedOptions[i].selected){
        values.push(selectedOptions[i].value);
    }
  }

  return values;
};

// highlights the values in the input array on the multiple-select field
// @param values {array}
//    Values to highlight on the multiple-select field
CKEDITOR.ui.dialog.uiElement.prototype.setValues = function(values) {
  var select = this.getInputElement();

  // go through options; if that option is in the values array, set it
  for (i = 0; i < select.$.length; i++) {
    // first reset the option, otherwise if the dialog has been used
    // multiple times, the options for various dialogs may bleed together
    select.$[i].selected = false;

    if (values.indexOf(select.$[i].value) > -1) {
      select.$[i].selected = true;
    }
  }
};
