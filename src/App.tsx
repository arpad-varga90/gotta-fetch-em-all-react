import Location from "./Components/Location";
export default function App() {
  return (
    <div>
      {[...Array(20).keys()].map((i) => {
        return <Location n={i + 1} />;
      })}
    </div>
  );
}
