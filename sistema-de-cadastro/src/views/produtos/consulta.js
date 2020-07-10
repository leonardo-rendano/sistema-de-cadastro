import React from 'react';

import ProdutoService from '../../app/produtoService';

import { withRouter } from 'react-router-dom'

class ConsultaProdutos extends React.Component {

  state = {
    produtos : []
  }

  constructor() {
    super()
    this.service = new ProdutoService();
  }

  componentDidMount() {
    const produtos = this.service.obterProdutos();
    this.setState({ produtos })
  }

  preparaEditar = (sku) => {
    this.props.history.push(`/cadastro-produtos/${sku}`)
    console.log('sku para editar: ' ,sku)
  }

  render() {
    return(
      <div className="card">
        <div className="card-header">
          Consulta de Produtos
        </div>

        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th> Nome </th>
                <th> SKU </th>
                <th> Preço </th>
                <th> Fornecedor </th>
              </tr>
            </thead>
            <tbody>
              {this.state.produtos.map((produto, index) => {
                return (
                  <tr key={index}>
                    <th> {produto.nome} </th>
                    <th> {produto.sku} </th>
                    <th> {produto.preço} </th>
                    <th> {produto.fornecedor} </th>
                    <th>
                      <button onClick={ () => this.preparaEditar(produto.sku)} className="btn btn-primary"> Editar </button>
                      <button className="btn btn-danger ml-4"> Remover </button>
                    </th>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
        </div>
        
      </div>
    );
  }
}

export default withRouter(ConsultaProdutos)