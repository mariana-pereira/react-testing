import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import RepositoryList from '../../components/RepositoryList';

jest.mock('react-redux');

describe('RepositoryList component', () => {
  it('should render repository list', () => {
    useSelector.mockImplementation((cb) => cb({
      repositories: ['react-testing', 'node-testing'],
    }));

    const { getByTestId, getByText } = render(<RepositoryList />);

    expect(getByTestId('repository-list')).toContainElement(getByText('react-testing'));
    expect(getByTestId('repository-list')).toContainElement(getByText('node-testing'));
  });
});
