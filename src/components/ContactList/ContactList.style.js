import styled from 'styled-components';

export const List = styled.ul`
  width: 600px;
  margin: 0 auto; /* Центрировать список по горизонтали */
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between; /* Разместить контент и кнопку в конце строки */
  align-items: center;
  margin-bottom: 10px; /* Добавить отступ между элементами списка */
`;

export const Button = styled.button`
  background-color: red; /* Здесь можно задать нужные стили кнопке Delete */
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;