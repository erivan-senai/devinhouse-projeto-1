let arrayTarefas = localStorage.getItem('lista') ? JSON.parse(localStorage.getItem('lista')):[]


function addItem(){
    var input = document.getElementById('item');
    var valor = input.value;
    var feito = false;
    criarItem(valor,feito);
    arrayTarefas.push({valor,feito});
    localStorage.setItem('lista', JSON.stringify(arrayTarefas));
    input.value = ''; 
}
//criacao de elementos
function criarItem(valor, feito) {
    var item = document.createElement('li');
    item.setAttribute('id', valor);
    var label = document.createElement('span');
    label.innerHTML = valor;

    feito && ( label.classList.add('feito'));
    var checkbox = document.createElement('input');
    checkbox.checked = feito;
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('click', (e) => { 
        if (e.target.checked){
            label.classList.add('feito')
            guardarFeito(item, true)
        }else{
            label.classList.remove('feito')
            guardarFeito(item, false)
        }
    });


    var button = document.createElement('button');
    button.innerHTML = 'x'
    button.addEventListener('click', () => {
       if(confirm("Tem certeza que quer apagar?")) {
            deletarItem(item)
       }
    })

    var ul = document.getElementById('listas')
    item.appendChild(checkbox);
    item.appendChild(label);
    item.appendChild(button);
    ul.appendChild(item);
}


function deletarItem(item) {
    
    arrayTarefas = arrayTarefas.filter(val => val.valor !== item.id);
    localStorage.setItem('lista', JSON.stringify(arrayTarefas));

    item.remove();
}

arrayTarefas.forEach(element => {
    console.log(element)
   
    criarItem(element.valor,element.feito);
});

function guardarFeito(item, feito){
    arrayTarefas = arrayTarefas.filter(val => {
        if (val.valor === item.id){
           val.feito = feito
        }
        return val
        });
    localStorage.setItem('lista', JSON.stringify(arrayTarefas));

}
