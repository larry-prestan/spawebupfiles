function navegacion(){

    let navegacion = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">[logoGopre]</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" id="home" href="#">Home</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" id="" href="#">Features</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" id="" href="#">Pricing</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" id="archivos" href="#">Archivos</a>
                    </li>
                </ul>
            </div>
        </nav>`;

    $('#navcontainer').append(navegacion);


    //HOME LINK
    $('#home').click(function (e) { 

        $('#maincontainer').empty();
        $.getScript("./scripts/homepage.js", function () {
            homepage();
        });
        e.preventDefault();
        
    });

    //ARCHIVOS LINK
    $('#archivos').click(function (e) { 

        $('#maincontainer').empty();
        $.getScript("./scripts/archivos.js", function () {
            archivos();
        });
        e.preventDefault();
        
    });
}