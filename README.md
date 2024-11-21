
# Desafio Outsera

API RESTful para analisar dados da categoria "Pior Filme" do Golden Raspberry Awards.

## Funcionalidades

- Lê um arquivo CSV e insere os dados em um banco SQLite em memória.
- Fornece um endpoint para buscar produtores com o maior e menor intervalo entre prêmios consecutivos.

## Como usar

1. Instale as dependências:
   ```
   npm install
   ```

2. Inicie a aplicação:
   ```
   node src/app.js
   ```

3. Acesse o endpoint em:
   ```
   GET http://localhost:3000/producers/intervals
   ```

## Exemplo de resposta

```
{
  "min": [
    {
      "producer": "Producer A",
      "interval": 1,
      "previousWin": 2000,
      "followingWin": 2001
    }
  ],
  "max": [
    {
      "producer": "Producer B",
      "interval": 10,
      "previousWin": 1990,
      "followingWin": 2000
    }
  ]
}
```

## Testes

1. Execute os testes:
   ```
   npm test
   ```

2. Os testes garantem que o endpoint retorna os dados corretos com base no CSV.
