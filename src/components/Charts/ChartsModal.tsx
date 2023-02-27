import React, { FC, useState } from 'react';
import { EventRecord } from '../../interfaces';
import { DndStateInterface } from '../../reducer/TagsReducer';

interface ChartsModalInterface {
  data: EventRecord[];
  state: DndStateInterface;
  closeModal: () => void;
  addSingle: (label: string, tag: string) => void;
  addGroup: (label: string, tags: string[]) => void;
}

export const ChartsModal: FC<ChartsModalInterface> = (props) => {
  const {data, state, closeModal, addSingle, addGroup} = props
  const tags = new Set(data.map(el => el.tag).flat())
  const [single, setSingle] = useState<{label: string; tag: string}>({label: '', tag: ''})
  const [group, setGroup] = useState<{label: string; tags: string[]}>({label: '', tags: []})

  const onSingle = (e: React.ChangeEvent<any>) => {
    const {target: {value, type}} = e
    if (type === 'text') {
      setSingle({ ...single, label: value })
    }
    else if (type === 'select-one') {
      setSingle({...single, tag: value})
    }
  }

  const onGroup = (e: React.ChangeEvent<any>) => {
    const {target: {value, type}} = e
    if (type === 'text') {
      setGroup({ ...group, label: value })
    }
    else if (type === 'select-one') {
      setGroup({...group, tags: [...value.split(',')]})
    }
  }


  return (
      <div className={'shadow'}>
        <div className={'modal'}>
          <div className="modal__header">
            <h2>Create new chart</h2>
            <button onClick={closeModal}>x</button>
          </div>
          <div className={'modal__section'} onChange={onSingle}>
            <h4>By single tag</h4>
            <select defaultValue={'*'}>
              <option disabled={true} value={'*'}>select tag</option>
              {
                Array.from(tags).map(el => (
                    <option key={el} value={el}>{el}</option>
                ))
              }
            </select>
            <label>
              chart label
              <input type="text"/>
            </label>
            <button disabled={!single.tag} onClick={() => addSingle(single.label, single.tag)}>create chart</button>
          </div>
          <div className={'modal__section'} onChange={onGroup}>
            <h4>By tags group</h4>
            <select defaultValue={'*'}>
              <option disabled={true} value={'*'}>select group</option>
              {
                Object.entries(state.group).map(([name, value]) => (
                    <option key={name} value={value}>{name}</option>
                ))
              }
            </select>
            <label>
              chart label
              <input type="text"/>
            </label>
            <button onClick={() => addGroup(group.label, group.tags)}>create group chart</button>
          </div>
        </div>
      </div>
  );
};
