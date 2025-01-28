import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const BasicSwiper = () => {
  return (
    <Swiper
      showButtons
      loop
      autoplay
      autoplayTimeout={3}
    >
      <View style={style.slide1}>
        <Text style={style.text}>Slide 1</Text>
      </View>
      <View style={style.slide2}>
        <Text style={style.text}>Slide 2</Text>
      </View>
      <View style={style.slide3}>
        <Text style={style.text}>Slide 3</Text>
      </View>
    </Swiper>
  );
}
 const style=StyleSheet.create({
    slide1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"blue",
    },
    slide2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"red",
    },
    slide3:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"green",
    },
    text:{
        color:"fff",
        fontSize:30,
        fontWeight:"bold"
    }
 })
export default BasicSwiper;
