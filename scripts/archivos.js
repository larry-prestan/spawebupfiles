function archivos(){

    let archivos = `
    <div id="formcontainer" class="container">
        <form id="formsubir" action="./php/subirarchivo.php" method="POST" enctype="multipart/form-data">
            <label id="label1">SELECCIONE EL ARCHIVO A SUBIR:</label>
            <div class="form-group">
                <input type="file" name="archivo" id="archivo">
            </div>
            <button type="submit" id="btnsubir" class="btn btn-success">SUBIR ARCHIVO</button>
        </form>
    </div>`;

    $('#maincontainer').append(archivos);


}