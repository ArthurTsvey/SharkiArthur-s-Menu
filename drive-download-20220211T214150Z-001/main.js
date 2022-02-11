var delayInMilliseconds = 300; 

setTimeout(function() {
document.getElementById("background-image").src='https://images6.fanpop.com/image/photos/33000000/Kirito-mini17s-spot-33063288-1280-711.gif';
}, delayInMilliseconds);

setInterval(function() {
    document.getElementById("background-image").src='https://images6.fanpop.com/image/photos/33000000/Kirito-mini17s-spot-33063288-1280-711.gif';
    }, 500);