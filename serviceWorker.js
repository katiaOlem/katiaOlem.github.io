const staticBraLy = "BraLy-vitae-v1"
const assets = [
    "/",
    "/index.html",
    "/katiaolem.github.io/index.html",
    "/katiaolem.github.io/admin/templates/login.html",
    "/katiaolem.github.io/admin/templates/registro.html",
    "/katiaolem.github.io/admin/templates/index.html",
    "/katiaolem.github.io/admin/templates/crear_material.html",
    "/katiaolem.github.io/admin/templates/materiales.html",
    "/katiaolem.github.io/admin/templates/update_material.html",
    "/katiaolem.github.io/admin/templates/ver_material.html",
    "/katiaolem.github.io/templates/crear_material.html",
    "/katiaolem.github.io/templates/materiales.html",
    "/katiaolem.github.io/templates/ubicacion.html",
    "/katiaolem.github.io/css/style.css",
    "/katiaolem.github.io/css/font-awesome.min.css",
    "/katiaolem.github.io/css/font-awesome.css",
    "/katiaolem.github.io/css/sweetalert2.min.css",
    "/katiaolem.github.io/js/carrusel.js",
    "/katiaolem.github.io/js/sweetalert2.all.min.js",
    "/katiaolem.github.io/js/ubicacion.js",
    "/katiaolem.github.io/crud/post_materiales.js",
    "/katiaolem.github.io/crud/get_materiales.js",
    "/katiaolem.github.io/api/main.py",
    "/katiaolem.github.io/images/logo.png",
    "/katiaolem.github.io/images/login.png",
    "/katiaolem.github.io/images/left-arrow.png",
    "/katiaolem.github.io/images/right-arrow.png",
    "/katiaolem.github.io/pages/fallback.html",
    "/katiaolem.github.io/admin/templates/materiales.html"

    
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

