import { FC, useReducer } from 'react';
import { EventRecord } from '../../interfaces';
import { TagsList } from './TagsList';
import { TagsGroup } from './TagsGroup';
import { dndState, reducer } from './TagsReducer';

interface TagsInterface {
  data: EventRecord[];
}

export const Tags: FC<TagsInterface> = (props) => {
  const {data} = props
  const [state, dispatch] = useReducer(reducer, dndState)

  return (
      <div className="tags">
        <TagsList data={data} dispatch={dispatch}/>
        <TagsGroup state={state} dispatch={dispatch}/>
      </div>
  );
};
