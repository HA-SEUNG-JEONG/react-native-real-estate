import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import images from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";

const SignIn = () => {
    const handleLogin = () => {
        console.log("Login");
    };
    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView contentContainerClassName="h-full">
                <Image
                    source={images.onboarding}
                    className="w-full h-4/6"
                    resizeMode="contain"
                />
                <View className="px-10">
                    <Text className="text-base text-center uppercase font-rubik-medium">
                        Welcome To Reesate
                    </Text>
                    <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
                        Let's Get you Closer to {`\n`}
                        <Text className="text-primary-300">
                            Your Dream Home
                        </Text>
                    </Text>
                    <Text
                        className="text-lg
                         text-center uppercase font-rubik mt-12"
                    >
                        Login to Restate
                    </Text>
                    <TouchableOpacity
                        onPress={handleLogin}
                        className="bg-white shadow-md shadow-zinc-300 rounded-full mt-12 py-4 mt-5"
                    >
                        <View className="flex flex-row justify-center items-center gap-2">
                            <Image
                                source={icons.google}
                                className="w-5 h-5"
                                resizeMode="contain"
                            />
                            <Text className="text-lg font-rubik-medium">
                                Continue with Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
