import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { BackgroundImage, VenueName, VenueCategory } from './StyledVenueButton';

import Images from '@images';

const VenueButton = ({ venue, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <BackgroundImage source={{ uri: venue.backgroundImageURL }}>
        <BackgroundImage style={{ paddingLeft: 12 }} source={Images.cellGradientBackground}>
          <View style={{ alignItems: 'flex-start', justifyContent: 'flex-end', flex: 1 }}>
            <VenueName>{venue.name}</VenueName>
            <VenueCategory>{venue.category}</VenueCategory>
          </View>
        </BackgroundImage>
      </BackgroundImage>
    </TouchableOpacity>
  );
};

VenueButton.propTypes = {
  venue: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default VenueButton;
