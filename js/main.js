// my code here--This is to give some background color to the title of the actively viewed page as a navigation support
jQuery(document).ready(function($){
  var path = window.location.pathname.split("/").pop();

  if ( path == '' ) {
    path = 'index.html';
    $('#myName > a').addClass('activePage')
  }

  if (path == 'about') {
    $('#about').addClass('activePage')
  }

  var target = $('#topNav li > a[href="'+path+'"]');
  target.addClass('activePage')
});
