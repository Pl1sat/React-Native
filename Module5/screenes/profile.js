import React from "react";
import {View,Text ,Flatlist,Stulesheet} from "react-native"


const Profile=()=>{
    const firstName="Arber";
    const lastName="Qeriqi";
    let FullName= `${firsName} ${LastName}`;
    const birthday="2011-17-05"
    const hobbies=["Reading","Coding","Gaming","Football"];

    return(

        <View>
            {/*Personal info*/}
            <Text>Personal Info</Text>
            <Text>Fullname: {FullName}</Text>
            <Text>birdhay: {birthday}</Text>
            {/*Hobbies section     */}
            <Text>Hobbies</Text>
            <Flatlist
            data={hobbies}
            renderItem={({item})=><Text>{item}</Text>}/>



        </View>
    )
}
export default Profile