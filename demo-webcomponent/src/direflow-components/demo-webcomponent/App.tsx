import React, { FC, useContext } from 'react';
import { EventContext, Styled } from 'direflow-component';
import styles from './App.css';

interface IProps {
  componentTitle: string;
}

const App: FC<IProps> = (props) => {
  const dispatch = useContext(EventContext);

  const handleClick = () => {
    const event = new Event('my-event');
    dispatch(event);
  };

  return (
    <Styled styles={styles}>
      <div className='app'>
        <h1>{props.componentTitle}</h1>
        <button className='button btn btn-primary' onClick={handleClick}>
          Click me!
        </button>
      </div>
    </Styled>
  );
};

App.defaultProps = {
  componentTitle: 'Demo Webcomponent',
}

export default App;
