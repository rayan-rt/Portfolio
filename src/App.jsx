import { Intro, Portfolio, Timeline, Footer, ContactLinks } from "./components";

function App() {
  return (
    <>
      {/* <button>Theme</button> */}

      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Intro />
          <Portfolio />
          <Timeline />
          <ContactLinks />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
