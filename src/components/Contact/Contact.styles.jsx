import styled from '@emotion/styled';

export const ContactListItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  padding-top: 2px;
  padding-bottom: 2px;

  border: none;
  border-radius: 4px;
  cursor: pointer;

  color: rgba(33, 33, 33, 1);
  background-color: rgba(156, 156, 156, 1);

  font-size: 14px;
  font-weight: 500;
  line-height: 1.875;
  letter-spacing: 0.06em;

  transition-property: color, background-color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: rgba(245, 244, 250, 1);
    background-color: rgba(33, 150, 243, 1);
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }

  & svg {
    height: 18px;
    width: 18px;
    margin-right: 5px;
  }
`;
