import { useState, useEffect } from 'react';
import {
  StyledHeader,
  Flex,
  List,
  StyledButton,
  ListItem,
  HeaderWrapper,
} from './styles/Header.styled';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
function Header() {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <HeaderWrapper className={scrollY > 0 && 'scrolled'}>
      <StyledHeader>
        <Link href='/' passHref>
          <Flex>
            <Image src='/images/logo.png' width={262} height={60} alt='' />
          </Flex>
        </Link>

        <div>
          <List animate='visible'>
            <li>
              <Link href='/about'>
                <a className={router.pathname == '/about' ? 'active' : ''}>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href='/works'>
                <a className={router.pathname == '/works' ? 'active' : ''}>
                  Works
                </a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a className={router.pathname == '/contact' ? 'active' : ''}>
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href='/emrullah_yaprak_cv.pdf' passHref>
                <StyledButton target='_blank' rel='noreferrer'>
                  Resume
                </StyledButton>
              </Link>
            </li>
          </List>
        </div>
      </StyledHeader>
    </HeaderWrapper>
  );
}

export default Header;
