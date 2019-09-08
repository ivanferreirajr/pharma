CREATE SCHEMA pharma;

SET search_path to pharma;


CREATE TABLE IF NOT EXISTS Medico (
	crm VARCHAR(13) NOT NULL,
	nome VARCHAR(100) NOT NULL,
  
	PRIMARY KEY (crm)
);



CREATE TABLE IF NOT EXISTS Receita (
	id_receita SERIAL,
	img_receita VARCHAR(255) NOT NULL,
	crm VARCHAR(13) NOT NULL,
  
	PRIMARY KEY (id_receita),
  
	CONSTRAINT fk_crm
		FOREIGN KEY (crm)
		REFERENCES Medico (crm)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
);


  
	
CREATE TABLE IF NOT EXISTS Produto (
	id_produto SERIAL,
	nome VARCHAR(100) NOT NULL,
	img_produto VARCHAR(255) NULL,
	descricao VARCHAR(100) NULL,
	categoria VARCHAR(100) NULL,
	forma_farmaceutica VARCHAR(100) NULL,
	fabricante VARCHAR(100) NOT NULL,
	principio_ativo VARCHAR(100) NULL,
  
	PRIMARY KEY (id_produto)
);



CREATE TABLE IF NOT EXISTS Carteira (
	id_carteira SERIAL,
	dados_carteira VARCHAR(45),
	saldo FLOAT NOT NULL,
  
	PRIMARY KEY (id_carteira)
);

  
	
CREATE TABLE IF NOT EXISTS Cartao(
	nome_titular VARCHAR(100) NOT NULL,
	numero_cartao VARCHAR(16) NOT NULL,
	ccv VARCHAR(3) NOT NULL,
	data_vencimento DATE NOT NULL,
	id_carteira INT NOT NULL,
  
	PRIMARY KEY (numero_cartao),
  
	CONSTRAINT fk_id_carteira
		FOREIGN KEY(id_carteira)
		REFERENCES Carteira(id_carteira)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);
  
  
	
CREATE TABLE IF NOT EXISTS Endereco (
    id_endereco SERIAL,
    rua VARCHAR(100) NOT NULL,
    numero VARCHAR(20) NOT NULL,
    CEP VARCHAR(10) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
	  estado CHAR(2) NOT NULL,
	  bairro VARCHAR(50) NOT NULL,
    complemento VARCHAR(50) NULL,  
	  
	PRIMARY KEY (id_endereco)

);
  


CREATE TABLE IF NOT EXISTS Farmacia(
	cnpj VARCHAR(20) NOT NULL,
	nome VARCHAR(100) NOT NULL,
	img_farmacia VARCHAR(255) NULL,
	id_carteira INT NULL,
	id_endereco INT NOT NULL,
	
	PRIMARY KEY (cnpj),
	
	CONSTRAINT fk_id_carteira
		FOREIGN KEY (id_carteira)
		REFERENCES Carteira(id_carteira)
		ON DELETE SET NULL
		ON UPDATE CASCADE,
	
	CONSTRAINT fk_id_endereco
		FOREIGN KEY (id_endereco)
		REFERENCES Endereco(id_endereco)
		ON DELETE NO ACTION
		ON UPDATE CASCADE
);

 
CREATE TABLE IF NOT EXISTS Usuario (
	id_usuario SERIAL,
	email VARCHAR(100) NOT NULL UNIQUE,
	senha VARCHAR(100) NOT NULL,
	nome VARCHAR(255) NOT NULL,
	data_nasc DATE NOT NULL,
	id_carteira INT NOT NULL,
	tipo_cliente BOOLEAN,
	tipo_farmaceutico BOOLEAN,
	tipo_entregador BOOLEAN,
	
	
  
	PRIMARY KEY (id_usuario),
  
	CONSTRAINT fk_id_carteira
		FOREIGN KEY (id_carteira)
		REFERENCES Carteira(id_carteira)
		ON DELETE SET NULL
		ON UPDATE CASCADE
);
 
 
 
CREATE TABLE IF NOT EXISTS Telefone(
	id_telefone SERIAL,	
	num_telefone VARCHAR(20) NOT NULL,
	id_usuario INT NOT NULL,

	PRIMARY KEY (id_telefone),

  CONSTRAINT fk_id_usuario
      FOREIGN KEY (id_usuario)
      REFERENCES Usuario(id_usuario)
      ON DELETE CASCADE
      ON UPDATE CASCADE
);
 
 
 
CREATE TABLE IF NOT EXISTS Cliente(
  cpf VARCHAR(15) NOT NULL,
  id_usuario INT NOT NULL,
    
  PRIMARY KEY (cpf),
  
  CONSTRAINT fk_id_usuario
    FOREIGN KEY (id_usuario)
    REFERENCES Usuario (id_usuario)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
	
	
	
CREATE TABLE IF NOT EXISTS Farmaceutico (
	crf VARCHAR(15) NOT NULL,
	id_usuario INT NOT NULL,
	cnpj_farmacia VARCHAR(20) NULL,
  
	PRIMARY KEY (crf),
  
	CONSTRAINT fk_id_usuario
		FOREIGN KEY (id_usuario)
		REFERENCES Usuario (id_usuario)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
		
	CONSTRAINT fk_cnpj_farmacia
		FOREIGN KEY (cnpj_farmacia)
		REFERENCES Farmacia (cnpj)
		ON DELETE SET NULL
		ON UPDATE CASCADE		
);
	
	
	
CREATE TABLE IF NOT EXISTS Entregador(
	cnh VARCHAR(15) NOT NULL,
	id_usuario INT NOT NULL,
    
	PRIMARY KEY (cnh),
  
    CONSTRAINT fk_id_usuario
		FOREIGN KEY (id_usuario)
		REFERENCES Usuario (id_usuario)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);
	
	
	
CREATE TABLE IF NOT EXISTS Veiculo(
	placa VARCHAR(10) NOT NULL,
	cor VARCHAR(20) NOT NULL,
	nome VARCHAR(20) NOT NULL,
	marca VARCHAR(20) NOT NULL,
	tipo VARCHAR(20) NOT NULL,
	cnh_entregador VARCHAR(15) NOT NULL,
	
	PRIMARY KEY (placa),
  
	CONSTRAINT fk_cnh_entregador
		FOREIGN KEY (cnh_entregador)
		REFERENCES Entregador (cnh)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);


	
CREATE TABLE IF NOT EXISTS Pedido (
	id_pedido SERIAL,
	valor FLOAT NOT NULL,
	id_receita INT NULL,
	id_endereco INT NOT NULL,
	cnh_entregador VARCHAR(15) NOT NULL,
	cpf_cliente VARCHAR(15) NOT NULL,
	cnpj_farmacia VARCHAR(20) NOT NULL,
	data_pedido DATE NOT NULL,
  
	PRIMARY KEY (id_pedido),
	
	CONSTRAINT fk_id_endereco
		FOREIGN KEY (id_endereco)
		REFERENCES Endereco (id_endereco)
		ON DELETE NO ACTION
		ON UPDATE CASCADE,
	
	CONSTRAINT fk_id_receita
		FOREIGN KEY (id_receita)
		REFERENCES Receita (id_receita)
		ON DELETE SET NULL
		ON UPDATE CASCADE,
	
	CONSTRAINT fk_cnh_entregador
		FOREIGN KEY (cnh_entregador)
		REFERENCES Entregador(cnh)
		ON DELETE NO ACTION
		ON UPDATE CASCADE,
		
	CONSTRAINT fk_cpf_cliente
		FOREIGN KEY (cpf_cliente)
		REFERENCES Cliente(cpf)
		ON DELETE NO ACTION
		ON UPDATE CASCADE,
		
	CONSTRAINT fk_cnpj_farmacia
		FOREIGN KEY (cnpj_farmacia)
		REFERENCES Farmacia(cnpj)
		ON DELETE NO ACTION
		ON UPDATE CASCADE
);



CREATE TABLE IF NOT EXISTS Estoque (
	cnpj_farmacia VARCHAR(20) NOT NULL,
	id_produto INT NOT NULL,
	valor FLOAT NOT NULL,
	quantidade INT NOT NULL,	
	
	CONSTRAINT fk_cnpj_farmacia
		FOREIGN KEY (cnpj_farmacia)
		REFERENCES Farmacia(cnpj)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
	
	CONSTRAINT fk_id_produto
		FOREIGN KEY (id_produto)
		REFERENCES Produto(id_produto)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);


CREATE TABLE IF NOT EXISTS Itens_Pedido (
	id_pedido INT NOT NULL,
	nome_produto VARCHAR(100) NOT NULL,
	valor FLOAT NOT NULL,
	quantidade INT NOT NULL,
	
	CONSTRAINT fk_id_pedido
		FOREIGN KEY (id_pedido)
		REFERENCES Pedido(id_pedido)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);
