// This js makes SUBmenus expand

$('.feat-btn').click(function () {
  if ($('.serv-show').hasClass('show_submenus')) {
    $('.serv-show').toggleClass('show_submenus')
  }
  if ($('.theory-show').hasClass('show_submenus')) {
    $('.theory-show').toggleClass('show_submenus')
  }
  $('.feat-show').toggleClass('show_submenus')
  $('.firstMenuPackOpener').toggleClass('rotate')
})

$('.serv-btn').click(function () {
  if ($('.feat-show').hasClass('show_submenus')) {
    $('.feat-show').toggleClass('show_submenus')
  }
  if ($('.theory-show').hasClass('show_submenus')) {
    $('.theory-show').toggleClass('show_submenus')
  }
  $('.serv-show').toggleClass('show_submenus')
  $('.secondMenuPackOpener').toggleClass('rotate')
})

$('.theory-btn').click(function () {
  if ($('.feat-show').hasClass('show_submenus')) {
    $('.feat-show').toggleClass('show_submenus')
  }
  if ($('.serv-show').hasClass('show_submenus')) {
    $('.serv-show').toggleClass('show_submenus')
  }

  $('.theory-show').toggleClass('show_submenus')
  $('.thirdMenuPackOpener').toggleClass('rotate')
})


$('aside ul li').click(function () {
  $(this).addClass('active').siblings().removeClass('active')
})
