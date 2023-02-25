import { FC, useContext } from 'react';
import { DataContext } from '../../state/data.context';
import { TagPieChart } from '../../components/Charts/TagPieChart';
import { GroupPieChart } from '../../components/Charts/GroupPieChart';
import { TagBarChart } from '../../components/Charts/TagLBarChart';
import { GroupLineChart } from '../../components/Charts/GroupLineChart';

export const Statistics: FC = () => {
  const {data} = useContext(DataContext)
  const tags = new Set(data.map(el => el.tag).flat())

  return(
      <>
        <h2>Statistics</h2>
        <div className="charts">
          <div className="chart">
            <h3>Group (#food #health) pie</h3>
            <GroupPieChart data={data} width={300} height={200} tags={['health', 'food']}/>
          </div>
          <div className="chart">
            <h3>Tag (#health) pie</h3>
            <TagPieChart data={data} width={300} height={200} tag={'health'}/>
          </div>
          <div className="chart">
            <h3>Tag (#health) bar</h3>
            <TagBarChart data={data} width={300} height={200} tag={'health'}/>
          </div>
          <div className="chart">
            <h3>Group (#health #car) bar</h3>
            <GroupLineChart data={data} width={300} height={200} tags={['health', 'car']}/>
          </div>
        </div>
      </>
  )
}
