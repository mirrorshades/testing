import styled from 'styled-components';

export const Background = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.topbar};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: ${props => props.theme.colors.text.light};
  font-family: 'AvenirNext-DemiBold';
  font-size: 17px;
  padding: 15px 0;
`;

export const IconSpace = styled.TouchableOpacity`
  margin: 0 10px;
  width: 30px;
`;