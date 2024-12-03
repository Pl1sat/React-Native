import React from 'react';
import {Text,View,Stylesheet} from 'react-native';

const StudentDetails = () => {
    return(
        
            <View style={styles.text}>
            <View style={styles.cardWrapper}></View>
            <View style={styles.imgWrapper}></View>
            <View style={styles.infoWrapper}></View>
            <Text style={styles.name}>{props.name}</Text>
            <Text>{props.description}</Text>

        </View>

    );

}
const styles = StyleSheet.create({
   text: {
       textAlign: 'center',
        fontSize:20,
        marginVertical:20
    },
    cardWrapper:{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        width: '90%',
        alignSelf:'center',
        marginBottom: 15
    },
    infoWrapper: {
        marginLeft: 20,
        marginTop:20
    },
    name: {
        fontWeight: 'bold'
    }

});
export default StudentDetails;

