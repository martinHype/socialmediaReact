import {crateStactNavigator, createStackNavigator} from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/home/Home";
import Profile from "../screens/Profile/Profile";
const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false, // This hides the navigation bar
            }}
        >
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.Profile} component={Profile} />
        </Stack.Navigator>
    );
};

export default MainNavigation;