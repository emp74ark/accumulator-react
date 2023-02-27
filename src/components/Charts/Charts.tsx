import { EventRecord } from '../../interfaces';
import { FC, useState } from 'react';
import { ChartsModal } from './ChartsModal';
import { DndStateInterface } from '../../reducer/TagsReducer';
import { SingleChart } from './SingleChart';
import { GroupChart } from './GroupChart';

interface ChartsInterface {
  data: EventRecord[];
  state: DndStateInterface;
}

export const Charts: FC<ChartsInterface> = (props) => {
  const { data, state } = props;
  const [modal, setModal] = useState<boolean>(false);
  const [charts, setCharts] = useState<JSX.Element[]>([]);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const addSingle = (label: string, tag: string) => {
    setCharts([
      ...charts,
      <SingleChart key={ Date.now() } label={ label } data={ data } tag={ tag }/>
    ]);
    setModal(false);
  };

  const addGroup = (label: string, tags: string[]) => {
    setCharts([
      ...charts,
      <GroupChart key={ Date.now() } label={ label } data={ data } tags={ tags }/>
    ]);
    setModal(false);
  };

  return (
      <>
        {
            modal && <ChartsModal data={ data } state={ state } closeModal={ closeModal } addSingle={ addSingle }
                                  addGroup={ addGroup }/>
        }
        <div className="charts__wrapper">
          <h3>Chart</h3>
          <button disabled={ modal } onClick={ openModal }>Create chart</button>
          <div className="charts">{ charts.map(el => el) }</div>
        </div>
      </>
  );
};
