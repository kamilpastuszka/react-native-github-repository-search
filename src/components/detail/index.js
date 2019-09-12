import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Card, CardItem, Text, Body, Left, Thumbnail} from 'native-base';

export default function DetailComponent({
  name,
  description,
  ownerAvatar,
  ownerLogin,
  fullName,
  stars,
  watchers,
  forks,
}) {
  return (
    <>
      <View style={styles.detailContainerView}>
        <Card>
          <CardItem header bordered style={styles.headerView}>
            <Text style={styles.textHeader}>Title</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>{name}</Text>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered style={styles.headerView}>
            <Text style={styles.textHeader}>Description</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>{description}</Text>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered style={styles.headerView}>
            <Text style={styles.textHeader}>Owner</Text>
          </CardItem>
          <CardItem>
            <Left>
              <Image source={{uri: ownerAvatar}} style={styles.avatarImg} />
              <Body>
                <Text>{ownerLogin}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered style={styles.headerView}>
            <Text style={styles.textHeader}>Details</Text>
          </CardItem>
          <CardItem bordered>
            <Body style={styles.detailsCardBody}>
              <View style={styles.detailCardBodyView}>
                <Text>Stars: {stars} </Text>
              </View>
              <View style={styles.detailCardBodyView}>
                <Text>Forks: {forks}</Text>
              </View>
              <View style={styles.detailCardBodyView}>
                <Text>Watchers: {watchers} </Text>
              </View>
            </Body>
          </CardItem>
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  detailContainerView: {
    flex: 1,
    marginVertical: '5%',
    marginHorizontal: '5%',
  },
  headerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textHeader: {
    textAlign: 'center',
    color: 'white',
  },
  detailsCardBody: {
    flexDirection: 'row',
    flex: 1,
  },
  detailCardBodyView: {
    flex: 1,
  },
  avatarImg: {
    width: 65,
    height: 65,
    borderRadius: 37.5,
  },
});
