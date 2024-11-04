import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View, FlatList, ScrollView } from "react-native";
import { getFontFamily } from "./assets/fonts/helper";
import Title from "./components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import globalStyle from "./assets/styles/globalStyle";
import UserStory from "./components/UserStory/UserStory";
import Post from "./components/Post/Post";

const App = () => {
  const userStories = [
    {
      firstName: "Joseph",
      id: 1,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Angel",
      id: 2,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "White",
      id: 3,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Olivier",
      id: 4,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Janka",
      id: 5,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Nicolas",
      id: 6,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Adam",
      id: 7,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Noah",
      id: 8,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Nathaniel",
      id: 9,
      profileImage: require("./assets/images/default_profile.png"),
    },
  ]; 

  const userPosts =[
    {
      profileImage: require("./assets/images/default_profile.png"),
      fullname: "Allison Becker",
      location: "Sukabumi, Jawa Barat",
      id: 1,
      postImage: require("./assets/images/default_post.png"),
      likes: 1250,
      comments: 52,
      saves: 65,
    },
    {
      profileImage: require("./assets/images/default_profile.png"),
      fullname: "Jennifer Wilkson",
      location: "Bandung, Jawa Barat",
      id: 2,
      postImage: require("./assets/images/default_post.png"),
      likes: 1030,
      comments: 30,
      saves: 45,
    },
    {
      profileImage: require("./assets/images/default_profile.png"),
      fullname: "Michael Scott",
      location: "Scranton, PA",
      id: 3,
      postImage: require("./assets/images/default_post.png"),
      likes: 1520,
      comments: 60,
      saves: 70,
    },
    {
      profileImage: require("./assets/images/default_profile.png"),
      fullname: "Dwight Schrute",
      location: "Scranton, PA",
      id: 4,
      postImage: require("./assets/images/default_post.png"),
      likes: 980,
      comments: 40,
      saves: 30,
    },
    {
      profileImage: require("./assets/images/default_profile.png"),
      fullname: "Pam Beesly",
      location: "Philadelphia, PA",
      id: 5,
      postImage: require("./assets/images/default_post.png"),
      likes: 1105,
      comments: 25,
      saves: 55,
    },
    {
      profileImage: require("./assets/images/default_profile.png"),
      fullname: "Jim Halpert",
      location: "Philadelphia, PA",
      id: 6,
      postImage: require("./assets/images/default_post.png"),
      likes: 1450,
      comments: 35,
      saves: 65,
    },
    {
      profileImage: require("./assets/images/default_profile.png"),
      fullname: "Stanley Hudson",
      location: "Scranton, PA",
      id: 7,
      postImage: require("./assets/images/default_post.png"),
      likes: 850,
      comments: 15,
      saves: 20,
    },
    {
      profileImage: require("./assets/images/default_profile.png"),
      fullname: "Phyllis Vance",
      location: "Scranton, PA",
      id: 8,
      postImage: require("./assets/images/default_post.png"),
      likes: 900,
      comments: 18,
      saves: 25,
    },
  ];

  
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={globalStyle.header}>
        <Title title={"Lets Explore"}/>
        <TouchableOpacity style={globalStyle.envelopeIcon}>
        <FontAwesomeIcon icon={faEnvelope} color={"#898DAF"} size={20}/>
        <View style={globalStyle.messageNumberContainer}>
          <Text style={globalStyle.messageNumber}>
            2
          </Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStories}
          renderItem={({ item }) =>
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          }
        />
      </View>
      <View style={{flex:1}}>
      <FlatList
      showsVerticalScrollIndicator={true}
      horizontal={false}
      styl={{paddingVertical: 10}}
      data={userPosts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Post
          profileImage={item.profileImage}
          fullname={item.fullname}
          location={item.location}
          postImage={item.postImage}
        />
      )}
    />
      </View>
      
    </SafeAreaView>
  );
}

export default App;