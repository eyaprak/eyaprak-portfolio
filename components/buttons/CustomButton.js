import { CustomStyledButton } from '../styles/CustomButton.styled';
function CustomButton({ link, text }) {
  return (
    <CustomStyledButton href={link} target='_blank' rel='noreferrer'>
      {text}
    </CustomStyledButton>
  );
}

export default CustomButton;
