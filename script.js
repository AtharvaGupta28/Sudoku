var mat=new Array();
mat[0]=4;
mat[6]=1;
mat[9]=3;
mat[15]=2;
var button=document.getElementById('check');
var result=document.querySelector('.result h2');


function start(){
    // result=document.querySelector('.result h2');
    // button=document.getElementById('check');
    result.style.display="none";
    button.style.display="inline-block";
    button.textContent="Check";
    button.addEventListener("click",process);
    
}
function process(event){
    //button=document.getElementById('check');
    if(document.getElementById("mat[0][1]").value == ""){
        alert("empty");
    }
    mat[1]=document.getElementById("mat[0][1]").value;
    mat[2]=document.getElementById("mat[0][2]").value;
    mat[3]=document.getElementById("mat[0][3]").value;
    
    mat[4]=document.getElementById("mat[1][0]").value;
    mat[5]=document.getElementById("mat[1][1]").value;
    mat[7]=document.getElementById("mat[1][3]").value;

    mat[8]=document.getElementById("mat[2][0]").value;
    mat[10]=document.getElementById("mat[2][2]").value;
    mat[11]=document.getElementById("mat[2][3]").value;

    mat[12]=document.getElementById("mat[3][0]").value;
    mat[13]=document.getElementById("mat[3][1]").value;
    mat[14]=document.getElementById("mat[3][2]").value;
    //result=document.querySelector('.result h2');
    result.style.display="inline-block";

    let check=true;
    let answers=[4,1,2,3,3,2,1,4,2,3,4,1,1,4,3,2];
    for(i=0;i<16;i++){
        if(answers[i]!=mat[i]){
            check=false;
            break;
        }
    }
    if(check){
        result.textContent="You have Won!!";
    }
    else{
        result.textContent="Try Again :((";
    }
    //console.log("I am here");
    button.textContent="Play Again";
    button.removeEventListener("click",process);
    button.addEventListener("click",start);
    document.getElementById("mat[0][1]").value="";
    document.getElementById("mat[0][2]").value="";
    document.getElementById("mat[0][3]").value="";

    document.getElementById("mat[1][0]").value="";
    document.getElementById("mat[1][1]").value="";
    document.getElementById("mat[1][3]").value="";

    document.getElementById("mat[2][0]").value="";
    document.getElementById("mat[2][2]").value="";
    document.getElementById("mat[2][3]").value="";

    document.getElementById("mat[3][0]").value="";
    document.getElementById("mat[3][1]").value="";
    document.getElementById("mat[3][2]").value="";
    // button.addEventListener("click",start);
}
start();
