import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TodoList from '../../components/TodoList';

describe('TodoList component', () => {
  it('should be able to add new task', () => {
    const { getByText, getByTestId } = render(<TodoList />);

    //debug();

    fireEvent.click(getByText('Add'));

    expect(getByTestId('list')).toContainElement(getByText('make coffee'));
  });
});