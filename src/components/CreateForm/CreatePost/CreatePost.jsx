import { Form } from "react-router-dom";

const CreatePost = ( {submitting} ) => {

    return (
        <>
            <h3>Create post</h3>
            <Form action="/" method="post"> 
                <label className="add__title">
                    Title:
                    <input className='input__title' type='text' name='title'/>
                </label>
                <input type='hidden' name='userId' value='3'/>
                <input className="btn__add__post" type='submit'  value='Add post' disabled={submitting} />
            </Form>
        </>
     
    )
}
// disabled={submitting} заблокировать кнопку чтоб пользователь не смог нажать ее второй раз (чтоб не инициировать 2 запроса)
export default (CreatePost);