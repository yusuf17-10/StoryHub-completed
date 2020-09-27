import * as React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component {
  render(){
    return(
      <AppContainer/>
    )
  }
}

var AppNavigator = createBottomTabNavigator({
  WriteStoryScreen:{screen:WriteStoryScreen},
  ReadStoryScreen:{screen:ReadStoryScreen}
},
{
  defualtNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName = navigation.state.routeName

      if(routeName==="WriteStoryScreen"){
        return(
          <Image
          source = {require("./assets/write.png")}
          style={{width:30,height:30}}
          />
            
          
        )
      }else if(routeName = "ReadStoryScreen"){
        return(
          <Image
          source = {require("./assets/read.png")}
          style={{width:30,height:30}}
          />
        )
      }

    }
  })
})

const AppContainer = createAppContainer(AppNavigator);


