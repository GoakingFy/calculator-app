
 
 function sum(number,total) {
      number = parseFloat(number)
      total = parseFloat(total)
      total = number + total
      return total

      }
      function subtract(num1,num2){
         num1 = parseFloat(num1)
         num2 = parseFloat(num2)
        let  result = num1 - num2
         console.log(result)
         return result
         
      }

      function multiplication(num1,num2){
         num1 = parseFloat(num1)
         num2 = parseFloat(num2)
         let result = num1 * num2
         return result
      }
      function division(num1,num2){
         num1 = parseFloat(num1)
         num2 = parseFloat(num2)
         let result = num1 / num2
         return result
      }
     export function percentage(num1){
         num1 = parseFloat(num1)
         let result = num1 / 100
         return result
      }

      

      export function extractOperator(obj,values){
         let operators = Object.values(obj) 
         for (let i = 0; i < operators.length; i++) {
            if(values.includes(operators[i])){
               return operators[i]
            }
           
         }
         
         
      }

      export function selectFunction(values,operator,operators){
         if(values){
          
       if(operator == operators.sum){
        return  sum(values[0],values[1])
       }else if(operator == operators.subtraction){
         return subtract(values[0],values[1])
       }else if(operator == operators.multiplication){
         return multiplication(values[0],values[1])
       }else if(operator == operators.division){
         return division(values[0],values[1])
       }
             
            
         }
      }

      