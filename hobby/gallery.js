var slideIndex, slides, dots, captionText;
function initGallery() {
    slideIndex = 0;
    slides = document.getElementsByClassName("image--holder");
    slides[slideIndex].style.opacity = 1;

    captionText = document.querySelector(".caption--text");
    captionText.innerText = slides[slideIndex].querySelector(".caption--text").innerText;

    dots = [];
    var dotsContainer = document.getElementById("dotsContainer");

    for(var i=0;i<slides.length;i++){
        var dot = document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        dots.push(dot);
    }

    dots[slideIndex].classList.add("active");
}

initGallery();

function plusSlides(n) {
    moveSlide(slideIndex+n);
}

function moveSlide(n) {
    var i,current,next;
    var moveSlideAnimClass={
        forCurrent:"",
        forNext:""
    }

    if(n>slideIndex) {
        if(n>slides.length) {n=0}
        moveSlideAnimClass.forCurrent="move--left-current-slide";
        moveSlideAnimClass.forNext="move--left-next-slide";
    }
    else if(n<slideIndex) {
        if(n<0) {n=slides.length-1}

    }
    if(n!=slideIndex){
        next = slides[n];
        current = slides[slideIndex];
        for(i=0;i<slides.length;i++) {
            slides[i].className = "image--holder";
            slides[i].style.opacity = 0;
            dots[i].classList.remove("active");  
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex = n;

    }


}

