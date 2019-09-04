const { Router } = require("express");
const { descontos, adquirentes } = require("./mocks");

const routes = new Router();

routes.get("/mdr", (req, res) => {
  res.json(descontos);
});

routes.post("/transaction", (req, res) => {
  const { Valor, Adquirente, Bandeira, Tipo } = req.body;

  if (Valor == null || Adquirente == null || Bandeira == null || Tipo == null) {
    res.json({
      Mensagem:
        "Houve um problema no processamento da requisição. Por favor, envie todos os dados obrigatórios",
      DadosObrigatorios: [
        "Valor total da transação",
        "Código do adquirente",
        "Bandeira do cartão (Visa ou Master)",
        "Tipo do cartão (débito ou crédito)"
      ]
    });
  }

  if (isNaN(Valor) || Valor < 0) {
    res.json({ Mensagem: "Valor inválido para a transação" });
  }

  let valorLiquido = 0;

  adquirentes.map(adquirente => {
    if (adquirente.Codigo.toUpperCase() === Adquirente.toUpperCase()) {
      // Obter as taxas do adquirente encontrado
      const taxas = adquirente.Taxas;

      taxas.map(taxa => {
        if (
          taxa.Bandeira.toLowerCase() === Bandeira.toLowerCase() &&
          taxa.Tipo.toLowerCase() === Tipo.toLowerCase()
        ) {
          // Realizar o cálculo do valor líquido a ser recebido pelo lojista
          valorLiquido = Valor * [(100 - taxa.Desconto) / 100];
        }
      });
    }
  });

  res.json({ ValorLiquido: valorLiquido });
});

module.exports = routes;
