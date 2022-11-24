import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {IMAGES} from '../assets';
const RECOMMENDED_ARRAY=[
  {
    id:'1',
    image: IMAGES.MEXICO,
    title: 'The Gudvangen Village',
    city: 'Mexico',
    rate: '5.0',
  },
  {
    id:'2',
    image: IMAGES.ITALY,
    title: 'The Pratyush gghhg',
    city: 'italy',
    rate: '5.0',
  },
  {
    id:'3',
    image: IMAGES.NAGALAND,
    title: 'The Pratyush gghhg',
    city: 'Nagaland',
    rate: '5.0',
  },
  
]

const DetailScreen = () => {
  // const Country =[
  //   {
  //     id: 'Country1',
  //     Image: IMAGES.MEXICO,
  //   }
  // ]
  return (
    <SafeAreaView>
      <View style={styles.mainview}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="format-align-justify" size={20} color={'white'} />
          <Fontisto name="bell" size={20} color={'white'} />
        </View>
        <View style={styles.preview}>
          <Text style={styles.pretext}>Explore the beautiful places</Text>
        </View>
      </View>
      <View style={styles.inputview}>
        <View style={styles.input}>
          <EvilIcons name="search" size={30} color={'black'} />
          <TextInput placeholder="search places" />
        </View>
      </View>
      <View style={styles.icons}>
        <View style={styles.preicons}>
          <Entypo name="aircraft" size={25} color={'#04555c'} />
        </View>
        <View style={styles.preicons}>
          <FontAwesome5 name="umbrella-beach" size={25} color={'#04555c'} />
        </View>
        <View style={styles.preicons}>
          <Ionicons name="bonfire" size={25} color={'#04555c'} />
        </View>
        <View style={styles.preicons}>
          <Fontisto name="cocktail" size={25} color={'#04555c'} />
        </View>
      </View>
      <View style={styles.maintext}>
        <Text style={styles.primarytext}>Recommended</Text>
      </View>
      <View style={{flexDirection:'row',marginVertical:30}}>
        <View style={{marginHorizontal: 20}}>
          <FlatList horizontal={true} data={RECOMMENDED_ARRAY} renderItem={({item})=>(
           <View style={{margin:10}}>

            <ImageBackground
            source={item.image}
            style={{width: 220, height: 260,}}
            imageStyle={{borderRadius: 15}}>
            <View style={styles.imgview}>
              <Text style={styles.imgtext}>{item.title}</Text>
            </View>
            <View style={styles.maincontainer}>
              <View style={styles.iconcontainer}>
                <View>
                  <Entypo name='location-pin' size={25} color={'white'}/>
                </View>
                <View>
                  <Text style={{color:'white',fontSize:15}}>{item.city}</Text>
                </View>
              </View>
              <View style={styles.rate}>
                <View>
                  <Entypo name='star-outlined' size={25} color={'white'}/>
                </View>
                <View>
                  <Text style={{color:'white',fontSize:15,marginLeft:5}}>{item.rate}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
           </View>
          )}/>
        </View>
       
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: '#04555c',
    height: 220,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  preview: {
    marginHorizontal: 30,
    marginVertical: 20,
    width: 200,
  },
  pretext: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 35,
    letterSpacing: 1,
  },
  input: {
    borderWidth: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 30,
    borderColor: 'white',
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  inputview: {
    marginTop: -25,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 35,
    marginHorizontal: 10,
  },
  preicons: {
    backgroundColor: '#e4eced',
    height: 50,
    padding: 10,
    borderRadius: 10,
    width: 50,
  },
  maintext: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  primarytext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  imgview:{
    marginLeft:20,
    marginVertical:10
  },
  imgtext:{
    width:150,
    fontWeight:'bold',
    fontSize:20,
    color:'white',
    lineHeight:25,
  },
  iconcontainer:{
    flexDirection:'row',
    alignItems:'center',
    // marginTop:120,
    // marginHorizontal:20,

  },
  rate:{
    flexDirection:'row',
    alignItems:'center',
    // marginTop:120,
  },
  maincontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    marginTop:140,
  }
});
