import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import RepositoryList from '../../components/RepositoryList';
import { addNewRepository } from '../../store/modules/repositories/actions';

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

  it('should be able to add new repository', () => {
    const { getByTestId, getByText, getByLabelText } = render(<RepositoryList />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText('Repository'), { target: { value: 'react-testing' } });
    fireEvent.submit(getByTestId('repo-form'));

    expect(dispatch).toHaveBeenCalledWith(addNewRepository('react-testing'));
  });
});
