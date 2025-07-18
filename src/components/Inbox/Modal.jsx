export default function Modal({ open, control }) {
  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      control(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={handleOverlayClick}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm cursor-pointer"
      ></div>

      {/* Modal */}
      <div
        className="
          fixed top-1/2 left-1/2 z-50
          w-[400px] lg:w-[600px]
          -translate-x-1/2 -translate-y-1/2
          bg-white dark:bg-gray-900
          text-gray-900 dark:text-slate-200
          rounded shadow-lg p-10
          space-y-8
        "
      >
        <h2 className="text-center text-3xl font-extrabold">Send message</h2>

        <form className="space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />

          <div className="space-y-4">
            <div>
              <label htmlFor="to" className="sr-only">
                To
              </label>
              <input
                id="to"
                name="to"
                type="text"
                required
                className="
                  block w-full rounded border border-gray-300 dark:border-gray-700
                  px-3 py-2 text-gray-900 dark:text-slate-200
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500
                  sm:text-sm
                "
                placeholder="Send to"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="
                  block w-full rounded border border-gray-300 dark:border-gray-700
                  px-3 py-2 text-gray-900 dark:text-slate-200
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500
                  sm:text-sm
                "
                placeholder="Message"
                rows={4}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="
                w-full flex justify-center py-2 px-4
                border border-transparent
                text-sm font-medium rounded-md
                text-white bg-violet-600 hover:bg-violet-700
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500
              "
            >
              Send Message
            </button>
          </div>

          {/* Example error handling */}
          {/* <Error message="There was an error" /> */}
        </form>
      </div>
    </>
  );
}
