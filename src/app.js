var arrayLista = []

var arrayTarefas = new Array();



//criacao de elementos
function criarItem() {
    
    
    var input = document.getElementById('item');
    var valor = input.value;
    var item = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    var label = document.createElement('span');
    var txt = document.createTextNode(input.value);

    var button = document.createElement('button');
    var x = document.createTextNode('x');
    
    button.appendChild(x);
    button.onclick = function() { excluirItem(this) };

    var ul = document.getElementById('listas')
    item.appendChild(checkbox);
    item.appendChild(document.createTextNode(input.value));
    
    ul.appendChild(item);
    item.appendChild(label);
    item.appendChild(button);

   var list = document.getElementById('listas');

   list.appendChild(item)

   input.value = '';
   
}

function carregarLista(){
    var storage = JSON.parse(localStorage.getItem('lista'));
    arrayLista = storage;
    for(var i=0; i<= arrayLista.length-1; i++){
       createElementHTML(arrayLista[i]);
    }
}



function exibirItem(){
    var storage = JSON.parse(localStorage.getItem('lista'));
    var idTarefa = arrayLista.length+1;
    var idList =document.getElementById('item').value;

    if (idList!=""){
        arrayLista.push(idTarefa, idList);
    }

    createElementHTML(idTarefa, idList, false)
}


function deletarItem(elemento) {
    var _local_storage = localStorage.getItem('item');
    var objeto = JSON.parse(_local_storage);
    arrayTarefas = objeto.item;

    var novo = arrayTarefas.filter(valor => valor !== elemento.id);

    objeto.item = novo;
    _local_storage = JSON.stringify(objeto);
    localStorage.setItem('item', _local_storage);

    elemento.parentElement.remove();

}
