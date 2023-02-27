import { FC, useContext, useReducer } from 'react';
import { DataContext } from '../../state/data.context';
import { Tags } from '../../components/Tags/Tags';
import { Charts } from '../../components/Charts/Charts';
import { dndState, reducer } from '../../reducer/TagsReducer';

export const Statistics: FC = () => {
  const {data} = useContext(DataContext)
  const [state, dispatch] = useReducer(reducer, dndState)

  return(
      <>
        <h2>Statistics</h2>
        <div className={'statistics'}>
          <Charts data={data} state={state}/>
          <Tags data={data} state={state} dispatch={dispatch}/>
        </div>
      </>
  )
}
