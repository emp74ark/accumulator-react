import { Dispatch, FC } from 'react';
import { EventRecord } from '../../interfaces';
import { TagsList } from './TagsList';
import { TagsGroup } from './TagsGroup';
import { DndActionInterface, DndStateInterface } from '../../reducer/TagsReducer';

interface TagsInterface {
  data: EventRecord[];
  state: DndStateInterface;
  dispatch: Dispatch<DndActionInterface>;
}

export const Tags: FC<TagsInterface> = (props) => {
  const {data, state, dispatch} = props

  return (
      <div className="tags">
        <TagsList data={data} dispatch={dispatch}/>
        <TagsGroup state={state} dispatch={dispatch}/>
      </div>
  );
};
