import myLogo from "./assets/icon.png";

import type { IconType } from "react-icons";
import { SiDiscord, SiGithub, SiReddit, SiZenn } from "react-icons/si";
import { TbBrandMatrix } from "react-icons/tb";
import { LuAtSign } from "react-icons/lu";

import "./App.css";

function App() {
  const links = [
    {
      name: "GitHub",
      icon: SiGithub,
      link: "https://github.com/futsuuu",
    },
    {
      name: "Bluesky",
      icon: LuAtSign,
      link: "https://bsky.app/profile/futsuuu.bsky.social",
    },
    {
      name: "Discord",
      icon: SiDiscord,
      link: "https://discord.com/users/1040812976086724639",
    },
    {
      name: "Zenn",
      icon: SiZenn,
      link: "https://zenn.dev/futsuuu",
    },
    {
      name: "Matrix",
      icon: TbBrandMatrix,
      link: "https://matrix.to/#/@futsuuu:matrix.org",
    },
    {
      name: "Reddit",
      icon: SiReddit,
      link: "https://www.reddit.com/user/futsuuu123",
    },
  ];

  return (
    <>
      <img src={myLogo} className="logo" alt="My logo" />
      <h1>@futsuuu</h1>

      <div className="links">
        links
        {links.map((link, index) => (
          <Link
            name={link.name}
            icon={link.icon}
            link={link.link}
            first={index === 0}
            last={index === links.length - 1}
          />
        ))}
      </div>
    </>
  );
}

type LinkProps = {
  name: string;
  icon: IconType;
  link: string;
  last?: boolean;
  first?: boolean;
};

function Link(props: LinkProps) {
  const className = ["link"];
  if (props.first) {
    className.push("first");
  }
  if (props.last) {
    className.push("last");
  }
  return (
    <a href={props.link} target="_blank" className={className.join(" ")}>
      <props.icon className="link icon" />
      <div className="link text">{props.name}</div>
    </a>
  );
}
export default App;
