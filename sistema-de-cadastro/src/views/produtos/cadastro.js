import React from 'react';

import ProdutoService from '../../app/produtoService';

import Card from '../../components/Card';

import { withRouter } from 'react-router-dom';

const estadoInicial = {
  nome: '',
  sku: '',
  descrição: '',
  preço: 0,
  fornecedor: '',
  sucesso: false,
  errors: [],
  atualizando: false
}

class CadastroProdutos extends React.Component {

  state = estadoInicial;

  constructor() {
    super()
    this.service = new ProdutoService()
  }

  onChange = (event) => {
    const valor = event.target.value
    const nomeDoCampo = event.target.name
    this.setState({ [nomeDoCampo]: valor })
  }

  onSubmit = (event) => {
    event.preventDefault();

    const produto = {
      nome: this.state.nome,
      sku: this.state.sku,
      descrição: this.state.descrição,
      preço: this.state.preço,
      fornecedor: this.state.fornecedor
    }
    try {
      this.service.salvar(produto)
      this.limpaCampos()
      this.setState({ sucesso: true })
    } catch(erro) {
      const errors = erro.errors
      this.setState({errors : errors})
    }
    
  }

  limpaCampos = () => {
    this.setState(estadoInicial)
  }

  componentDidMount() {
    const sku = this.props.match.params.sku

    if(sku) {
      const resultado = this.service.obterProdutos().filter( produto => produto.sku === sku )

      if(resultado.length === 1) {
        const produtoEncontrado = resultado[0]
        this.setState({ ...produtoEncontrado, atualizando: true })
      }
    }
  }

  render() {
    return(
      <Card header={ this.state.atualizando ? 'Atualização de produtos' : 'Cadastro de produtos' }>

          <form id="frmProduto" onSubmit={this.onSubmit}>

            { this.state.sucesso && //renderização condicional do alerta de sucesso.
            
              <div class="alert alert-dismissible alert-success">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Sucesso!</strong> Cadastro efetuado com sucesso.
              </div>

            }

            { this.state.errors.length > 0 && 
                    
              this.state.errors.map( msg => {
                return (
                  <div class="alert alert-dismissible alert-danger">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Erro!</strong> {msg}
                  </div>
                )
              })
            }

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
                        disabled={this.state.atualizando}
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
                <button type="submit" className="btn btn-success"> { this.state.atualizando ? 'Atualizar' : 'Salvar' } </button>
              </div>

              <div className="col-md-1">
                <button onClick={this.limpaCampos} className="btn btn-primary"> Limpar </button>
              </div>
            </div>

          </form>

      </Card>
    );
  }
}

export default withRouter(CadastroProdutos)