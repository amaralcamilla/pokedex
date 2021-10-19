//Poderia colocar 'export' na frente da função

function handleGenerateBg(type) {
    switch (type) {
        case "Fire":
            return "#f08031";
        case "Grass":
            return "#49D0B0";
        case "Water":
            return "#6890f0";
        case "Normal":
            return "#a8a878";
        case "Bug":
            return "#a8b820";
        case "Poison":
            return "#a040a0";
        case "Electric":
            return "#f7d030";
        case "Steel":
            return "#b8b8d0";
        case "Flying":
            return "#a890f0";
        case "Ground":
            return "#e0c068";
        case "Rock":
            return "#b8a037";
        case "Ghost":
            return "#705898";
        case "Psychic":
            return "#ee5788";
        case "Ice":
            return "#7038f8";
        case "Dragon":
            return "#7038f8";
        case "Dark":
            return "#705848";
        case "Fairy":
            return "#ee99ac";
        default:
            return "#e6e6e6";
    }
}

export {
    handleGenerateBg
}
//Poderia ter outras funções dentro do arquivo. Se exportasse como default, não conseguiria exportar só a função.