var mat=new Array();
mat[0]=4;
mat[6]=1;
mat[9]=3;
mat[15]=2;
mat1=document.getElementById("mat[0][1]");
mat2=document.getElementById("mat[0][2]");
mat3=document.getElementById("mat[0][3]");
mat4=document.getElementById("mat[1][0]");
mat5=document.getElementById("mat[1][1]");
mat7=document.getElementById("mat[1][3]");

mat8=document.getElementById("mat[2][0]");
mat10=document.getElementById("mat[2][2]");
mat11=document.getElementById("mat[2][3]");

mat12=document.getElementById("mat[3][0]");
mat13=document.getElementById("mat[3][1]");
mat14=document.getElementById("mat[3][2]");

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
    mat[1]=mat1.value;
    mat[2]=mat2.value;
    mat[3]=mat3.value;
    
    mat[4]=mat4.value;
    mat[5]=mat5.value;
    mat[7]=mat7.value;

    mat[8]=mat8.value;
    mat[10]=mat10.value;
    mat[11]=mat11.value;

    mat[12]=mat12.value;
    mat[13]=mat13.value;
    mat[14]=mat14.value;
    for(i=0;i<16;i++){
        if(mat[i]==""){
            alert("Please complete the table.");
            cap=false;
            break;
        }
    }
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