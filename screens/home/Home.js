import React from "react";
import { useState,useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, FlatList, Dimensions} from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import Title from '../../components/Title/Title';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import style from "./style";
import UserStory from "../../components/UserStory/UserStory";
import Post from "../../components/Post/Post";
import { NavigationContainer } from "@react-navigation/native";
import globalStyle from "../../assets/styles/globalStyle";
import { Routes } from "../../navigation/Routes";

const Home = ({navigation}) => {
  const userStories = [
    {
      firstName: "Joseph",
      id: 1,
      profileImage: require("../../assets/images/default_profile.png"),
    },
    {
      firstName: "Angel",
      id: 2,
      profileImage: require("../../assets/images/default_profile.png"),
    },
    {
      firstName: "White",
      id: 3,
      profileImage: require("../../assets/images/default_profile.png"),
    },
    {
      firstName: "Olivier",
      id: 4,
      profileImage: require("../../assets/images/default_profile.png"),
    },
    {
      firstName: "Janka",
      id: 5,
      profileImage: require("../../assets/images/default_profile.png"),
    },
    {
      firstName: "Nicolas",
      id: 6,
      profileImage: require("../../assets/images/default_profile.png"),
    },
    {
      firstName: "Adam",
      id: 7,
      profileImage: require("../../assets/images/default_profile.png"),
    },
    {
      firstName: "Noah",
      id: 8,
      profileImage: require("../../assets/images/default_profile.png"),
    },
    {
      firstName: "Nathaniel",
      id: 9,
      profileImage: require("../../assets/images/default_profile.png"),
    },
  ]; 

  const userPosts =[
    {
      profileImage: require("../../assets/images/default_profile.png"),
      fullname: "Allison Becker",
      location: "Sukabumi, Jawa Barat",
      id: 1,
      postImage: require("../../assets/images/default_post.png"),
      likes: 1250,
      comments: 52,
      saves: 65,
    },
    {
      profileImage: require("../../assets/images/default_profile.png"),
      fullname: "Jennifer Wilkson",
      location: "Bandung, Jawa Barat",
      id: 2,
      postImage: require("../../assets/images/default_post.png"),
      likes: 1030,
      comments: 30,
      saves: 45,
    },
    {
      profileImage: require("../../assets/images/default_profile.png"),
      fullname: "Michael Scott",
      location: "Scranton, PA",
      id: 3,
      postImage: require("../../assets/images/default_post.png"),
      likes: 1520,
      comments: 60,
      saves: 70,
    },
    {
      profileImage: require("../../assets/images/default_profile.png"),
      fullname: "Dwight Schrute",
      location: "Scranton, PA",
      id: 4,
      postImage: require("../../assets/images/default_post.png"),
      likes: 980,
      comments: 40,
      saves: 30,
    },
    {
      profileImage: require("../../assets/images/default_profile.png"),
      fullname: "Pam Beesly",
      location: "Philadelphia, PA",
      id: 5,
      postImage: require("../../assets/images/default_post.png"),
      likes: 1105,
      comments: 25,
      saves: 55,
    },
    {
      profileImage: require("../../assets/images/default_profile.png"),
      fullname: "Jim Halpert",
      location: "Philadelphia, PA",
      id: 6,
      postImage: require("../../assets/images/default_post.png"),
      likes: 1450,
      comments: 35,
      saves: 65,
    },
    {
      profileImage: require("../../assets/images/default_profile.png"),
      fullname: "Stanley Hudson",
      location: "Scranton, PA",
      id: 7,
      postImage: require("../../assets/images/default_post.png"),
      likes: 850,
      comments: 15,
      saves: 20,
    },
    {
      profileImage: require("../../assets/images/default_profile.png"),
      fullname: "Phyllis Vance",
      location: "Scranton, PA",
      id: 8,
      postImage: require("../../assets/images/default_post.png"),
      likes: 900,
      comments: 18,
      saves: 25,
    },
  ];


  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);
  
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));
  console.log(screenData);

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);

    Dimensions.addEventListener("change", (result) => {setScreenData(result.screen);});
  }, []);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <View>
      <FlatList
         ListHeaderComponent={
          <>
          <View style={style.header}>
              <Title title={"Lets Explore"}/>
              <TouchableOpacity style={style.envelopeIcon} onPress={() => {
                  navigation.navigate(Routes.Profile)
                }}>
                <FontAwesomeIcon icon={faEnvelope} color={"#898DAF"} size={20}/>
                <View style={style.messageNumberContainer}>
                  <Text style={style.messageNumber}>2</Text>
                </View>
              </TouchableOpacity>
              </View>
              <View style={style.userStoryContainer}>
              <FlatList
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (isLoadingUserStories) {
                    return;}
                  setIsLoadingUserStories(true);
                  const contentToAppend = pagination(
                    userStories,
                    userStoriesCurrentPage + 1,
                    userStoriesPageSize,
                  );
                  if (contentToAppend.length > 0) {
                    setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                    setUserStoriesRenderedData(prev => [...prev,...contentToAppend,]);
                  }
                  setIsLoadingUserStories(false);
                                    }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={userStoriesRenderedData}
                renderItem={({ item }) => (
                  <UserStory
                    key={'userStory' + item.id}
                    firstName={item.firstName}
                    profileImage={item.profileImage}
                  />)}
                  />
              </View>
          </>
         }
        onEndReachedThreshold={0.5}
        onEndReached={() => {
             if (isLoadingUserPosts) {
                 return;
             }
             setIsLoadingUserPosts(true);
             const contentToAppend = pagination(
                 userPosts,
                 userPostsCurrentPage + 1,
                 userPostsPageSize,
             );
             if (contentToAppend.length > 0) {
                 setUserPostsCurrentPage(userPostsCurrentPage + 1);
                 setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
             }
             setIsLoadingUserPosts(false);
         }}
        data={userPosts}
        showsVerticalScrollIndicator={false}
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

export default Home;