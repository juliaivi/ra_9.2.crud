import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post/Post';

import AddComment from './Post/AddComment/AddComment';

/**
 * передает в Post объект чтоб отрисовать
*/
export default function Posts ({data}) {
    return data.map((item) => <Post item={item} key={item.id}> <AddComment /></Post>)
}

Posts.propTypes = {
    data: PropTypes.array,
}