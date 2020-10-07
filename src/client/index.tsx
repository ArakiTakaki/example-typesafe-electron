import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GlobalStyles } from './utils/GlobalStyles';
import { List } from './components/List';
import { rendererLogger, createLoggerTag } from '../global/logger';
import { Accordion } from './components/Accordion';
import { RecoilRoot } from 'recoil';
import {TodoComponent} from './components/Todo';

const mainLog = rendererLogger.child(createLoggerTag('main component'));
window.api.TokenGetByName({ tokenName: 'hogehoge' })
  .then((res) => {
    console.log(res.token);
  });
const Main: React.SFC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleChange = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  mainLog.info('exec <mai></mai>n');
  return (
    <>
      <GlobalStyles />
      <div style={{padding: 20}} onClick={handleChange}>
        <h1>title</h1>
      </div>
      <Accordion isOpen={isOpen} duration={250}>
        <List verticalMargin={10} horizontalMargin={100}>
          <div style={{padding: 40}}>
            <h1>hoge aaa hoge</h1>
          </div>
          <div style={{padding: 40}}>
            <h1>hoge aaa hoge</h1>
          </div>
          <div style={{padding: 40}}>
            <h1>hoge aaa hoge</h1>
          </div>
        </List>
      </Accordion>
      <h1>hoge</h1>
      <List verticalMargin={10} horizontalMargin={100}>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
      </List>
      <TodoComponent />
    </>
  )
};
const App = () => {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

