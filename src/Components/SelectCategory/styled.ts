import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;