import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TodoList from '../../components/TodoList';

describe('TodoList component', () => {
  it('should be able to add new task', () => {
    const { getByText, getByTestId, getByLabelText } = render(<TodoList />);

    //debug();

    fireEvent.change(getByLabelText('Task'), { target: { value: 'make coffee' } });
    fireEvent.submit(getByTestId('task-form'));

    expect(getByTestId('list')).toContainElement(getByText('make coffee'));
    expect(getByLabelText('Task')).toHaveValue('');
  });
});