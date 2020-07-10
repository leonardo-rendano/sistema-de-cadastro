
const PRODUTOS = '_PRODUTOS'; // "_PRODUTOS" é a key que será buscada pelo localstorage para salvar os itens posteriormente com o método "setItem"

function ErroValidação(errors) {
  this.errors = errors;
}

export default class ProdutoService {


  validar = (produto) => {
    const errors = []

    if(!produto.nome) {
      errors.push('O campo Nome é obrigatório!')
    }

    if(!produto.sku) {
      errors.push('O campo SKU é obrigatório!')
    }

    if(!produto.descrição) {
      errors.push('O campo Descrição é obrigatório!')
    }

    if(!produto.preço || produto.preço <= 0) {
      errors.push('O campo Preço deve ser maior que zero(0)!')
    }

    if(!produto.fornecedor) {
      errors.push('O campo Fornecedor é obrigatório!')
    }

    if(errors.length > 0) {
      throw new ErroValidação(errors)
    }
  }


  salvar = (produto) => {
    this.validar(produto)

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