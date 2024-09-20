import Header from '../layouts/Header/Header';
import Cursor from '../utils/Cursor/Cursor';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Cursor color="green" pseudo="@maislina_" isReversed={false} />
    </>
  );
}

export default App;
