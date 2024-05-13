import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <view style={{ background: "white", padding: 15 }}>
        <Header />
        <SearchBar />
      </view>
      <Categories />
    </SafeAreaView>
  );
}
