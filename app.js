let owner= document.getElementById("owner");
let car= document.getElementById("car");
let licenceplate = document.getElementById("licenceplate");
let entry = document.getElementById("entry");
let exit = document.getElementById("exit");

showtask();
//adding part
addtaskbtn.addEventListener("click", function(){
    ownerval = owner.value;
    carval= car.value;
    licenceplateval= licenceplate.value;
    entryval= entry.value;
    exitval= exit.value;
    if(ownerval.trim()!=0 && carval.trim()!=0 && licenceplateval.trim()!=0 && entryval.trim()!=0 && exitval.trim()!=0){
        let a = localStorage.getItem("b");
        let c = localStorage.getItem("d");
        let e = localStorage.getItem("f");
        let g =localStorage.getItem("h");
        let i = localStorage.getItem("j");
        if(a == null){
            taskObj = [];
             taskObj2 = [];
             taskObj3 =[];
             taskObj4=[];
             taskObj5=[];
        }
        else{
            taskObj = JSON.parse(a);
            taskObj2 = JSON.parse(c);
            taskObj3 =JSON.parse(e);
            taskObj4 = JSON.parse(g);
            taskObj5 = JSON.parse(i);
        }
        taskObj.push(ownerval);
        taskObj2.push(carval);
        taskObj3.push(licenceplateval);
        taskObj4.push(entryval);
        taskObj5.push(exitval);
        localStorage.setItem("b", JSON.stringify(taskObj));
        localStorage.setItem("d", JSON.stringify(taskObj2));
        localStorage.setItem("f", JSON.stringify(taskObj3));
        localStorage.setItem("h", JSON.stringify(taskObj4));
        localStorage.setItem("j", JSON.stringify(taskObj5));
        alert("Succefully Added");
        ownerval.value = '';
        carval.value = '';
        licenceplateval.value = '';
        entryval.value = '';
        exitval.value = '';
    }
    showtask();  
})

function searchplate(){
   let searchval= document.getElementById("search").value;
  

   let e = localStorage.getItem("f");
   let information = document.getElementById("information");
let resultset = document.getElementById("resultset");
    let c=1;
   let taskObj3 =JSON.parse(e);
    taskObj3.forEach((item, index) => {
        if(searchval == item){
            c=c+1;
            document.getElementById("search").value='';
            display(index);
        }
    });
    if(c == 1 && searchval!=''){
        information.innerHTML='';
       resultset.innerHTML='<p><b>No Result found</b><p>';
       document.getElementById("search").value='';
    }
    if(c == 1 && searchval==''){
        showtask();
    }

}

function display(index){

    let a = localStorage.getItem("b");
    let c = localStorage.getItem("d");
    let e = localStorage.getItem("f");
    let g =localStorage.getItem("h");
    let i = localStorage.getItem("j");
    if(a == null){
        taskObj = [];
         taskObj2 = [];
         taskObj3 =[];
         taskObj4=[];
         taskObj5=[];
    }
    else{
        taskObj = JSON.parse(a);
        taskObj2 = JSON.parse(c);
        taskObj3 =JSON.parse(e);
        taskObj4 = JSON.parse(g);
        taskObj5 = JSON.parse(i);
    }
    let html ='';
    let information = document.getElementById("information");
    let resultset = document.getElementById("resultset");

        html += `<tr>
                    <th>${taskObj[index]}</th>
                    <th>${taskObj2[index]}</th>
                    <th>${taskObj3[index]}</th>
                    <th>${taskObj4[index]}</th>
                    <th>${taskObj5[index]}</th>
                    <th><button id="a" type="submit" border="none" onclick="deletion(${index})"><svg xmlns="http://www.w3.org/2000/svg" color="red" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                  </svg></button></th>
                </tr>`;
    information.innerHTML = html;
    resultset.innerHTML = '';
    
}

//deletion part
function deletion(index){
    var r=confirm("Are you sure you want to delete this from Parking Lot?");
    if(r == true){
        let a = localStorage.getItem("b");
        let c = localStorage.getItem("d");
        let e = localStorage.getItem("f");
        let g =localStorage.getItem("h");
        let i = localStorage.getItem("j");
       let  taskObj = JSON.parse(a);
      let  taskObj2 = JSON.parse(c);
      let  taskObj3 =JSON.parse(e);
       let taskObj4 = JSON.parse(g);
     let   taskObj5 = JSON.parse(i);
        taskObj.splice(index, 1);
        taskObj2.splice(index,1);
        taskObj3.splice(index,1);
        taskObj4.splice(index,1);        
        taskObj5.splice(index,1);
        localStorage.setItem("b", JSON.stringify(taskObj));
        localStorage.setItem("d", JSON.stringify(taskObj2));
        localStorage.setItem("f", JSON.stringify(taskObj3));
        localStorage.setItem("h", JSON.stringify(taskObj4));
        localStorage.setItem("j", JSON.stringify(taskObj5));
        let information = document.getElementById("information");
        let resultset = document.getElementById("resultset");
        resultset.innerHTML='';
        showtask();
    }
}

function showtask(){


        let a = localStorage.getItem("b");
        let c = localStorage.getItem("d");
        let e = localStorage.getItem("f");
        let g =localStorage.getItem("h");
        let i = localStorage.getItem("j");
        if(a == null){
            taskObj = [];
             taskObj2 = [];
             taskObj3 =[];
             taskObj4=[];
             taskObj5=[];
        }
        else{
            taskObj = JSON.parse(a);
            taskObj2 = JSON.parse(c);
            taskObj3 =JSON.parse(e);
            taskObj4 = JSON.parse(g);
            taskObj5 = JSON.parse(i);
        }
    let html = '';
    let information = document.getElementById("information");
    let resultset = document.getElementById("resultset");

    taskObj.forEach((item, index) => {html += `<tr>
    <th>${item}</th>
    <th>${taskObj2[index]}</th>
    <th>${taskObj3[index]}</th>
    <th>${taskObj4[index]}</th>
    <th>${taskObj5[index]}</th>
    <th><button id="a" type="submit" border="none" onclick="deletion(${index})"><svg xmlns="http://www.w3.org/2000/svg" color="red" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
  </svg></button></th>
</tr>`;
    });
    information.innerHTML = html;
    resultset.innerHTML='';
}