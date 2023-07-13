(function ($) {
  // Includes
  var includes = $('[data-include]');
  includes.each(function () {
    var file = $(this).data('include') + '.html';
    $(this).load(file);
  });

  // Header active menu items
  $(window).on('load', function () {
    var current = window.location.href;
    document.querySelectorAll('.rkpt-menu a').forEach(function (el) {
      if (el.href === current) {
        el.classList.add('rkpt-active');
      }
    });
  });

  // Mobile menu
  if ($(window).width() <= 768) {
    $('#rkpt-header').on(
      'click',
      '.rkpt-burger, .rkpt-menu a[href*=\\#]',
      function () {
        var headerHeight = $(window).height();

        if ($('.rkpt-body').hasClass('rkpt-open-menu')) {
          $('.rkpt-header').animate({ height: 65 }, 300);
          setTimeout(function () {
            $('.rkpt-body').removeClass('rkpt-open-menu');
          }, 200);
        } else {
          $('.rkpt-body').addClass('rkpt-open-menu');
          setTimeout(function () {
            $('.rkpt-header').animate({ height: headerHeight }, 300);
          }, 200);
        }
      }
    );
  }

  //Home tabs
  if ($('.rkpt-tabs').length) {
    $('.rkpt-tabs__item').on('click', function () {
      $('.rkpt-tabs__item').removeClass('active');
      $(this).addClass('active');
      var selectedTab = $(this).data('tab');
      $('.rkpt-tabs__content').removeClass('active');
      $('[data-tab-content="' + selectedTab + '"]').addClass('active');
    });
  }

  if ($('.rkpt-tabs__nav').length) {
    if ($(window).width() <= 601) {
      $('.rkpt-tabs__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });
    }

    $('.rkpt-tabs__nav .slick-slide').on('click', function () {
      $('.rkpt-tabs__item').removeClass('active');
      var slideChildren = $(this).children('div');
      $(this).children('.rkpt-tabs__item').addClass('active');
      var selectedTab = $(slideChildren)
        .children('.rkpt-tabs__item')
        .data('tab');
      $('.rkpt-tabs__content').removeClass('active');
      $('[data-tab-content="' + selectedTab + '"]').addClass('active');
    });
  }

  //Home awards responsive slider
  if ($(window).width() <= 768) {
    if ($('.rkpt-awards__wrapper-slider').length) {
      $('.rkpt-awards__wrapper-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: '4',
        infinite: true,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: '1',
            },
          },
        ],
      });
    }
  }

  // Society real time actions slider
  if ($('.rkpt-real-time-slider').length) {
    $('.rkpt-real-time-slider').slick({
      dots: true,
      slidesToShow: '4',
      infinite: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: '3',
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: '2',
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: '1',
          },
        },
      ],
    });
  }

  // Society actions grid
  if ($('.rkpt-action').length) {
    $('.rkpt-action').each(function (i, e) {
      if ($(window).width() > 600) {
        if (i > 5) {
          $(this).hide();
        }
      } else {
        if (i > 3) {
          $(this).hide();
        }
      }
    });
  }
  if ($('.rkpt-toggle').length) {
    $('.rkpt-toggle').on('click', function () {
      $(this).parent().parent().toggleClass('rkpt-show-all');
      if (!$(this).parent().parent().hasClass('rkpt-show-all')) {
        $(this).text('ΔΕΣ ΠΕΡΙΣΣΟΤΕΡΑ +');
        $('html, body').animate(
          {
            scrollTop: $(this).parent().parent().offset().top - 100,
          },
          100
        );

        $('.rkpt-action').each(function (i, e) {
          if ($(window).width() > 600) {
            if (i > 5) {
              $(this).hide();
            }
          } else {
            if (i > 3) {
              $(this).hide();
            }
          }
        });
      } else {
        $(this).text('ΔΕΣ ΛΙΓΟΤΕΡΑ -');
        $('.rkpt-action').each(function (i, e) {
          $(this).show();
        });
      }
    });
  }

  // Technology page
  if ($('.rkpt-tech-cards__wrapper--sm').length) {
    $('.rkpt-tech-cards__wrapper--sm').on('click', function () {
      $(this).parent().toggleClass('open');
    });
  }

  //Action back button
  if ($('.rkpt-back').length) {
    $('.rkpt-back').on('click', function (e) {
      e.preventDefault();
      window.history.back();
    });
  }
})(jQuery);
