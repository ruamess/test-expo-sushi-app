import { Image, Text, TouchableOpacity, View } from "react-native";
import { ISushiItem } from "../shared/interfaces";

const SushiItem = ({ item }: { item: ISushiItem }) => (
  <View key={item.id} className="mb-5 w-[45vw] h-fit gap-[2vw]">
    <Image source={item.image} className="w-[45vw] h-[45vw] rounded-xl" />

    <View>
      <Text className="text-xl text-white">
        {item.title}
      </Text>
      <Text className="text-sm text-[#ffffff80] ">
        {item.weight} г
      </Text>
    </View>

    <Text
      className="text-sm text-[#ffffff80]"
      numberOfLines={2}
      ellipsizeMode="tail">
      {item.ingredients}
    </Text>

    <TouchableOpacity className="flex-row items-center rounded-2xl self-start bg-[#3d3d3db3] gap-[2vw] py-[2vw] px-[3vw]"
      activeOpacity={0.7}>
      <Text className="text-lg font-semibold text-white">
        от {item.price} ₽
      </Text>
      <Image
        source={require('../../assets/images/arrow.png')}
        className="w-[4vw]"
      />
    </TouchableOpacity>

  </View>
);

export default SushiItem