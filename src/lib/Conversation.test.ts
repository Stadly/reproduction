import { render } from "@testing-library/svelte";
import { it } from "vitest";
import Conversation from "./Conversation.svelte";

const messages = [
    "Hello, I'm looking for some information about Norway.",
    "Hi, I can help you with that. What would you like to know?",
    "What are some of the most popular tourist attractions in Norway?",
    "Some of the most popular tourist attractions in Norway are the Norwegian fjords, the Northern Lights, the Viking Ship Museum, and the Holmenkollen Ski Jump.",
];

it("should render the messages correctly", () => {
    const { component } = render(Conversation, {
        messages: messages.slice(0, 1),
    });

    // Comment out the next line and branch coverage goes from 0% to 100%.
    component.$set({ messages });
});
