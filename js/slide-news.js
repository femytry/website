// JavaScript Document
var interval;
function startTicker() {
	$('#slide-news li:first').slideUp('slow').slideUp(function(){
		$(this).appendTo($('#slide-news')).slideDown('slow');
		});
	}
	
	function stopTicker() {
		clearInterval(interval);
		}
	$(document).ready(function() {
     interval=setInterval(startTicker, 10000);
	 $('#slide-news').hover(function() {
		 stopTicker();
		 }, function() {
		interval=setInterval(startTicker, 10000);	 
			 });  
    });
	
	
	
	