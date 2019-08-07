import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

export const BackgroundImage = styled.ImageBackground`
  height: 180px;
  width: ${screenWidth}px;
`;

export const VenueName = styled.Text`
  font-size: 16px;
  line-height: 17px;
  color: ${props => props.theme.colors.text.light};
  font-family: 'AvenirNext-DemiBold';
  margin-bottom: 6px;
`;
export const VenueCategory = styled.Text`
  font-size: 12px;
  line-height: 13px;
  color: ${props => props.theme.colors.text.light};
  font-family: 'AvenirNext-Regular';
  margin-bottom: 6px;
`;
