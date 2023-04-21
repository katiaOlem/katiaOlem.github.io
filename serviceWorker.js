const staticBraLy = "BraLy-vitae-v1"
const assets = [
    "/",
    "/MaterialesRegistrados.github.io/admin/templates/crear_material.html",
    "/MaterialesRegistrados.github.io/admin/templates/delete_material.html",
    "/MaterialesRegistrados.github.io/admin/templates/materiales.html",
    "/MaterialesRegistrados.github.io/admin/templates/login.html",
    "/MaterialesRegistrados.github.io/admin/templates/registro.html",
    "/MaterialesRegistrados.github.io/admin/templates/update_material.html",
    "/MaterialesRegistrados.github.io/admin/templates/ver_material.html",
    "/MaterialesRegistrados.github.io/admin/index.html",
    "/MaterialesRegistrados.github.io/crud/delete_material.js",
    "/MaterialesRegistrados.github.io/crud/get_material.js",
    "/MaterialesRegistrados.github.io/crud/get_materiales.js",
    "/MaterialesRegistrados.github.io/crud/get_materiales_admin.js",
    "/MaterialesRegistrados.github.io/crud/post_material.js",
    "/MaterialesRegistrados.github.io/crud/update_material.js",
    "/MaterialesRegistrados.github.io/css/style.css",
    "/MaterialesRegistrados.github.io/css/font-awesome.min.css",    
    "/MaterialesRegistrados.github.io/css/font-awesome.css",
    "/MaterialesRegistrados.github.io/css/sweetalert2.min.css",
    "/MaterialesRegistrados.github.io/js/carrusel.js",

    "/MaterialesRegistrados.github.io/js/login.js",
    "/MaterialesRegistrados.github.io/js/registro.js",
    "/MaterialesRegistrados.github.io/js/sweetalert2.all.min.js",
    "/MaterialesRegistrados.github.io/js/ubicacion.js",
    "/MaterialesRegistrados.github.io/pages/fallback.html",

    "/MaterialesRegistrados.github.io/templates/materiales.html",
    "/MaterialesRegistrados.github.io/templates/inicio.html",
    "/MaterialesRegistrados.github.io/templates/login.html",
    "/MaterialesRegistrados.github.io/templates/registro.html",
    "/MaterialesRegistrados.github.io/templates/ubicacion.html",
    "/MaterialesRegistrados.github.io/api/main.py",
    "/MaterialesRegistrados.github.io/images/logo.png",
    "/MaterialesRegistrados.github.io/images/login.png",
    "/MaterialesRegistrados.github.io/images/left-arrow.png",
    "/MaterialesRegistrados.github.io/images/right-arrow.png",
    "/MaterialesRegistrados.github.io/images/welcome_cat.gif",
    "/MaterialesRegistrados.github.io/pages/fallback.html",


    
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticBraLy).then(cache => {
            cache.addAll(assets)
        })
    )
})


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        }).catch(() => caches.match("/pages/fallback.html"))
    );
});

self.addEventListener("activate", activateEvent => {
    activateEvent.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticBraLy)
                .map(key => caches.delete(key))
            )
        })
    )
})

