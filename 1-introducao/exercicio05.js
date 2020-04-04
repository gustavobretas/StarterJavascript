var usuarios = [
  {
    nome: "Gustavo",
    habilidades: ["Javascript", "ReactJS", "Redux"],
  },
  {
    nome: "Ricardo",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
  },
];

for (usuario of usuarios) {
    console.log(`O %s possui as habilidades: %s`, usuario.nome, usuario.habilidades.toString());
}