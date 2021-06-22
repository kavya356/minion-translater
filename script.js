// 'use strict';
// const data=async()=>{
//     const got=await fetch('https://jsonplaceholder.typicode.com/todos/1');

//     console.log(await got.json());

// };
// data();
// const url='https://randomuser.me/api/';
// const apiCall=async()=>{
//     const data=await fetch(url);
//     const obj= await data.json();
//     console.log(obj);
// }
// apiCall();
const input=document.getElementById('input');

const btnTranslate=document.getElementById('btn-translate');
const output=document.getElementById('output')
const url='https://api.funtranslations.com/translate/minion.json';

const TranslatedUrl=function(text){
    return `${url}?text=${text}`;
};
const translate=async function(text){
  const data=await fetch(TranslatedUrl(text));
  const result=await data.json();
output.innerText=result.contents.translated;
}
btnTranslate.addEventListener('click',() =>{
let userText=input.value;
translate(userText);

});