import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import style from "./style";
import PropTypes from 'prop-types';
import UserStory from '../UserStory/UserStory';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faEllipsis, faHeart, faComment, faBookmark } from "@fortawesome/free-solid-svg-icons";

const Post = props => {
    return (
        <View style={style.container}>
            <View style={style.header}>
            <View style={style.profileInfo}>
                <UserStory
                    firstName={props.firstName}
                    profileImage={props.profileImage}
                    dimensions={45}
                />
            <View>
                <Text style={style.profileName}>{props.fullname}</Text>
                <Text>{props.location}</Text>
            </View>
            </View>
                <FontAwesomeIcon icon={faEllipsis} color={"#898DAF"} size={28}/>
            </View>
            <Image
                source={props.postImage}
                style={style.image}
                resizeMode="cover"
            />
            <View style={style.actions_header}>
                <View style={style.actions}>
                    <TouchableOpacity>
                    <FontAwesomeIcon icon={faHeart} size={20}/>
                    </TouchableOpacity>
                    <Text>{props.likes}</Text>
                </View>
                <View style={style.actions}>
                    <TouchableOpacity>
                    <FontAwesomeIcon icon={faComment} size={20}/>
                    </TouchableOpacity>
                    <Text>{props.comments}</Text>
                </View>
                <View style={style.actions}>
                    <TouchableOpacity>
                    <FontAwesomeIcon icon={faBookmark} size={20}/>
                    </TouchableOpacity>
                    <Text>{props.saves}</Text>
                </View>
                
                
            </View>

            
            
        </View>
    );
  };


  Post.defaultProps = {
    likes:1201,
    comments:24,
    saves:65
}


  export default Post; 