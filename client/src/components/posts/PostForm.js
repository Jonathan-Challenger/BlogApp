import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useState } from "react";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const { title, content } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Post something...</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ title, content });
          setFormData({ title: "", content: "" });
        }}
      >
        <input
          className='my-1'
          type='text'
          name='title'
          placeholder='Post Title'
          value={title}
          onChange={e => onChange(e)}
          required
        />
        <textarea
          name='content'
          cols='30'
          rows='5'
          placeholder='Post Content'
          value={content}
          onChange={e => onChange(e)}
          required
        ></textarea>
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
