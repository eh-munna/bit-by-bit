import { Blank, Section, Sidebar } from '../components';

export default function Conversation() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-0">
        <div
          className="
          w-full
          border border-gray-300 dark:border-gray-700
          rounded
          flex flex-col lg:grid lg:grid-cols-3
          bg-white dark:bg-gray-900
          text-gray-900 dark:text-slate-200
        "
        >
          {/* Sidebar */}
          <Sidebar />

          {/* Main conversation area */}
          <Section
            className="
            w-full
            lg:col-span-2
            flex flex-col
          "
          >
            <div
              className="
              w-full
              flex-1
              grid
              conversation-row-grid
            "
            >
              <Blank />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}
