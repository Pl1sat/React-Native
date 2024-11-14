import React from "react"
import {Text, Stylesheet, View, FlatList} from "react-native"


const students=[
    {name:"Arianit", age:17,},
    {name:"Arber", age:17,},
    {name:"Amari", age:15,},
    {name:"Orkidea", age:19,},
    {name:"Festimi", age:17,},
]
const FlatListExample=()=><view>
    <Text style= {stili.textEdit}>This is the Flatlist Screen</Text> 
    <FlatList
    dara={students}
    renderItem={({item})=>{
        return <Text>{item.name} - {item.age}</Text>

    }}/>
</view>
const stili=Stylesheet.create({
textEdit:{
    fontSize:20,
    backgroundcolor:'blue'
}
})
textEdit
export default FlatListExample;