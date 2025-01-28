import { View, Text, StyleSheet, Dimensions,Image } from 'react-native';
import Swiper from 'react-native-swiper';

const AdvSwiper = () => {
  return (
    <Swiper
      showButtons
      loop
      autoplay
      autoplayTimeout={3}
    >
    <Image
    source={{uri:'https://picsum.photos/400/300?random=1'}}
    style={style.img}
    />
    <Image
    source={{uri:'https://picsum.photos/400/300?random=2'}}
    style={style.img}
    />
    <Image
    source={{uri:'https://picsum.photos/400/300?random=3'}}
    style={style.img}
    />
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
    },
    img:{
        width:'100%',
        height:"100%"
    }
 })
export default AdvSwiper;

