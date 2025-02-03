import React from "react"
import { FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import SushiItem from "../components/SushiItem"
import { useSelector } from "react-redux"
import { selectSushi } from "../store/sushiSlice"

const Index = () => {
  const sushiData = useSelector(selectSushi);
  return (
    <SafeAreaView className="bg-[#181716]">
      <StatusBar style="light" />
      <FlatList
        data={sushiData}
        renderItem={SushiItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="px-[3vw] gap-[4vw] flex-wrap flex-row justify-between"
      />
    </SafeAreaView>
  )
}

export default Index;
