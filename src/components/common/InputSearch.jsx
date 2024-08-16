import PropTypes from "prop-types";

export default function InputSearch({ event, valueChange }) {
  return (
    <input
      type="text"
      placeholder="Lima"
      value={valueChange}
      onChange={(e) => event(e)}
    />
  );
}

InputSearch.propTypes = {
  event: PropTypes.func.isRequired,
  valueChange: PropTypes.string.isRequired,
};
