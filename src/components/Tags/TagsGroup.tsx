import { ChangeEvent, Dispatch, FC, useState } from 'react';
import { DndActionInterface, DndStateInterface } from '../../reducer/TagsReducer';

interface TagsGroupInterface {
  state: DndStateInterface;
  dispatch: Dispatch<DndActionInterface>;
}

export const TagsGroup: FC<TagsGroupInterface> = (props) => {
  const {state: {group}, dispatch} = props;
  const [name, setName] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  const onAdd = () => {
    dispatch({type: 'addGroup', payload: name.trim()})
    setName('')
  }

  return (
      <>
        <h3>Groups</h3>
        <label>
          name
          <input type="text" placeholder={'name fro new group'} value={name} onChange={onChange}/>
        </label>
        <button disabled={!name} onClick={onAdd}>Add group</button>
        {
          Object.entries(group).map(([name]) => (
              <div key={name} className={'tags__group'}>
                <div className={'tags__group_header'}>
                  {name}
                  <button onClick={() => dispatch({type: 'removeGroup', payload: name})}>Remove</button>
                </div>
                <div id={name} className={'tags__group_content'} onDragOver={() => dispatch({type: 'dragOver', payload: name})}>
                  {
                    group[name].map((tag, index) => (
                        <span key={`${tag}-${index}`} className={'record__tag'}>
                          {tag}
                          <button onClick={() => dispatch({type: 'removeFromGroup', payload: { group: name, tag: tag }})}>
                            x
                          </button>
                        </span>
                    ))
                  }
                </div>
              </div>
          ))
        }
      </>
  );
};
