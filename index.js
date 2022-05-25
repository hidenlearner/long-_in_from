let logInBtn = document.querySelector("#log-in-btn")
let userFrom = document.querySelector('#user-from')
let crosBtn = document.querySelector("#cros-btn")
let clickInfo = document.querySelector("#click-info")
 

logInBtn.addEventListener('click',()=>{
    document.querySelector("body").style.backgroundColor='pink'
userFrom.classList.remove('scale-0')
clickInfo.classList.add('hidden')

})


crosBtn.addEventListener('click',()=>{
    document.querySelector("body").style.backgroundColor='snow'
    userFrom.classList.add('scale-0')
    clickInfo.classList.remove('hidden')
    })



