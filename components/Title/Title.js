import React from "react";
import { Text } from "react-native";
import style from "./style";
import propTypes from "prop-types";

const Title = props => {
    return <Text style={style.tile}> {props.title} </Text>;
}

Title.PropTypes = {
    title: propTypes.string.isRequired,
}

export default Title; 