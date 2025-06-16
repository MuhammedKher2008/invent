import homeimage from "./assets/image1.webp";
import about1 from "./assets/about-portrait-1.webp";
import about2 from "./assets/about-8 (1).webp";
import about3 from "./assets/about-12.webp";

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
    width: "550px",
    height: "400px",
    position: "relative",
    left: "900px",
    top: "-100px",
    transition: "all 0.5s linear",
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
    transition: "all 0.5s linear",
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
  const aboutpage = {
    height: "1850px",
  };
  const aboutfirsttext = {
    position: "relative",
    top: "80px",
    left: "400px",
    fontSize: "25px",
    fontFamily: "sans-serif",
    color: "#212529",
  };
  const aboutTitle = {
    fontSize: "2rem",
    fontFamily: "sans-serif",
    width: "640px",
    position: "relative",
    top: "90px",
    left: "400px",
  };
  const abouttext = {
    position: "relative",
    top: "120px",
    left: "400px",
    fontFamily: "sans-serif",
    color: "#212529",
    width: "630px",
    lineHeight: "30px",
  };
  const aboutlist = {
    position: "relative",
    top: "160px",
    left: "400px",
    listStyle: "none",
  };
  const aboutlisticon = {
    color: "#5d57f4",
    fontSize: "25px",
  };
  const aboutlitext1 = {
    fontSize: "20px",
    position: "relative",
    top: "-5px",
    fontFamily: "sans-serif",
    color: "#212529",
  };
  const aboutlitext2 = {
    fontSize: "20px",
    position: "relative",
    top: "-25px",
    left: "30px",
    fontFamily: "sans-serif",
    color: "#212529",
    display: "block",
    width: "550px",
    lineHeight: "30px",
  };
  const aboutlistli = {
    marginBottom: "20px",
  };
  const aboutBtn = {
    border: "none",
    backgroundColor: "#5d57f4",
    color: "white",
    width: "150px",
    height: "50px",
    borderRadius: "12px",
    position: "relative",
    top: "170px",
    left: "400px",
  };
  const aboutImage1 = {
    position: "absolute",
    left: "1050px",
    top: "1000px",
    width: "300px",
    height: "400px",
    borderRadius: "20px",
  };
  const aboutImage2 = {
    position: "absolute",
    left: "1370px",
    top: "1000px",
    width: "300px",
    height: "180px",
    borderRadius: "20px",
  };
  const aboutImage3 = {
    position: "absolute",
    left: "1370px",
    top: "1200px",
    width: "300px",
    height: "180px",
    borderRadius: "20px",
  };
  const abouttitle2 = {
    position: "absolute",
    top: "1600px",
    left: "850px",
    fontSize: "35px",
    fontFamily: "sans-serif",
  };
  const abouttitle2cigi = {
    position: "absolute",
    top: "1650px",
    left: "865px",
    width: "200px",
    height: "2px",
    backgroundColor: "grey",
  };
  const abouttitle2cigi2 = {
    position: "absolute",
    top: "1649px",
    left: "945px",
    width: "50px",
    height: "4px",
    backgroundColor: "#5d57f4",
  };
  const about2text = {
    position: "absolute",
    top: "1680px",
    left: "710px",
    fontFamily: "sans-serif",
  };
  const aboutCard1 = {
    width: "800px",
    height: "150px",
    border: "2px solid rgba(106, 101, 250, 0.3)",
    position: "absolute",
    top: "1800px",
    left: "600px",
    borderRadius: "20px",
  };
  const aboutCard2 = {
    width: "800px",
    height: "150px",
    border: "2px solid rgba(106, 101, 250, 0.3)",
    position: "absolute",
    top: "2000px",
    left: "600px",
    borderRadius: "20px",
  };
  const aboutCard3 = {
    width: "800px",
    height: "150px",
    border: "2px solid rgba(106, 101, 250, 0.3)",
    position: "absolute",
    top: "2200px",
    left: "600px",
    borderRadius: "20px",
  };
  const aboutCard4 = {
    width: "800px",
    height: "150px",
    border: "2px solid rgba(106, 101, 250, 0.3)",
    position: "absolute",
    top: "2400px",
    left: "600px",
    borderRadius: "20px",
  };
  const aboutcard1icondiv = {
    backgroundColor: "#5d57f4",
    width: "70px",
    fontSize: "35px",
    height: "70px",
    position: "relative",
    left: "50px",
    top: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderRadius: "20px",
  };
  const aboutcard1Number = {
    fontSize: "80px",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    color: "rgba(106,101,250,0.3)",
    position: "absolute",
    top: "35px",
    left: "-35px",
  };
  const aboutcard1title = {
    fontSize: "25px",
    position: "absolute",
    top: "30px",
    left: "150px",
    fontFamily: "sans-serif",
  };
  const aboutcard1Text = {
    fontFamily: "sans-serif",
    position: "relative",
    left: "150px",
    width: "650px",
    lineHeight: "25px",
  };
  const service = {
    height: "1500px",
  };
  const servicetitle = {
    position: "absolute",
    top: "2700px",
    left: "910px",
    fontSize: "35px",
    fontFamily: "sans-serif",
  };
  const servicetitle2cigi = {
    position: "absolute",
    top: "2750px",
    left: "865px",
    width: "200px",
    height: "2px",
    backgroundColor: "grey",
  };
  const servicetitle2cigi2 = {
    position: "absolute",
    top: "2749px",
    left: "945px",
    width: "50px",
    height: "4px",
    backgroundColor: "#5d57f4",
  };
  const servicetext = {
    position: "absolute",
    top: "2780px",
    left: "710px",
    fontFamily: "sans-serif",
  };
  const servicecardrow1 = {
    width: "1300px",
    height: "250px",
    position: "absolute",
    top: "2870px",
    left: "300px",
    display: "flex",
    justifyContent: "space-between",
  };
  const servicecardrow1Card1 = {
    width: "625px",
    height: "250px",
    backgroundColor: "rgb(250, 250, 250)",
    borderRadius: "25px",
  };
  const servicecard1icondiv = {
    width: "70px",
    height: "70px",
    backgroundColor: "rgba(106,101,250,0.2)",
    borderRadius: "20px",
    position: "relative",
    top: "40px",
    left: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const servicecard1icon = {
    color: "#5d57f4",
    fontSize: "25px",
  };
  const servicecardrow1Card1Title = {
    position: "relative",
    left: "140px",
    top: "-30px",
    fontSize: "25px",
    fontFamily: "sans-serif",
  };
  const servicecardrow1Card1Text = {
    position: "relative",
    left: "140px",
    fontFamily: "sans-serif",
    width: "470px",
    lineHeight: "25px",
    color: "#7c7c7c",
  };
  const servicecardrow1Card1LearnMore = {
    fontFamily: "sans-serif",
    color: "#5d57f4",
    position: "relative",
    left: "140px",
    top: "13px",
  };
  const servicecardrow2 = {
    width: "1300px",
    height: "250px",
    position: "absolute",
    top: "3200px",
    left: "300px",
    display: "flex",
    justifyContent: "space-between",
  };
  const servicecardrow3 = {
    width: "1300px",
    height: "250px",
    position: "absolute",
    top: "3530px",
    left: "300px",
    display: "flex",
    justifyContent: "space-between",
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
        <img
          className="firstimage"
          src={homeimage}
          style={homeimagekod}
          alt=""
        />
        <div style={homecardlar}>
          <div className="yukari" style={homecard1}>
            <div style={card1icondiv}>
              <i style={card1icon} class="fa-solid fa-gear"></i>
            </div>
            <h4 style={card1Title}>Rapid Deployment</h4>
            <p style={card1Text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
          <div className="yukari" style={homecard1}>
            <div style={card1icondiv}>
              <i style={card1icon} class="fa-solid fa-window-maximize"></i>
            </div>
            <h4 style={card1Title}>Advanced Security</h4>
            <p style={card1Text}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="yukari" style={homecard1}>
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
      <div style={aboutpage}>
        <p style={aboutfirsttext}>who we are</p>
        <h3 style={aboutTitle}>Unleashing Potential with Creative Strategy</h3>
        <p style={abouttext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul style={aboutlist}>
          <li style={aboutlistli}>
            <div>
              <i style={aboutlisticon} class="fa-regular fa-circle-check"></i>
              <span style={aboutlitext1}>
                {" "}
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
          </li>
          <li style={aboutlistli}>
            <div>
              <i style={aboutlisticon} class="fa-regular fa-circle-check"></i>
              <span style={aboutlitext1}>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </span>
            </div>
          </li>
          <li style={aboutlistli}>
            <div>
              <i style={aboutlisticon} class="fa-regular fa-circle-check"></i>
              <span style={aboutlitext2}>
                {" "}
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </span>
            </div>
          </li>
        </ul>
        <button style={aboutBtn}>
          ream more <i class="fa-solid fa-arrow-right"></i>
        </button>
        <img style={aboutImage1} src={about1} alt="" />
        <img style={aboutImage2} src={about2} alt="" />
        <img style={aboutImage3} src={about3} alt="" />
        <h2 style={abouttitle2}>how we work </h2>
        <div style={abouttitle2cigi}></div>
        <div style={abouttitle2cigi2}></div>
        <p style={about2text}>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
        <div style={aboutCard1}>
          <div style={aboutcard1icondiv}>
            <i class="fa-solid fa-pen-to-square"></i>
          </div>
          <p style={aboutcard1Number}>01</p>
          <h2 style={aboutcard1title}>Project Planning</h2>
          <p style={aboutcard1Text}>
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim.
          </p>
        </div>
        <div style={aboutCard2}>
          <div style={aboutcard1icondiv}>
            <i class="fa-solid fa-gear"></i>
          </div>
          <p style={aboutcard1Number}>02</p>
          <h2 style={aboutcard1title}>Development Phase</h2>
          <p style={aboutcard1Text}>
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus.
          </p>
        </div>
        <div style={aboutCard3}>
          <div style={aboutcard1icondiv}>
            <i class="fa-solid fa-magnifying-glass"></i>{" "}
          </div>
          <p style={aboutcard1Number}>03</p>
          <h2 style={aboutcard1title}>Testing & QA</h2>
          <p style={aboutcard1Text}>
            Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.
            Vestibulum volutpat pretium libero..
          </p>
        </div>
        <div style={aboutCard4}>
          <div style={aboutcard1icondiv}>
            <i class="fa-solid fa-rocket"></i>{" "}
          </div>
          <p style={aboutcard1Number}>04</p>
          <h2 style={aboutcard1title}>Launch & Support</h2>
          <p style={aboutcard1Text}>
            Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            Maecenas nec odio et ante tincidunt.
          </p>
        </div>
      </div>
      <div style={service}>
        <h2 style={servicetitle}>service </h2>
        <div style={servicetitle2cigi}></div>
        <div style={servicetitle2cigi2}></div>
        <p style={servicetext}>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
        <div style={servicecardrow1}>
          <div className="cardservice" style={servicecardrow1Card1}>
            <div style={servicecard1icondiv}>
              <i style={servicecard1icon} class="fa-solid fa-code"></i>
            </div>
            <h3 style={servicecardrow1Card1Title}>Custom Web Development</h3>
            <p style={servicecardrow1Card1Text}>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla
              sit amet nisl tempus convallis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <p style={servicecardrow1Card1LearnMore}>
              learn more <i class="fa-solid fa-arrow-right"></i>{" "}
            </p>
          </div>
          <div style={servicecardrow1Card1}>
            <div style={servicecard1icondiv}>
              <i style={servicecard1icon} class="fa-solid fa-mobile"></i>{" "}
            </div>
            <h3 style={servicecardrow1Card1Title}>Mobile App Solutions</h3>
            <p style={servicecardrow1Card1Text}>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Vivamus magna justo, lacinia eget consectetur sed. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum
              congue leo eget malesuada.
            </p>
            <p style={servicecardrow1Card1LearnMore}>
              learn more <i class="fa-solid fa-arrow-right"></i>{" "}
            </p>
          </div>
        </div>
        <div style={servicecardrow2}>
          <div style={servicecardrow1Card1}>
            <div style={servicecard1icondiv}>
              <i style={servicecard1icon} class="fa-solid fa-swatchbook"></i>{" "}
            </div>
            <h3 style={servicecardrow1Card1Title}>UI/UX Design</h3>
            <p style={servicecardrow1Card1Text}>
              Pellentesque in ipsum id orci porta dapibus. Proin eget tortor
              risus. Vivamus suscipit tortor eget felis porttitor volutpat.
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui.
            </p>
            <p style={servicecardrow1Card1LearnMore}>
              learn more <i class="fa-solid fa-arrow-right"></i>{" "}
            </p>
          </div>
          <div style={servicecardrow1Card1}>
            <div style={servicecard1icondiv}>
              <i style={servicecard1icon} class="fa-solid fa-signal"></i>{" "}
            </div>
            <h3 style={servicecardrow1Card1Title}>Digital Marketing</h3>
            <p style={servicecardrow1Card1Text}>
              Donec rutrum congue leo eget malesuada. Mauris blandit aliquet
              elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
              tincidunt. Curabitur aliquet quam id dui posuere blandit.
            </p>
            <p style={servicecardrow1Card1LearnMore}>
              learn more <i class="fa-solid fa-arrow-right"></i>{" "}
            </p>
          </div>
        </div>
        <div style={servicecardrow3}>
          <div style={servicecardrow1Card1}>
            <div style={servicecard1icondiv}>
              <i style={servicecard1icon} class="fa-solid fa-cloud"></i>{" "}
            </div>
            <h3 style={servicecardrow1Card1Title}>Cloud Computing</h3>
            <p style={servicecardrow1Card1Text}>
              Curabitur aliquet quam id dui posuere blandit. Sed porttitor
              lectus nibh. Vivamus magna justo, lacinia eget consectetur sed,
              convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.
            </p>
            <p style={servicecardrow1Card1LearnMore}>
              learn more <i class="fa-solid fa-arrow-right"></i>{" "}
            </p>
          </div>
          <div style={servicecardrow1Card1}>
            <div style={servicecard1icondiv}>
              <i style={servicecard1icon} class="fa-solid fa-shield"></i>{" "}
            </div>
            <h3 style={servicecardrow1Card1Title}>Cybersecurity Solutions</h3>
            <p style={servicecardrow1Card1Text}>
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Donec sollicitudin molestie malesuada. Curabitur arcu erat,
              accumsan id imperdiet et. Proin eget tortor risus.
            </p>
            <p style={servicecardrow1Card1LearnMore}>
              learn more <i class="fa-solid fa-arrow-right"></i>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invent;
