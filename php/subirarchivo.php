<?php

$nombre=$_FILES['archivo']['name'];
$direccion=$_FILES['archivo']['tmp_name'];

if(!file_exists('../archivo')){
    mkdir('../archivo',0777,true);
    if(move_uploaded_file($direccion,'../archivo/'.$nombre)){
        
        echo'<script type="text/javascript">
        alert("ARCHIVO AGREGADO EXITOSAMENTE");
        window.location.href="../index.html";
        </script>'; 
        
    }else{

        echo'<script type="text/javascript">
        alert("NO SE PUDO AGREGAR EL ARCHIVO. POR FAVOR VERIFIQUE.!!");
        window.location.href="../index.html";
        </script>';
    }
}else{
    if(move_uploaded_file($direccion,'../archivo/'.$nombre)){

        echo'<script type="text/javascript">
        alert("ARCHIVO AGREGADO EXITOSAMENTE");
        window.location.href="../index.html";
        </script>';

    }else{

        echo'<script type="text/javascript">
        alert("NO SE PUDO AGREGAR EL ARCHIVO. POR FAVOR VERIFIQUE.!!");
        window.location.href="../index.html";
        </script>';

    }

}

?>