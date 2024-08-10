import { ID } from "appwrite";
import { account, appwriteConfig, avatars, databases } from "./config";
import { INewUser } from "../types";

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create (
            ID.unique(),
            user.email, 
            user.password, 
            user.name
        );

            if (!newAccount) {
                throw Error;
            }


            const avatarUrl = avatars.getInitials(user.name);

            const newUser = await saveUserToDb({
                accountId: newAccount.$id,
                email: newAccount.email,
                name: newAccount.name,
                imageUrl: avatarUrl,
                username: user.username,
            })



        return newUser;
    } catch (error) {
        console.log(error);
        return error;
    }

}


export async function saveUserToDb(user: {
    accoutntId: string;
    email: string;
    name: string;
    imageUrl: string;
    username?: string;
}) {
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user
        );
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function signInAccount(user: {
    email: string;
    password: string;
}) {
    try {
        const session = await account.createSession(user.email, user.password);
        return session;
    } catch (error) {
        console.log(error);
    }
}