INSERT INTO MEDICO VALUES 
('15477-9/SP','DRAUZIO VARELLA'),
('12354-0/SP','ROBERT REY'),
('02158-0/SP','JONAS SILVA'),
('32145-0/SP','MARIA CARVALHO'),
('54478-0/SP','DANIELA MERCURY');

INSERT INTO RECEITA (IMG_RECEITA, CRM) VALUES
('D:/Pharma/Receitas/receita01.jpg','15477-9/SP'),--1
('D:/Pharma/Receitas/receita02.jpg','02158-0/SP'),--2
('D:/Pharma/Receitas/receita03.jpg','32145-0/SP'),--3
('D:/Pharma/Receitas/receita04.jpg','12354-0/SP'),--4
('D:/Pharma/Receitas/receita05.jpg','15477-9/SP'),--5
('D:/Pharma/Receitas/receita06.jpg','54478-0/SP');--6

INSERT INTO PRODUTO (NOME, DESCRICAO, CATEGORIA, FORMA_FARMACEUTICA, FABRICANTE, PRINCIPIO_ATIVO) VALUES
('Desloratadina','Alivio da rinite alergica','Medicamento','Comprimido','Ache','Desloratadina'), --1
('Guaramix','Mix de guaraná, acaí e ginseng','Conveniência','','Guaramix',''), --2
('Anador','Analgesico e antitermico','Medicamento',	'Comprimido','Boehringer','Dipirona Monoidratada'), --3
('Benegrip','Alivio dos sintomas da gripe e resfriados','Medicamento','Comprimido','Brainfarma','Dipirona, Maleato de Clorfeniramina e cafeina'), --4
('Cimegripe','Alivio dos sintomas da gripe e resfriados','Medicamento','Comprimido','Cimed','Paracetamol, Maleato de Clorfeniramina, Cloridato de Fenilefrina'), --5
('Ambroxmel','Xarope expectorante','Medicamento','Xarope','Cimed','Cloridato de Ambroxol'), --6
('Bronquivita','Xarope contra a tosse','Medicamento','Xarope','Vitalab','Eucalipto, Assa Peixe, Agrião, Mastruço, Mel'), --7
('Ben Jerrys','Sorvete de Cookie','Conveniência','','Ben & Jerry’s Homemade Holdings',''); --8

INSERT INTO CARTEIRA (DADOS_CARTEIRA, SALDO) VALUES
('CREDITO','500.00'), --1
('DEBITO E CREDITO','124.15'), --2
('DEBITO','2345.00'), --3
('DEBITO E CREDITO','99999999.00'), --4
('CREDITO','123214.25'), --5
('CREDITO','93894.13'), --6
('CREDITO','89378943.12'), --7
('DEBITO E CREDITO','242321.32'), --8
('CREDITO','4382.53'), --9
('CREDITO','923.22'), --10
('DEBITO','100.15'), --11
('CREDITO','10.05');  --12

INSERT INTO CARTAO VALUES
('Jose Mariano',	'4898888852144562',	'007','2020-12-01', 1),
('Maria Gonçalves',	'1234567891234567',	'021','2021-10-30', 1),
('Carlos Santana',	'0201254785214587',	'032','2024-01-31', 2),
('Carlos Alberto',	'1547487454129775',	'055','2023-02-28', 3),
('Lucas dos Santos','1254874461244587',	'124','2019-10-01', 9),
('Mariana Farias',	'2211544886665978',	'548','2019-11-02', 10),
('Ana Maria Braga',	'3226444877799651',	'577','2020-10-25', 10),
('Caio do Céu',		'1221445102154875',	'328','2021-04-21', 11),
('Marcos Santana',	'3211548432299977',	'157','2023-05-27', 12),
('João da Silva',	'8897878451333215',	'145','2021-03-24', 12),
('Marcio Santana',	'9758421312310545',	'214','2021-05-05', 9),
('Marcelo Ferreira','1545847451215648',	'332','2020-01-25', 3),
('Luiz Júnior',		'2455645612310121',	'124','2019-08-12', 2),
('André Gomes',		'3231554544555551',	'147','2023-10-12', 4),
('André Gomes',		'3211544878784512',	'014','2019-08-20', 4);

INSERT INTO ENDERECO (rua, numero, cep, cidade, estado, bairro, complemento) VALUES
('RUA DAS FLORES','201','49012124','ARACAJU','SE','ATALAIA','CONDOMINIO BOM VIVER, BLOCO A, APTO 301'), --1
('RUA AZUL','105 A','49012054','ARACAJU','SE','LUZIA',''), --2
('RUA AZUL','105 B','49089644','ARACAJU','SE','LUZIA',''), --3
('RUA ACRE','251','49001587','ARACAJU','SE','INACIO BARBOSA',''), --4
('RUA ZUMBI DOS PALMARES','102','49001474','ARACAJU','SE','SANTOS DUMONT',''), --5
('RUA AMANHECER','1025','49854724','ARACAJU','SE','DEZOITO DO FORTE',''), --6
('RUA 39','206','49025424','ARACAJU','SE','COROA DO MEIO','CONDOMINIO LUAR DA NOITE, BLOCO C, APTO 001'), --7
('RUA B','288','49012354','NOSSA SENHORA DO SOCORRO','SE','MARCOS FREIRE I',''), --8
('RUA DAS PEDRAS','1320','49011254','ARACAJU','SE','SIQUEIRA CAMPOS',''), --9
('RUA DAS GRAÇAS','1440','48897124','NOSSA SENHORA DO SOCORRO','SE','MARCOS FREIRE III',''), --10
('RUA DOS ANJOS','910','49014574','ARACAJU','SE','SUISSA',''), --11
('RUA A','12','49015874','ARACAJU','SE','SIQUEIRA CAMPOS',''), --12 
('RUA DA FRENTE','154','49013524','ARACAJU','SE','CENTRO',''), --13
('RUA SERGIPE','1258','49001124','ARACAJU','SE','CENTRO',''), --14
('RUA RIO GRANDE DO SUL','12487','49011424','ARACAJU','SE','CENTRO',''), --15
('RUA BAHIA','120','49012544','BARRA DOS COQUEIROS','SE','CENTRO',''); --16

INSERT INTO FARMACIA (CNPJ, NOME, ID_CARTEIRA, ID_ENDERECO)VALUES
('21457801245784','Farmácia Pague Menos','5','4'),
('31246597887542','Farmácia Souza','6','8'),
('04242472044242','Drogasil','7','11'),
('23430746119734','Drogasil','8','12');

INSERT INTO USUARIO (LOGIN, SENHA, NOME, DATA_NASC, EMAIL, ID_CARTEIRA) VALUES
('JOAO','JOAO123','JOAO FREITAS','1978-05-21','JOAOFREITAS@GMAIL.COM',NULL), --1
('FERNANDO','FERNANDO123','FERNANDO GOMES','1985-12-02','FERNANDOGOMES@GMAIL.COM',NULL), --2
('MARCOSFER','MARCOS123','MARCOS FERNANDO','1990-10-02','MARCOSFERNANDO@GMAIL.COM',NULL), --3
('JOSE','JOSE123','JOSE MARIANO','1980-12-01','JOSEMARIANO@GMAIL.COM','1'), --4
('CARLOSSANT','CARLOS123','CARLOS SANTANA','1990-12-10','CARLOSSANTANA@GMAIL.COM','2'), --5
('CARLOSALB','CARLOS1234','CARLOS ALBERTO','1985-05-21','CARLOSALBERTO@GMAIL.COM','3'), --6
('LUCAS','LUCAS123','LUCAS DOS SANTOS','1991-03-09','LUCASDOSSANTOS@GMAIL.COM','9'), --7
('MARIANA','MARIANA123','MARIANA FARIAS','1995-04-21','MARIANAFARIAS@GMAIL.COM','10'), --8
('CAIO','CAIO123','CAIO DO CÉU','1992-01-31','CAIODOCEU@GMAIL.COM','11'), --9
('MARCOSSANT','MARCOS123','MARCOS SANTANA','1998-12-01','MARCOSSANTANA@GMAIL.COM','12'), --10
('ANDRE','ANDRE123','ANDRÉ GOMES','1990-10-21','ANDREGOMES@GMAIL.COM','4'); --11

INSERT INTO TELEFONE (NUM_TELEFONE, ID_USUARIO) VALUES
('79998745187', 1),
('79996587584', 1),
('79991547859', 6),
('79988254789', 2),
('79996544781', 3);

INSERT INTO CLIENTE VALUES
('78854875155','3'),
('54875126985','4'),
('35679754123','5'),
('02154842102','11');

INSERT INTO FARMACEUTICO VALUES
('98421-0/SE','1','21457801245784'),
('12484-0/SE','2','31246597887542'),
('54123-8/SE','5','04242472044242'),
('15874-8/SE','4','23430746119734');

INSERT INTO ENTREGADOR VALUES
('0258741258','6'),
('2047247641','7'),
('3225067642','8'),
('1245707427','9'),
('0215484121','10');

INSERT INTO VEICULO VALUES
('HZZ4578','PRETO','CG160 TITAN','HONDA','MOTO','0258741258'),
('HRZ3154', 'CINZA','CG 160 FAN','HONDA','MOTO','2047247641'),
('OEL2147', 'VERMELHO','FAZER 150','YAMAHA','MOTO','3225067642'),
('ABC1234', 'BRANCO','UNO','FIAT','CARRO','3225067642'),
('GLC2154', 'PRETO','CROSSER','YAMAHA','MOTO','1245707427'),
('GCC9815', 'VERDE','FAZER 150','YAMAHA','MOTO','0215484121');

INSERT INTO PEDIDO (VALOR, ID_RECEITA, ID_ENDERECO, CNH_ENTREGADOR, CPF_CLIENTE, CNPJ_FARMACIA, DATA_PEDIDO) VALUES
('125.00',NULL, 1, '0258741258','78854875155','21457801245784','2019-08-24'), --1
('102.00',NULL, 2, '2047247641','35679754123','04242472044242','2019-08-24'), --2
('85.47','1', 3, '2047247641','54875126985','21457801245784','2019-08-29'), --3
('35.10','2', 5, '0258741258','02154842102','04242472044242','2019-07-17'), --4
('15.25','3', 6, '3225067642','78854875155','23430746119734','2019-08-15'), --5
('505.05','4', 7, '0258741258','54875126985','21457801245784','2019-07-20'), --6
('47.55','5', 9, '0215484121','35679754123','31246597887542','2019-08-23'), --7
('68.99','6', 15, '1245707427','78854875155','21457801245784','2019-08-21'); --8

INSERT INTO ESTOQUE VALUES
('21457801245784','1','16.50','15'),
('21457801245784','2','2.50','21'),
('21457801245784','3','14.90','23'),
('21457801245784','4','5.90','10'),
('21457801245784','5','7.90','11'),
('21457801245784','6','10.90','21'),
('21457801245784','7','13.90','17'),
('21457801245784','8','27.90','8'),
('31246597887542','1','17.90','16'),
('31246597887542','2','2.25','23'),
('31246597887542','3','13.97','29'),
('31246597887542','4','6.15','30'),
('31246597887542','5','7.99','15'),
('31246597887542','6','10.97','32'),
('31246597887542','7','13.99','10'),
('31246597887542','8','29.90','18'),
('04242472044242','2','2.75','21'),
('04242472044242','3','15.15','32'),
('04242472044242','4','6.10','10'),
('04242472044242','5','8.20','26'),
('04242472044242','6','9.90','21'),
('04242472044242','7','12.90','27'),
('04242472044242','8','15.90','0'),
('23430746119734','1','17.50','12'),
('23430746119734','2','3.00','15'),
('23430746119734','3','13.90','48'),
('23430746119734','4','6.90','16'),
('23430746119734','6','11.90','34'),
('23430746119734','7','14.90','21'),
('23430746119734','8','26.90','15');

INSERT INTO ITENS_PEDIDO VALUES
(1,'Desloratadina','16.50','6'),
(1,'Guaramix','2.50','10'),
(2,'Benegrip','6.15','5'),
(2,'Cimegripe','7.99','12'),
(2,'Bronquivita','13.99','7'),
(3,'Anador','13.97','8'),
(3,'Ambroxmel','10.97','6'),
(4,'Anador','14.90','5'),
(4,'Ben Jerrys','27.90','6'),
(5,'Bronquivita','13.90','7'),
(5,'Ben Jerrys','27.90','2'),
(6,'Anador','15.15','8'),
(7,'Ben Jerrys','15.90','5'),
(8,'Desloratadina','17.50','1'),
(8,'Guaramix','3.00','2'),
(8,'Anador','13.90','1');