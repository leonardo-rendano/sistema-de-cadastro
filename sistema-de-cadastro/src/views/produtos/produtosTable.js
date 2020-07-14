import React from 'react';

export default (props) => (
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
      {props.produtos.map((produto, index) => {
        return (
          <tr key={index}>
            <th> {produto.nome} </th>
            <th> {produto.sku} </th>
            <th> {produto.preço} </th>
            <th> {produto.fornecedor} </th>
            <th>
              <button onClick={ () => props.editarAction(produto.sku) } 
                      className="btn btn-primary"> Editar </button>
              <button onClick={ () => props.deletarAction(produto.sku) } 
                      className="btn btn-danger ml-4"> Remover </button>
            </th>
          </tr>
        )
      })
      }
    </tbody>
  </table>
)