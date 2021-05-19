import * as React from 'react';
import{TextInput,View,StyleSheet,TouchableOpacity,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import {Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config'


submitStory=async()=>{
   db.collection("stories").add({
       author:this.state.author,
       story:this.state.story,
       title:this.state.title
   })
   ToastAndroid.show("Your story has been submitted",ToastAndroid.LONG)

  }


export default class WriteStoryScreen extends React.component{
    constructor(){
        super();
        this.state={
            author:"",
            title:"",
            story:""
        }
    }
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
                onChangeText={(text)=>{
                    this.setState({title:text})
                }}
                value={this.state.title}
                placeholder="Title Of Story"
                style={styles.textinput}
                />
                <TextInput
                 onChangeText={(text)=>{
                    this.setState({author:text})
                }}
                value={this.state.author}
                style={styles.textinput}
                placeholder="Author Of Story"
                />
                <TextInput
                onChangeText={(text)=>{
                    this.setState({story:text})
                }}
                value={this.state.story}
                style={styles.textinput}
                placeholder="writeStory"
                />

            <TouchableOpacity style={styles.button} 
            onPress={()=>{
                if(this.state.author&&this.state.story&&this.state.title){
                    this.submitStory()
                }else{
                    ToastAndroid.show("You have to fill all the inputs",ToastAndroid.LONG)
                }
                
            }}
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
    },

    textinput :{
        borderWidth:0.5,
        padding:10
    }

    
  });
