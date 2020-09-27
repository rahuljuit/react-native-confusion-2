import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import About from './AboutUsComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";


const MenuNavigator = createStackNavigator();

function MenuNavigatorScreen() {
    return (
        <MenuNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"
                }
            }}
        >
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
            />
            <MenuNavigator.Screen
                name="Dishdetail"
                component={Dishdetail}
                options={{ headerTitle: "Dish Detail" }}
            />
        </MenuNavigator.Navigator>
    );
}

const HomeNavigator = createStackNavigator();

function HomeNavigatorScreen() {
    return (
        <HomeNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"
                }
            }}
        >
            <HomeNavigator.Screen
                name="Home"
                component={Home}
                options={{ headerTitle: "Home" }}
            />
        </HomeNavigator.Navigator>
    );
}

const AboutNavigator = createStackNavigator();

function AboutNavigatorScreen() {
    return (
        <AboutNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"
                }
            }}
        >
            <AboutNavigator.Screen
                name="About"
                component={About}
                options={{ headerTitle: "About Us" }}
            />
        </AboutNavigator.Navigator>
    );
}

const ContactNavigator = createStackNavigator();

function ContactNavigatorScreen() {
    return (
        <ContactNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"
                }
            }}
        >
            <ContactNavigator.Screen
                name="Contact"
                component={Contact}
                options={{ headerTitle: "Contact Us" }}
            />
        </ContactNavigator.Navigator>
    );
}

const MainNavigator = createDrawerNavigator();

function MainNavigatorScreen() {
    return (
        <MainNavigator.Navigator
            drawerStyle={{
                backgroundColor: "#d1c4e9",
            }}
        >
            <MainNavigator.Screen
                name="Home"
                component={HomeNavigatorScreen}
                options={{
                    headerTitle: "Home",
                    drawerLabel: "Home",
                }}
            />
            <MainNavigator.Screen
                name="About"
                component={AboutNavigatorScreen}
                options={{
                    headerTitle: "About Us",
                    drawerLabel: "About Us",
                }}
            />
            <MainNavigator.Screen
                name="Menu"
                component={MenuNavigatorScreen}
                options={{
                    headerTitle: "Menu",
                    drawerLabel: "Menu",
                }}
            />
            <MainNavigator.Screen
                name="Contact"
                component={ContactNavigatorScreen}
                options={{
                    headerTitle: "Contact Us",
                    drawerLabel: "Contact Us",
                }}
            />
        </MainNavigator.Navigator>
    )
}

class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <NavigationContainer>
                    <MainNavigatorScreen />
                </NavigationContainer>
            </View>
        );
    }
}

export default Main;