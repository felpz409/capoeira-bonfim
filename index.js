
const toggle=document.querySelector('.menu-toggle'),menu=document.querySelector('#menu-principal');
toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
const lightbox=document.querySelector('#lightbox'),large=lightbox.querySelector('img'),caption=lightbox.querySelector('p');
let previousFocus=null;
document.querySelectorAll('.gallery img,.moment img,.photo-card img').forEach(img=>{
 img.tabIndex=0;img.setAttribute('role','button');img.setAttribute('aria-label','Ampliar foto: '+img.alt);
 const open=()=>{previousFocus=document.activeElement;large.src=img.src;large.alt=img.alt;caption.textContent=img.alt;lightbox.classList.add('open');lightbox.querySelector('button').focus();};
 img.addEventListener('click',open);img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
});
function closeLightbox(){lightbox.classList.remove('open');large.removeAttribute('src');previousFocus?.focus();}
lightbox.querySelector('button').addEventListener('click',closeLightbox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&lightbox.classList.contains('open'))closeLightbox();});
