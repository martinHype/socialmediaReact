import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import style from "./style";
import UserProfileImage from "../UserProfileImage/UserProfileImage";


const UserStory = props => {
    return (
        <View style={style.storyContainer}>
            <UserProfileImage
                profileImage={props.profileImage}
                imageDimensions={props.dimensions}
            />
            {props.firstName != null  && <Text style={style.firstName}>{props.firstName}</Text>}
        </View>
    );
};

UserStory.prototype = {
    firstName: PropTypes.string.isRequired,
    profileImage: PropTypes.any.isRequired,
};

UserStory.defaultProps = {
    dimensions:65,
}

export default UserStory;