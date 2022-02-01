import Typography from '@mui/material/Typography';

const Text = ({ propStyle, mainText, isEmail }) => {
  return (
    <span style={propStyle}>
      {isEmail ? `(${mainText});` : mainText }
    </span>
  )
}

Text.defaultProps = {
  isEmail: false
}

export default Text;