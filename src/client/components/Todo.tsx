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
        id: Math.random().toString(),
        title: 'hogehoge',
        completed: true,
      }
    ]);
  }, []);
  const handleChecked =React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const strId = e.currentTarget.value;
    const result = todoValues.map((val) => {
      if (val.id !== strId) {
        return val;
      }
      return {
        ...val,
        completed: !val.completed,
      };
    });
    setTodoState(result);
  }, [todoValues]);

  return (
    <div>
      div
      <button onClick={addTodoHandler}>add todo</button>

      <ul>
        {
          todoValues.map((todo) => (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} value={todo.id} onChange={handleChecked}/>
                <p>{todo.title}</p>
              </label>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
