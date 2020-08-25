import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Button } from "@uiw/react-native";

export default class MyScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <View>
          <Button
            textStyle={{ fontSize: 16, fontWeight: "200" }}
            bordered={false}
            color="#BFBFBF"
            onPress={() => navigation.replace("Test")}
          >
            跳转到测试页面
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}