export default (state = [], action) => {
  switch (action.type) {
    case 'WEBINAR_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}