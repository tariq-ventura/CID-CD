document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nav-bar').innerHTML = 
    `<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item">
            <img src="./resources/images/logo.png">
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
            data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item" href="index.html">
                Inicio
            </a>

            <a class="navbar-item" href="/mamiferos.html">
                Mamíferos
            </a>

            <a class="navbar-item" href="/aves.html">
                Aves
            </a>

            <a class="navbar-item" href="/reptiles.html">
                Reptiles
            </a>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Buscar</strong>
                    </a>
                </div>
            </div>
            <div class="navbar-item">
                <input class="input" type="text" placeholder="busqueda...">
            </div>
        </div>
    </div>
</nav>`
})