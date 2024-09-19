export const reducer = (state, action) =>{
    switch(action.type){
      case "UPLOAD_POKEDEX":
        return {...state, totalPokemons: action.payload}
      default:
          return state;
    }
  }