(function($){"use strict";$(window).scroll(function(){if($(".navbar").offset().top>70){$(".navbar-fixed-top").addClass("top-nav-collapse");}else{$(".navbar-fixed-top").removeClass("top-nav-collapse");}});$(function(){$(document).on('click','a.js-scroll-trigger',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:$($anchor.attr('href')).offset().top-60},1500);event.preventDefault();});});$('.js-scroll-trigger').click(function(){$('.navbar-collapse').collapse('hide');});$('body').scrollspy({target:'#mainNav',offset:70});}(jQuery));