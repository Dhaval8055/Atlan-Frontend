import PropTypes from 'prop-types';

function InputControl(props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {props.label && <label style={{ fontWeight: 700, fontSize: '1rem', color: '#313131' }}>{props.label}</label>}
      <input 
        type="text" 
        style={{ borderRadius: '5px', border: '1px solid #dddddd', outline: 'none', padding: '10px 15px', color: '#000' }}
        {...props} 
      />
    </div>
  );
}
InputControl.propTypes = {
    label: PropTypes.string,
  };
export default InputControl;