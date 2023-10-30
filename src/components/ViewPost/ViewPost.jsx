import { Link, useLoaderData } from 'react-router-dom';
import Post from '../PostsList/Posts/Post/Post';
import PostEditBox from '../PostsList/Posts/Post/PostEditBox/PostEditBox';

/**
 * посмотреть всю информацию о посте
 * @returns 
 */
export default function ViewPost () {
  const {post, id} = useLoaderData() // ЧТОБ ДОСТАТЬ ПОЛУЧЕНЫЕ ДАННЫЕ с ViewPostloader
    return (
      <>
        {post && <div className='post__info' ><Link to='/' className='post__close'>X</Link> <Post item={post.post} key={id}><PostEditBox id={id}/></Post> </div>}
      </>
    )
    
}
  
const ViewPostloader = async({ params}) => {
  const id = params.id;
    console.log('ViewPostloader id', id)
    console.log('ViewPostloader params', params )
    const res = await fetch(`http://localhost:7070/posts/${id}`);
    const post = await res.json();

   return {post, id}; 
  }

export {ViewPostloader};