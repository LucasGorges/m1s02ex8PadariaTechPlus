while (true) {
  alert('Lojas Tabajara');
  let total = 0;
  let produto = 1;
  while (true) {
    let preco = parseFloat(prompt(`Produto ${produto}: R$ `));
    if (preco === 0) {
      break;
    }
    total += preco;
    produto++;
  }
  alert(`Total: R$ ${total.toFixed(2)}`);
  let dinheiro = parseFloat(prompt('Dinheiro: R$ '));
  let troco = dinheiro - total;
  alert(`Troco: R$ ${troco.toFixed(2)}`);
  alert();
}