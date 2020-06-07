
function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    //*const stateInput = document.querySelector("input[name=state]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
        .then( res => res.json() )
        //*.then(()=>{return res.json})
        .then( states => {

            for( const state of states){
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
            /*ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`*/
        } )
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")


    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios?orderBy=nome`


    /* Limpando campo cidade na mudança de option estado */
    citySelect.innerHTML="<option value> Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
        .then(res => res.json())
        //*.then(()=>{return res.json})
        .then(cities => {
            for ( const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            citySelect.disabled = false
        })
}

    document.querySelector("select[name=uf]")
        .addEventListener("change", getCities)

//Itens de coleta
//Pegando todos li's

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click",handleSelectedItem)
}



 const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target

    //Adicionar ou remover uma classe com js
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    console.log('Item ID:', itemId)


    //Verificar se existem itens selecionados , se sim então pegá-los
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId //Explicitando retorno true ou false
        return itemFound
    })

    //Verificar se já estiver selecionado, então tirá-lo da seleção
    if (alreadySelected >= 0){
        //Tirar da seleção
        const filteredItems = selectedItems.filter( item =>{
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        })

        selectedItems = filteredItems
    }else {
        //Se não estiver selecionado, adicioná-lo a seleção
        selectedItems.push(itemId)
    }

    //Atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems
}

