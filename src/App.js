import GetMouse from './components/GetMouse';
import GetRandonNumbers from './components/GetRandonNumbers';

export function App() {
  const element = document.createElement('div');

  element.appendChild(GetRandonNumbers());
  element.appendChild(GetMouse());

  return element;
}

export default App
