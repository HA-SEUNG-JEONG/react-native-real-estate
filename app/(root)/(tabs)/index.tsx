import { Text, View } from "react-native";
import SignIn from "../../sign-in";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Link href="/sign-in">
                <SignIn />
            </Link>
            <Link href="/explore">
                <Text>Explore</Text>
            </Link>
            <Link href="/profile">
                <Text>Profile</Text>
            </Link>
            <Link href="/properties/1">
                <Text>Property 1</Text>
            </Link>
        </View>
    );
}
