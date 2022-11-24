import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IMAGES} from '../assets';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ImageBackground source={IMAGES.MOUNTAIN} style={styles.img}>
        <View style={styles.mainview}>
          <Text style={styles.maintext}>Discover World with us</Text>
        </View>
        <View style={styles.premain}>
          <Text style={styles.pretext}>
            Client in attained hungrier from and the to before their of for
            grateful keep the feel parents.
          </Text>
        </View>
        <TouchableOpacity style={styles.bottom}  onPress={() =>
                navigation.navigate('DetailScreen')
              }>
<Text style={styles.bottomtext}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  img: {
    height: Dimensions.get('window').height,
  },
  mainview:{
    marginHorizontal:40,
   marginTop:420,
   width:185,
   
  },
  maintext:{
    fontSize:30,
    color:'white',
    lineHeight:40,
    fontWeight:'bold',
  },
  premain:{
    marginHorizontal:40,
    marginTop:20,
    width:240,
  },
  pretext:{
    color:'white',
    fontSize:15,
    lineHeight:25,
  },
  bottom:{
    borderWidth:1,
    backgroundColor:'white',
    width:100,
    borderRadius:10,
    marginHorizontal:40,
    marginTop:20,
    height:40,
    
  },
  bottomtext:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:15,
    marginTop:8,
    color:'black',
    
  },
});
