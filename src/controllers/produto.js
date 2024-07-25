function mostrarTela(req, res) {
  return res.render('produto');
}

function adicionarProduto(req, res) {
  res.redirect('/produto');
  console.log("Loading...");
  // console.log(req);
}

module.exports = { mostrarTela, adicionarProduto }