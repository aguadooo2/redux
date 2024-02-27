const initialState = {
    movies: [],
    favorites: {},
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      // Define tus casos de acción aquí
      default:
        return state;
    }
  };
  
  export default movieReducer;
  