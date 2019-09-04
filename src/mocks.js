const descontos = [
  {
    Adquirente: "Adquirente A",
    Taxas: [
      {
        Bandeira: "Visa",
        Credito: 2.25,
        Debito: 2.0
      },
      {
        Bandeira: "Master",
        Credito: 2.35,
        Debito: 1.98
      }
    ]
  },
  {
    Adquirente: "Adquirente B",
    Taxas: [
      {
        Bandeira: "Visa",
        Credito: 2.5,
        Debito: 2.08
      },
      {
        Bandeira: "Master",
        Credito: 2.65,
        Debito: 1.75
      }
    ]
  },
  {
    Adquirente: "Adquirente C",
    Taxas: [
      {
        Bandeira: "Visa",
        Credito: 2.75,
        Debito: 2.16
      },
      {
        Bandeira: "Master",
        Credito: 3.1,
        Debito: 1.58
      }
    ]
  }
];

const adquirentes = [
  {
    Codigo: "A",
    Taxas: [
      {
        Bandeira: "Visa",
        Tipo: "credito",
        Desconto: 2.25
      },
      {
        Bandeira: "Visa",
        Tipo: "debito",
        Desconto: 2.0
      },
      {
        Bandeira: "Master",
        Tipo: "credito",
        Desconto: 2.35
      },
      {
        Bandeira: "Master",
        Tipo: "debito",
        Desconto: 1.98
      }
    ]
  },
  {
    Codigo: "B",
    Taxas: [
      {
        Bandeira: "Visa",
        Tipo: "credito",
        Desconto: 2.5
      },
      {
        Bandeira: "Visa",
        Tipo: "debito",
        Desconto: 2.08
      },
      {
        Bandeira: "Master",
        Tipo: "credito",
        Desconto: 2.65
      },
      {
        Bandeira: "Master",
        Tipo: "debito",
        Desconto: 1.75
      }
    ]
  },
  {
    Codigo: "C",
    Taxas: [
      {
        Bandeira: "Visa",
        Tipo: "credito",
        Desconto: 2.75
      },
      {
        Bandeira: "Visa",
        Tipo: "debito",
        Desconto: 2.16
      },
      {
        Bandeira: "Master",
        Tipo: "credito",
        Desconto: 3.1
      },
      {
        Bandeira: "Master",
        Tipo: "debito",
        Desconto: 1.58
      }
    ]
  }
];

module.exports = { descontos, adquirentes };
