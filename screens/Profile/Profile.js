import React from "react";
import { SafeAreaView, Text, Touchable, TouchableOpacity } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Text style={{ color: "blue" }}>Späť</Text>
            </TouchableOpacity>
            <Text>Welcome to Profile page!</Text>
        </SafeAreaView >
    );
};

export default Profile;