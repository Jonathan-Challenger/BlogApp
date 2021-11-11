import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className='profile-top bg-primary p-2'>
      <img src={avatar} alt='Avatar' className='round-img my-1' />
      <h1 className='large text-dark'>{name}</h1>
      <p className='lead text-dark'>{status}</p>
      <p className='text-dark'>{location ? <span>{location}</span> : null}</p>
      <div className='icons my-1'>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-2x' />
          </a>
        )}
        {social
          ? Object.entries(social)
              .filter(([_, value]) => value)
              .map(([key, value]) => (
                <a
                  key={key}
                  href={value}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className={`fab fa-${key} fa-2x`} />
                </a>
              ))
          : null}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
