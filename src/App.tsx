import Chart from '@modules/Chart';
import Operation from '@modules/Operation';
import Results from '@modules/Results';
import Tree from '@modules/Tree';
import ModalProvider from '@providers/Modal';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

function App() {
  return (
    <>
      <ModalProvider>
        <MainApp>
          <Tree />
          <Chart />
          <Results />
          <Operation />
        </MainApp>
      </ModalProvider>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={true}
        theme='dark'
      />
    </>
  );
}

const MainApp = styled.main`
  height: 100%;
  padding: 24px 12px 12px;

  display: grid;
  grid-auto-flow: column;
  grid-template-columns: minmax(auto, 340px) 1fr;
  grid-template-rows: repeat(2, min-content) 1fr;
  gap: 24px;
`;

export default App;
