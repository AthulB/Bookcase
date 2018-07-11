import React from 'react';
import {Text, View, TouchableOpacity, Image,Alert,Button} from 'react-native';
import { SocialIcon, Divider} from 'react-native-elements'
import styles from "./styles"

export default class Login extends React.Component {

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image style={styles.image} source={require('../../../assets/images/book.png')}/>
                <Text style={styles.title}>Bookcase</Text>
            </View>

            <View style={styles.bottomContainer}>
                <View style={[styles.buttonContainer]}>
                    <SocialIcon
                        raised
                        button
                        type='facebook'
                        title='SIGN UP WITH FACEBOOK'
                        iconSize={19}
                        style={[styles.containerView, styles.socialButton]}
                        fontStyle={styles.buttonText}
                        onPress={this.props.facebook}/>

                    <View style={styles.orContainer}>
                        <Divider style={styles.divider} />
                        <Text style={styles.orText}>
                            Or
                        </Text>
                    </View>

                    <SocialIcon
                        raised
                        button
                        type='google-plus-official'
                        title='SIGN UP WITH GOOGLE'
                        iconSize={19}
                        style={[styles.containerView, styles.socialButton]}
                        fontStyle={styles.buttonText}
                        onPress={this.props.google}/>
                </View>
            </View>
        </View>
        );
    }
}