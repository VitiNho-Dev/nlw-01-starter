

function populateUfs () {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
    
        for( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    })
}

populateUfs()


function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text


    const url= `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = false

    fetch(url)
    .then( res => res.json() )
    .then( cities => { 
        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false 
    })
}



document 
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities) 


    // Itens de coleta 
    // pegar todos os li's
    const itensToCollect = document.querySelectorAll(".itens-grid li")

    for (const item of itensToCollect) {
        item.addEventListener("click", handleSelectedItem)
    }

    const collectedItems = document.querySelector("input[name=items]")

    let selectedItems = []

    function handleSelectedItem(event) {
        const ItemLi = event.target

        // adicionar ou remover um classe com javascript
        ItemLi.classList.toggle("selected")

        const ItemId = ItemLi.dataset.id
        
       
        // verificar se existem itens selecionados, se sim
        // pegar os itens selecionados

        const alreadySelected = selectedItems.findIndex( item => {
            const itemFound = item == ItemId // isso será true ou false
            return itemFound
        })

        // se ja estiver selecionado, 
        if( alreadySelected >= 0 ) {
            //tirar da seleção
            const filteredItems = selectedItems.filter(item => {
                const itemIsDifferent = item != ItemId // false
                return itemIsDifferent
            })

            selectedItems = filteredItems
        } else { 
            // se não estiver selecionado
            // adicionar à seleção
            selectedItems.push(ItemId)
        }
        
        // atualizar o campo escondido com os itens selecionados
        collectedItems.value = selectedItems
        
    }