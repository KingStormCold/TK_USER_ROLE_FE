$(document).ready(function(){
    
});
var map;
function initMap() {
    var cairo = {lat: 10.787617 , lng: 106.705788};

    var map = new google.maps.Map(document.getElementById('map'), {
      scaleControl: true,
      center: cairo,
      zoom: 10
    });

    var infowindow = new google.maps.InfoWindow;
    infowindow.setContent('<b>Thao Cam Vien</b>');

    var marker = new google.maps.Marker({map: map, position: cairo});
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
}
$('#avatar-img').click(function(){
    $('.personal-info-header').slideToggle(200);
});

$('.icon-menu').click(function(){
    alert("CLick Click");
});

$('.main-auth-icon').click(function(){
    if ($('.main-auth-icon').hasClass("fa-plus")) {
        removeIconPlusAndAdIconMinus(this, '.main-auth-list');
    } else {
        removeIconMinusAndAdIconPlus(this, '.main-auth-list');
    }
});

$('.menu-manager-icon').click(function(){
    if ($('.menu-manager-icon').hasClass("fa-plus")) {
        removeIconPlusAndAdIconMinus(this, '.main-menu-manager-list');
    } else {
        removeIconMinusAndAdIconPlus(this, '.main-menu-manager-list');
    }
});

function removeIconMinusAndAdIconPlus(icon, ul){
    $(ul).animate({"opacity": "1"}, 200 )
    $(ul).show(1000);
    $(icon).removeClass("fa-minus");
    $(icon).addClass("fa-plus");
};

function removeIconPlusAndAdIconMinus(icon, ul){
    $(ul).animate({ "opacity": "0.2" }, 200 );
    $(ul).hide(1000);
    $(icon).removeClass("fa-plus");
    $(icon).addClass("fa-minus");
};