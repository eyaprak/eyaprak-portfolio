import { SocialSection, Container } from './styles/Section.styled';
import { StyledDiv } from './styles/Social.styled';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
function Social() {
  return (
    <SocialSection>
      <Container>
        <SectionTitle Showtitle='true' title='My Social Links' />
        <StyledDiv>
          <a
            href='https://www.linkedin.com/in/emrullah-yaprak/'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/icons/linkedin.png'
              width='64px'
              height='64px'
              alt=''
            />
          </a>
          <a
            href='https://www.instagram.com/yprkemrullah/'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/icons/instagram.png'
              width='64px'
              height='64px'
              alt=''
            />
          </a>
          <a href='https://github.com/eyaprak' target='_blank' rel='noreferrer'>
            <Image src='/icons/github.png' width='64px' height='64px' alt='' />
          </a>
          <a href='https://gitlab.com/eyaprak' target='_blank' rel='noreferrer'>
            <Image src='/icons/gitlab.png' width='64px' height='64px' alt='' />
          </a>
        </StyledDiv>
      </Container>
    </SocialSection>
  );
}

export default Social;
