import { StyleSheet,Dimensions } from 'react-native';

const resizeMode = 'contain';
const padding = 13;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#ffffff"
    },

    topContainer:{
        flex:1,
        paddingHorizontal:15,
        paddingBottom: padding,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#FF553F",
    },

    image:{
        height: 100,
        width: 100,
        backgroundColor: "transparent",
        marginBottom: padding,
        resizeMode
    },

    title:{
        fontSize: 30,
        lineHeight: 30,
        color: "#ffffff",
        letterSpacing: 1
    },

    subText:{
        color: "#414141",
        fontSize: 21,
        lineHeight: 31,
        marginVertical:padding * 2
    },

    //===============================

    bottomContainer:{
        backgroundColor:"white",
        paddingVertical: padding * 3,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },

    buttonContainer:{
        justifyContent:"center",
        alignItems:"center"
    },

    containerView:{
        width: windowWidth - 40
    },

    socialButton:{
        height: 55,
        borderRadius:4,
        marginTop:0,
        marginBottom:0
    },

    button:{
        backgroundColor: "#FF553F",
        height: 55
    },

    buttonText:{
        fontSize: 14,
    },

    signInText:{
        fontSize: 12,
        color: "#FF553F",
    },

    orContainer:{
        justifyContent:"center",
        alignItems:"center",
        height: 40,
        width: windowWidth
    },

    divider:{
        backgroundColor: '#D0D5DA',
        position:"absolute",
        top:19,
        left: 20,
        right: 20
    },

    orText:{
        backgroundColor: "#ffffff",
        fontSize: 12,
        color: "#414141",
        paddingHorizontal: padding
    }
});

export default styles;