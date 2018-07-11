import React from 'react';
import { Image } from 'react-native'

const imagerender = (props) => {
    let imageSource = require("./images/things-fall-apart.jpg")
    switch (props.id) {
        case 1:
            imageSource = require("./images/fairy-tales.jpg")
            break;
        case 2:
            imageSource = require("./images/the-divine-comedy.jpg")
            break;
        case 3:
            imageSource = require("./images/the-epic-of-gilgamesh.jpg")
            break;
        case 4:
            imageSource = require("./images/the-book-of-job.jpg")
            break;
        case 5:
            imageSource = require("./images/one-thousand-and-one-nights.jpg")
            break;
        case 6:
            imageSource = require("./images/njals-saga.jpg")
            break;
        case 7:
            imageSource = require("./images/pride-and-prejudice.jpg")
            break;
        case 8:
            imageSource = require("./images/le-pere-goriot.jpg")
            break;
        case 9:
            imageSource = require("./images/molloy-malone-dies-the-unnamable.jpg")
            break;
        case 10:
            imageSource = require("./images/the-decameron.jpg")
            break;
        case 11:
            imageSource = require("./images/ficciones.jpg")
            break;
        case 12:
            imageSource = require("./images/wuthering-heights.jpg")
            break;
        case 13:
            imageSource = require("./images/l-etranger.jpg")
            break;
        case 14:
            imageSource = require("./images/poems-paul-celan.jpg")
            break;
        case 15:
            imageSource = require("./images/voyage-au-bout-de-la-nuit.jpg")
            break;
        default:
            break;
    }
    return (
        <Image source={imageSource} style={props.style} resizeMode={props.resizeMode}/>
    )
}

export default imagerender;