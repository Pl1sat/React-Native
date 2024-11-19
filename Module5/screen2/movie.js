import React from "react";
import {View,Text} from "react-native"


const Movie =()=>{
    const movieName = "Spiderman"
    const type="Tv show"
    const year=2021
    actors=["Tobey Maguire","Cliff Robertson","J.K Simmons"]

}
    return(

        <View>
            {/*Characters*/}
            <Text>Movie:{movieName}</Text>
            <Text>Type: {type}</Text>
            <Text>Year: {year}</Text>
          
            <Flatlist
            data={actors}
            renderItem={({item})=><Text>{item}</Text>}/>
            return <Text>{item}</Text>


        </View>
    )

export default Movie