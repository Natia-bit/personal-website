import Squares from "./Squares";

export default function StackLabel({ color, name }) {
  return (
    <div>
      <Squares color={color}></Squares>
      <label>{name}</label>
    </div>
  );
}
