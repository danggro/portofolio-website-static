import { list } from "./assets/list";
import "./App.css";
function App() {
  return (
    <>
      <h1>Portofolio Website Static</h1>
      <table>
        {list.map((l, i) => (
          <tr>
            <td>{i + 1}.</td>
            <td>{l.title}</td>
            <td>{l.res}</td>
            <td className="mid">:</td>
            <td>
              <a href={`${l.link}`} target="_blank">
                {l.link}
              </a>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
