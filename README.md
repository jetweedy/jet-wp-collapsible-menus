# jet-wp-collapsible-menus

This is a relatively simple JavaScript example that enables collapsible side menus in the [TheSimplest](https://wordpress.org/themes/thesimplest/) theme, which normally just shows the entire menu as a broken-out tree structure. It's particularly useful for graphically simple websites with lots of subcagetorized links. However, the concept would work just fine with any other theme: you just might need to adjust some CSS selectors within the script. (Because TheSimplest uses some commonly-used menu classes in its markup, this script will probably work out of the box for a number of other popular themes as well.)

## Installation

If you have control over your theme, you can insert this script directly in a SCRIPT tag in your HEAD, or you can link to it externally. If you know how to do that, then explaining JavaScript installation is trivial. These instructions assume you're going to use a plugin, which is advisable: edits to a theme can be overwritten when the theme is updated, so anything you change in your theme will be overwritten if you run an update through WordPress Admin.

1. Install the [Custom CSS & JS](https://wordpress.org/plugins/custom-css-js/), or something similar
2. In the Admin panel, select 'Custom CSS & JS'
3. In the submenu, click 'Add Custom JS'
4. Add the code snippet from the JavaScript file contained in this git repo
5. Save your snippet

