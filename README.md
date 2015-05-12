#githubwidget

###Description

The idea was to create a small widget, where some infos about a Github-Repository are shown.

###Install & Config

1.  Copy the folder to your project
2.  Set the *BASEPATH* variable in the *'githubwidget.js'* 
    *{BASEPATH} is the folder where the folders css, font and js for the widget are*
3.  Include the JS-Script to your page
    <script type="text/javascript" src="githubwidget/js/githubwidget.js"></script>
4.  After including, change a container into a widget. Set the username and the Repo-Name 

```html
<script type="text/javascript">
	$('#widgetDiv').githubwidget({ user: 'l33tsource', name: 'githubwidget' });
</script>
```

###Example
```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Github-Widget-Example</title>
		<meta charset="utf-8">
	</head>
	<body>
		<div id="widgetDiv"></div>

		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
		<script type="text/javascript" src="githubwidget/js/githubwidget.js"></script>
		<script type="text/javascript">
	    		$('#widgetDiv').githubwidget({ user: 'l33tsource', name: 'githubwidget' });
		</script>
	</body>
</html>
```

###Config options

|param name  | default value              | optional  |  
|------------|----------------------------|-----------|
|user        | ''                         | no        |
|name        | ''                         | no        |
|titelmaxlen | -1 (meaning not truncated) | yes       |
|branch      |  'master'                  | yes       |

###Credits

Build by [@chefe]( https://github.com/chefe )

####The Font
The Font Awesome font is licensed under the SIL Open Font License - http://scripts.sil.org/OFL
Font Awesome CSS, LESS, and SASS files are licensed under the MIT License - http://opensource.org/licenses/mit-license.html
The Font Awesome pictograms are licensed under the CC BY 3.0 License - http://creativecommons.org/licenses/by/3.0/
Attribution is no longer required in Font Awesome 3.0, but much appreciated: "Font Awesome by Dave Gandy - http://fortawesome.github.com/Font-Awesome"
####jQuery
Dual licensed under the MIT and GPL licenses. https://github.com/jquery/jquery

