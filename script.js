const inputs = document.querySelectorAll('input');
const inputobj = Object.values(inputs);
const allcircle = document.querySelectorAll('.circle')
const goallist = JSON.parse(localStorage.getItem('goallist'))||{};
const error = document.querySelector('.error-label');
let goalarray = Object.values(goallist);
let garr = goalarray.filter((l)=>l.iscomplete===true);
let  countgoals=garr.length;
const allquotes=[
    'Raise the bar by completing your goals',
    'Well begun is half done',
    'Just a step away, keep going',
    'You have completed your target'
]
let bar =document.querySelector('.bar')
const progress_mark = document.querySelector('.progress-mark');

let c = 100/goalarray.length;
let w = countgoals*c;
progress_mark.style.width=`${w}%`;
progress_mark.innerText =`${countgoals}/${goalarray.length} completed`
bar.innerText=allquotes[countgoals]




function checkallinputs() {
    for (const i of inputobj) {
     
        if (i.value==="") {
           
            return false;
        }
    }
    return true;
}

allcircle.forEach((cir)=>{    
    cir.addEventListener('click',()=>{
        let isvalid = checkallinputs()
        if(isvalid===true){
            cir.parentElement.classList.toggle('completed');
            if(goallist[cir.nextElementSibling.id])
            {goallist[cir.nextElementSibling.id].iscomplete = !goallist[cir.nextElementSibling.id].iscomplete;
            localStorage.setItem('goallist',JSON.stringify(goallist));
            goalarray = Object.values(goallist);
            garr=goalarray.filter((l)=>l.iscomplete===true);
            countgoals=garr.length
            console.log(countgoals)
          
            let c = 100/goalarray.length;
            let w = countgoals*c;
            progress_mark.style.width=`${w}%`;
            progress_mark.innerText =`${countgoals}/${goalarray.length} completed`
            bar.innerText=allquotes[countgoals]
            }
        }
        else{
            error.classList.remove('error-label')
           error.classList.add('error')
        }
    })
})



inputs.forEach((inp)=>{

inp.addEventListener('input',(e)=>{
    if(goallist[inp.id]&& goallist[inp.id].iscomplete){
    
        goallist[inp.id].data = goallist[inp.id].data;
        inp.value=goallist[inp.id].data;
        return;
    }
   else
  {  goallist[inp.id]={
        data : e.target.value,
        iscomplete :false
    }
    localStorage.setItem('goallist',JSON.stringify(goallist));
}
})

})


// Setting default data of local Storage
inputs.forEach((inp)=>{

if(goallist[inp.id]&& goallist[inp.id].data){
    inp.value=goallist[inp.id].data;
}
if(goallist[inp.id]&& goallist[inp.id].iscomplete){
    inp.parentElement.classList.add('completed')
}


inp.addEventListener('focus',()=>{
    error.classList.remove('error');
    error.classList.add('error-label')
})
});

