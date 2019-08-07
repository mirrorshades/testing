import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components';

const { width, height } = Dimensions.get('window');
export const screenHeight = width < height ? height : width;
export const screenWidth = width < height ? width : height;
