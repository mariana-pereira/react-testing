import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import TodoList from '../../components/TodoList';
import { addTask } from '../../store/modules/tasks/actions';

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

  it('should be able to add new task', () => {
    const { getByTestId, getByLabelText } = render(<TodoList />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText('Task'), { target: { value: 'make coffee'} });
    fireEvent.submit(getByTestId('task-form'));

    //console.log(dispatch.mock.calls);

    expect(dispatch).toHaveBeenCalledWith(addTask('make coffee'));
  });
});