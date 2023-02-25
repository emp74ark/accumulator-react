import { FC, useContext } from 'react';
import { DataContext } from '../../state/data.context';
import { TagPieChart } from '../../components/Charts/TagPieChart';
import { GroupPieChart } from '../../components/Charts/GroupPieChart';
import { TagBarChart } from '../../components/Charts/TagLBarChart';
import { GroupLineChart } from '../../components/Charts/GroupLineChart';
import { TagsList } from '../../components/Tags/TagsList';

export const Statistics: FC = () => {
  const {data} = useContext(DataContext)

  return(
      <>
        <h2>Statistics</h2>
        <div className={'statistics'}>
          <div className="charts">
            <GroupPieChart label={'Group (#food #health) pie'} data={data} width={300} height={200} tags={['health', 'food']}/>
            <TagPieChart label={'Tag (#health) pie'} data={data} width={300} height={200} tag={'health'}/>
            <TagBarChart label={'Tag (#health) bar'} data={data} width={300} height={200} tag={'health'}/>
            <GroupLineChart label={'Group (#health #car) bar'} data={data} width={300} height={200} tags={['health', 'car']}/>
          </div>
          <div className="tags">
            <TagsList data={data}/>
          </div>
        </div>
      </>
  )
}
