
/*console.log('client pblic js')

fetch('http://localhost:3000/weather?address=sderot').then((response) => {

response.json().then((data)=>{
console.log(data)})
})


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

*/
    console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const m1 = document.querySelector('#m1')
const m2 = document.querySelector('#m2')





weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    m1.textContent = 'loading'
    m2.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error||data.messege) {
                m1.textContent=data.error||data.messege
                m2.textContent = ''

            } else {
                m1.textContent = ''

                m2.textContent=data.location +data.forecast
            }
        })
    })
})


