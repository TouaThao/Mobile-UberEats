import { View, Text } from "react-native";
import React from "react";
const items = [
  {
    image: require("../Asset/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../Asset/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../Asset/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../Asset/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../Asset/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../Asset/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../Asset/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <View>
      <image
        source={item[0].image}
        style={{ width: 50, height: 40, resizeMode: "contain" }}
      />
      <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
    </View>
  );
}
