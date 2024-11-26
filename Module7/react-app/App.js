import { StyleSheet, Text, View } from 'react-native';
import MenuScreen from "./screen/MenuScreen";
// export default function App() {
//   return (
   
//       <MenuScreen></MenuScreen>
   
//   );
// }

const navigator = createStackNavigator({
  Menu: MenuScreen
},
{
  intialRouteName: 'Menu',
  defaultNavigatorOptions: {
    title: 'App'
  }
}
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default createAppContainer(navigator);