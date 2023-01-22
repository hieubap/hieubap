import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { anime } from "react-anime";
import Header from "./header";

const timeStart = 1000;
const time1 = 6000;
const time2 = 2000;

const imgUrls = [
  {
    url: "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/326909974_564755435551358_3690601265951475452_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tiXP_lVyDFAAX-AzxYA&_nc_ht=scontent.fhan14-2.fna&oh=00_AfC9Mt4_4_reLSJxfUIb-7VNrr6C5O-FxtlJbctoP3NR-w&oe=63D153AF",
  },
  {
    url: "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/326935809_912702146750105_755036751160955602_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Fg3QruG3mqAAX80dwqa&_nc_ht=scontent.fhan14-3.fna&oh=00_AfADSRMk4DgGBX_xs5ZKtVlUMHkA6dvwQyxTxjG6VtaV-w&oe=63D26C73",
  },
  {
    url: "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/326753734_8612294048845108_856880596476647489_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=VHZZ-kVsYYYAX8s5_Ma&_nc_ht=scontent.fhan14-1.fna&oh=00_AfD2cEVxNBzT_3zX7tS8xBCS2rgxC7PrVDaEp3-YPg0cug&oe=63D26CE8",
  },
  // {
  //   url: "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/326781107_583999273079539_3412055070270952852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Nr7pEYJxT9oAX_J5NcJ&tn=OZCTykEQKyDj7Tct&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDB--CDF8cY6Q4xabcBB0pxqPGL2SedbWykV9Ns-LTojQ&oe=63D33407",
  // },
];

const bottomImg = [
  "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/326781107_583999273079539_3412055070270952852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Nr7pEYJxT9oAX_J5NcJ&tn=OZCTykEQKyDj7Tct&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDB--CDF8cY6Q4xabcBB0pxqPGL2SedbWykV9Ns-LTojQ&oe=63D33407",
  "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/326988917_883321029372947_3717472668646509693_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TkOu_A63oPQAX9xPQvI&tn=OZCTykEQKyDj7Tct&_nc_ht=scontent.fhan14-2.fna&oh=00_AfAwcTcOFtqN09IlR_LBl_UryWqU2YYX2xxcyjYCgMhQqA&oe=63D22746",
];

function App() {
  const onPlay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("audio-play").play();
    document.getElementById("click").style.display = "none";
    const imgs = document.getElementsByClassName("animate-img");
    for (let i = 0; i < imgs.length; i++) {
      setTimeout(() => {
        imgs[i].className = "animate-img";
        setTimeout(() => {
          imgs[i].className = "animate-img tran-" + i;
        }, time1);
      }, timeStart + i * 200);
    }

    setTimeout(() => {
      const imgs = document.getElementsByClassName("animate-img2");
      imgs[0].className = "animate-img2";
    }, time1 + time2);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.location.reload();
    });
  }, []);
  // window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div
      style={{
        // overflowX: "hidden",
        // overflowY: "scroll",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          paddingBottom: 50,
        }}
      >
        <Header />
        {window.screen.width < window.screen.height ? (
          <div
            id="click"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              display:
                window.screen.width < window.screen.height ? "flex" : "none",
              justifyContent: "center",

              // alignItems: "center",
            }}
            onClick={onPlay}
          >
            <div className="third" style={{ lineHeight: "24px" }}>
              Hãy xoay ngang điện thoại để có trải nghiệm tốt nhất ={"))"}
            </div>
          </div>
        ) : (
          <>
            <audio
              id="audio-play"
              controls
              autoplay
              style={{ display: "none" }}
            >
              <source src={require("./happynewyear.mp3")} type="audio/mp3" />
            </audio>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "space-evenly",
                overflow: "hidden",
              }}
            >
              {imgUrls.map((item, idx) => (
                <img
                  className={"animate-img tran-" + idx}
                  style={{ marginTop: "5vh", height: "90vh" }}
                  key={idx}
                  src={item.url}
                />
              ))}
            </div>

            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <img
                className="animate-img2 team-img"
                style={{ height: "90vh" }}
                src={
                  "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/326781107_583999273079539_3412055070270952852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Nr7pEYJxT9oAX_J5NcJ&tn=OZCTykEQKyDj7Tct&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDB--CDF8cY6Q4xabcBB0pxqPGL2SedbWykV9Ns-LTojQ&oe=63D33407"
                }
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              {imgUrls.map((item, idx) => (
                <img
                  style={{ marginTop: "5vh", height: "90vh" }}
                  key={idx}
                  src={item.url}
                />
              ))}
            </div>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{ height: "90vh" }}
                src={
                  "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/326781107_583999273079539_3412055070270952852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Nr7pEYJxT9oAX_J5NcJ&tn=OZCTykEQKyDj7Tct&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDB--CDF8cY6Q4xabcBB0pxqPGL2SedbWykV9Ns-LTojQ&oe=63D33407"
                }
              />
            </div>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                id="click-id"
                style={{ height: "90vh" }}
                src={
                  "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/326988917_883321029372947_3717472668646509693_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TkOu_A63oPQAX9xPQvI&tn=OZCTykEQKyDj7Tct&_nc_ht=scontent.fhan14-2.fna&oh=00_AfAwcTcOFtqN09IlR_LBl_UryWqU2YYX2xxcyjYCgMhQqA&oe=63D22746"
                }
                onClick={() => {
                  document.getElementById("audio-play").play();
                }}
              />
            </div>
            <div
              id="click"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: "10vh",
                display: "flex",
                justifyContent: "center",
                // alignItems: "center",
              }}
              onClick={onPlay}
            >
              <div className="third">click me to start</div>
            </div>
          </>
        )}

        {/* <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <video
          style={{ height: "90vh" }}
          src="https://www.facebook.com/100012522279061/videos/pcb.1564247107336017/723339242642335"
        />
      </div> */}
      </div>
    </div>
  );
}

export default App;
