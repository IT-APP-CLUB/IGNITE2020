var init = function(){
    var isMobile = navigator.userAgent &&
        navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
    var isSmall = window.innerWidth < 1000;

    var ps = new ParticleSlider({
        ptlGap: isMobile || isSmall ? 3 : 2,
        ptlSize: isMobile || isSmall ? 3 : 2,
        width: 1e9,
        height: 1e9
    });

    var gui = new dat.GUI();
    gui.add(ps, 'ptlGap').min(0).max(5).step(1).onChange(function(){
        ps.init(true);
    });
    gui.add(ps, 'ptlSize').min(1).max(5).step(1).onChange(function(){
        ps.init(true);
    });
    gui.add(ps, 'restless');
    gui.addColor(ps, 'color').onChange(function(value){
        ps.monochrome = true;
        ps.setColor(value);
        ps.init(true);
    });


    (window.addEventListener
        ? window.addEventListener('click', function(){ps.init(true)}, false)
        : window.onclick = function(){ps.init(true)});
}

var initParticleSlider = function(){
    var psScript = document.createElement('script');
    (psScript.addEventListener
        ? psScript.addEventListener('load', init, false)
        : psScript.onload = init);
    psScript.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js';
    psScript.setAttribute('type', 'text/javascript');
    document.body.appendChild(psScript);
}

(window.addEventListener
    ? window.addEventListener('load', initParticleSlider, false)
    : window.onload = initParticleSlider);
var sidebarBox = document.querySelector('#box');
var sidebarBtn = document.querySelector('#btn');
var pageWrapper = document.querySelector('#main-content');

sidebarBtn.addEventListener('click', function(event) {

    if (this.classList.contains('active')) {
        this.classList.remove('active');
        sidebarBox.classList.remove('active');
    } else {
        this.classList.add('active');
        sidebarBox.classList.add('active');
    }
});

pageWrapper.addEventListener('click', function(event) {

    if (sidebarBox.classList.contains('active')) {
        sidebarBtn.classList.remove('active');
        sidebarBox.classList.remove('active');
    }
});

window.addEventListener('keydown', function(event) {

    if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
        sidebarBtn.classList.remove('active');
        sidebarBox.classList.remove('active');
    }
});
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46156385-1', 'cssscript.com');
ga('send', 'pageview');

