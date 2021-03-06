import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeAlert } from "../../actions/alert";

const Alert = ({ alerts, removeAlert }) => {
  const handleRemove = id => {
    removeAlert(id);
  };

  return (
    <div className='alert-wrapper'>
      {alerts.map(alert => (
        <div
          key={alert.id}
          className={`alert alert-${alert.alertType}`}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {alert.msg}
          <i
            className='fas fa-times fa-lg'
            onClick={() => handleRemove(alert.id)}
          ></i>
        </div>
      ))}
    </div>
  );
};

Alert.propTypes = {
  alert: PropTypes.array,
  removeAlert: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, { removeAlert })(Alert);
