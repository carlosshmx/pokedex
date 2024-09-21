export function upperFirstLetter(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function shorterCardTitle(text){
    if(text.length > 10){
        let newText = text.substring(0,10);
        return newText + "...";
    }
    return text;
}