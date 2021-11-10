import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i
          className='fas fa-user-circle text-primary'
          style={{ marginRight: "10px" }}
        ></i>
        Edit Profile
      </Link>
    </div>
  );
};

export default DashboardActions;
