import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink) `

padding: 15px 20px;
border-radius: 4px;
text-decoration: none;
color: #81bece;
font-weight: 500;
font-size: 20px;
&.active {
  color: #012e4a;
  background-color: orange;
}
&:hover:not(.active),
&:focus:not(.active) {
  color: red;
}
`;
  /*
  Nav.active = styled.link.active`
    color: #e84a5f;
  `*/