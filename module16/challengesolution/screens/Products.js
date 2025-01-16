import React from 'react';
import {View,Text,Stylesheet,Image} from 'react-native'

const Products = (props)=> {
    return(
        <View style={style.cardContainer}>
            <Image source={{uri:`${props.img}`}} style={style.img}/>
            <View>
            <Text>{props.name}</Text>
            <Text>{props.desc}</Text>
            <View style={style.footer}>
                <Text>Stock: {props.stock}</Text>
                <Text>Price: {props.price}</Text>
            </View>
            </View>

        </View>
    )
}
const style=StyleSheet.create({
    cardContainer:{
        backgroundColor:"white",
        marginBottom:10,
        borderRadius:10
    },
    img:{
        width:250,
        height:100,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    footer:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
    }
})

export default Products;