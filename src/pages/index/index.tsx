import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import GlobalFooter from "@components/GlobalFooter/index";
import "./index.scss";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <GlobalFooter isActive={0} />
      </View>
    );
  }
}
