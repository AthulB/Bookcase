import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  TextInput,
  Dimensions,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';
import PopupDialog, { SlideAnimation,DialogTitle } from 'react-native-popup-dialog';
import {Icon} from 'react-native-elements';
import KeyboardSpacer from 'react-native-keyboard-spacer';

let {height,width} = Dimensions.get('window');



export default class Profile extends React.Component {
  state = {
    imgUri: this.props.screenProps.photoUrl,
    name : this.props.screenProps.name,
    inputField : false,
  }

  inputFieldHandler = () => {
    let value = this.state.inputField;
    this.setState({inputField : !value})
  }

  submitEditHandler = () => {
    this.setState({inputField : false})
  }
  render() {
    let image = <Image style={styles.image} source={require('../assets/images/default-person.png')} />

    let iconEdit = <Icon name="edit" type="entypo" size = {30}/>

    if(this.state.imgUri){
      image = <Image ref={(ref) => this.imageView = ref}
      style={styles.image}
      source={{ uri: this.state.imgUri }}
    />
    }
    const slideAnimation = new SlideAnimation({
      slideFrom: 'bottom',
    });

    if(this.state.inputField){     
      iconEdit = <Icon name="check" type="entypo" size = {40}/>
    }

    return (
     <KeyboardAvoidingView behavior="padding" enabled style={{flex : 1, backgroundColor: '#F5FCFF'}}>
      <ScrollView style={{flex : 1}}>
        
        {/* // The image to display (null by default) */}
        <View style={styles.profileContainer}>
          <View style={styles.background}>
            <TouchableOpacity onPress={() => {
              this.popupDialog.show();
            }}>
            {image}
            </TouchableOpacity>
          </View>   
          <View style={{alignSelf : 'center', marginTop : 20}}>
            <Text style={styles.text}>Username :</Text>
          </View>
          <View style={[styles.nameContainer]}>
            
            <TextInput
                  style={styles.textInput}
                  minWidth = {320}
                  onSubmitEditing={this.submitEditHandler}
                  autoCorrect={false}
                  onChangeText={(name) => this.setState({name : name})}
                  value={this.state.name}
                  editable={this.state.inputField}
                  underlineColorAndroid = 'white' />
            <TouchableHighlight onPress={this.inputFieldHandler} style={styles.icon}>
              {iconEdit}
            </TouchableHighlight>           
          </View>
        </View>  
        {/* <KeyboardSpacer /> */}
      </ScrollView>
      <PopupDialog
      dismissOnTouchOutside={true}
      width = {width*0.7}
      height = {height*0.3}
      dialogTitle={<DialogTitle title="Profile Photo" />}
        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
        dialogAnimation={slideAnimation}
        >
        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onTakePic}>
            <Icon name="photo-camera" type="materailIcons" size={40}/>
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity> 

          <TouchableOpacity
            style={styles.button}
            onPress={this._onChoosePic}>
            <Icon name="photo-library" type="materailIcons" size={40}/>
            <Text style={styles.buttonText}>Gallery</Text>
          </TouchableOpacity>
        </View>
      </PopupDialog>
      </KeyboardAvoidingView>
    );
  }
  
  _onChoosePic = async () => {
      const {
        cancelled,
        uri,
      } = await Expo.ImagePicker.launchImageLibraryAsync();
      console.log(uri,cancelled)
      if (!cancelled) {
        this.setState({ imgUri: uri });
      } 
  }

  _onTakePic = async () => {
    const {
      cancelled,
      uri,
    } = await Expo.ImagePicker.launchCameraAsync();
    console.log(uri,cancelled);
    if (!cancelled) {
      this.setState({ imgUri: uri });
    }
  }
}

const styles = StyleSheet.create({
  textInput: {
    margin: width*0.02,
    fontSize : 25,
    borderStyle : 'solid',
    borderWidth : 2,
    borderColor : '#ccc',
    backgroundColor : '#ffffff',
    padding: width*0.02
  },
  background:{
    width : width,
    height : height * 0.4,
    justifyContent : 'center',
    alignItems: 'center'
  },
  text : {
    fontSize : 25,
    fontWeight : '500',
    paddingLeft : 10
  },
  buttonText: {
    fontSize: 21,
  },
  button: {
    padding: 13,
    margin: 15,
  },
  profileContainer: {
    flex: 1,
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'flex-start'
  },
  image:{
    width: width*0.4,
    height: width*0.4,
    padding : 10,
    margin : 10,
    borderRadius : width*0.2
  },
  nameField: {
    borderStyle : 'solid',
    borderWidth : 2,
    borderColor : '#77abc1',
    elevation : 2,
    margin : 10,

  },
  nameContainer:{
    flexDirection : 'row',
    justifyContent: 'space-around',
  },
  icon : {
    justifyContent : 'center',
  }
});