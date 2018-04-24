
$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
        $('.menuresponsive').toggleClass('is-active');
        if($('.menuppal').is(':visible'))
            $('.menuppal').hide(); 
        else
            $('.menuppal').show(); 

		return false;
    });

    $('#submit').click(function() {
        var information = ($('form').serialize()).split('&');
        var spans = $('#routeResume span*[id]');
        var valueName, infoData;
        $.each(spans, function(key, value){
            valueName = value.id.replace('span', '').toLowerCase();

            $.each(information, function(iKey, infoValue){

                infoData = infoValue.split('=')[1];
                if(infoValue.indexOf(valueName) != -1){
                    if(infoData != 'noSeleccionado')
                        $('#'+value.id).append(infoData);
                    else
                        $('#'+value.id).append('No se ha seleccionado valor');
                }
            });
        });
        $('#routeResume').show();
        $('#content').hide();
    });

    //---------Slider-----------

    $('#checkbox').change(function(){
        setInterval(function () {
            moveRight();
        }, 3000);
    });
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: slideWidth, height: slideHeight });
    
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

/*---------------------------rutas---------------------------*/

    $(function () {
        $("#datepicker").datepicker();
    });

    $(".opcionesLugar")
      .change(function () {
        var ciudad = this.value;
        var url = "url('../img/rutas/ciudades/" + ciudad + ".jpg')";
        $(".opcionesLugar").css("background-image", url);
    });

    $(".opcionesEstacion")
      .change(function () {
        var estacion = this.value;
        var url = "url('../img/rutas/estaciones/" + estacion + ".jpg')";
        $(".opcionesEstacion").css("background-image", url);
    });

    $(".opcionesActividad")
      .change(function () {
        var actividades = this.value;
        var url = "url('../img/rutas/deportes/" + actividades + ".jpg')";
        $(".opcionesActividad").css("background-image", url);
    });

    $(".opcionesTransporte")
      .change(function () {
        var transportes = this.value;
        var url = "url('../img/rutas/transportes/" + transportes + ".jpg')";
        $(".opcionesTransporte").css("background-image", url);
    });

    $(".opcionesGastronomia")
      .change(function () {
        var gastronomia = this.value;
        var url = "url('../img/rutas/gastronomia/" + gastronomia + ".jpg')";
        $(".opcionesGastronomia").css("background-image", url);
    });

});
