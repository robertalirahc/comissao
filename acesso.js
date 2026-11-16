"use strict";
const CONFIG={"salt": "bTyC/RIZs/tgunkc114yjg==", "iv": "4vYN62medKPaAoVv", "iterations": 600000};
const form=document.getElementById('loginForm'),input=document.getElementById('password'),message=document.getElementById('message'),enter=document.getElementById('enterButton'),toggle=document.getElementById('togglePassword');
const decode=value=>Uint8Array.from(atob(value),c=>c.charCodeAt(0));
toggle.onclick=()=>{const show=input.type==='password';input.type=show?'text':'password';toggle.textContent=show?'Ocultar':'Mostrar';toggle.setAttribute('aria-label',show?'Ocultar senha':'Mostrar senha');toggle.setAttribute('aria-pressed',String(show))};
form.onsubmit=async event=>{
 event.preventDefault();message.textContent='';
 if(!window.isSecureContext||!window.crypto?.subtle){message.textContent='Abra o endereço HTTPS publicado no GitHub Pages. O acesso não funciona abrindo o arquivo diretamente.';return}
 enter.disabled=true;message.textContent='Abrindo acervo…';
 try{
  const response=await fetch(new URL('acervo.enc',location.href),{cache:'no-store'});
  if(!response.ok)throw new Error('download');
  const encrypted=await response.arrayBuffer();
  const material=await crypto.subtle.importKey('raw',new TextEncoder().encode(input.value),'PBKDF2',false,['deriveKey']);
  const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt:decode(CONFIG.salt),iterations:CONFIG.iterations,hash:'SHA-256'},material,{name:'AES-GCM',length:256},false,['decrypt']);
  let decrypted;
  try{decrypted=await crypto.subtle.decrypt({name:'AES-GCM',iv:decode(CONFIG.iv)},key,encrypted)}catch(error){throw new Error('password')}
  const html=new TextDecoder().decode(decrypted);input.value='';document.open();document.write(html);document.close();
 }catch(error){message.textContent=error.message==='password'?'Senha incorreta. Confira e tente novamente.':'Não foi possível carregar o acervo. Confira a conexão e se todos os arquivos foram publicados.';enter.disabled=false;input.focus();input.select()}
};
