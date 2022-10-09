//const display = document.querySelector(".display")
import {display,$timer,container_numbers,container_lastOperation} from './valDOM.js';
import {extractOperator,selectFunction,percentage} from './functions.js';


let lastoperation = ""

const getHour = ()=>{
let date = new Date()

let timer = `${date.getHours()}:${date.getMinutes()}`
date.getHours() >= 12 ? timer += " PM" : timer += " AM"

return $timer.textContent = `${timer}` ;

}
getHour()


setInterval(getHour,60000)

const operators = {
    sum: "+",
    subtraction: "-",
    multiplication:"*",
    division:"/",
    percentage: "%",
    equals: "="
}


container_numbers.addEventListener("click" , (e)=>{
    let DataID = e.target.getAttribute("data-id")
  
            if(DataID != null){
               
               
            display.textContent += DataID 
           
            DataID != "=" ? lastoperation += DataID : null
          
           container_lastOperation.textContent = lastoperation
             
                if(DataID == operators.equals){
                   
                    let operation = display.textContent.substring(0,display.textContent.length -1)
                    let operator = extractOperator(operators,display.textContent)
                    let values = operation.split(operator)

                    display.textContent = selectFunction(values,operator,operators)
                   
                    
                }else if(DataID == operators.percentage){
                    let operation = display.textContent.substring(0,display.textContent.length -1)
                   display.textContent = percentage(operation)

                }else if(DataID == "C"){
                    display.textContent = ""
                    
                    container_lastOperation.textContent = ""
                    lastoperation = ""
                }
            
            
        }
})
