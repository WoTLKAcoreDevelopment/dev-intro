export function Hero() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="hero-background">
        <div className="hero-overlay flex justify-between">
          <div className="overlay-left rounded-lg bg-white p-4 shadow-md">
            <h1 className="text-4xl font-bold text-black">World of Warcraft Private Server</h1>
            <div><p className="mt-4 text-lg  text-black">Wrath of The Lych King</p></div>
          </div>
          <div className="overlay-left rounded-lg bg-white p-4 shadow-md ml-4">
            <h1 className="text-4xl font-bold  text-black">Realm List</h1>
            <div><p className="mt-4 text-lg  text-black">Azerothcore Development🟢</p></div>
          </div>
        </div>
      </div>
    </main>
  );
}