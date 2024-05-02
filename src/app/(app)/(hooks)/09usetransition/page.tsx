'use client'
import { useState, useTransition } from "react";

import AboutTab from "./AboutTab";
import ContactTab from "./ContactTab";
import PostsTab from "./PostsTab";
import TabButton from "./TabButton";

type Tab = "about" | "posts" | "contact";

const Demo = () => {
	const [tab, setTab] = useState<Tab>("about");

	// const selectTab = (tab: Tab) => {
   //    setTab(tab);
   // };

   const selectTab = (tab: Tab) => {
      startTransition(() => {
         setTab(tab);
      })
   };
   
   const [isPending, startTransition] = useTransition()

	return (
		<div className="bg-gray-900 text-white">
			<div className="mb-4 flex flex-row items-center gap-4">
				<TabButton
					title="About"
					onClick={() => selectTab("about")}
					variant={tab === "about" ? "primary" : "secondary"}
				/>
				<TabButton
					title="Posts"
					onClick={() => selectTab("posts")}
					variant={tab === "posts" ? "primary" : "secondary"}
				/>
				<TabButton
					title="Contact"
					onClick={() => selectTab("contact")}
					variant={tab === "contact" ? "primary" : "secondary"}
				/>
			</div>

			{tab === "about" && <AboutTab />}
			{tab === "posts" && <PostsTab />}
			{tab === "contact" && <ContactTab />}
		</div>
	);
};

export default Demo;
