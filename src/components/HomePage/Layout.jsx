import { Link, Outlet } from 'react-router-dom';
import PostsList from '../PostsList/PostsList';

/**
 * главная страница - корень
 * @returns 
 */
const Layout = () => {
    
    return (
        <>
            <header>
                <nav className="nav">
                    <div className='app__form'>
                        <Link to="/posts/new" className="btn-add">Создать пост </Link>
                    </div>
                </nav>
            </header>
            <div className="posts-list">
                <PostsList />       
                <Outlet />
            </div>
            <footer></footer> 
        </>
    )
}

export default Layout;