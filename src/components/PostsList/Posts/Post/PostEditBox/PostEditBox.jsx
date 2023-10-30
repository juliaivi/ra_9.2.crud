import { Link, useParams } from 'react-router-dom';

export default function PostEditBox(props) {
  const { id }  = useParams();

  function onDelete () {
    fetch(`http://localhost:7070/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: id})
     })
  }

 return (
    <div className='post__edit__box'>
      <Link to={`/posts/${props.id}/edit`} className='post__edit' >Изменить</Link>
      <Link to="/"  className='post__delete' onClick={onDelete}>Удалить</Link>
    </div>
 )
}

