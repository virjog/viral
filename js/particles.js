$(document).ready(function() {
      $('#particles').particleground({
        dotColor: '#52B3D9',
        lineColor: '#52B3D9'
      });
      $('.container').css({
        'margin-top': -($('.container').height() / 0.75)
      });
    });
