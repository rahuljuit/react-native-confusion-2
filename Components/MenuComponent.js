import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
        }
    }



    render() {
        const { navigate } = this.props.navigation;
        const renderMenuItem = ({ item, index }) => {
            // console.log(JSON.stringify(item));
            return (
                <View style={{ margin: 5 }}>
                    <ListItem
                        key={index}
                        title={item.name}
                        subtitle={item.description}
                        hidechevron={true}
                        onPress={() => navigate('Dishdetail', { dishId: item.id })}
                        leftAvatar={{ source: require('./images/uthappizza.png') }}
                    />
                </View>
            );
        };


        return (
            <FlatList
                data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

}

export default Menu;