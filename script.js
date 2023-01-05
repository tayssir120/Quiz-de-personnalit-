let all = document.querySelectorAll('section div');
let liste1 = [];
let liste2 = [];
let liste3 = [];
for (const i of all){
    i.addEventListener('click',click);
    if(i.dataset.questionId === 'one'){
        liste1.push(i);
    }
    if(i.dataset.questionId === 'two'){
        liste2.push(i);
       
    }
    if(i.dataset.questionId === 'three'){
        liste3.push(i);
        
    }
}
for(const j of liste1){
    console.log(j.children[1].src);
}
function click (event){
    const all = event.currentTarget;
    all.classList.add('check');
    all.classList.remove('uncheck');
    all.children[1].src="images/checked.png";
    if(all.dataset.questionId === 'one'){
        for(const k of liste1){
            if (k != all){ 
                k.classList.add('uncheck');
                k.classList.remove('check');
                k.children[1].src="images/unchecked.png";           
             }
        }
        
    }
    if(all.dataset.questionId === 'two'){
        for(const h of liste2){
            if (h != all){
               h.classList.add('uncheck');
               h.classList.remove('check');
                h.children[1].src="images/unchecked.png";
            }
        }
    }
    if(all.dataset.questionId === 'three'){
        for(const g of liste3){
            if (g != all){
               g.classList.add('uncheck');
               g.classList.remove('check');
                g.children[1].src="images/unchecked.png";
            }
        }
    }  


if ((liste1.length > 0) && (liste2.length > 0) && (liste3.length > 0)) {
    for (let m of liste3) {
      for (let e of liste2) {
        for (let r of liste1) {
          if ((m.className === 'check') && (e.className === 'check') && (r.className === 'check')) {
            for (let n in RESULTS_MAP) {
              if (r.dataset.choiceId == n) {
                console.log(RESULTS_MAP[n].title);
                console.log(RESULTS_MAP[n].contents);
                let p = RESULTS_MAP[n].title;
                let w = RESULTS_MAP[n].contents;
                const newTitle = document.createElement('h2');
                const newContent = document.createElement('p');
                newTitle.textContent = 'Vous êtes : ' + p;
                newContent.textContent = '' + w;
                let button = document.createElement("button");
                button.innerHTML = "Redémarrer le Quizz";
                button.addEventListener("click", function(){
                    let header = document.getElementById("header");
                    header.scrollIntoView(true);
                    window.location.reload(true);
                })
                const result = document.querySelector('.result');
                result.innerHTML = '';
                result.appendChild(newTitle);
                result.appendChild(newContent);
                result.appendChild(button);  

                let all = document.querySelectorAll('section div');
                for(const t of all){
                    t.removeEventListener('click', click);
                }   
            
                }
                
              }
              
            }
           
          }
        }
      }
    }
  }
 


// Vous ouvez accéder à RESULTS_MAP à partir de  "constants.js" dans ce fichier puisque
// "constants.js" est inclu avant  "script.js" dans index.html.





