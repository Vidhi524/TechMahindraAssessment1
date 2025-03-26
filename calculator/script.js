const input = document.getElementById('number-input');
function handleClickButton(el){
    const exp = `${input.value}${el.innerText}`;
    input.value=exp;
}
function res(){
input.value=eval(input.value);
}
function clean(){
    input.value='';
}