function Footer() {

  // Replace links with social media profiles
  const imageIcon = [
    {
      name: "fab fa-github",
      link: "https://github.com/yoseph1618"
    },

    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/joseph-norris-a9a491229/"
    },

    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/"
    }
  ]

  return (

    <footer className="flex-row">

      {imageIcon.map(icons =>
      (
        <a href={icons.link} key={icons.name} target="_blank" rel="noopener noreferrer"><i className={icons.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
