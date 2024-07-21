const button = document.querySelectorAll('.button');
const body = document.querySelector("body");
const header = document.getElementById('header');
const footer = document.getElementById('footer')
 button.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (p) {
        console.log(p);
        console.log(p.target);
        if(p.target.id==='red') {
            body.style.backgroundColor= p.target.id
            header.style.color = 'black';
            footer.style.color= 'black';
        }
        if(p.target.id==='blue') {
            body.style.backgroundColor= p.target.id
            header.style.color = 'white';
            footer.style.color= 'white';
        }
        if(p.target.id==='yellow') {
            body.style.backgroundColor= p.target.id
            header.style.color = 'brown';
            footer.style.color= 'brown';
        }
        if(p.target.id==='green') {
            body.style.backgroundColor= p.target.id
            header.style.color = 'blue';
            footer.style.color= 'blue';
        }
    })
 });