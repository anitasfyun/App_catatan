import "./App.css";
function Catatan1(props) {
  return (
    <>
      <div class="card border-warning mb-3 shadow p-3 mb-5 bg-body-tertiary rounded">
        <div class="card-header"></div>
        <div class="card-body">
          <h2 class="card-title fs-1">Web Programming html</h2>
          <p class="card-text fs-2 ">
            Membuat Pemrograman sederhana dengan menggunakan html
          </p>
        </div>
        <div class="card-footer bg-transparent border-warning text-body-secondary fs-5 ">
          {props.footer}
        </div>
      </div>
    </>
  );
}

function Catatan2(props) {
  return (
    <>
      <div class="card border-warning mb-3 shadow p-3 mb-5 bg-body-tertiary rounded">
        <div class="card-header"> </div>
        <div class="card-body">
          <h2 class="card-title fs-1">Web Programming css</h2>
          <p class="card-text fs-2">
            Menentukan tampilan dan format pada sebuah website.
          </p>
        </div>
        <div class="card-footer bg-transparent border-warning text-body-secondary fs-5">
          {props.footer}
        </div>
      </div>
    </>
  );
}

function Catatan3(props) {
  return (
    <>
      <div class="card border-warning mb-3 shadow p-3 mb-5 bg-body-tertiary rounded">
        <div class="card-header"> </div>
        <div class="card-body">
          <h2 class="card-title fs-1">Web Pemrograman Framework Bootstrap</h2>
          <p class="card-text fs-2">
            Framework Web Development berbasis HTML, CSS, dan JavaScript yang
            dirancang untuk mempercepat proses pengembangan Web
          </p>
        </div>
        <div class="card-footer bg-transparent border-warning text-body-secondary fs-5">
          {props.footer}
        </div>
      </div>
    </>
  );
}
function App() {
  const name = "Anita";
  return (
    <div className="App" class="App-header ">
      <h1 class="text-center fs-1 fw-bold">Todo List {name}</h1>
      <div class="layout">
        <Catatan1 footer="05/11/2023" />
        <Catatan2 footer="05/11/2023" />
        <Catatan3 footer="05/11/2023" />
      </div>
    </div>
  );
}

export default App;
