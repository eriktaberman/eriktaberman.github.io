function changeTab(show) {
	$('#tabcontentcont').hide();
	$('.tabcontentport').hide();
	$('#tabcontentabout').hide();
	$(show).show();
}

changeTab('.tabcontentport');

function changeTabLink(show) {
	$('#tablinkcontact').hide();
	$('#tablinkportact').hide();
	$('#tablinkaboutact').hide();
	$(show).show();
}

changeTabLink('#tablinkportact');

function cycleImages(){
      var $active = $('#sidenavimg .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#sidenavimg img:first');
      $next.css('z-index',2);
      $active.fadeOut(3000,function(){
	  $active.css('z-index',1).show().removeClass('active');
          $next.css('z-index',3).addClass('active');
      });
    }

$(document).ready(function(){
setInterval('cycleImages()', 6000);
})

function displayArtwork(show) {
	$('#displayartwork2').hide();
	$('#displayartwork3').hide();
	$('#displayartwork4').hide();
	$('#displayartwork5').hide();
	$('#displayartwork6').hide();
	$('#displayartwork8').hide();
	$('#displayartwork9').hide();
	$(show).show();
}

displayArtwork();

$('#darkenbg').hide();

function showDark(){
	$('#darkenbg').show();
}

function hideDark(){
	$('#darkenbg').hide();
	$('#displayartwork2').hide();
	$('#displayartwork3').hide();
	$('#displayartwork4').hide();
	$('#displayartwork5').hide();
	$('#displayartwork6').hide();
	$('#displayartwork8').hide();
	$('#displayartwork9').hide();
}

/*function navCoverImg(show) {
	$('#sidenavcoverimg1').hide();
	$('#sidenavcoverimg2').hide();
	$(show).show();
}

navCoverImg('#sidenavcoverimg2');*/
