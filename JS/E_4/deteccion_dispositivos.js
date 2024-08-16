const d = document,
    n = navigator,
    ua = n.userAgent;

export default function responsiveTester(id) {
    const $id = d.getElementById(id),
    isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function() {
            return this.android() || this.ios() || this.windows();
        }
    },
    isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function() {
            return this.linux() || this.mac() || this.windows();
        }
    },
    isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge/i),
        any: function() {
            return (
                this.chrome() ||
                this.safari() ||
                this.firefox() ||
                this.opera() ||
                this.ie() ||
                this.edge()
            );
        }
    };

    $id.innerHTML = `
    <ul>
        <li><b>User Agent:</b>${ua}</li>
        <li><b>Plataforma:</b>${
            isMobile.any() ? isMobile.any() : isDesktop.any()
        }</li>
        <li><b>Navegador:</b>${isBrowser.any()}</li>
    `;

    // Contenido exclusivo
    if (isBrowser.chrome()) {
        $id.innerHTML += `<li><b>Esto solo se ve en Chrome</b></li>`;
    }
    if (isBrowser.firefox()) {
        $id.innerHTML += `<li><b>Esto solo se ve en Firefox</b></li>`;
    }
    if (isDesktop.windows()) {
        $id.innerHTML += `<li><b>Descarga nuestro software para Windows</b></li>`;
    }
    if (isDesktop.linux()) {
        $id.innerHTML += `<li><b>Descarga nuestro software para Linux</b></li>`;
    }
    if (isDesktop.mac()) {
        $id.innerHTML += `<li><b>Descarga nuestro software para Mac</b></li>`;
    }
}