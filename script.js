const klikBtn = document.getElementById('klik');
const mainDiv = document.getElementById('main');

function newNode(el, inner='', parent = null){
    let newEl = document.createElement(el);
    let textNode = document.createTextNode(inner);
    newEl.appendChild(textNode);
    if(parent != null){
        parent.appendChild(newEl);
    }
    return newEl;
}

function klik(){
    klikBtn.hidden = true;
    mainDiv.style.display = 'flex';
    mainDiv.style.opacity = 1;
    
    let newMain = newNode('div', '', mainDiv);
    newMain.style.width = '10%';
    newNode('h1', 'JESIKA PUTRI', newMain);
    newNode('h3', '120140050', newMain);
    newNode('p', 'TUGAS 3 PEMWEB_RB', newMain);
}