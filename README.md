profiler
========

What is this?
-------------

Responsive template for profiling individuals. We used this several times, but the first iteration was built on deadline the day of the mass shootings at Sandy Hook Elementary School in Netwon, Connecticut. Demo: http://www.nhregister.com/general-news/20121215/newtown-shooting-victims-names-profiles-of-the-27-people-killed

![Sandy Hook victims](screenshots/profiler.png)

Credits
---------

Nelson Hsu

Assumptions
-----------

* Google docs
* jQuery
* Miso
* Handlebars

What's in here?
---------------

The project contains the following folders and important files:

* ``index.html`` 
* ``/js`` -- Javascript
* ``/css`` -- Strangely enough, stylesheets
* ``/imgs`` -- You can place your images here. There's a placeholder for you in there.

How to use this
---------------

1. Make a copy of this Google doc: https://docs.google.com/spreadsheet/ccc?key=0AurS2EUbrPERdE9Nc1dMSGdfenFCN0FCTk9jZF9TVWc&usp=sharing
2. Once you have entered all the information, "Publish to the web..."
3. In the Publish window, you'll find a URL that will contain a key. Copy that and paste into line 30 of js/profiler.js
4. Adjust the ``<title>`` tags and anything else in the index.html file, as needed.

License
----------

This code is available under the MIT license. For more information, please see the LICENSE file in this repo.


