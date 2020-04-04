function experiencia(anos) {
    if (anos <= 1) {
        return 'Iniciante'
    } else if (anos > 1 && anos <= 3) {
        return 'Intermediário'
    } else if (anos > 3 && anos <= 6.9) {
        return 'Avançado'
    } else if (anos >= 7) {
        return 'Jedi Master'
    } else {
        return 'Não contemplado.'
    }
}

var anosEstudo = 14;

console.log(experiencia(anosEstudo));
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
   