import homeimage from "./assets/image1.webp";

function Invent() {
  const navbar = {
    width: "100vw",
    height: "100px ",
    background: "rgba(93, 87, 244,0.1)",
  };
  const navbarBrand = {
    fontFamily: "sans-serif",
    fontSize: "30px",
    position: "relative",
    top: "30px",
    left: "300px",
  };
  const nokta = {
    color: "#5d57f4",
  };
  const navitem = {
    textDecoration: "none",
    border: "none",
    margin: "20px",
    fontSize: "20px",
    position: "relative",
    top: "-20px",
    left: "500px",
    color: "black",
    fontFamily: "sans-serif",
    background: "rgba(93, 87, 244,0.1)",
  };
  const navitemHome = {
    textDecoration: "none",
    border: "none",
    margin: "20px",
    fontSize: "20px",
    position: "relative",
    top: "-20px",
    left: "500px",
    color: "#5d57f4",
    fontFamily: "sans-serif",
  };
  const navBtn = {
    border: "none",
    width: "120px",
    height: "30px",
    backgroundColor: "#5d57f4",
    color: "white",
    fontSize: "18px",
    borderRadius: "5px",
    position: "relative",
    left: "600px",
    top: "-15px",
  };
  const homepage = {
    height: "750px",
    background: "rgba(93, 87, 244,0.1)",
  };
  const bildirim = {
    width: "230px",
    height: "40px",
    borderRadius: "20px",
    border: "1px solid black",
    backgroundColor: "rgba(93,87,244,0)",
    position: "relative",
    top: "100px",
    left: "400px",
  };
  const bildiirmicon = {
    position: "relative",
    top: "6px",
    left: "7px",
  };
  const bildirimIconDiv = {
    backgroundColor: "rgba(93,87,244,0.3)",
    width: "30px",
    height: "30px",
    borderRadius: "50px",
    position: "relative",
    top: "5px",
    left: "20px",
  };
  const bildirimText = {
    position: "relative",
    left: "58px",
    top: "-18px",
    fontSize: "18px",
    fontFamily: "sans-serif",
  };
  const homeTitle = {
    fontSize: "35px",
    fontFamily: "sans-serif",
    width: "530px",
    position: "relative",
    top: "120px",
    left: "400px",
  };
  const homeText = {
    fontFamily: "sans-serif",
    width: "530px",
    position: "relative",
    top: "160px",
    left: "400px",
    lineHeight: "30px",
  };
  const homeimagekod = {
    width: "500px",
    height: "400px",
    position: "relative",
    left: "1000px",
    top: "-100px",
  };
  const homebtn = {
    border: "none",
    backgroundColor: "#5d57f4",
    color: "white",
    width: "150px",
    height: "50px",
    borderRadius: "12px",
    position: "relative",
    top: "-160px",
    left: "400px",
  };
  const homecard1 = {
    width: "400px",
    height: "175px",
    backgroundColor: "white",
    borderRadius: "10px",
    border: "rgba(93,86,244,0.3) 1px solid",
  };
  const homecardlar = {
    height: "175px",
    width: "1260px",
    position: "relative",
    top: "-100px",
    left: "400px",
    display: "flex",
    justifyContent: "space-between",
  };
  const card1icondiv = {
    width: "60px",
    height: "60px",
    backgroundColor: "rgba(93,87,244,0.3)",
    borderRadius: "50px",
    position: "relative",
    top: "20px",
    left: "20px",
  };
  const card1icon = {
    fontSize: "30px",
    position: "relative",
    top: "15px",
    left: "15px",
  };
  const card1Title = {
    fontSize: "23px",
    fontFamily: "sans-serif",
    position: "relative",
    left: "100px",
    top: "-30px",
  };
  const card1Text = {
    width: "300px",
    position: "relative",
    left: "90px",
    top: "-10px",
    fontSize: "15px",
    fontFamily: "sans-serif",
    lineHeight: "24px",
  };
  return (
    <>
      <div style={navbar}>
        <h4 style={navbarBrand}>
          invent <span style={nokta}>.</span>
        </h4>
        <a style={navitemHome} href="">
          home
        </a>
        <a style={navitem} href="">
          about
        </a>
        <a style={navitem} href="">
          services
        </a>
        <a style={navitem} href="">
          portfolio
        </a>
        <a style={navitem} href="">
          pricing
        </a>
        <a style={navitem} href="">
          team
        </a>
        <select style={navitem} name="" id="">
          <option value="">dropdown1</option>
          <option value="">dropdown2</option>
          <option value="">dropdown3</option>
          <option value="">dropdown4</option>
        </select>
        <a style={navitem} href="">
          contact
        </a>
        <button style={navBtn}>get started</button>
      </div>
      <div style={homepage}>
        <div style={bildirim}>
          <div style={bildirimIconDiv}>
            <i style={bildiirmicon} class="fa-regular fa-bell"></i>
          </div>
          <span style={bildirimText}>Innovative Solutions</span>
        </div>
        <h2 style={homeTitle}>
          Accelerating business growth through innovative technology
        </h2>
        <p style={homeText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim
          justo.
        </p>
        <button style={homebtn}>discover more</button>
        <img className="firstimage" src={homeimage} style={homeimagekod} alt="" />
        <div style={homecardlar}>
          <div style={homecard1}>
            <div style={card1icondiv}>
              <i style={card1icon} class="fa-solid fa-gear"></i>
            </div>
            <h4 style={card1Title}>Rapid Deployment</h4>
            <p style={card1Text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
          <div style={homecard1}>
            <div style={card1icondiv}>
              <i style={card1icon} class="fa-solid fa-window-maximize"></i>
            </div>
            <h4 style={card1Title}>Advanced Security</h4>
            <p style={card1Text}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div style={homecard1}>
            <div style={card1icondiv}>
              <i style={card1icon} class="fa-solid fa-headset"></i>
            </div>
            <h4 style={card1Title}>Dedicated Support</h4>
            <p style={card1Text}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invent;
