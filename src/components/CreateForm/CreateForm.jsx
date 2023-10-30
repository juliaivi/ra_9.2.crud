import { Link,  redirect, useNavigation} from 'react-router-dom';
import CreatePost from './CreatePost/CreatePost';
/**
 * оригинальный компонент. Отвечающий за создание поста
 * 
 */
// useNavigation() -  это сущнасть которая возвращает ввиде объекта useNavigation - Этот крючок расскажет вам все, что вам нужно знать о навигации по страницам, чтобы создать ожидающие индикаторы навигации и оптимистичный пользовательский интерфейс при изменении данных.
export default function CreateForm() {
  const navigation = useNavigation()

  return (
    <>  
      <div className='post__form'>  
        <Link to='/' className='post__close'>X</Link>
        <CreatePost submitting={navigation.state === 'submitting'} />
      </div>
    </>
  )
}

const createPostAction = async({request}) => {
  const formData = await request.formData(); // на прямую данные с формы нельзя взять по этому с помощью formData порлучаю объект 
  await fetch('http://localhost:7070/posts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ 
        title: formData.get('title'),
        userId: formData.get('userId')
      }) // передача данных на сервер
  })

  return  redirect('/'); // перенапрвляет на главную страницу
}
// redirect - Поскольку вы можете возвращать или выбрасывать ответы в загрузчиках и действиях, вы можете использовать redirect для перенаправления на другой маршрут.
export {createPostAction};