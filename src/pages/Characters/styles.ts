import styled from 'styled-components/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View``;

export const CharactersList = styled.FlatList`
  margin-top: 10px;
`;

export const ItemSeparator = styled.View`
  height: 10px;
`;

export const Icon = styled(IconFontAwesome).attrs((props) => ({
  name: props.name,
  size: props.size,
  color: props.theme.colors.black,
}))`
  width: 30px;
`;

export const CharacterItem = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;

  background-color: #fff;
  border-radius: ${({ theme }) => theme.metrics.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.gray200};

  padding-horizontal: 10px;
  height:60px
  margin: 0px 10px;
`;

export const CharacterItemTitle = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const CharacterItemContentRight = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const BookCountBadge = styled.View`
  width: 30px;
  height: 30px;
  margin-left: -5px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.gray200};

  justify-content: center;
  align-items: center;
`;

export const BookCountText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;
