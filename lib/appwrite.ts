import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
export const appwriteConfig = {
    platform: "com.jsm.restate",
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID
};

export const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint!)
    .setProject(appwriteConfig.projectId!)
    .setPlatform(appwriteConfig.platform!);

export const avatar = new Avatars(client);

export const account = new Account(client);

export async function login() {
    try {
        const redirectURI = Linking.createURL("/");
        const response = await account.createOAuth2Token(
            OAuthProvider.Google,
            redirectURI
        );
        if (!response) {
            throw new Error("Failed to create OAuth2 token");
        }
        const broswerResult = await openAuthSessionAsync(
            response.toString(),
            redirectURI
        );
        if (broswerResult.type !== "success") {
            throw new Error("Failed to open browser");
        }
        const url = new URL(broswerResult.url);
        const secret = url.searchParams.get("secret")?.toString();
        const userId = url.searchParams.get("userId")?.toString();
        if (!secret || !userId) {
            throw new Error("Failed to get secret or userId");
        }
        const session = await account.createSession(userId, secret);
        if (!session) {
            throw new Error("Failed to create session");
        }
        return true;
    } catch (error) {
        return false;
    }
}

export async function logout() {
    try {
        await account.deleteSession("current");
        return true;
    } catch (error) {
        return false;
    }
}

export const getCurrentUser = async () => {
    try {
        const user = await account.get();
        if (user.$id) {
            const userAvatar = await avatar.getInitials(user.name);
            return {
                ...user,
                avatar: userAvatar.toString()
            };
        }
    } catch (error) {
        return null;
    }
};
