// let icon = document.getElementById('icon');

// icon.onclick = function() {
//     document.body.classList.toggle('dark-theme');
//     if(document.body.classList.contains('dark-theme')) {
//         icon.src = 'images/sun.png';
//     }
//     else {
//         icon.src = 'images/moon.png';
//     }
// }

let humburger = document.querySelector('.humburger');

humburger.onclick = function() {
    navBar = document.querySelector('.menu');
    navBar.classList.toggle('active');  
}