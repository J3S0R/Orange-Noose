const form = document.getElementById('formulaire');
const emailInput = document.getElementById('Inputemail');
const mobileInput = document.getElementById('Mobile_number');
const sujetInput = document.getElementById('InputSujet');
const nameInput = document.getElementById('InputName')

const UserRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,23}$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10,14}$/;
const SujetRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

function addClass(element,regex, value){
    if(regex.test(value)){
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
    } else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
    } 
}

nameInput.addEventListener('input', e=>addClass(nameInput, UserRegex, e.target.value))
emailInput.addEventListener('input', e=>addClass(emailInput, EmailRegex, e.target.value));
mobileInput.addEventListener('input',e=>{
    let tel = e.target.value;
    tel = tel.replace(/ /g,'');
    tel = tel.replace(/^0/, '+33');
    addClass(mobileInput, PhoneNumberRegex, tel)
})
sujetInput.addEventListener('input', e=>addClass(sujetInput , SujetRegex, e.target.value))




// emailInput.addEventListener('input', e=>{
//     if (EmailRegex.test(e.target.value)) {
//         emailInput.classList.add('is-valid');
//         emailInput.classList.remove('is-invalid');
//     } else {
//         emailInput.classList.add('is-invalid');
//         emailInput.classList.remove('is-valid');
//     }
// })

// mobileInput.addEventListener('input', e=>{
//     if (PhoneNumberRegex.test(e.target.value)) {
//         mobileInput.classList.add('is-valid');
//         mobileInput.classList.remove('is-invalid');
//     } else {
//         mobileInput.classList.add('is-invalid');
//         mobileInput.classList.remove('is-valid')
//     }
// })