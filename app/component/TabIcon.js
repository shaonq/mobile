/**
 *
 */
import React,{Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TabIcon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            { color: this.props.selected ? '#3e9ce9' : '#999999' }
          ]}
        >
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 14
  }
});
