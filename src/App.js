
import './App.css';
import { Provider } from "react-redux"
import store from "./redux/state"
import Todo from './components/Todo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
      </Provider>
  );
}

export default App;
