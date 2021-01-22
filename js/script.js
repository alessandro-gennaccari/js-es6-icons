/* Partendo da questo array di oggetti:
Aggiungere i colori ad ogni categoria: blue per gli animali, orange per i vegetali e viola per gli utenti. Prendete i colori da un altro array.
Stampare poi tutte le icone utilizzando il template literal.
Stampare quindi nella select tutti i tipi che avete in precedenza selezionato (animal, vegetable, icon).
Filtrare i risultati in base alla categoria (ricordate di svuotare il container).
Utilizzate forEach, map e filter e cercate di strutturare tutto con le funzioni. */

$(document).ready(function(){

    const icons = [
        {
          name: 'cat',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'crow',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dog',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dove',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dragon',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'horse',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'hippo',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'fish',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'carrot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'apple-alt',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'lemon',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'pepper-hot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'user-astronaut',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-graduate',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-ninja',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-secret',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        }
    ];
    
    // Creo un array per salvarmi automaticamente, tutte le possibiili proprietà type presenti nell'array icons
    const types = [];

    icons.forEach((element) => {
        if (!types.includes(element.type)){
            types.push(element.type);
        }
    });
    console.log(types);

    // In base al risultato ottenuto, mi creo un array con i colori che vorrò associare
    const color = ['blue','orange','purple'];

    const iconsAddColor = icons.map((element) => {
        // Controllo in quale indice si riconosce il type di ogni singolo oggetto, rispetto all'array dei vari tipi esistenti
        const indexIconsType = types.indexOf(element.type);
        // E mi faccio ritornare un nuovo array di oggetti (modifico quello iniziale)
        // Aggiungendo i miei colori in base all'indice, sapedo di aver gia creato l'array color con i dovuti accorgiementi
        return {
            ...element,
            color: color[indexIconsType]
        }
    });
    console.log(iconsAddColor);

    // Ciclo tutto l'array di oggetti,destrutturo ciò che andro poi a stampare col tamplate
    iconsAddColor.forEach((element) => {
        const {name,prefix,color,family} = element;
        $('.icons').append(
            `
            <div class="icon">
                <i class="${family} ${prefix}${name}" style="color:${color}"></i>
                <div class="icon-name">${name}</div>
            </div>
            `
        );
    });


});