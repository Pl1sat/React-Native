import React from 'react';
import {View,Text,FlatList,Stylesheet} from 'react-native'
import data from '../Data/countries.json'


class CountrieScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            countries: []
        }
    }

    componentDidMount(){
        this.setState({
            countries:data 
        })

    }

    render(){
<View>
    <Text style={styles.screenTitle}>Countries Screen</Text>
    <FlatList data={this.state.countries}
    keyExtractor={countries => countries.id}
    renderItem={({item}) => {

        <View style={styles.cardWrapper}>
            <Text>City name: {item.name}</Text>
            <Text>Country name: {item.country}</Text>
            <Text>Country name: {item.country}</Text>
            <Text>City description: {item.description}</Text>
            </View>
    }}
    />

</View>
    }

}
const styles = StyleSheet.create({
    screenTitle: {
        fontSize:20,
        color:'red',
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: 'bold'
    }
})
export default CountrieScreen;