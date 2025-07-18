import { ChatBody, Section, Sidebar } from '../components';

export default function Inbox() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-slate-200">
      {/* Main Content */}
      <div className="flex-1 w-full max-w-7xl mx-auto p-4">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-4
            border border-gray-200 dark:border-gray-700
            rounded
            bg-white dark:bg-gray-800
            overflow-hidden
          "
        >
          {/* Sidebar */}
          <aside className="col-span-1 border-r border-gray-200 dark:border-gray-700 p-4 bg-gray-100 dark:bg-gray-800">
            <Sidebar />
          </aside>

          {/* Chat Body */}
          <Section className="lg:col-span-2 p-4">
            <ChatBody />
          </Section>
        </div>
      </div>
    </div>
  );
}
