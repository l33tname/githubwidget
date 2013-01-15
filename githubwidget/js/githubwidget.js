(function ($)
{
  $.fn.githubwidget = function (options)
  {

    // Config
    this.BASEPATH = 'githubwidget';

    // Settings
    this.settings = $.extend({
      user: '',
      name: '',
      branch: 'master'
    }, options);

    // Insert CSS & other JS
    $('head').append('<link rel="stylesheet" href="' + this.BASEPATH + '/css/githubwidget.css"><link rel="stylesheet" href="' + this.BASEPATH + '/css/font-awesome.css"><!--[if IE 7]><link rel="stylesheet" href="' + this.BASEPATH + '/css/font-awesome-ie7.css"><![endif]-->');
    $('head').append('<script type="text/css" src="' + this.BASEPATH + '/js/jquery.dateFormat-1.0.js"></script>');

    // Do your awesome plugin stuff here
    $.ajax({
      url: 'https://api.github.com/repos/' + this.settings.user + '/' + this.settings.name,
      type: 'GET',
      data: {},
      dataType: 'jsonp',
      success: function (response)
      {
        try
        {
          $('.githubwidget').append(
            '<p class="githubwidgetHeader"><a href="https://github.com/' + response.data.full_name + '"><i class="icon-github"></i> ' + response.data.name + '</a></p>' +
            '<table class="githubwidgetTable">' +
              '<tbody>' +
                  '<tr>' +
                      '<th>Language:</th>' +
                      '<td>' + response.data.language + '</td>' +
                  '</tr>' +
                  '<tr>' +
                      '<th>Open Issues:</th>' +
                      '<td>' + response.data.open_issues_count + '</td>' +
                  '</tr>' +
                  '<tr>' +
                      '<th>Last changes:</th>' +
                      '<td>' + response.data.updated_at.substring(8, 10) + '.' + response.data.updated_at.substring(5, 7) + '.' + response.data.updated_at.substring(0, 4) + '</td>' +
                  '</tr>' +
                  '<tr>' +
                      '<th>Forks:</th>' +
                      '<td>' +
                          '<a href="https://github.com/' + response.data.full_name + '/network" title="Forks">' +
                              '<i class="icon-git-fork"></i> ' + response.data.forks_count +
                          '</a>' +
                      '</td>' +
                  '</tr>' +
                  '<tr>' +
                      '<th>Watchs:</th>' +
                      '<td>' +
                          '<a href="https://github.com/' + response.data.full_name + '/stargazers" title="Stargazers">' +
                              '<i class="icon-eye-open"></i> ' + response.data.watchers_count +
                          '</a>' +
                      '</td>' +
                  '</tr>' +
              '</tbody>' +
          '</table>'
          );
        }
        catch (e)
        {
          console.log(e);
        }

      },
      error: function (response)
      {
        if (console && console.log)
        {
          console.log('Request Error:', response);
        }
        console.log('Request Error:', response);
      }
    });

    // Return main-structure
    return $(
    '<div class="githubwidget"></div>').appendTo($(this));
  };
})(jQuery);
