import { BreadcrumbSection, Container } from './styles/Section.styled';
import { StyledTitle } from './styles/Breadcrumb.styled';
function Breadcrumb({ text }) {
  return (
    <BreadcrumbSection>
      <Container>
        <StyledTitle>{text}</StyledTitle>
      </Container>
    </BreadcrumbSection>
  );
}

export default Breadcrumb;
