import { Dispatch, FC } from 'react';
import { EventRecord } from '../../interfaces';
import { DndActionInterface } from '../../reducer/TagsReducer';

interface TagsListInterface {
  data: EventRecord[],
  dispatch: Dispatch<DndActionInterface>;
}
export const TagsList: FC<TagsListInterface> = (props) => {
  const { data, dispatch } = props;
  const tags = new Set(data.map(el => el.tag).flat())

  return (
      <div>
        <h3>Tags</h3>
        <div className={'tags__list'}>
          {
            Array.from(tags).map(tag => (
                <div
                    key={tag}
                    id={tag}
                    className={'record__tag'}
                    draggable={true}
                    onDragStart={() => dispatch({type: 'dragStart', payload: tag})}
                    onDragEnd={() => dispatch({type: 'dragEnd', payload: tag})}
                >
                  {tag}
                </div>
            ))
          }
        </div>
      </div>
  );
};
