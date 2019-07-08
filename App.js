/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import styles from './src/css/style';
import Splash from './src/screen/splash';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App = () => {
//   return (
//     <View>
//       <Text>
//         Hello World
//       </Text>
//     </View>
//   );
// };

export default class App extends Component 
{

  constructor(props)
  {
    super(props)
    {
      this.state = {
        isLoading: false
      }
    }
  }

  componentDidMount()
  {

  }

  SplashHandle = () =>
  {
      setTimeout(function(){
        
      })
  }

  render() 
  {

    if(this.state.isLoading)
    {
      return <Splash/>;
    }

    return (
      <View>
        <Text>
          Text
        </Text>
      </View>
    );
  }
}



// export default App;
