import './style.scss';
//import '../sass/includes/includes.scss';
//import '../js/plugins/item-quantity-dropdown/item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

//import '../blocks/text-field/text-field.scss';
const i = 5;

// jQuery(document).ready(function($) {
// 	$('body').css('background-color', 'orange');
// });

$(document).ready(() => {
  $('.iqdropdown').iqDropdown();
});
