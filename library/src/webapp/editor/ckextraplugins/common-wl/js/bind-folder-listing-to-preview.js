var bindFolderListingToPreview = function($preview, dialog, fullPath, openToFolder, path) {
  var $ = CKEDITOR.plugins.get('jquery-1.11.1').get();
  $preview.html($(getPluginDialogHtml(path, 'preview.html')).html());
  $preview.find('[data-folder-listing]')
    .attr('data-directory', getSiteFromRelativePath(fullPath))
    .folderListing({
      openToFolder: openToFolder,
      onFileEvent: function(file) {
        window.open(file);
      },
      onFolderEvent: function(folderCollectionId) {
        var folder = folderCollectionId.attr('rel');
        var directory = getDirectoryFromPath(folder);
        dialog.setValueOf('settings', 'directory', directory);
        var description = folderCollectionId.attr('id');
        dialog.setValueOf('settings', 'description', description);
      },
    });
};
