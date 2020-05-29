$(document).ready(function () {
    var contenido = " <div id=\"contenido\">\n" +
        "        <div class=\"row\" id=\"fila_1\">\n" +
        "        </div>\n" +
        "        <div class=\"row\" id=\"fila_2\">\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>";

    $.getJSON("scripts/test_videos.json", function (data) {
        $("#contenido").replaceWith(contenido);
        $.each(data, function (key, val) {
            $("#fila_1").append("<div class=\"col-md-4\" id=\"peli_"+key+"\"></div>");

            var peli = $("#peli_"+key);
            peli.append("<div class=\"col-md-4\" id=\"peli_img_"+key+"\"></div>");
            peli.append("<div class=\"col-md-4\" id=\"peli_data_"+key+"\"></div>");

            peli = $("#peli_img_"+key);
            peli.append("<a class=\"logo\" href=\"page-peli.html\"><img class=\"icons\" src='"+val.pelicula.img+"'></a>");
            peli =  $("#peli_data_"+key);
            peli.append("<h2>"+val.pelicula.nombre+"</h2>");
            peli.append("<p>La película "+val.id+" es ....</p>");
            peli.append("<p>Año : </p>");
            peli.append("<p>Director : </p>");
            peli.append("<p>Valoración :</p>");
            //peli.append("<p><a class=\"btn\" href=\"page-peli.html\" role=\"button\">Ver película &raquo;</a></p> </div>");
        });
    });
});