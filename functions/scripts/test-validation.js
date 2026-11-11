// Asserts da fronteira de confiança. Correr com: npm test
const assert = require("node:assert/strict");
const { validarLead, validarVeiculo } = require("../lib/validation");

function falha(fn, trecho) {
  assert.throws(fn, (err) => {
    assert.equal(err.code, "invalid-argument");
    assert.match(err.message, trecho);
    return true;
  });
}

falha(() => validarLead({ contacto: "910000000", marca: "Fiat" }), /nome/);
falha(
  () => validarLead({ nome: "a".repeat(100), contacto: "910000000", marca: "Fiat" }),
  /nome/
);

const lead = validarLead({
  nome: " Ana ",
  contacto: "910000000",
  marca: " Fiat ",
  ano: "",
  km: "10",
  preco: "",
  notas: "ok",
});
assert.deepEqual(lead, {
  nome: "Ana",
  contacto: "910000000",
  marca: "Fiat",
  ano: "",
  km: "10",
  preco: "",
  notas: "ok",
});

falha(() => validarVeiculo({}), /name/);
falha(() => validarVeiculo({ name: "Fiat", status: "novo" }), /status/);
falha(() => validarVeiculo({ name: "Fiat", year: "x".repeat(501) }), /year/);

const veiculo = validarVeiculo({
  name: " Fiat Ducato ",
  status: "brevemente",
  year: "",
  price: "€ 1",
  images: [" https://ex.test/a.jpg ", ""],
  features: [" aquecimento "],
  desconhecido: "ignorar",
});
assert.equal(veiculo.name, "Fiat Ducato");
assert.equal(veiculo.status, "brevemente");
assert.equal(veiculo.price, "€ 1");
assert.equal(veiculo.year, undefined);
assert.equal(veiculo.desconhecido, undefined);
assert.deepEqual(veiculo.images, ["https://ex.test/a.jpg"]);
assert.deepEqual(veiculo.features, ["aquecimento"]);

console.log("validação ok");
