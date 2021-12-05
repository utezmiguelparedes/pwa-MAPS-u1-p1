
self.addEventListener("install", event => {
    console.log("SW instalado")
});

self.addEventListener("activate", event =>{
    console.log("SW activado")
})

self.addEventListener('fetch', event => {
    if(event.request.url.includes('.jpg')){
        let response = fetch('./images/felino.jpg');
        console.log("Imagen")
        event.respondWith(response)
    }

    if(event.request.url.includes('style.css')){
        let response = new Response(`
        body{
            background-color:black !important;
            color: red !important;
        },`,{
            headers: {
                'Content-Type': 'text/css'
            }
        })
        event.respondWith(response)
    }
})