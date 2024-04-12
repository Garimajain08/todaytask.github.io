// let inputs= document.querySelectorAll('input');
// inputs=Array.from(inputs)
// const allcircle = document.querySelectorAll('.circle')
// const error = document.querySelector('.error-label')
// function checkalltask(){

//   return inputs.every(e =>{
//    console.log(e.value,"e ki value")
//    return e.value;
//    })
// }
// allcircle.forEach(circle => {   
//     circle.addEventListener('click',(e)=>{
//       let check = checkalltask(); 
//       if(check)      
//      {
//       circle.parentNode.classList.toggle("completed")
//    }
//     else{
  
//       error.classList.remove("error-label")
//       error.classList.add("error")
//     } 
//    })
    
// });
// let goal1=document.querySelector('#goal1');
// let goal2=document.querySelector('#goal2');
// let goal3=document.querySelector('#goal3');
// let progressbar=localStorage.getItem('progressbar')||0;
// let progressmarker = document.querySelector('.progress-mark')
// const allcircle = document.querySelectorAll('.circle');
// let inputs = document.querySelectorAll('input');
// const error = document.querySelector('.error-label');
// const goallist= JSON.parse(localStorage.getItem('goallist'))||{
//    goal1:{
//       data:'',
//       iscomplete:false
//    },
//    goal2:{
//       data:'',
//       iscomplete:false
//    },
//    goal3:{
//       data:'',
//       iscomplete:false
//    }
// }
// const myarr=Object.values(goallist)
// function checkprogress(){
//    let progress=0;
//     myarr.forEach((e)=>{
//       if(e.iscomplete){
//          progress+=1;
//       }
//     })
// return progress;
// }
// function checkallinputs(){
//  let  ans=0;
 
//   myarr.forEach((e)=>{
//     if(e.data){
//       ans+=1;
//     }
//   });
  
//    return ans;
// }


// allcircle.forEach(circle =>{
// circle.addEventListener('click',()=>{
//    let check=checkallinputs();

//    if(check===3){
//       circle.parentElement.classList.toggle('completed');
    
//       localStorage.setItem('goallist',JSON.stringify(goallist))
//       let input_id=circle.nextElementSibling.id;
//       goallist[input_id].iscomplete=!goallist[input_id].iscomplete;
//       localStorage.setItem('goallist',JSON.stringify(goallist))
      
//       let p = checkprogress();
//       let w = pr*33 ; 
//       progressmarker.style.width=`${w}%`;
//       progressmarker.innerText=`${p}/3 completed`;

//    }
//    else{
//       error.classList.remove('error-label');
//       error.classList.add('error');
//    }
// })
// })

// inputs.forEach((inp)=>{
   
//    inp.addEventListener('focus',()=>{ 
//       error.classList.remove('error');
//       error.classList.add('error-label');
     
//    });

   
// });


// Local Storage ki valueee:-
// let pr=0;
// inputs.forEach((e)=>{
//   if(goallist[e.id].data)
//   {
//    e.value=goallist[e.id].data
// }
// if(goallist[e.id].iscomplete){
//    pr+=1;
//    localStorage.setItem('progressbar',pr);
//    progressmarker.style.width=`${pr*33}%`;
//    progressmarker.innerText=`${pr}/3 completed`
   

//    e.parentElement.classList.add('completed');
// }

//       e.addEventListener('input',()=>{  
//          if(goallist[e.id].iscomplete){
//             console.log(e.id)
//             goallist[e.id].data=goallist[e.id].data;
//             e.value=goallist[e.id].data;
//             return;  //yaha pr return ki vajha se hua kaam
//          }
//       goallist[e.id]={data:e.value,iscomplete:false};   
//       localStorage.setItem('goallist',JSON.stringify(goallist))
//    })
// })




