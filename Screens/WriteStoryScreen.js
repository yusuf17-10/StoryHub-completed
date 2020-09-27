import * as React from 'react';
import{TextInput,View,StyleSheet,TouchableOpacity,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import {Header} from 'react-native-elements';
import firebase from 'firebase';


SubmitStory=async({})=>{
   
  }


export default class WriteStoryScreen extends React.component{
    render(){
        return(
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Header
                    backgroundColor={"pink"}
                    centerComponent={{
                        text :'Story Hub-1',
                        style:{
                            color :'red',
                            fontSize:22,
                            fontStyle:'italic',
                        }
                    }}
                />
                <TextInput
                placeholder="Title Of Story"
                />
                <TextInput
                placeholder="Author Of Story"
                />
                <TextInput
                placeholder="writeStory"
                />

            <TouchableOpacity style={styles.button} 
            onPress={this.SubmitStory,
                ToastAndroid.show("Your Story has been submitted",ToastAndroid.SHORT)} 
            >

                <Text>Submit</Text>
            </TouchableOpacity>

            </KeyboardAvoidingView>
        
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button :{
        backgroundColor:'pink',
        alignItems:'center',
        alignSelf:'center'
    }
    
  });
