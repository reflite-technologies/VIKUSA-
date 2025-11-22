
let menulist = document.getElementById('menulist')

menulist.style.display = 'none'
function toggle(){
    if(menulist.style.display == 'none'){
        menulist.style.display = 'block';
    } else {
        menulist.style.display = 'none';
    }
};

let people = document.getElementById('person');
let success = document.getElementById('success')
let veryBtn = document.getElementById('sub')
let yourName = document.getElementById('name')
let her = document.getElementById('him')
let himher = yourName.value

function verify(){
   her.innerText = prompt('Type your name please!')
   
        people.style.display = 'none';
        success.style.display = 'block';
        her.style.textTransform = 'uppercase';
        her.style.fontWeight = '700'
    }



let selection = document.getElementById('select')

selection.addEventListener('click', function(e){
    if(selection.classList.contains('.active')){
        selection.classList.remove('.active')
    }else{
        selection.classList.add('.active')
        selection.style.color = 'yellow'
    }
});

    var typed  = new Typed('.text', {
    strings:['Integrity' , 'Resilience' , 'Teamwork' , 'Unity ','Accountability'
    ],
    typeSpeed:100,
    backSpeed:100,
    backDelay: 1000,
    loop: true
});




