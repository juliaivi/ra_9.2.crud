import React from 'react';
import Posts from './Posts/Posts';
import useJsonFetch from '../../hooks/useJsonFetch';
/**
 * загрузка постов если они есть и передача в Posts
 * @returns 
 */
export default function PostsList() {
    const [data , isLoading, error] = useJsonFetch('http://localhost:7070/', 'posts');
    if ((data instanceof Array) === false) {
        return;
    }

    return (
        <> 
            <div className="posts">
                {isLoading && <div> Loading... </div>}
                {error && <div> {error.message} </div>}
                {data && !isLoading && (
                    <div className="posts-list">
                        {data.length < 1 ? <div>Нет постов</div> : <Posts data={data} />}
                    </div>
                )}
            </div>
        </>
        
    )
}