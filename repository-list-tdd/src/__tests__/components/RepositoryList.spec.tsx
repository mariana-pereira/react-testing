import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import RepositoryList from '../../components/RepositoryList';

describe('RepositoryList component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should be able to add new repository', () => {
    const { getByText, getByTestId, getByLabelText } = render(<RepositoryList />);

    fireEvent.change(getByLabelText('Repository'), { target: { value: 'react-testing' } });
    fireEvent.submit(getByTestId('repo-form'));

    expect(getByTestId('repository-list')).toContainElement(getByText('react-testing'));
    expect(getByLabelText('Repository')).toHaveValue('');
  });

  it('should store repositories in storage', () => {
    let { getByTestId, getByLabelText, getByText } = render(<RepositoryList />);

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    fireEvent.change(getByLabelText('Repository'), { target: { value: 'react-testing' } });
    fireEvent.submit(getByTestId('repo-form'));

    cleanup();

    ({ getByTestId, getByLabelText, getByText } = render(<RepositoryList />));

    expect(setItemSpy).toHaveBeenCalledWith('@RepositoryList:repos', JSON.stringify(['react-testing']));
    expect(getByTestId('repository-list')).toContainElement(getByText('react-testing'));
  });
});
