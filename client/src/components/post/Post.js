import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getPost } from "../../actions/post";
import Spinner from "../layout/Spinner";
import PostItem from "../posts/PostItem";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);

  return (
    <section className='container'>
      {loading || post === null ? (
        <Spinner />
      ) : (
        <>
          <Link to='/posts' className='btn'>
            Back to Posts
          </Link>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
        </>
      )}
    </section>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
