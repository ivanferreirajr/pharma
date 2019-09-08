import React, { Component } from 'react';
import bgImg from '../images/tablets-3532308_1920.jpg'

const divStyle = {
  backgroundImage: `url(${bgImg}) `
};

class Cadastro extends Component {
  constructor() {
    super();
    this.state = {
      Email: '',
      Senha: '',
      RepSenha: '',
      Nome: '',
      DataNascimento: '',
    };
    this.onChange = (evento) => {
      const state = { ...this.state };
      const campo = evento.target.value;
      state[campo] = evento.target.value;
      this.setState(state);
    };
    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar() {

    // json = {nome:{this.state.Nome},senha:{this.state.Senha}};

    // createUsuario(json)
  }

  render() {
    return (
    <div style={divStyle}>
      <div className="d-flex justify-content-center">
        <div className="d-flex align-items-center">
          <div className="w-35 h-25">
            <div className="card card-body">
              <div id="title"><h4>Cadastro</h4></div>
              <form>
                <div className="form-group">
                  <label for="inputName" class="control-label">Nome</label>
                    <input type="text" class="form-control" id="inputName" placeholder="Digite o seu nome" required></input>
                </div>

                <div class="form-group">
                  <label for="inputFone" class="control-label">Telefone</label>
                  <input type="text" class="form-control" id="inputFone" placeholder="Digite o seu telefone" required></input>         
                </div>

                <div class="form-group">
                  <label for="inputEmail" class="control-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail" placeholder="Digite o seu email mail" aria-describedby="emailHelp" required></input>
                </div>

                <div class="form-group">
                  <label for="inputPassword" class="control-label">Senha</label>
                  <input type="password" class="form-control" id="inputPassword" placeholder="Digite sua senha" required></input>
                </div>

                <div class="form-group">
                  <input type="password" class="form-control" id="inputPassword1" placeholder="Confirme sua senha" required></input>
                </div>

                <div class="form-group">
                  <label for="inpudDate" class="control-label">Data de Nascimento</label>
                  <input type='date' class="form-control" id="inputDate" required ></input>
                </div>

                <div class="form-group">
                  <button type="submit" class="btn btn-primary">Cadastrar-se</button>
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

export default Cadastro;
