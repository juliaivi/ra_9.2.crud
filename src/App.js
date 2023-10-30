import './App.css';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

import CreateForm, { createPostAction} from './components/CreateForm/CreateForm';
import Layout from './components/HomePage/Layout';
import ViewPost, {ViewPostloader} from './components/ViewPost/ViewPost';
import EditPost, { updatePostAction } from './components/EditPost/EditPost';

//action = отвечает за отправку
// action - Действия с маршрутом - это "запись" в "чтение" загрузчика маршрута. Они предоставляют приложениям возможность выполнять изменения данных с помощью простой семантики HTML и HTTP, в то время как React Router устраняет сложность асинхронного пользовательского интерфейса и повторной проверки. Это дает вам простую мысленную модель HTML + HTTP (где браузер обрабатывает асинхронность и повторную проверку) с учетом поведения и возможностей UX современных СПА-центров.
const router = createBrowserRouter(createRoutesFromElements(
  <> 
    <Route path='/'element={<Layout /> } action={createPostAction} /> 
    <Route path="/posts/:id/edit" element={<EditPost />} loader={ViewPostloader} action={updatePostAction} />
    <Route path='posts/new' element={<CreateForm /> } />
    <Route path="/posts/:id" element={<ViewPost />} loader={ViewPostloader} />
  </> 
))
// loader - Каждый маршрут может определить функцию «загрузчика» для предоставления данных элементу маршрута перед его визуализацией.
function App() {
  return (
      <RouterProvider router={router} />
  );
}
// RouterProvider -Все объекты маршрутизатора данных передаются этому компоненту для визуализации вашего приложения и включения остальных API данных.
export default App;
