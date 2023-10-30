import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

//отрисовка поста и вешание события при клике на него чтоб перенаправляло на сам просмотр поста
export default function Post( {item, children} ) {

  return (
    <div className='post'>
      <div className='post-content'>
        <div className='post__header'>
          <div className='post__avatar'></div>
            <div className='post__info'>
              <Link to="#" className='name'>Name</Link>
              <p className='date'>{dayjs(item.created).format('DD.MM.YYYY')}</p>
            </div>
          </div>
          <Link to={`/posts/${item.id}`}  className='post__text'>{item.title}</Link>
          <p className='post__text'>{item.content}</p>
          <hr />
          <div className='post__navigetion__box'>
            <div className='post_like'>Нравится</div>
            <div className='post_comments'>Коментировать</div>
          </div>
          <hr/>
            {children}
        </div>
    </div>
  )
}

Post.propTypes = {
  item: PropTypes.object,
}


