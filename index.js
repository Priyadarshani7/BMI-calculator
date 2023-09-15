const form = document.querySelector('form')
form.addEventListener('submit',function(e){
e.preventDefault()

const height =parseInt(document.querySelector('#height').value)
const weight =parseInt(document.querySelector('#weight').value)
const result =document.querySelector('#results')
if(height==='' ||height<0||isNaN(height)){
result.innerHTML="please give valid height"
}else if(weight==='' ||weight<0||isNaN(weight)){
    result.innerHTML="please give valid weight"
}else{
      const bmi = (weight/((height*height)/10000)).toFixed(2)
      result.innerHTML=`${bmi}`
      const guide =document.querySelector('#guide')
      if(bmi<18.6){
      guide.innerHTML="Under Weight = Less than 18.6"
      }else if(bmi<=18.6||bmi>=24.9){
        guide.innerHTML="Normal Range = 18.6 and 24.9"
      }else{
        guide.innerHTML="Overweight = Greater than 24.9"
      }
    }
})