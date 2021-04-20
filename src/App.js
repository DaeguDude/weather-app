export default function App() {
  return (
    <div class="container">
      <PageTitle />
      <Weather />
    </div>
  );
}

function Weather(props) {
  return (
    <section class="weather">
      <SearchBox />
      <Error />
      <TempConverter />
      <Cities />
    </section>
  );
}

function SearchBox(props) {
  return (
    <header class="search-box">
      <form>
        <input
          type="text"
          name="search-city"
          placeholder="Enter your location"
        />
        <button type="submit" class="search-city-btn">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </header>
  );
}

function PageTitle(props) {
  return (
    <header class="header">
      <h1>WEATHER APP</h1>
    </header>
  );
}

function Error(props) {
  return <p class="error">Your location haven't been found!</p>;
}

function TempConverter(props) {
  return (
    <div class="convert-switch">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round">
          <span class="metric metric--checked">C</span>
          <span class="imperial">F</span>
        </span>
      </label>
    </div>
  );
}

function Cities(props) {
  return (
    <main>
      <ul class="cities"></ul>
    </main>
  );
}
