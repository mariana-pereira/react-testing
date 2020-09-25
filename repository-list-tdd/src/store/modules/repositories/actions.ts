export function addNewRepository(repository) {
  return {
    type: 'ADD_NEW_REPOSITORY',
    payload: { repository },
  };
}
