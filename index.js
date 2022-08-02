import dogsData from "./data"
import Dog from "./Dog"

document.getElementById("cross").addEventListener("click", nope)
document.getElementById("heart").addEventListener("click", heart)

let index = 0
let currentDog = new Dog(dogsData[index])


function nope(){
   currentDog.matchStatus(false)
   document.getElementById("nope-badge").style.display = "block";
    setTimeout(()=> {
    nextDog()
    render()   
    }, 500)  
}

function heart(){
    currentDog.matchStatus(false)
    document.getElementById("badge").style.display = "block";
    setTimeout(()=> {
    nextDog()
    render()   
    }, 500)
  
}

function nextDog() {
    if(currentDog.hasBeenSwiped) {
    if(index < dogsData.length -1){
    currentDog.hasBeenSwiped= false
    index += 1
    currentDog = new Dog(dogsData[index])
    setTimeout(()=> currentDog.hasBeenSwiped = true, 500)
    } else {
        currentDog.hasBeenSwiped= false
        index = 0
        currentDog = new Dog(dogsData[index])
        setTimeout(()=> currentDog.hasBeenSwiped = true, 500)
    }
             }
}
 
 function render(){
     document.getElementById("dogs").innerHTML = currentDog.renderDogs()
 }
 
 render()
 
 
 