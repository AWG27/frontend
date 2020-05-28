$(document).ready(function () {
    var contenido = " <table id=\"contenido\">\
                            <tr>\
                                <th id=\"titulo-tabla\"></th>\
                                <th>Acción</th>\
                            </tr>\
                      </table>";
    var vista_paginas = "<ul class=\"pagination\" id=\"numero_paginas\">\n" +
        "                <li class=\"page-item\">\n" +
        "                    <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n" +
        "                        <span aria-hidden=\"true\">&laquo;</span>\n" +
        "                        <span class=\"sr-only\">Previous</span>\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "                <li id=\"numero_pag\">\n" +
        "                </li>\n" +
        "                <li class=\"page-item\">\n" +
        "                    <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n" +
        "                        <span aria-hidden=\"true\">&raquo;</span>\n" +
        "                        <span class=\"sr-only\">Next</span>\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "            </ul>";


/*********************************************************************************************
*********************************************************************************************
VISTA PELICULAS
*********************************************************************************************
**********************************************************************************************/

    $("#peliculas").click(function () {
        $("#boton-crear").replaceWith(
            "<div class=\"row\" id=\"boton-crear\">\
                        <a class=\"btn\" data-toggle=\"modal\" data-target=\"#modal-boton-crear\"> \
                            añadir video \
                            <span class=\"glyphicon glyphicon-plus\"></span> \
                        </a>\
                    </div>");

        var modal_titulo = $("#titulo-crear");
        modal_titulo.empty();
        modal_titulo.append("Video");

        var modal_cuerpo = $("#modal-cuerpo");
        modal_cuerpo.empty();
        modal_cuerpo.append(
            "<form>\n" +
            "  <div class=\"form-group\">\n" +
            "    <label>Nombre de la pelicula</label>\n" +
            "    <input type=\"text\" class=\"form-control\" id=\"nombre_pelicula\" placeholder=\"insertar título\">\n" +
            "  </div>\n" +
            "  <div class=\"form-group\">\n" +
            "    <label>Url del contenido</label>\n" +
            "    <input type=\"text\" class=\"form-control\" id=\"nombre_pelicula\" placeholder=\"insertar título\">\n" +
            "  </div>\n" +
            " <button type=\"submit\" class=\"btn\" data-dismiss=\"modal\" id=\"guardar_peli\">Añadir</button>\n" +
            "</form>");




        var contenido_tabla = $("#contenido");
        contenido_tabla.replaceWith(contenido);
        contenido_tabla = $("#contenido");

        $("#titulo-tabla").append("Videos");
        $.getJSON("scripts/test_videos.json", function (data) {
            $.each(data, function (key, val) {
                //console.log( "key: "+key +", value:"+ val.usuario );
                contenido_tabla.append(
                    " <tr class=\"highlight\" id=\"video_"+key+"\">\
                        <td>" + val.pelicula.nombre + "</td>\
                        <td>\
                            <a class=\"btn boton\" id=\"boton-eliminar" + key + "\">eliminar</a> \
                        </td>\
                    </tr>"
                );
                $("#boton-eliminar" + key).click(function () {
                    alert("¿ Esta seguro de eliminar \"" + val.pelicula.nombre + "\" ?");
                    $("#video_" + key).remove();
                    //REQUEST DELETE hacia el servidor
                    //TODO
                });
            });
        });
        $("#numero_paginas").replaceWith(vista_paginas);
    });




/*********************************************************************************************
*********************************************************************************************
        VISTA USUARIOS
*********************************************************************************************
*********************************************************************************************/

    $("#usuarios").click(function () {

        $("#boton-crear").replaceWith(
            "<div class=\"row\" id=\"boton-crear\">\
                        <a class=\"btn\" data-toggle=\"modal\" data-target=\"#modal-boton-crear\">\
                         crear usuario \
                         <span class=\"glyphicon glyphicon-plus\"></span> </a>\
                    </div>");
        var contenido_tabla = $("#contenido");
        contenido_tabla.replaceWith(contenido);
        contenido_tabla = $("#contenido");
        $("#titulo-tabla").append("Nombre usuarios");


        //visualiza-añade  usuarios del JSON test
        /* $.ajax({
             type: 'GET',
             dataType: 'json',
             url: 'file://scripts/test_users.json',
             async: false,
             success: function (data) {

             }
         });
         */

        // Camniar esto por el codigo similar al comentado arriba
        $.getJSON("scripts/test_users.json", function (data) {
            //console.log( "success" );
            $.each(data, function (key, val) {
                contador_usuario = key;
                //console.log( "key: "+key +", value:"+ val.usuario );
                contenido_tabla.append(
                    " <tr class=\"highlight\" id=\"usuario_"+key+"\">\
                        <td>" + val.usuario + "</td>\
                        <td>\
                            <a class=\"btn boton-moficar\" id=\"boton-modificar" + key + "\" data-toggle=\"modal\" data-target=\"#modal-boton-modificar\">modificar</a>\
                            <a class=\"btn boton\" id=\"boton-eliminar" + key + "\">eliminar</a> \
                        </td>\
                    </tr>"
                );

                $("#boton-modificar" + key).click(function () {
                    var modal_modificar = $("#titulo-modificar");
                    modal_modificar.empty();
                    modal_modificar.append("Modificar " + val.usuario)
                    var modal_cuerpo_modificar = $("#modal-cuerpo-modificar");
                    modal_cuerpo_modificar.empty();
                    modal_cuerpo_modificar.append(
                        "<form>\n" +
                        "  <div class=\"form-group\">\n" +
                        "    <label>Nombre</label>\n" +
                        "    <input type=\"text\" class=\"form-control\" id=\"nombre_usuario\" placeholder=\"" + val.usuario + "\">\n" +
                        "  </div>\n" +
                        "  <div class=\"form-group\">\n" +
                        "    <label >Correo electrónico</label>\n" +
                        "    <input type=\"email\" class=\"form-control\" id=\"correo_electronico\" " +
                        "aria-describedby=\"emailHelp\" placeholder=\"" + val.email + "\">\n" +
                        "  </div>\n" +
                        "  <div class=\"form-group\">\n" +
                        "    <label>Contraseña</label>\n" +
                        "    <input type=\"password\" class=\"form-control\" id=\"password_usuario\" placeholder=\"contraseña\">\n" +
                        "  </div>\n" +
                        " <button type=\"submit\" class=\"btn\" data-dismiss=\"modal\" id=\"guardar_modif\">Modificar</button>\n" +
                        "</form>")
                });
                $("#boton-eliminar" + key).click(function () {
                    alert("¿ Esta seguro de eliminar \"" + val.usuario + "\" ?");
                    $("#usuario_" + key).remove();
                    //REQUEST DELETE hacia el servidor
                    //TODO
                });

                // limita el numero de usuarios mostrados
                return key<5;
            })

        });
        var modal_titulo = $("#titulo-crear");
        modal_titulo.empty();
        modal_titulo.append("Crear usuario");
        var modal_cuerpo = $("#modal-cuerpo");
        modal_cuerpo.empty();
        modal_cuerpo.append(
            "<form>\n" +
            "  <div class=\"form-group\">\n" +
            "    <label>Nombre</label>\n" +
            "    <input type=\"text\" class=\"form-control\" id=\"nombre_usuario\" placeholder=\"introducir nombre\">\n" +
            "  </div>\n" +
            "  <div class=\"form-group\">\n" +
            "    <label >Correo electrónico</label>\n" +
            "    <input type=\"email\" class=\"form-control\" id=\"correo_electronico\" aria-describedby=\"emailHelp\" placeholder=\"example@correoelectronico.com\">\n" +
            "  </div>\n" +
            "  <div class=\"form-group\">\n" +
            "    <label>Contraseña</label>\n" +
            "    <input type=\"password\" class=\"form-control\" id=\"password_usuario\" placeholder=\"contraseña\">\n" +
            "  </div>\n" +
            " <button type=\"submit\" class=\"btn\" data-dismiss=\"modal\">Guardar</button>\n" +
            "</form>"
        );

        $("#numero_paginas").replaceWith(vista_paginas);
        $.getJSON("scripts/test_paginas.json", function (data) {
            var contador = data.paginas;
            var i;
            //console.log("success")
            for (i = 1; i <= contador; i++) {
                //   console.log("page: " + i)
                $("#numero_pag")
                    .before(
                        "<li class=\"page-item\"><a class=\"page-link\" id=\"numero_pag_" + i + "\"  href=\"#\">" + i + "</a></li>"
                    );
                $("#numero_pag_"+i).click(function () {

                        $("#usuarios").click();
                })
            }
        });
    });


});