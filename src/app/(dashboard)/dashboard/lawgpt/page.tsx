'use client'
import { type NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";
import { ChatContent, type ChatItem } from "@/components/ChatContent"
import { ChatInput } from "@/components/ChatInput";
import { api } from "@/utils/api";
// import { authOptions } from "@/lib/auth";
// import { getServerSession } from "next-auth";
import ChatHeader from "@/components/chatHeader";
import { log } from "console";

const Home: NextPage = () => {
  // const session = await getServerSession(authOptions)

  const [chatItems, setChatItems] = useState<ChatItem[]>([]);
  const [waiting, setWaiting] = useState<boolean>(false);
  const scrollToRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(
      () => scrollToRef.current?.scrollIntoView({ behavior: "smooth" }),
      100
    );
  };
  
  const generatedTextMutation = api.lawgptapi.generateText.useMutation({
    onSuccess: (data) => {
      setChatItems([
        ...chatItems,
        {
          content: data.generatedText,
          author: "AI",
        },
      ]);
    },

    onError: (error) => {
      setChatItems([
        ...chatItems,
        {
          content: error.message ?? "An error occurred",
          author: "AI",
          isError: true,
        },
      ]);
    },

    onSettled: () => {
      setWaiting(false);
      scrollToBottom();
    },
  });

  const resetMutation = api.lawgptapi.reset.useMutation();

  const handleUpdate = (prompt: string) => {
    setWaiting(true);

    setChatItems([
      ...chatItems,
      {
        content: prompt.replace(/\n/g, "\n\n"),
        author: "User",
      },
    ]);

    scrollToBottom();

    generatedTextMutation.mutate({ prompt });
  };

  const handleReset = () => {
    setChatItems([]);
    resetMutation.mutate();
  };

  return (
    <>
      <Head>
        <title>LAW GPT</title>
        <meta name="description" content="AI Chat Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-col items-center bg-gray-800">
        <section className="w-full">
        {/* <ChatHeader user_img={session?.user?.image} user_name={session?.user.name} name="LAW GPT"/> */}
        <ChatHeader name="LAW GPT"/>
        </section>

        <section className="w-full flex-grow overflow-y-scroll">
          {/* <ChatContent chatItems={chatItems} img_url={session?.user?.image}/> */}
          <ChatContent chatItems={chatItems} />
          <div ref={scrollToRef} />
        </section>

        <section className="w-full">
          <ChatInput
            onUpdate={handleUpdate}
            onReset={handleReset}
            waiting={waiting}
          />
          {/* {console.log(chatItems)} */}
        </section>
      </div>
    </>
  );
};

export default Home;