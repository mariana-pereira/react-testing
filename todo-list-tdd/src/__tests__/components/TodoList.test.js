import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import TodoList from '../../components/TodoList';

describe('TodoList component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should be able to add new task', () => {
    const { getByText, getByTestId, getByLabelText } = render(<TodoList />);

    //debug();

    fireEvent.change(getByLabelText('Task'), { target: { value: 'make coffee' } });
    fireEvent.submit(getByTestId('task-form'));

    expect(getByTestId('list')).toContainElement(getByText('make coffee'));
    expect(getByLabelText('Task')).toHaveValue('');
  });

  it('should store tasks in storage', () => {
    let { getByTestId, getByLabelText, getByText } = render(<TodoList />);
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    fireEvent.change(getByLabelText('Task'), { target: { value: 'make coffee' } });
    fireEvent.submit(getByTestId('task-form'));

    cleanup();

    ({ getByTestId, getByLabelText, getByText } = render(<TodoList />));

    expect(setItemSpy).toHaveBeenCalledWith('tasks', JSON.stringify(['make coffee']));
    expect(getByTestId('list')).toContainElement(getByText('make coffee'));
  });
});