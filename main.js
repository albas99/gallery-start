const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
const xxx = [
  "/images/pic1.jpg",
  "/images/pic2.jpg",
  "/images/pic3.jpg",
  "/images/pic4.jpg",
  "/images/pic5.jpg",
];

for (i = 0; i < xxx.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', xxx[i]);
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', function (e) {
    if (e.target.src !== displayedImage.src) {
        displayedImage.src = e.target.src;
    }
})

/* Wiring up the Darken/Lighten button */
darkenAndLighten = () => {
    let btnClass = btn.getAttribute('class');
    if (btnClass == "dark") {
        btn.setAttribute('class', 'light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }

}

btn.onclick = darkenAndLighten;