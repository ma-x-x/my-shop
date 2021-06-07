import Taro from "@tarojs/taro";
import React, { useState } from "react";
import { AtTabBar } from "taro-ui";
import "./index.less";

type Props = {
  isActive: number;
};

export default function GlobalFooter(props: Props) {
  const [current, setCurrent] = useState(props.isActive);

  // 点击切换
  const handleClick = (value) => {
    setCurrent(value);
    goHref(value);
  };

  /**
   * 跳转页面
   * @param type
   */
  const goHref = (type) => {
    switch (type) {
      case 0:
        Taro.redirectTo({
          url: "/pages/index/index",
        });
        break;
      case 1:
        Taro.redirectTo({
          url: "/pages/goodList/index",
        });
        break;
      case 2:
        Taro.redirectTo({
          url: "/pages/cart/index",
        });
        break;
      case 3:
        Taro.redirectTo({
          url: "/pages/user/index",
        });
        break;
      default:
        Taro.redirectTo({
          url: "/pages/index/index",
        });
    }
  };
  return (
    <AtTabBar
      fixed
      tabList={[
        { title: "首页", iconType: "home" },
        { title: "分类", iconType: "bullet-list" },
        { title: "购物车", text: 8, iconType: "shopping-cart" },
        { title: "我的", dot: true, iconType: "user" },
      ]}
      onClick={handleClick}
      current={current}
    />
  );
}
