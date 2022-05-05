import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import configFirebase from "../firebase/firebase.config";
import Cookies from "js-cookie";
import User from "../model/User";
import Chat from "../model/Chat";
import Message from "../model/Message";

// verificando app esta iniliaclizado na firebase

var database: any;

if (!firebase.apps.length) {
  firebase.initializeApp(configFirebase);
  /*  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID, */
  database = firebase.firestore();
}
export async function loginGoogle() {
  try {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    gerenciaCookei(true);
    await addUser(normalizeUser(response));
    return normalizeUser(response);
  } finally {
  }
}

export function normalizeUser({ user }: firebase.auth.UserCredential) {
  return {
    id: user?.uid || null,
    name: user?.displayName || null,
    email: user?.email || null,
    avatar: user?.photoURL || null,
  };
}

export async function loginFacebook() {
  try {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider());
    gerenciaCookei(true);
    await addUser(normalizeUser(response));
    return normalizeUser(response);
  } finally {
  }
}

export function gerenciaCookei(logaod: boolean) {
  if (logaod) {
    Cookies.set("whatsappclone-auth", logaod, {
      expires: 6,
    });
  } else {
    Cookies.remove("whatsappclone-auth");
  }
}

export async function addUser(user: User) {
  await database.collection("users").doc(user.id!).set(
    {
      name: user.name,
      avatar: user.avatar,
      email: user.email,
      // merge sempre vai atualizar os dados
    },
    { merge: true }
  );
}

export async function getContactList(id: string) {
  let list: User[] = [];

  const response = await database.collection("users").get();

  response.forEach((result) => {
    let data = result.data();
    if (result.id !== id) {
      list.push({
        id: result.id,
        name: data.name,
        avatar: data.avatar,
        email: data.email,
      });
    }
  });

  return list;
}

export async function addnewChat(userFrom: User, userTo: User) {
  //criando chats e referencinado as messages
  const newChat = await database.collection("chats").add({
    messages: [],
    users: [userFrom.id, userTo.id],
  });

  //adicionando lista de chats para o usuario

  database
    .collection("users")
    .doc(userFrom.id)
    .update({
      chats: firebase.firestore.FieldValue.arrayUnion({
        chatId: newChat.id,
        title: userTo.name,
        image: userTo.avatar,
        with: userTo.id,
      }),
    });

  database
    .collection("users")
    .doc(userTo.id)
    .update({
      chats: firebase.firestore.FieldValue.arrayUnion({
        chatId: newChat.id,
        title: userFrom.name,
        image: userFrom.avatar,
        with: userFrom.id,
      }),
    });
}

export function onChatsList(
  userId: string,
  setChatList: (list: Chat[]) => void
): void {
  return database
    .collection("users")
    .doc(userId)
    .onSnapshot((doc) => {
      if (doc.exists) {
        let user = doc.data();

        if (user.chats) {
          let chats = [...user.chats];

          chats.sort((a, b) => {
            if (a.lastMessageDate === undefined) {
              return -1;
            }
            if (b.lastMessageDate === undefined) {
              return -1;
            }
            if (a.lastMessageDate > b.lastMessageDate) {
              return -1;
            } else {
              1;
            }
          });

          setChatList(chats);
        }
      }
    });
}

export function onChatList(
  chatId: string,
  setMessages: (list: Message[]) => void,
  setUsresId: (listIds: string[]) => void
) {
  return database
    .collection("chats")
    .doc(chatId)
    .onSnapshot((doc) => {
      if (doc.exists) {
        let data = doc.data();

        setMessages(data.messages);
        setUsresId?.(data.users);
      }
    });
}

export async function sendMessage(
  ChatData: Chat,
  userId: string,
  type: string,
  body: string,
  users: string[]
) {
  let now = new Date();
  let hr: any = now.getHours();
  let mn: any = now.getMinutes();
  hr = hr < 10 ? "0" + hr : hr;
  mn = mn < 10 ? "0" + mn : mn;
  hr = `${hr}:${mn}`;
  database
    .collection("chats")
    .doc(ChatData.chatId)
    .update({
      messages: firebase.firestore.FieldValue.arrayUnion({
        author: userId,
        type,
        body,
        date: hr,
      }),
    });

  for (let i in users) {
    let u = await database.collection("users").doc(users[i]).get();
    let uData = u.data();
    if (uData.chats) {
      let chats = [...uData.chats];

      for (let e in chats) {
        if (chats[e].chatId == ChatData.chatId) {
          chats[e].lastMessageDate = hr;
          chats[e].lastMessage = body;
        }
      }
      await database.collection("users").doc(users[i]).update({
        chats,
      });
    }
  }
}

export { firebase };
