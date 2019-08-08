//This reducer holds the response from the API request
const apiReducer = (state = [], action) => {
    switch (action.type) {
      case 'DISPLAY_DATA':
      console.log('api_payload', action.payload)
        return action.payload;
      default:
        return state;
    }
  };


  export default apiReducer;