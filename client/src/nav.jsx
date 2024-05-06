import AnchorLink from "./AnchorLink";
import "./css/header.css";

// Nav
export default function Nav() {

  const htmlLinks = personalLinks.map((link) => (
    <AnchorLink
      key={link.innerText}
      url={link.url}
      ariaLabel={link.ariaLabel}
      innerText={link.innerText}
    />
  ));
  return (
    <nav>
      <ul>{htmlLinks}</ul>
    </nav>
  );
}

// Storage array - could be a JSON to make it pure data too.
const personalLinks = [
  {
          url: "https://github.com/KJB88/TechEd_SD-W06",
          ariaLabel: "A link to access the repo for this website.",
          innerText: "Repo"
      },
      {
        url: "https://linktr.ee/kjb88",
          ariaLabel: "A link to the Linktree of the author of this website.",
          innerText: "Linktree"
      }
    ]