import { ChatHead, Messages, Options, Section } from '../../components/';
export default function ChatBody() {
  return (
    <Section
      className="
        w-full
        lg:col-span-2
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-slate-200
        flex flex-col
        h-full
      "
    >
      {/* Conversation Area */}
      <div className="flex-1 grid gap-4 p-4">
        <ChatHead
          avatar="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
          name="Akash Ahmed"
        />
        <Messages />
      </div>

      {/* Options bar */}
      <div className="border-t dark:border-gray-300 border-gray-700 p-4">
        <Options />
      </div>
    </Section>
  );
}
