import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the types for our store's state
export type Message = {
    question: string,
    reply: string,
    time: string,
    topicid: number,
    messageid: number
};

export type Topic = {
    id: number,
    name: string,
    description?: string
};

interface StoreState {
    topics: Topic[];
    messages: Message[];
    selectedTopic: Topic;
    selectedMessages: Message[];
    loader: boolean,
    setTopic: (topic: Topic) => void;
    setMessage: (message: Message) => void;
    setSelectedTopic: (topic: Topic) => void;
    showLoader: (show: boolean) => void;
};

// Create the store with Zustand
export const useTopicStore = create<StoreState>()(persist((set) => ({
    topics: [],
    messages: [],
    selectedMessages: [],
    selectedTopic: {} as Topic,
    loader: false,
    setTopic: (topic: Topic) => set((state) => ({
        topics: [...state.topics, topic],
        selectedTopic: topic, selectedMessages: []
    })),
    setMessage: (message: Message) => set((state) => ({
        messages: [...state.messages, message],
        selectedMessages: [...state.selectedMessages, message]
    })),
    setSelectedTopic: (topic: Topic) => set((state) => ({
        selectedTopic: topic,
        selectedMessages: state.messages.filter(m => m.topicid === topic.id)
    })),
    showLoader: (show: boolean) => set(() => ({ loader: show })),

}), {
    name: 'topic-storage'
}));