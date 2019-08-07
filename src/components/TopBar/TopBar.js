import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';

import Images from '@images';

import {
  Background,
  TitleText,
  IconSpace,
} from './StyledTopBar';


const TopBar = ({ leftIcon, leftIconAction, title, rightIcon, rightIconAction }) => {
  return (
    <Background>
      <IconSpace onPress={leftIconAction}>{leftIcon && <Image source={Images[leftIcon]} />}</IconSpace>
      <View>
        <TitleText>{title}</TitleText>
      </View>
      <IconSpace onPress={rightIconAction}>{rightIcon && <Image source={Images[rightIcon]} />}</IconSpace>
    </Background>
  );
};

TopBar.propTypes = {
  leftIcon: PropTypes.string,
  leftIconAction: PropTypes.func,
  title: PropTypes.string.isRequired,
  rightIcon: PropTypes.string,
  rightIconAction: PropTypes.func,
};

TopBar.defaultProps = {
  leftIcon: null,
  rightIcon: null,
  leftIconAction: () => {},
  rightIconAction: () => {},
};

export default TopBar;
