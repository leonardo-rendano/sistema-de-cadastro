import React from 'react';

import ProdutoService from '../../app/produtoService';

const estadoInicial = {
  nome: '',
  sku: '',
  descrição: '',
  preço: 0,
  fornecedor: ''
}

export default class CadastroProdutos extends React.Component {

  state = estadoInicial;

  constructor() {
    super()
    this.service = new ProdutoService
  }

  onChange = (event) => {
    const valor = event.target.value
    const nomeDoCampo = event.target.name
    this.setState({ [nomeDoCampo]: valor })
  }

  onSubmit = (event) => {
    const produto = {
      nome: this.state.nome,
      sku: this.state.sku,
      descrição: this.state.descrição,
      preço: this.state.preço,
      fornecedor: this.state.fornecedor

    }
    this.service.salvar(produto)
    this.limpaCampos()
    console.log('Salvo com sucesso!')
  }

  limpaCampos = () => {
    this.setState(estadoInicial)
  }

  render() {
    return(
      <div className="card">
        <div className="card-header">
          Cadastro de Produtos
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label> Nome: * </label>
                <input type="text"
                       name="nome" 
                       onChange={this.onChange}
                       value={this.state.nome} 
                       className="form-control" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label> SKU: * </label>
                <input type="text" 
                       name="sku" 
                       onChange={this.onChange}
                       value={this.state.sku} 
                       className="form-control" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label> Descrição </label>
                <textarea name="descrição" 
                          onChange={this.onChange}
                          value={this.state.descrição} 
                          className="form-control" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label> Preço: * </label>
                <input type="text" 
                       name="preço" 
                       onChange={this.onChange}
                       value={this.state.preço} 
                       className="form-control" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label> Fornecedor: * </label>
                <input type="text" 
                       name="fornecedor" 
                       onChange={this.onChange}
                       value={this.state.fornecedor} 
                       className="form-control" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-1">
              <button onClick={this.onSubmit} className="btn btn-success"> Salvar </button>
            </div>

            <div className="col-md-1">
              <button onClick={this.limpaCampos} className="btn btn-primary"> Limpar </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}