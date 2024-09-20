import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from "./component/EmptyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes> {/* <Switch> 대신 <Routes>를 써야 오류가 안 남 */}
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
