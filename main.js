const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
const xxx = [
  "https://github.com/albas99/gallery-start/blob/master/images/pic1.jpg?raw=true",
  "https://github.com/albas99/gallery-start/blob/master/images/pic2.jpg?raw=true",
  "https://github.com/albas99/gallery-start/blob/master/images/pic3.jpg?raw=true",
  "https://github.com/albas99/gallery-start/blob/master/images/pic4.jpg?raw=true",
  "https://github.com/albas99/gallery-start/blob/master/images/pic5.jpg?raw=true",
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