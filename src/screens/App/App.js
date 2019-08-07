import React, { useEffect, useState, useContext, useRef } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Grid, Section, Block } from 'react-native-responsive-layout';

import TopBar from '@components/TopBar/TopBar';
import Images from '@images';
import { screenWidth } from '@utils';

import { Container, ContainerCenter, BodyText, VenueDetails, VenueLabel, VenueName, VenueCategory } from './StyledApp';
import VenueButton from './VenueButton';

const ListView = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentVenue, setCurrentVenue] = useState(null);
  const myDrawer = useRef();

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(
          'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json'
        ).then(res => res.json());
        setData(response);
        console.log(response);
      } catch (error) {
        // Do some error handling/logging
        console.log(error);
      }

      setLoading(false);
    };

    fetchAPI();
  }, []);

  if (loading) {
    return (
      <ContainerCenter>
        <Text>Loading ...</Text>
      </ContainerCenter>
    );
  }

  const closeDrawer = () => {
    setCurrentVenue(null);
    myDrawer.current.closeDrawer();
  };

  const openDrawer = () => {
    myDrawer.current.openDrawer();
  };

  const handlePressVenue = venue => {
    setCurrentVenue(venue);
    openDrawer();
  };

  const mapStyle = [];

  const renderDetails = () => {
    if (!currentVenue) return null;

    return (
      <Container>
        <TopBar leftIcon="backArrow" leftIconAction={closeDrawer} title="Lunch Thyme" rightIcon="icon_map" />
        <Grid>
          <Section>
            <Block size="1/1" lgSize="1/2">
              <MapView
                provider={PROVIDER_GOOGLE}
                customMapStyle={mapStyle}
                style={{
                  width: '100%',
                  height: 180,
                }}
                initialRegion={{
                  latitude: currentVenue.location.lat,
                  longitude: currentVenue.location.lng,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: currentVenue.location.lat,
                    longitude: currentVenue.location.lng,
                  }}
                  title={currentVenue.name}
                  description={currentVenue.category}
                />
              </MapView>
            </Block>
            <Block size="1/1" lgSize="1/2">
              <VenueLabel>
                <VenueName>{currentVenue.name}</VenueName>
                <VenueCategory>{currentVenue.category}</VenueCategory>
              </VenueLabel>

              <VenueDetails>
                <BodyText>
                  {currentVenue.location.address}
                  {'\n'}
                  {currentVenue.location.city}, {currentVenue.location.state} {currentVenue.location.postalCode}
                </BodyText>

                {currentVenue.contact && typeof currentVenue.contact.formattedPhone !== 'undefined' && (
                  <BodyText>{currentVenue.contact.formattedPhone}</BodyText>
                )}
                {currentVenue.contact && typeof currentVenue.contact.twitter !== 'undefined' && (
                  <BodyText>@{currentVenue.contact.twitter}</BodyText>
                )}
              </VenueDetails>
            </Block>
          </Section>
        </Grid>
      </Container>
    );
  };

  return (
    <DrawerLayout
      drawerWidth={screenWidth}
      drawerPosition={DrawerLayout.positions.Right}
      drawerType="front"
      drawerBackgroundColor="#ddd"
      renderNavigationView={renderDetails}
      ref={myDrawer}
    >
      <Container>
        <TopBar title="Lunch Thyme" rightIcon="icon_map" />
        <ScrollView>
          <Grid>
            <Section>
              {data.restaurants.map((item, index) => (
                <Block key={`${item.name}-${index}}`} size="1/1" lgSize="1/2">
                  <VenueButton venue={item} index={index} onPress={() => handlePressVenue(item)} />
                </Block>
              ))}
            </Section>
          </Grid>
        </ScrollView>
      </Container>
    </DrawerLayout>
  );
};

export default ListView;
