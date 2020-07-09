
const PRODUTOS = '_PRODUTOS'; // "_PRODUTOS" é a key que será buscada pelo localstorage para salvar os itens posteriormente com o método "setItem"

export default class ProdutoService {

  salvar = (produto) => {

    let produtos = localStorage.getItem(PRODUTOS) // Foi usada a variável LET, pois o valor será modificado de STRING para ARRAY!

    if(!produtos) { //Caso o localstorage não encontre os produtos, ele irá retornar um array vazio, senão retornará uma STRING que deverá ser convertida em ARRAY com o método "JSON.parse".
      produtos = []
    } else {
      produtos = JSON.parse(produtos) //JSON.parse para converter a STRING em ARRAY!
    }

    produtos.push(produto);

    localStorage.setItem(PRODUTOS, JSON.stringify(produtos)) //JSON.stringify para converter o ARRAY em STRING!
  }
}