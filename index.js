
//let myage = 21

//let humandogratio = 7

//let mydogage = myage * humandogratio

//console.log(mydogage)

//? capture html elements
let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEL = document.getElementById("total-el")
let list = document.getElementById("list")
let savedNotification = document.getElementById('saveNotify')

//collections
let savedCounts = []
let dateLogs=[]
let isChanged = false;


function saveData(){

    //? see if previous data exists
    let prevCounts = localStorage.getItem('counts')?.split(',')
    let prevDateLogs = localStorage.getItem('logs')?.split(',')
    //? if prev data exist then previous data should be appended to current new data

    //? 
    if(isChanged){
        localStorage.clear();    
        let countsToSave = prevCounts? [...prevCounts, ...savedCounts] : [...savedCounts]
        let datesToSave = prevDateLogs? [...prevDateLogs,...dateLogs] : [...dateLogs]
        
        localStorage.setItem('counts', countsToSave)
        localStorage.setItem('logs', datesToSave)
        
        let currentCount = localStorage.getItem('counts')?.split(',').map((e)=>+e)
        let currentDates = localStorage.getItem('logs').split(',')
    
        savedCounts = currentCount? [...currentCount] : []
        dateLogs = currentDates? [...currentDates] : []
        isChanged = false;
    }

    
    

    


}
   


let count = 0


function increment () {
count++
countEl.textContent = count


}

function add(){
    let currentDate = new Date()



    let el = document.createElement("li")



    savedCounts.push(count)

    let hours = currentDate.getHours()
    let minutes =  currentDate.getMinutes()<10?'0'+currentDate.getMinutes():currentDate.getMinutes()

    dateLogs.push(`${hours}:${minutes}`)
   

    el.textContent = `count = ${count} | time = ${hours}:${minutes} `

    list.appendChild(el)
 
    count = 0
    countEl.textContent=0

    isChanged = true
    hideSave()

    total()
    



}

function save() {
    if(savedCounts.length >0){
        saveData();
        notifySave()

    }
    
savedCounts = 0

}

function notifySave(){
    savedNotification.style.visibility = 'visible';
}

function hideSave(){
    savedNotification.style.visibility = 'hidden';

}


function minus() {
    if(count>0){
    count--

    countEl.textContent = count 
    }

}

function total() {
    let sum = 0
    
    //counting values 
    savedCounts.forEach((number)=>{
        sum += number
    })

   totalEL.textContent = `TOTAL : ${sum}`
}

function clearStorage(){
    localStorage.clear();
    
    savedCounts.length = 0;
    dateLogs.length = 0;
    
  
   
    removeChild(list)
    hideSave()
    
}

function removeChild(node){
    //recursive function, read about it

    if(node.children.length === 0 ){
       
        return
    }

    node.childNodes.forEach(e=>{
        e.remove()
    })
    removeChild(node)


    
}

function populateUI(){

    
   
    removeChild(list)
    
    

    let counts = localStorage.getItem('counts')?.split(',')

    let dates = localStorage.getItem('logs')?.split(',')

        
    if(counts && dates){
        
       
        
        
        let listElement 
        for(let i = 0; i<counts.length; i++){
            listElement = document.createElement('li')
            let split = dates[i]?.split(':')
            listElement.textContent = `count = ${counts[i]} | time = ${split[0]}:${split[1]}`
            list.appendChild(listElement)

            savedCounts.push(+counts[i])
         
            
        }
    }
    
}
   


window.onload = ()=>{
    savedNotification.style.visibility = 'hidden'
    populateUI()
}
