import React from 'react';
import {View,Text,StyleSheet,Dimensions,ImageBackground,TouchableHighlight} from 'react-native';
import ImageRender from '../assets/image';

let {height,width} = Dimensions.get('window');

export default class Book extends React.Component{

    render(){
        const id = this.props.navigation.getParam('id');
        const title = this.props.navigation.getParam('title');
        const author = this.props.navigation.getParam('author');
        return(
            <View style={{flex : 1,alignItems:'center'}}>
                <ImageBackground style={styles.imageBackground} source={require('../assets/images/background.png')}>
                    <ImageRender id={id} style={styles.image} resizeMode="contain"/>
                </ImageBackground>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>by {author}</Text>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>Add Book</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageBackground : {
        alignItems:'center',
        height : height *0.45,
        width : width
    },
    image : {
        marginTop : width*0.05,
        height : height*0.4,
    },
    title : {
        paddingTop : 10,
        fontSize : 25,
        fontWeight : '500',
        textAlign : 'center'
    },
    author:{
        textAlign : 'center'
    },
    button : {
        margin: 20,
        backgroundColor : '#00F700',
        height : height*0.09,
        width : width*0.4
    },
    buttonText:{
        padding : 10,
        fontSize : 25,
        fontWeight : '500',
        textAlign : 'center',
        color : "#fff"
    }
})