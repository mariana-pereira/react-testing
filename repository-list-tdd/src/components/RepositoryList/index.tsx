import React, { useState } from 'react';

// import { Container } from './styles';

const RepositoryList: React.FC = () => {
  const [repositories, setRepositories] = useState<string[]>([]);

  function handleAddRepository() {
    setRepositories([...repositories, 'react-testing']);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((repository) => <li key={repository}>{repository}</li>)}
      </ul>
      <button type="button" onClick={handleAddRepository}>Add</button>
    </div>
  );
};

export default RepositoryList;
