import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

export const Container = styled.ScrollView.attrs((props) => ({
  contentContainerStyle: {
    flex: 1,
  },
}))`
  padding: 20px;
  background-color: #fff;
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.View`
  height: ${Dimensions.get('window').width / 3}px;
  justify-content: center;
  align-items: center;
`;

export const ContainerHeadDescription = styled.View`
  padding: 20px;
  margin: 10px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.metrics.borderRadius};
`;

export const ContainerBodyDescription = styled(ContainerHeadDescription)`
  margin: 5px 0px;
  padding: 0px 20px;
  background-color: transparent;
`;

export const DescriptionLabel = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const DescriptionText = styled.Text`
  font-size: 16px;
`;

export const Icon = styled(IconFontAwesome).attrs((props) => ({
  name: props.name,
  size: props.size,
  color: props.theme.colors.black,
}))``;

export const Name = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
`;

export const BookItem = styled.View`
  padding: 5px;
`;

export const BookCover = styled.Image`
  margin-top: 5px;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.gray100};
`;
