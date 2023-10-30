import {Form} from 'react-router-dom';

const UpDatePost = ( {id, title, userId} ) => {

    return(
        <Form action={`/posts/${id}/edit` } method='post' className='form__edit'>
            <label className="add__title">
                Title:
                <input className='input__title' type='text' name='title' defaultValue={title} />
            </label>
            <input type='hidden' name='userId' value={userId} />
            <input type='hidden' name='id' value={id} />
            <input className="btn__edit__post" type='submit'  value='Update post' />
        </Form>
    )
}

export {UpDatePost};
