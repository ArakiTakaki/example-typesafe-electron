import * as React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todoState } from '../store/todo';
export const TodoComponent: React.SFC = () => {
  const todoValues = useRecoilValue(todoState);
  const setTodoState = useSetRecoilState(todoState);
  const addTodoHandler = React.useCallback(() => {
    setTodoState([
      ...todoValues,
      {
        id: Math.random().toString();
        title: 'hogehoge',
        completed: true,
      }
    ]);
  });

  return (
    <div>
      div
      <button onClick={addTodoHandler}>add todo</button>

      <ul>
        {
          todoValues.map((todo) => (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed}/>
                <p>{todo.title}</p>
              </label>
            </li>
          )
        }
      </ul>
    </div>
  );
};
