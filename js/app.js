let url = window.location.href;
let sw = '/pwa-MAPS-u1-p1/sw.js'
if(navigator.serviceWorker){
    if(url.includes('localhost')){
        sw = '/sw.js'
    }
    navigator.serviceWorker.register(sw)
}else{
    console.log("Ups, cambia de navegador")
}