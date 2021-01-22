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
    
    // Richiamo la funzione per creare l'array di type senza doppioni
    const types = createType(icons);

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

    // Richiamo la funzione dove ciclo tutto l'array per andare a stampare tutti gli oggetti
    const itemFrame = $('.icons');
    print(iconsAddColor,itemFrame);

    // Stampo le select in base ai Types esistenti
    const select = $('#type');

    types.forEach((element) => {
        select.append(
            `
            <option value="${element}">${element.toUpperCase()}</option>
            `
        );
    });

    // Ora mi salvo il valore della select ogni volta che la seleziono,
    // Poi filtro per tutto l'array solo gli oggetti con type == al selezionato
    // E stampo solo quelly che hanno lo stesso type

    select.change(function(){

        const selectedType = $(this).val();
        const iconFilterd = filterSelect(iconsAddColor,selectedType);
        print(iconFilterd,itemFrame);
    });

});

// Function
// funzione per creare un array per salvarmi automaticamente, tutte le possibiili proprietà type presenti nell'array icons
function createType(array){

    const types = [];
    array.forEach((element) => {
        if (!types.includes(element.type)){
            types.push(element.type);
        }
    });

    return types;
}

//Funzione che stampa tutti gli elemtni dell'array
function print(array,zone){
    
    zone.html('');

    array.forEach((element) => {
    const {name,prefix,color,family} = element;
    zone.append(
        `
        <div class="icon">
        <i class="${family} ${prefix}${name}" style="color:${color}"></i>
        <div class="icon-name">${name}</div>
        </div>
        `
        );
    });
}

// Funzione che filtra tutto in base al type selezionato
//Con condizione che se non filtra nulla restituisce l'intero array
function filterSelect(array,type){

    const iconFilter = array.filter((element) => {
        return element.type == type;
    });

    if (iconFilter.length > 0) {
        return iconFilter;
    }
    return array;
}

///P.S. Credo servisse molto più allenamento per affrontare quest esercio, davvero ostico, ma bello