import { FC, useContext } from 'react';
import { DataContext } from '../../state/data.context';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

export const StatisticsComponent: FC = () => {
  const {data} = useContext(DataContext)
  const totalAmount = data.reduce((acc, el) => acc + el.amount, 0)
  const tags = new Set(data.map(el => el.tag).flat())
  const amountPerTag: Record<string, number> = {}
  tags.forEach(tag => {
    data.filter(el => {
      if (el.tag.includes(tag) && amountPerTag[tag]){
        amountPerTag[tag] += el.amount
      }
      else if (el.tag.includes(tag)) {
        amountPerTag[tag] = el.amount
      }
    })
  })
  const chartData: {name: string, value: number}[] = []
  Object.entries(amountPerTag).forEach(([name, value]) => {
    chartData.push({name, value})
  })

  const colors = ["#0788FE", "#00C49F", "#FFBB28", "#FF8042"];

  return(
      <>
        <h2>Statistics</h2>
        <div className="general">
          <ul>
            <li>Total amomunt: {totalAmount}</li>
            {
              Object.entries(amountPerTag).map(([name, value]) => (
                  <li key={name}>{name}: {value} - { (value / totalAmount * 100).toFixed(1) }%</li>
              ))
            }
          </ul>

          <PieChart width={400} height={400}>
            <Pie
                dataKey="value"
                isAnimationActive={false}
                data={chartData}
                cx='30%'
                cy='30%'
                outerRadius={80}
                fill="#8884d8"
                label
            >
              {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </>
  )
}
