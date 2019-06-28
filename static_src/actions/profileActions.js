import { normalize } from 'normalizr';
import { CALL_API, getJSON } from 'redux-api-middleware';
import { profile } from '../utils/schemas';


export const START_PROFILE_LOADING = '@@profile/START_PROFILE_LOADING';
export const SUCCESS_PROFILE_LOADING = '@@profile/SUCCESS_PROFILE_LOADING';
export const ERROR_PROFILE_LOADING = '@@profile/ERROR_PROFILE_LOADING';

export const loadProfile = () => ({
  [CALL_API]: {
    credentials: 'include',
    endpoint: '/profile.json',
    method: 'GET',
    types: [
      START_PROFILE_LOADING,
      {
        type: SUCCESS_PROFILE_LOADING,
        payload: (action, state, res) => getJSON(res).then(
          json => normalize(json, [profile]),
        ),
      },
      ERROR_PROFILE_LOADING,
    ],
  },
});
