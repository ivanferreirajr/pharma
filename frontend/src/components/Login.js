import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex align-items-center">
        <div className="w-20 h-25">
        <div className="card card-body">
          <div id="title">Login</div>
          <form>
          <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail1"
            placeholder="Digite seu email"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Senha</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Digite sua senha"
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
