import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addNewRepository } from '../../store/modules/repositories/actions';

// import { Container } from './styles';

const RepositoryList: React.FC = () => {
  const [newRepository, setNewRepository] = useState('');

  const dispatch = useDispatch();
  const repositories = useSelector((state) => state.repositories);

  function handleAddRepository() {
    dispatch(addNewRepository(newRepository));
    setNewRepository('');
  }

  return (
    <form data-testid="repo-form" onSubmit={handleAddRepository}>
      <ul data-testid="repository-list">
        {repositories.map((repository) => <li key={repository}>{repository}</li>)}
      </ul>

      <label htmlFor="repository">Repository</label>
      <input
        id="repository"
        value={newRepository}
        onChange={(e) => setNewRepository(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default RepositoryList;
