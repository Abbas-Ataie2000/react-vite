import { Button } from "./components/button/button";

export function App() {
  return (
    <>
      <Button type="submit" size={"sm"} onClick={() => console.log("abc")} label="abc"></Button>
      <Button type="reset" size={"lg"} onClick={() => console.log("abcd")} label="abcd"></Button>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quibusdam, similique laboriosam rerum laudantium
      accusantium suscipit, eum iure sint natus est nemo alias tempore fugiat facilis laborum voluptatibus perspiciatis.
      Optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque excepturi eum necessitatibus omnis?
      Nostrum veniam dignissimos saepe accusamus odio, accusantium, at neque ducimus sint explicabo quis eveniet beatae
      assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque, libero corporis ducimus sunt
      temporibus enim ad sed esse est tempora iusto voluptas quae ipsum quas optio facilis, numquam minus?
    </>
  );
}
