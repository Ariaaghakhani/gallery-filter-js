let pic = document.querySelectorAll('figure')
let filter = document.querySelectorAll('li')


for(i=0;i<filter.length;i++){
    filter[i].classList.remove('select')
}
filter[0].classList.add('select')

filter.forEach((fil)=>{
    fil.addEventListener('click',()=>{
        let temp = fil.getAttribute('data-filter')
        _checkImage(temp)

        // Reset 

        for(i=0;i<filter.length;i++){
            filter[i].classList.remove('select')
        }


        fil.classList.add('select')
    })
})

function _checkImage(temp){
    pic.forEach((val)=>{
        if (val.getAttribute('data-meta')==temp || temp=='all'){
            val.style.display='flex'
        }else{
            val.style.display='none'
        }
    })
}