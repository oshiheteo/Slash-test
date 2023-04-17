const swiper = new Swiper('.swiper', {
  allowTouchMove: false,
  initialSlide: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
})

var selector = document.querySelector('.card__num')
var im = new Inputmask('9999 9999 9999 9999', {
  placeholder: '0000 0000 0000 0000',
})
im.mask(selector)

var selector = document.querySelector('.card__date')
var im = new Inputmask('99/99', {
  placeholder: 'MM/YY',
})
im.mask(selector)

var selector = document.querySelector('.card__CVV')
var im = new Inputmask('999', {
  placeholder: '000',
  color: '#98ABD9',
})
im.mask(selector)

var selector = document.querySelector('.card__num')
var im = new Inputmask('9999 9999 9999 9999', {})
