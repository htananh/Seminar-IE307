import { SafeAreaView, View, Text } from "react-native"
import { StyleSheet } from "react-native"
const CategoriesScreen = () => {
    return (
			<View style={styles.center}>
				<Text>Category Screen</Text>
			</View>
	)
}
const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
export default CategoriesScreen