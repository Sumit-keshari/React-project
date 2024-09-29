import Buttons from "./Buttons";
import Random from "./Random";
function App() {
  let a = "sumit";
  let new1 = () => {
    return "sumit kesarwani";
  };
  return (
    <div>
      <h1>
        My First React App {a} {new1()}
      </h1>
      <Buttons></Buttons>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </div>
  );
}
export default App;
