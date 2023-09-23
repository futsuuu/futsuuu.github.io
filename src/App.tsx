import myLogo from "./assets/icon.png";

import type { IconType } from "react-icons";
import { SiDiscord, SiGithub, SiReddit, SiZenn } from "react-icons/si";
import { TbBrandMatrix } from "react-icons/tb";
import { LuAtSign } from "react-icons/lu";

import "./App.css";

function App() {
  return (
    <>
      <img src={myLogo} className="logo" alt="My logo" />
      <h1>@futsuuu</h1>

      <Link name="GitHub" icon={SiGithub} link="https://github.com/futsuuu" />
      <Link
        name="Bluesky"
        icon={LuAtSign}
        link="https://bsky.app/profile/futsuuu.bsky.social"
      />
      <Link
        name="Discord"
        icon={SiDiscord}
        link="https://discord.com/users/1040812976086724639"
      />
      <Link name="Zenn" icon={SiZenn} link="https://zenn.dev/futsuuu" />
      <Link
        name="Matrix"
        icon={TbBrandMatrix}
        link="https://matrix.to/#/@futsuuu:matrix.org"
      />
      <Link
        name="Reddit"
        icon={SiReddit}
        link="https://www.reddit.com/user/futsuuu123"
      />
    </>
  );
}

type LinkProps = {
  name: string;
  icon: IconType;
  link: string;
};

function Link(props: LinkProps) {
  return (
    <a href={props.link} target="_blank" className="link">
      <props.icon className="link icon" />
      <div className="link text">{props.name}</div>
    </a>
  );
}
export default App;
