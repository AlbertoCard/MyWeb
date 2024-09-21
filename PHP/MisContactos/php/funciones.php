<?php 
    function borrar_imagenes($ruta, $extension){
        switch ($extension) {
            case '.jpg':
                if(file_exists($ruta."png"))
                    unlink($ruta."png");
                if(file_exists($ruta."gif"))
                    unlink($ruta."gif");
                break;
            case '.gif':
                if(file_exists($ruta."png"))
                    unlink($ruta."png");
                if(file_exists($ruta."jpg"))
                    unlink($ruta."jpg");
                break;
            case '.png':
                if(file_exists($ruta."gif"))
                    unlink($ruta."gif");
                if(file_exists($ruta."jpg"))
                    unlink($ruta."jpg");
                break;
            
        }
    }

    function subir_imagen($tipo,$imagen,$email){
        if(!strstr($tipo,"image")){
            return false;
        }

        if(strstr($tipo,"jpg")){
            $extension =".jpg";
        }
        if(strstr($tipo,"gif")){
            $extension =".gif";
        }
        if(strstr($tipo,"png")){
            $extension =".png";
        }

        $tam_img = getimagesize($imagen);
        $ancho_img = $tam_img[0];
        $alto_img = $tam_img[1];

        $ancho_img_deseado = 420;

        if($ancho_img>$ancho_img_deseado){
            $nuevo_ancho_img = $ancho_img_deseado;
            $nuevo_alto_img = ($alto_img/$ancho_img)*$nuevo_ancho_img;

            $img_reajustada = imagecreatetruecolor($nuevo_ancho_img, $nuevo_alto_img);
            
            switch ($extension) {
                case '.jpg':
                    $img_original = imagecreatefromjpeg($imagen);

                    imagecopyresampled($img_reajustada, $img_original,0,0,0,0, $nuevo_ancho_img, $nuevo_alto_img,$ancho_img,$alto_img);

                    imagejpeg($img_reajustada,"../img/".$email.$extension,100);

                    borrar_imagenes("../img/",$email);
                    break;
                
                case '.gif':
                    $img_original = imagecreatefromgif($imagen);
                    imagecopyresampled($img_reajustada, $img_original,0,0,0,0, $nuevo_ancho_img, $nuevo_alto_img,$ancho_img,$alto_img);
                    
                    imagegif($img_reajustada,"../img/".$email.$extension,100);

                    borrar_imagenes("../img/",$email);
                    break;
                
                case '.png':
                    $img_original = imagecreatefrompng($imagen);
                    imagecopyresampled($img_reajustada, $img_original,0,0,0,0, $nuevo_ancho_img, $nuevo_alto_img,$ancho_img,$alto_img);
                    
                    imagepng($img_reajustada,"../img/".$email.$extension,100);

                    borrar_imagenes("../img/",$email);
                    break;
            }

        } else {
            $destino="../img/".$email.$extension;
            move_uploaded_file($imagen,$destino) or die("No se pudo subir la imagen");

            borrar_imagenes("../img/",$email);
        }
        $imagen = $email.$extension;
        return $imagen;
        
    }
?>