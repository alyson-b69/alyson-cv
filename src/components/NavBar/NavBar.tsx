import React from 'react';
import { LinkType } from '../../types';
import { FaHome } from 'react-icons/fa';
import {
  NavBarWrapper,
  NavBarTop,
  StyledLogo,
  StyledNavBar,
  StyledNavBarList,
  StyledNavItem,
  StyledBurger,
} from './NavBar.style';
import useOnClickOutside from '../../services/hooks/useOnClickOutside';

export interface NavBarProps {
  links: LinkType[];
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef, () => {
    setIsOpen(false);
  });

  return (
    <NavBarWrapper ref={menuRef}>
      <NavBarTop>
        <StyledNavBar>
          <StyledLogo href={'#intro'}>
            <FaHome fontSize="1.5em" />
            ALYSON-B
          </StyledLogo>
          <StyledNavBarList isOpen={isOpen}>
            {links.map((link) => {
              const element = document.getElementById(link.id);
              const bounds = element?.getBoundingClientRect();
              const isInView =
                !!bounds &&
                bounds.top < 82 &&
                bounds.top > 0 - bounds.height + 82;

              return (
                <StyledNavItem
                  key={link.id}
                  href={'#' + link.id}
                  isActive={isInView}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </StyledNavItem>
              );
            })}
          </StyledNavBarList>
          <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <span className={'line-1'} />
            <span className={'line-2'} />
            <span className={'line-3'} />
          </StyledBurger>
        </StyledNavBar>
      </NavBarTop>
    </NavBarWrapper>
  );
};

export default NavBar;
