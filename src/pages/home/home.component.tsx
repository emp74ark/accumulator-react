import { FC } from 'react';

export const HomeComponent: FC = () => {
  return(
      <>
        <form className="new-record">
          <label htmlFor="new-record">Add new record</label>
          <input type="text" id="new-record"/>
          <button>send</button>
        </form>
      </>
  )
}
