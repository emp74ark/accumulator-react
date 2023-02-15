import React, { FC, useContext } from 'react';
import { DataContext } from '../../state/data.context';

export const NewRecordComponent: FC = () => {
  const {add} = useContext(DataContext)
  const onSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {value} = e.currentTarget['new-record'];
    add({
      id: Date.now(),
      date: (new Date()).toISOString(),
      content: value,
      tag: [],
    });
    e.currentTarget.reset()
  };

  return (
      <form onSubmit={ onSave }>
        <label htmlFor="new-record">Add new record</label>
        <input type="text" id="new-record" />
        <button type="submit">save</button>
      </form>
  );
};
