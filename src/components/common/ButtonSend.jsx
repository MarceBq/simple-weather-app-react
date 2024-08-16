import PropTypes from "prop-types";

export default function ButtonSend({ event }) {
  return <button onClick={event}>Send</button>;
}

ButtonSend.propTypes = {
  event: PropTypes.func.isRequired,
};
