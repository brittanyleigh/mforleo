export const RegistrationSuccess = (user) => (dispatch, getState) => {
  dispatch({type: 'WEBINAR_SUCCESS', payload: user});
};