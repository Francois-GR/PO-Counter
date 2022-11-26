
//let myage = 21

//let humandogratio = 7

//let mydogage = myage * humandogratio

//console.log(mydogage)

//? capture html elements
let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEL = document.getElementById("total-el")
let list = document.getElementById("list")




let savedCounts = []

let count = 0


function increment () {
count++
countEl.textContent = count


}


function save() {

    let currentDate = new Date()



    let el = document.createElement("li")

    console.log(el)

    savedCounts.push(count)

    let hours = currentDate.getHours()
    let minuts =  currentDate.getMinutes();
  
    



    // el.textContent = `${count}: ${hours}:${minuts}`
    el.textContent = `${count}: ${hours} : ${minuts<10?'0'+minuts:minuts} `

    saveEL.appendChild(el)
 
    count = 0



}


function minus() {
    count--

    countEl.textContent = count 

}

function total(){
    let sum = 0
    
    //counting values 
    savedCounts.forEach((number)=>{
        sum += number
    })

   totalEL.textContent = `TOTAL : ${sum}`
}

