/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Welcome from './pages/Welcome';
import Invite from './pages/Invite';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import PlanLayout from './Layouts/PlanLayout';
import AppLayout from './Layouts/AppLayout';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from './context';

function App() {
  const [, setState] = useContext(Context);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("clubHouseData"));
      if(userInfo?.name) {
        setState(prev => ({...prev, userInfo}))
      }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<PlanLayout />} >
          <Route index element={<Welcome />} />
          <Route exact path="/invite" element={<Invite />} />
          <Route exact path="/invite/allow-notification" element={<AllowNotification />} />
          <Route exact path="/invite/allow-notification/code-confirm" element={<CodeConfirm />} />
        </Route>

        <Route exact path="/app" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route exact path='profile' element={<Profile />} />
        </Route>
        <Route path='/*' element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
