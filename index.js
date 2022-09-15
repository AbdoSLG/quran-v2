let ul=document.querySelector(".content")
let lis=document.querySelectorAll(".content li")
let audio=document.querySelector("audio")
let h3=document.querySelector("h3")

fetch("./audio.json")

.then((res)=>{
    return res.json()
}).then((data)=>{

    // console.log(data[0])

    
    // for(let i = 0; i < data.length; i++) {
    //     ul.innerHTML+=`<li>${data[i].name_translations.ar}</li>`
    // }


    lis.forEach(li => {
        li.addEventListener("click", ()=>{

            removeActiveClass(lis)
            li.classList.add("active")

            // li.classList.remove("active")
            

            for(let i = 0; i < data.length; i++) {
                if(li.innerHTML==data[i].name_translations.ar){
                    audio.src=data[i].recitation
                }
            }
            h3.innerHTML=` سوره ${li.innerHTML}`
        })
    });

    // lis.forEach((li)=>{
    //     li.addEventListener
    // })

})
    

// remove class active 
function removeActiveClass(arr){
    arr.forEach(e=>{
            e.classList.remove("active")
    })
}
