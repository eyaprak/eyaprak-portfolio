import { FooterSection } from './styles/Section.styled';
function Footer() {
  const getYear = () => {
    const d = new Date();
    return d.getFullYear();
  }
  return (
    <FooterSection>Copyright &copy; {getYear()} All Rights Reserved</FooterSection>
  );
}

export default Footer;
