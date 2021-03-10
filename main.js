function myFunction(x){
    if(x.matches){
        var layer1 = document.getElementById('bottom-cloud')
    scroll = window.pageYOffset;
    document.addEventListener('scroll', function(e){
        var offset = window.pageYOffset;
        scroll = offset;
        layer1.style.left = (3 + scroll/30) + '%';
    });

        var layer2 = document.getElementById('top-cloud')
    scroll = window.pageYOffset;
    document.addEventListener('scroll', function(e){
        var offset = window.pageYOffset;
        scroll = offset;
        layer2.style.left = (70 +scroll/30) +'%';

    });
    var layer3 = document.getElementById('mountain')
    scroll = window.pageYOffset;
    document.addEventListener('scroll', function(e){
        var offset = window.pageYOffset;
        scroll = offset;
        layer3.style.top = (55 + scroll/30) + '%';
    });
    }
    else{
    var layer1 = document.getElementById('bottom-cloud')
    scroll = window.pageYOffset;
    document.addEventListener('scroll', function(e){
        var offset = window.pageYOffset;
        scroll = offset;
        layer1.style.left = (15 + scroll/30) + '%';
    });

    var layer2 = document.getElementById('top-cloud')
    scroll = window.pageYOffset;
    document.addEventListener('scroll', function(e){
        var offset = window.pageYOffset;
        scroll = offset;
        layer2.style.left = (75 +scroll/30) +'%';

    });

    var layer3 = document.getElementById('mountain')
    scroll = window.pageYOffset;
    document.addEventListener('scroll', function(e){
        var offset = window.pageYOffset;
        scroll = offset;
        layer3.style.top = (41 + scroll/10) + '%';
    });
    }
}

if (matchMedia) {
    const x = window.matchMedia("(max-width: 1050px)");
    x.addListener(myFunction);
    myFunction(x);
}

mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


anime.timeline({})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    //opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  

  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    //opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });