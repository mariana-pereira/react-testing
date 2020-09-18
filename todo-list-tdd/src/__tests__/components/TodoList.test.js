import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import TodoList from '../../components/TodoList';

jest.mock('react-redux');

describe('TodoList component', () => {
  it('should render todo list', () => {
    useSelector.mockImplementation(cb => cb({
      tasks: ['make coffee', 'read emails']
    }));

    const { getByText, getByTestId } = render(<TodoList />);

    expect(getByTestId('list')).toContainElement(getByText('make coffee'));
    expect(getByTestId('list')).toContainElement(getByText('read emails'));
  });
});