import Appname from "./components/Appname";
import Appdata from "./components/Adddata";
function App() {
  return (
    <center>
      <Appname></Appname>
      <Appdata></Appdata>

      <div class="row">
        <div class="col-6">BUY MILK</div>
        <div class="col-4">04/03/2015</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-6">Go To College</div>
        <div class="col-4">06/07/2023</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </center>
  );
}

export default App;
