import React from "react";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	Text,
	View,
	StyleSheet,
} from "react-native";

interface RegisterScreenProps {
    navigation: any;
}
export const RegisterScreen = ({ navigation }: RegisterScreenProps) => {


	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.iconContainer}>
				<FontAwesome5 name="react" size={52} color="#61dbfb" />
			</View>
			<Text style={styles.title}>Register an Account</Text>
			<View style={styles.inputContainer}>
				<View style={styles.inputField}>
					<AntDesign name="user" size={24} />
					<TextInput style={styles.textInput} placeholder="Enter username" />
				</View>
				<View style={styles.inputField}>
					<Feather name="mail" size={24} />
					<TextInput
						style={styles.textInput}
						placeholder="Enter email"
						keyboardType="email-address"
					/>
				</View>
				<View style={styles.inputField}>
					<AntDesign name="lock1" size={24} />
					<TextInput
						style={styles.textInput}
						placeholder="Enter password"
						secureTextEntry
					/>
				</View>
				<View style={styles.inputField}>
					<AntDesign name="lock1" size={24} />
					<TextInput
						style={styles.textInput}
						placeholder="Confirm password"
						secureTextEntry
					/>
				</View>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>REGISTER</Text>
				</TouchableOpacity>
				<View>
					<Text style={styles.footerText}>
						Already have an account?{" "}
						<Text
							onPress={() => navigation.navigate('Login')}
							style={styles.loginText}>
							Log in now!
						</Text>
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 16,
		backgroundColor: "#f8f8f8",
	},
	iconContainer: {
		width: 80,
		height: 80,
		backgroundColor: "black",
		borderRadius: 40,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 24,
	},
	inputContainer: {
		width: "100%",
	},
	inputField: {
		flexDirection: "row",
		alignItems: "center",
		padding: 12,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "#ccc",
		marginBottom: 16,
	},
	textInput: {
		flex: 1,
		marginLeft: 8,
		fontSize: 16,
	},
	button: {
		backgroundColor: "#ff8c00",
		paddingVertical: 12,
		borderRadius: 8,
		alignItems: "center",
		marginBottom: 16,
	},
	buttonText: {
		fontSize: 18,
		color: "white",
		fontWeight: "bold",
	},
	footerText: {
		textAlign: "center",
		fontSize: 14,
	},
	loginText: {
		color: "#1e90ff",
		fontWeight: "bold",
	},
});

export default RegisterScreen;
