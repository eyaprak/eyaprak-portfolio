import {
  ServicesSection,
  Container,
  SectionTitle,
} from './styles/Section.styled';
import { Card, CardItem, StyledIcon } from './styles/Services.styled';
function Services() {
  return (
    <ServicesSection>
      <Container>
        <SectionTitle>Services</SectionTitle>
        <Card>
          <CardItem>
            <StyledIcon bg='#fae5ef'>
              <img src='/icons/pencil-icon.svg' alt='' />
            </StyledIcon>
            <h3>Customize with ease</h3>
            <p>
              The value of design has been discussed a lot in the recent years.
              It&apos;s recognised that design is a critical factor in creating
              successful products.
            </p>
          </CardItem>
          <CardItem>
            <StyledIcon bg='#f3e4ff'>
              <img src='/icons/file-icon.svg' alt='' />
            </StyledIcon>
            <h3>Perfectly Responsive</h3>
            <p>
              The value of design has been discussed a lot in the recent years.
              It&apos;s recognised that design is a critical factor in creating
              successful products.
            </p>
          </CardItem>
          <CardItem>
            <StyledIcon bg='#e7e6ff'>
              <img src='/icons/light-icon.svg' alt='' />
            </StyledIcon>
            <h3>CMS Powered</h3>
            <p>
              The value of design has been discussed a lot in the recent years.
              It&apos;s recognised that design is a critical factor in creating
              successful products.
            </p>
          </CardItem>
          <CardItem>
            <StyledIcon bg='#dceeff'>
              <img src='/icons/tools-icon.svg' alt='' />
            </StyledIcon>
            <h3>Friendly Support</h3>
            <p>
              The value of design has been discussed a lot in the recent years.
              It&apos;s recognised that design is a critical factor in creating
              successful products.
            </p>
          </CardItem>
        </Card>
      </Container>
    </ServicesSection>
  );
}

export default Services;
