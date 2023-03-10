import React, { FC, useContext } from 'react';
import { DataContext } from '../../state/data.context';
import { parseString } from '../../tools/parseString';

export const NewRecord: FC = () => {
  const {add} = useContext(DataContext)
  const onSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {value} = e.currentTarget['new-record'];
    add(parseString(value));
    e.currentTarget.reset()
  };

  return (
      <form onSubmit={ onSave }>
        <label htmlFor="new-record">Add new record</label>
        <input type="text" id="new-record" autoFocus={true} />
        <button type="submit">save</button>
      </form>
  );
};
