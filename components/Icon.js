import { Pressable,StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function Icon({onPressing,currcolor,currname}) {
  return <Pressable onPress={onPressing} style={({pressed})=>pressed&&styles.presson}>
    <Ionicons name={currname} size={24} color={currcolor}/>
  </Pressable>;
}

export default Icon;

const styles=StyleSheet.create({
  presson:{
    opacity:0.7,
    
  }
})