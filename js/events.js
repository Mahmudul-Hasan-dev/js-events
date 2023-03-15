//we can do print direct on html element
//this is the most usable option
function makered() {
    document.body.style.backgroundColor = 'red';
}
// using function by calling id
const setblue = document.getElementById('make-blue');
setblue.onclick = makeblue;
function makeblue() {
    document.body.style.backgroundColor = 'blue'
}

//alternate way to use function
const setpurple = document.getElementById('make-purple');
setpurple.onclick = function makepurple() {
    document.body.style.backgroundColor = 'purple'
}

//using add event listener
const setpink = document.getElementById('make-pink');
// console.log(setpink);
setpink.addEventListener('click', pinkcolor);
function pinkcolor() {
    document.body.style.backgroundColor = 'pink';
}
//another one
const setgreen = document.getElementById('make-green');
// console.log(setpink);
setgreen.addEventListener('click', function pinkcolor() {
    document.body.style.backgroundColor = 'green';
});

///final and most use one
document.getElementById('make-orange').addEventListener('click', function makeOrange() {
    document.body.style.backgroundColor = 'orange';
})