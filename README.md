##githubwidget

###Description

The idea was to create a small widget, where some infos about a Github-Repository are shown.

###Install & Config

1.  Copy the folder to your project
2.  Set the *BASEPATH* variable in the *'githubwidget.js'* 
    *{BASEPATH} is the folder where the folders css, font and js for the widget are*
3.  Include the JS-Script to your page
    <script type="text/javascript" src="githubwidget/js/githubwidget.js"></script>
4.  After including, change a container into a widget. Set the username and de Repo-Name 

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
