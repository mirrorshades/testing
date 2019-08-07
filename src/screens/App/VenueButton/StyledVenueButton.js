import styled from 'styled-components';
import { screenHeight, screenWidth } from '@utils';

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
