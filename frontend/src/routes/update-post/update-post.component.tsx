import { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { updatePost } from '../../features/posts/postSlice';

type Props = {};

const defaultFormFields = {
  title: '',
  imageUrl: '',
  body: '',
};

const UpdatePost = (props: Props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, body, imageUrl } = formFields;

  const { postId } = useParams();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const postData = {
      title,
      imageUrl,
      body,
    };

    dispatch(updatePost({ postData, postId }));
    navigate('/');
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col'>
        <div className='card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100'>
          <h1 className='text-xl font-bold text-center mt-4'>
            Update New Post
          </h1>
          <form className='card-body' onSubmit={handleSubmit}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Title</span>
              </label>
              <input
                className='input input-bordered'
                type='text'
                name='title'
                value={title}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Image Url</span>
              </label>
              <input
                className='input input-bordered'
                type='text'
                name='imageUrl'
                value={imageUrl}
                onChange={handleChange}
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Body</span>
              </label>
              <textarea
                className='input input-bordered h-36 p-4'
                name='body'
                value={body}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className='form-control mt-6'>
              <button
                className={`${
                  title && body ? 'bg-[#0095f6]' : 'bg-[#c0dffd]'
                } border-none text-white text-sm rounded-md p-4 uppercase font-semibold`}
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
