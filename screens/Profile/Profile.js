import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,SafeAreaView } from 'react-native';
import globalStyle from "../../assets/styles/globalStyle";
import styles from './style';
import postimage from '../../assets/images/default_post.png';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ navigation }) => {
    const imageArray = [
        { name: 'Image 1', image: postimage },
        { name: 'Image 2', image: postimage },
        { name: 'Image 3', image: postimage },
        { name: 'Image 4', image: postimage },
        { name: 'Image 5', image: postimage },
        { name: 'Image 6', image: postimage },
      ];
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <TouchableOpacity style ={{margin:10}}onPress={() => { navigation.goBack() }}>
                <FontAwesomeIcon icon={faArrowLeft} size={30} color="#bbb"/>
            </TouchableOpacity>
            {/* Profile Header */}
            <View style={styles.profileHeader}>
                <View style={styles.profileImageContainer}>
                <View style={styles.profileImage}></View>
            </View>
            {/* Stats Section */}
            <View style={styles.statsContainer}>
                <View style={styles.statBox}>
                <Text style={styles.statNumber}>45</Text>
                <Text style={styles.statLabel}>Following</Text>
                </View>
                <View style={styles.statBox}>
                <Text style={styles.statNumber}>30M</Text>
                <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.statBox}>
                <Text style={styles.statNumber}>100</Text>
                <Text style={styles.statLabel}>Posts</Text>
                </View>
            </View>
                <Text style={styles.profileName}>Emmanuel Robertsen</Text>
            </View>
            {/* Tabs Section */}
            <View style={styles.tabsContainer}>
                <TouchableOpacity style={styles.tab}>
                <Text style={[styles.tabText, styles.activeTabText]}>Photos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                <Text style={styles.tabText}>Videos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                <Text style={styles.tabText}>Saved</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.gridContainer}>
            {imageArray.map((item, index) => (
                <Image
                style={styles.gridImage}
                source={item.image}
                />
        ))}
            </View>
        </SafeAreaView >
    );
};

export default Profile;