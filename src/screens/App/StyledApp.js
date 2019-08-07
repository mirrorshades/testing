import styled from 'styled-components';
import { screenHeight, screenWidth } from '@utils';

export const Container = styled.View`
  height: ${screenHeight}px;
  width: ${screenWidth}px;
  background: #ffffff;
`;

export const ContainerCenter = styled.View`
  height: ${screenHeight}px;
  width: ${screenWidth}px;
  align-items: center;
  justify-content: center;
`;

export const VenueLabel = styled.View`
  background-color: ${props => props.theme.colors.brand.primary};
  width: ${screenWidth}px;
  height: 60px;
  padding: 0 12px;
  justify-content: center;
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
`;

export const BodyText = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.text.dark};
  font-family: 'AvenirNext-Regular';
  margin-bottom: 26px;
`;

export const VenueDetails = styled.View`
  margin-top: 16px;
  padding: 0 12px;
`;
