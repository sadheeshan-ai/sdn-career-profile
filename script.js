(function(){
  const btn=document.querySelector('.nav-toggle');
  const list=document.querySelector('.nav-list');
  if(btn && list){
    btn.addEventListener('click',()=>{
      const open=list.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    list.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      list.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    }));
  }
  const y=document.getElementById('year');
  if(y) y.textContent=new Date().getFullYear();
})();
