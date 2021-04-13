import styled from 'styled-components/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View``;

export const BookList = styled.FlatList`
  margin-top: 10px;
`;

export const ItemSeparator = styled.View`
  height: 5px;
`;

export const Icon = styled(IconFontAwesome).attrs((props) => ({
  name: props.name,
  size: props.size,
  color: props.theme.colors.black,
}))`
  margin-right: 20px;
`;

export const BookItem = styled.View`
  flex: 1;
  flex-direction: row;

  background-color: #fff;
  border-radius: ${({ theme }) => theme.metrics.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.gray200};

  padding: 5px;
  margin: 0px 10px;
`;

export const BookItemContent = styled.View`
  flex: 1;
`;

export const BookItemCover = styled.Image`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

export const BookItemTitle = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const BookItemContainerDescription = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  margin-left: 10px;
`;

export const BookItemDescription = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 12px;
`;
