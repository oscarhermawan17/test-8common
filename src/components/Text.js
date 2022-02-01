// import Typography from '@mui/material/Typography';

const Text = ({ propStyle, mainText, isEmail, onClick }) => {
  return (
    <span style={propStyle} onClick={onClick}>
      {isEmail ? `(${mainText});` : mainText }
    </span>
  )
}

Text.defaultProps = {
  isEmail: false
}

export default Text;