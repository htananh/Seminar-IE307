import { SafeAreaView, View, Text, Button } from "react-native"
import { StyleSheet } from "react-native"
interface CategoriesScreenProps {
    navigation: any;
}
const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Đây là Catogory</Text>
          <Button 
            title="Đi đến account" 
            onPress={() => navigation.navigate('account')} 
          />
        </View>
      );
}
const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
export default CategoriesScreen