import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import RepositoryList from '../../components/RepositoryList';

describe('RepositoryList component', () => {
  it('should be able to add new repository', () => {
    const { getByText, getByTestId, getByLabelText } = render(<RepositoryList />);

    fireEvent.change(getByLabelText('Repository'), { target: { value: 'react-testing' } });
    fireEvent.submit(getByTestId('repo-form'));

    expect(getByTestId('repository-list')).toContainElement(getByText('react-testing'));
    expect(getByLabelText('Repository')).toHaveValue('');
  });
});
