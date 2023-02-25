import { FC } from 'react';
import { EventRecord } from '../../interfaces';
interface TagsListInterface {
  data: EventRecord[]
}
export const TagsList: FC<TagsListInterface> = (props) => {
  const { data } = props;
  const tags = new Set(data.map(el => el.tag).flat())

  return (
      <div>
        <h3>Tags</h3>
        <div className={'tags__list'}>
          {
            Array.from(tags).map(tag => (
                <span className={'record__tag'}>{tag}</span>
            ))
          }
        </div>
      </div>
  );
};
