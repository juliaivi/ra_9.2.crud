import { useLoaderData, useNavigation, redirect, Link } from 'react-router-dom';
import { UpDatePost } from './UpDatePost/UpDatePost';
/**
 * оригинальный компонент. Отвечающий за редактирование поста
 * @returns 
 */
// useLoaderData - Этот хук предоставляет значение, возвращаемое загрузчиком маршрута
export default function EditPost() {
    const {post} = useLoaderData() // ЧТОБ ДОСТАТЬ ПОЛУЧЕНЫЕ ДАННЫЕ с ЗАПРОСА ViewPostloader
    const navigation = useNavigation(); // чтоб узнать статус отправки

    return (
        <>
            <div className='edit__box'>
                <Link to='/' className='post__close'>X</Link>
                {post?.title && <div >{post.title}</div>}
                <h3 className='edit__post'>Редактирование</h3>
                <UpDatePost  {...post.post} submitting={navigation.state === 'submitting'} />
            </div>
        </>
    )
}

const updatePostAction = async({request}) => {
    const formData = await request.formData();// на прямую данные с формы нельзя взять по этому с помощью formData порлучаю объект 
    await fetch(`http://localhost:7070/posts/${formData.get('id')}`, {
        method: 'PUT',
        body: JSON.stringify({ 
            title: formData.get('title'),
            userId: formData.get('userId'), 
            id: formData.get('id'), 
          }) // передача данных на сервер
    })

    return  redirect('/'); // перенапрвляет 
}

export {updatePostAction};