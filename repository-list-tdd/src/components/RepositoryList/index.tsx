import React, { useState } from 'react';

// import { Container } from './styles';

const RepositoryList: React.FC = () => {
  const [repositories, setRepositories] = useState<string[]>([]);
  const [newRepository, setNewRepository] = useState('');

  function handleAddRepository() {
    setRepositories([...repositories, 'react-testing']);
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
