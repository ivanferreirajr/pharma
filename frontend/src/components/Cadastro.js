import React, { Component } from 'react';
import bgImg from '../images/tablets-3532308_1920.jpg';
// import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const divStyle = {
  backgroundImage: `url(${bgImg}) `
};


export default class Cadastro extends Component {

  state = {
    nome: '',
    telefone: '',
    email: '',
    senha: '',
    date: ''
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeDate = date => {
    this.setState({date});
  }

  // a variável já armazena os dados em um json (tem que ver como vai pegar os dados de data, que é outro json) e exibe no console do navegador, tudo ok, agora é só pegar esses dados e enviar para o back end, porém não fiz isso porque falta validar a senha, comparar se senha = confSenha, porém está tarde e nao vou fazer isso agora, muito obrigado

  // a tela login é basicamente copiar tudo que tem aqui e colar, já está tudo praticamente pronto

  // ainda nao consegui colocar o background full, dá pra usar alterando o heidth com pixel, porém vai ficar estranho em computadores com tela menores/maioires, nao achei nada a respeito

  onSubmit = e => {
    console.log(this.state.nome, this.state.senha, this.state.email, this.telefone)
    e.preventDefault();
  }

  render() {
    return (
    <div style={divStyle}>
      <div className="d-flex justify-content-center">
        <div className="d-flex align-items-center">
          <div className="w-35 h-25">
            <div className="card card-body">
              <div id="title"><h4>Cadastro</h4></div>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label className="control-label">Nome</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Digite o seu nome" 
                    name="nome"
                    required
                    onChange={this.onInputChange}
                    />
                </div>

                <div className="form-group">
                  <label className="control-label">Telefone</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Digite o seu telefone" 
                  name = "telefone"
                  required
                  onChange={this.onInputChange}
                  />         
                </div>

                <div className="form-group">
                  <label className="control-label">Email</label>
                  <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Digite o seu email mail" aria-describedby="emailHelp" 
                  name="email"
                  required
                  onChange={this.onInputChange}
                  />
                </div>

                <div className="form-group">
                  <label className="control-label">Senha</label>
                  <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Digite sua senha" 
                  name="senha"
                  required
                  onChange={this.onInputChange}
                  />
                </div>

                <div className="form-group">
                  <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Confirme sua senha" 
                  required
                  name="confSenha"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inputDate" className="control-label">Data de Nascimento</label>
                  <DatePicker 
                  className="form-control"
                  selected={this.state.date}
                  required
                  onChange={this.onChangeDate}
                  />
                </div>

                <div className="form-group">
                  <button type="submit"className="btn btn-primary">Cadastrar-se</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>    
    );
  }
}
