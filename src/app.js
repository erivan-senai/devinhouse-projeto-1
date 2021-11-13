var arrayLista = []

function criarItem() {

    var item = document.createElement('li');

    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    var label = document.createElement('span');
    var txt = document.createTextNode('item1');
    label.appendChild(txt);

    var botao = document.createElement('button');
    var x = document.createTextNode('x');
    botao.appendChild(x);

    item.appendChild(checkbox);
    item.appendChild(label);
    item.appendChild(botao);
    


   var list = document.getElementById('listas');

   list.appendChild(item)
   
}

function carregarLista(){
    var storage = JSON.parse(localStorage.getItem('lista'));
    arrayLista = storage;
    for(var i=0; i<= arrayLista.length-1; i++){
        criarItem();
    }
}





