import React from 'react';
import {Text,View,Stylesheet} from 'react-native';


const Studentscreen = () => {
    return(
       
            
            <View>
            <Text style={styles.text}>Students Details Component</Text>
            <StudentDetails name="Arion" description="Arion Instruktor"/>
            <StudentDetails name="Arber" description="Arber Nxenes Shembullor"/>
            <StudentDetails name="Endrit" description="Endrit Instruktor"/>

        </View>
       
    );
}
    const styles = Stylesheet.create({
        text: {
            textAlign: 'center',
            fontSize:20,
            marginVertical:20
        },

    });
    export default Studentscreen;


