export default function AddComment ()  {
    const handleSubmit = (e) => {
        e.preventDefault();
 
    }
    return (
        <> 
        <form className='add__comment__box' onSubmit={handleSubmit}>
            <div className='post__avatar__input'></div>
            <input className='post__input' type='text' /> 
        </form >
        </>
       
    )
}