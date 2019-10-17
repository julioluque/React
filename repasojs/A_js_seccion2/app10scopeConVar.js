// 10 Scope con var
var musica = 'Rock';

if (musica){
   musica = 'Grunge';
   console.log('Dentro del if: ' + musica)
}

console.log('Fuera del if: ' + musica)

// Scope con let
var musica = 'Rock';

if (musica){
   let musica = 'Grunge';
   console.log('Dentro del if: ' + musica)
}

console.log('Fuera del if: ' + musica)