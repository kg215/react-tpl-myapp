import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Button } from "@uiw/react-native";
import { connect } from "react-redux";
class Test extends Component {
  componentDidMount = () => {
    this.props.getData();
  };
  render() {
    const { navigation, data } = this.props;
    const { test = "" } = data;
    return (
      <SafeAreaView>
        <View>
          <Text>测试页</Text>
          <Button
            textStyle={{ fontSize: 16, fontWeight: "200" }}
            bordered={false}
            color="#BFBFBF"
            onPress={() => navigation.replace("Home")}
          >
            跳转到首页
          </Button>
          <Text>{test}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(
  ({ test }) => ({
    data: test.data,
  }),
  ({ test }) => ({
    getData: test.getData,
  })
)(Test);