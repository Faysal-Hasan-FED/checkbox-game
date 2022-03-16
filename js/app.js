const victory = document.getElementById('victory');
victory.style.display = 'none';
// window.location.reload();
function validate(){
    const check10= document.getElementById('duck10');
if(check10.checked == 1){
    victory.style.display = 'block';
    setTimeout(()=>{
        window.location.reload();
    },3000)
}
}
