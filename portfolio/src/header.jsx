import coverImage from './assets/cover/5072612.jpg';

function Header(props) {

  return (
    <header
      className="flex-row"
      style={{
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
        background: '#2b3144',
        position: "relative",
        zIndex: 10,
      }}
    >
      <h1>Joseph Norris' Portfolio</h1>
      <img src={coverImage} alt="Tech-web background"></img>
      {props.children}
    </header>
  );
}

export default Header;
