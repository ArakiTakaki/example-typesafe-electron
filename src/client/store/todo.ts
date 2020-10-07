import { atom } from 'recoil';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  {
    id: 'hogehoge',
    title: 'hogehoge',
    completed: false,
  },
  {
    id: 'hogehoge2',
    title: 'hogehoge2',
    completed: true,
  },
];

export const todoState = atom({
  key: 'task',
  default: initialTasks,
})
