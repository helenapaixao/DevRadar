import React, {useEffect, useState} from 'react';
import { StyleSheet,Image,View,Text } from 'react-native'
import MapView, { Marker,Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';


function Main({navigation}) {

  const [currentRegion,setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const {granted } = await requestPermissionsAsync();
        if(granted) {
          const {coords} = await getCurrentPositionAsync({
            enableHighAccuracy: true,
          });
          const {latitude, longitude} = coords;

          setCurrentRegion({
            latitude,
            longitude,
            latitudeDelta: 0.04,
            longitudeDelta:0.04,
          })
        }
    }
    loadInitialPosition();
  },[]);

  if(!currentRegion) {
    return null;
  }
  return (
  <MapView initialRegion={currentRegion} style={styles.map}>
    <Marker coordinate={{latitude: -20.4868923, longitude: -54.5960898 }}>
     <Image style={styles.avatar} source={{uri: 'https://avatars1.githubusercontent.com/u/11083288?s=460&v=4'}}/>
     <Callout onPress={() => {
       //navegação
       navigation.navigate('Profile', {github_username: 'helenapaixao'});

     }}>
      <View style={styles.callout}/>
      <Text style={styles.devName}>Helena Paixão</Text>
      <Text style={styles.devBio}>Engenharia de Software-UFMS</Text>
      <Text style={styles.devTechs}>ReactJS, React Native, Node.js</Text>
     </Callout>
      </Marker>
    </MapView>
  );
}

const styles  = StyleSheet.create({
  map: {

    flex:1
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius:4,
    borderWidth: 4,
    borderColor: '#FFF'
  },
  callout: {
    width: 260,
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  devBio: {
    color: '#666',
    marginTop: 5,
  },
  devTechs: {
    marginTop: 5,
  }
})

export default Main;
