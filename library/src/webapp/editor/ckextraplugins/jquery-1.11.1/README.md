# jQuery 1.11.1 Plugin

This is a very simple plugin that loads jQuery and makes it available to other plugins. It's done a a plugin so it's
easy for other plugins to locate jQuery without having it in the global scope and it's also easy for them to require 
it be loaded for the plugin to work. However there is no guarantee about loading order, or that loading has completed 
so there is still the risk that the jQuery plugin doesn't get loaded in time for the user clicking the button.