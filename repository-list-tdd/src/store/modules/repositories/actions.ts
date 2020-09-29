export function addNewRepository(repository) {
  return {
    type: 'ADD_NEW_REPOSITORY',
    payload: { repository },
  };
}

export function getRepositoriesSuccess(data) {
  return {
    type: 'GET_REPOSITORIES_SUCCESS',
    payload: { data },
  };
}

export function getRepositoriesFailure() {
  return {
    type: 'GET_REPOSITORIES_FAILURE',
  };
}
