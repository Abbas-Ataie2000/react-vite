import { Button } from "./components/button/button";

export function App() {
  return (
    <>
      <Button type="submit" size={"sm"} onClick={() => console.log("abc")} label="abc"></Button>
      <Button type="reset" size={"lg"} onClick={() => console.log("abcd")} label="abcd"></Button>
      <Button onClick={() => console.log("search")} label="search"></Button>
      <Button onClick={() => console.log("submit")} label="submit"></Button>
      <Button onClick={() => console.log("abcsdsds")} label="kdkdk"></Button>
    </>
  );
}
