import { Button } from "./components/button/button";

export function App() {
  return (
    <>
      <Button type="submit" size={"sm"} onClick={() => console.log("abc")} label="abc"></Button>
      <Button type="reset" size={"lg"} onClick={() => console.log("abcd")} label="abcd"></Button>
    </>
  );
}
