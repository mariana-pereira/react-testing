import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import RepositoryList from '../../components/RepositoryList';

describe('RepositoryList component', () => {
  it('should be able to add new repository', () => {
    const { getByText, getByTestId } = render(<RepositoryList />);

    fireEvent.click(getByText('Add'));

    expect(getByTestId('repository-list')).toContainElement(getByText('react-testing'));
  });
});
