#githubwidget

##Description

The idea was to create a small widget, where some infos about a Github-Repository are shown.

##Install

Instruction:
1. Copy the folder to your project
2. Set the BASEPATH variable in the 'githubwidget.js' ({BASEPATH} is the folder where the folders css, font and js for the widget are)
3. Include the JS-Script to your page
    <script type="text/javascript" src="githubwidget/js/githubwidget.js"></script>
4. After including, change a container into a widget. Set the username and de Repo-Name 
    <script type="text/javascript">
      $('#widgetDiv').githubwidget({ user: 'l33tsource', name: 'githubwidget' });
		</script>
5. It works!!

##Config

