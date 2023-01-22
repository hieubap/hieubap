import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { anime } from "react-anime";

const Header = (props) => {
  useEffect(() => {
    var design = anime({
      targets: "#newyear2020 #happy",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 2000,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: true,
    });

    var design = anime({
      targets: "#newyear2020 #NEWYEAR",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 2500,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: true,
    });

    var design = anime({
      targets:
        "#newyear2020 #Vector_43,#Vector_210,#Vector_207,#Vector_42,#Vector_45",
      translateY: -10,
      easing: "easeInOutSine",
      duration: 2500,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: true,
    });
  }, []);
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}></div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100vw",
          height: "100vh",
        }}
      >
        <a href="https://www.enationalelectronics.com/" target="_blank">
          <div class="container nav_container mt-5">
            <div class="col-sm-12 col-md-12 mauto">
              <svg
                width="100%"
                height="90vh"
                viewBox="0 0 750 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="newyear2020">
                  <path id="Vector" d="M750 0H0V500H750V0Z" fill="#1C2033" />
                  <path
                    id="Vector_2"
                    d="M375 27.7H723.7V472.3H375"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M375 37.3H697.2C697.2 46.5 704.7 54 713.9 54V446C704.7 446 697.2 453.5 697.2 462.7H375"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_4"
                    d="M737.2 14.2H723.7V27.7H737.2V14.2Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_5"
                    d="M737.2 472.3H723.7V485.8H737.2V472.3Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g id="Group">
                    <path
                      id="Vector_6"
                      d="M625.7 305.5L588.1 370.7H663.4L625.7 305.5Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_7"
                      d="M625.7 330.6L581.6 407.1H669.9L625.7 330.6Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_8"
                      d="M625.7 344.9L570.4 440.7H681.1L625.7 344.9Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_9"
                      d="M634 440.7H617.5V462.7H634V440.7Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_2">
                    <path
                      id="Vector_10"
                      d="M458.1 356.2L432.6 400.4H483.7L458.1 356.2Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_11"
                      d="M458.1 373.2L428.2 425H488.1L458.1 373.2Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_12"
                      d="M458.1 382.9L420.6 447.8H495.6L458.1 382.9Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_13"
                      d="M458.1 377.9L442.2 405.6H474.1L458.1 377.9Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_14"
                      d="M441.4 411.9L420.6 447.8H462.1L441.4 411.9Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_15"
                      d="M474.9 411.9L454.2 447.8H495.6L474.9 411.9Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_16"
                      d="M463.7 447.8H452.5V462.7H463.7V447.8Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <path
                    id="Vector_17"
                    d="M625.7 379.9L612.7 402.4H638.7L625.7 379.9Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_18"
                    d="M625.7 344.9L634.3 330H617.2L625.7 344.9Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_19"
                    d="M625.7 411.9L612.7 434.4H638.7L625.7 411.9Z"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_20"
                    d="M670.6 440.7L651.2 407.1L630.2 370.7L625.7 363L621.3 370.7L600.3 407.1L580.9 440.7"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_21"
                    d="M634 458.9H617.5"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_22"
                    d="M625.7 420.3L620 430.3H631.5L625.7 420.3Z"
                    fill="#EFC87E"
                  />
                  <g id="jhalar6">
                    <path
                      id="Vector_23"
                      d="M636.8 37.3V182.6"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_24"
                      d="M673.167 218.89L636.822 182.545L600.477 218.89L636.822 255.235L673.167 218.89Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_25"
                      d="M651.4 244.6H622.2C616.1 244.6 611.1 239.6 611.1 233.5V204.3C611.1 198.2 616.1 193.2 622.2 193.2H651.4C657.5 193.2 662.5 198.2 662.5 204.3V233.5C662.5 239.7 657.6 244.6 651.4 244.6Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_26"
                      d="M636.8 230C642.93 230 647.9 225.03 647.9 218.9C647.9 212.77 642.93 207.8 636.8 207.8C630.67 207.8 625.7 212.77 625.7 218.9C625.7 225.03 630.67 230 636.8 230Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_27"
                      d="M642 218.9C642 221.8 639.7 224.1 636.8 224.1C633.9 224.1 631.6 221.8 631.6 218.9C631.6 216 633.9 213.7 636.8 213.7C639.7 213.7 642 216.1 642 218.9Z"
                      fill="#EFC87E"
                    />
                    <path
                      id="Vector_28"
                      d="M636.8 167.2C639.451 167.2 641.6 165.051 641.6 162.4C641.6 159.749 639.451 157.6 636.8 157.6C634.149 157.6 632 159.749 632 162.4C632 165.051 634.149 167.2 636.8 167.2Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_29"
                      d="M640.2 145.8C640.2 147.7 638.7 149.2 636.8 149.2C634.9 149.2 633.4 147.7 633.4 145.8C633.4 143.9 634.9 142.4 636.8 142.4C638.7 142.4 640.2 143.9 640.2 145.8Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_30"
                      d="M659.5 218.9C659.5 220.9 651.8 221.7 651.2 223.6C650.6 225.5 656.3 230.7 655.1 232.3C653.9 233.9 647.3 230.1 645.7 231.2C644.1 232.4 645.7 239.9 643.8 240.5C642 241.1 638.8 234.1 636.8 234.1C634.8 234.1 631.6 241.1 629.8 240.5C627.9 239.9 629.5 232.3 627.9 231.2C626.3 230 619.6 233.9 618.5 232.3C617.3 230.7 623.1 225.6 622.4 223.6C621.8 221.8 614.1 221 614.1 218.9C614.1 216.9 621.8 216.1 622.4 214.2C623 212.3 617.3 207.1 618.5 205.5C619.7 203.9 626.3 207.7 627.9 206.6C629.5 205.4 627.9 197.9 629.8 197.3C631.6 196.7 634.8 203.7 636.8 203.7C638.8 203.7 642 196.7 643.8 197.3C645.7 197.9 644.1 205.5 645.7 206.6C647.3 207.8 654 203.9 655.1 205.5C656.3 207.1 650.5 212.2 651.2 214.2C651.8 216.1 659.5 216.9 659.5 218.9Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="jhalar5">
                    <path
                      id="Vector_31"
                      d="M552.5 176.9C570.339 176.9 584.8 162.439 584.8 144.6C584.8 126.761 570.339 112.3 552.5 112.3C534.661 112.3 520.2 126.761 520.2 144.6C520.2 162.439 534.661 176.9 552.5 176.9Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_32"
                      d="M552.5 162.8C562.552 162.8 570.7 154.652 570.7 144.6C570.7 134.548 562.552 126.4 552.5 126.4C542.448 126.4 534.3 134.548 534.3 144.6C534.3 154.652 542.448 162.8 552.5 162.8Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_33"
                      d="M552.5 153.9C557.636 153.9 561.8 149.736 561.8 144.6C561.8 139.464 557.636 135.3 552.5 135.3C547.364 135.3 543.2 139.464 543.2 144.6C543.2 149.736 547.364 153.9 552.5 153.9Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                    />
                    <path
                      id="Vector_34"
                      d="M552.5 148.4C554.599 148.4 556.3 146.699 556.3 144.6C556.3 142.501 554.599 140.8 552.5 140.8C550.401 140.8 548.7 142.501 548.7 144.6C548.7 146.699 550.401 148.4 552.5 148.4Z"
                      fill="#EFC87E"
                    />
                    <path
                      id="Vector_35"
                      d="M588 144.6C588 147.8 576 149 575.1 151.9C574.1 154.9 583.1 162.9 581.3 165.4C579.5 167.9 569 161.9 566.5 163.7C564 165.5 566.5 177.3 563.5 178.3C560.6 179.2 555.7 168.3 552.5 168.3C549.3 168.3 544.4 179.3 541.5 178.3C538.5 177.3 541 165.5 538.5 163.7C536 161.9 525.6 167.9 523.7 165.4C522 163 531 154.9 530 152C529.1 149.1 517.1 147.9 517.1 144.7C517.1 141.5 529.1 140.3 530 137.4C531 134.4 522 126.4 523.8 123.9C525.6 121.4 536.1 127.4 538.6 125.6C541.1 123.8 538.6 112 541.6 111C544.5 110.1 549.4 121 552.6 121C555.8 121 560.7 110 563.6 111C566.6 112 564.1 123.8 566.6 125.6C569.1 127.4 579.5 121.4 581.4 123.9C583.2 126.4 574.3 134.4 575.2 137.4C576 140.2 588 141.5 588 144.6Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_36"
                      d="M552.5 112.4V37.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_37"
                      d="M555.3 100.8H549.8V106.3H555.3V100.8Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_38"
                      d="M553.8 90.6H551.2V93.2H553.8V90.6Z"
                      fill="#EFC87E"
                    />
                    <path
                      id="Vector_39"
                      d="M553.8 85H551.2V87.6H553.8V85Z"
                      fill="#EFC87E"
                    />
                    <path
                      id="Vector_40"
                      d="M553.8 80.1H551.2V82.7H553.8V80.1Z"
                      fill="#EFC87E"
                    />
                  </g>
                  <path
                    id="Vector_41"
                    d="M625.7 379.9V344.9"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_42"
                    d="M625.7 283.5L628.4 291.1L636.5 291.3L630 296.1L632.4 303.9L625.7 299.2L619.1 303.9L621.5 296.1L615 291.3L623.1 291.1L625.7 283.5Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_43"
                    d="M596 106L597.7 110.8L602.7 110.9L598.7 113.9L600.2 118.7L596 115.8L591.9 118.7L593.4 113.9L589.4 110.9L594.4 110.8L596 106Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_44"
                    d="M397 67.1L398.6 71.9L403.7 72L399.7 75L401.1 79.9L397 77L392.9 79.9L394.3 75L390.3 72L395.4 71.9L397 67.1Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_45"
                    d="M458.1 338.5L459.8 343.3L464.8 343.4L460.8 346.4L462.3 351.2L458.1 348.3L454 351.2L455.5 346.4L451.5 343.4L456.5 343.3L458.1 338.5Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g id="Group_3">
                    <path
                      id="Vector_46"
                      d="M535.3 419.1H523.8V462.8H535.3V419.1Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_47"
                      d="M503.8 427.3H555.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g id="Group_4">
                      <path
                        id="Vector_48"
                        d="M529.6 419.1C529.6 419.1 538 404.6 548.9 408.5C558.3 411.9 543.8 419.1 543.8 419.1"
                        stroke="#E27C6C"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_49"
                        d="M529.6 419.1C529.6 419.1 535.8 408.4 543.8 411.3C550.7 413.8 540.1 419.1 540.1 419.1"
                        stroke="#E27C6C"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <g id="Group_5">
                      <path
                        id="Vector_50"
                        d="M529.6 419.1C529.6 419.1 521.2 404.6 510.3 408.5C500.9 411.9 515.4 419.1 515.4 419.1"
                        stroke="#E27C6C"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_51"
                        d="M529.6 419.1C529.6 419.1 523.4 408.4 515.4 411.3C508.5 413.8 519.1 419.1 519.1 419.1"
                        stroke="#E27C6C"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <path
                      id="Vector_52"
                      d="M555.3 419.1H503.8V462.8H555.3V419.1Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="jharlar3">
                    <path
                      id="Vector_53"
                      d="M437.176 69.6256L433.287 73.5146L437.176 77.4037L441.065 73.5146L437.176 69.6256Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_54"
                      d="M437.169 48.4286L433.28 52.3176L437.169 56.2067L441.058 52.3176L437.169 48.4286Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_55"
                      d="M437.135 89.6425L433.246 93.5316L437.135 97.4206L441.024 93.5316L437.135 89.6425Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_56"
                      d="M437.093 111.215L434.689 113.619L437.093 116.023L439.498 113.619L437.093 111.215Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_57"
                      d="M437.033 64.9566L428.477 73.5125L437.033 82.0685L445.589 73.5125L437.033 64.9566Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g id="Group_6">
                      <path
                        id="Vector_58"
                        d="M437.1 124.9L411.6 154.8H462.6L437.1 124.9Z"
                        stroke="#EFC87E"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_59"
                        d="M437.1 124.9L418.2 154.8H456.1L437.1 124.9Z"
                        stroke="#EFC87E"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_60"
                        d="M437.1 124.9L429.7 154.8H444.5L437.1 124.9Z"
                        stroke="#EFC87E"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <g id="Group_7">
                        <path
                          id="Vector_61"
                          d="M437.1 195L462.6 165.1H411.6L437.1 195Z"
                          stroke="#EFC87E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Vector_62"
                          d="M437.1 195L456.1 165.1H418.2L437.1 195Z"
                          stroke="#EFC87E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Vector_63"
                          d="M437.1 195L444.5 165.1H429.7L437.1 195Z"
                          stroke="#EFC87E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <path
                        id="Vector_64"
                        d="M462.6 154.8H411.6V165.2H462.6V154.8Z"
                        stroke="#E27C6C"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <g id="Group_8">
                        <path
                          id="Vector_65"
                          d="M460.254 160.166L457.709 157.621L455.163 160.166L457.709 162.712L460.254 160.166Z"
                          stroke="#EFC87E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Vector_66"
                          d="M449.952 160.171L447.407 157.625L444.861 160.171L447.407 162.716L449.952 160.171Z"
                          stroke="#EFC87E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Vector_67"
                          d="M429.348 160.18L426.803 157.635L424.257 160.18L426.803 162.726L429.348 160.18Z"
                          stroke="#EFC87E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Vector_68"
                          d="M439.65 160.176L437.105 157.63L434.559 160.176L437.105 162.721L439.65 160.176Z"
                          stroke="#EFC87E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Vector_69"
                          d="M419.046 160.185L416.501 157.639L413.955 160.185L416.501 162.731L419.046 160.185Z"
                          stroke="#EFC87E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </g>
                    <path
                      id="Vector_70"
                      d="M437.1 124.9V37.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_9">
                    <path
                      id="Vector_71"
                      d="M669.9 93.5V113.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_72"
                      d="M659.9 103.5H679.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_73"
                      d="M664.9 98.5L674.9 108.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_74"
                      d="M664.9 108.5L674.9 98.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_10">
                    <path
                      id="Vector_75"
                      d="M620 53.7V63.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_76"
                      d="M615 58.7H625"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_77"
                      d="M617.5 56.2L622.5 61.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_78"
                      d="M617.5 61.2L622.5 56.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_11">
                    <path
                      id="Vector_79"
                      d="M481.2 116.4V136.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_80"
                      d="M471.1 126.4H491.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_81"
                      d="M476.2 121.5L486.2 131.4"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_82"
                      d="M476.2 131.4L486.2 121.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_12">
                    <path
                      id="Vector_83"
                      d="M495.6 350.5V365.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_84"
                      d="M488.3 357.8H503"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_85"
                      d="M492 354.1L499.3 361.4"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_86"
                      d="M492 361.4L499.3 354.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_13">
                    <path
                      id="Vector_87"
                      d="M685.7 323.3V337.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_88"
                      d="M678.4 330.6H693"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_89"
                      d="M682 327L689.3 334.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_90"
                      d="M682 334.2L689.3 327"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_14">
                    <path
                      id="Vector_91"
                      d="M529.1 47.9V68"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_92"
                      d="M519 57.9H539.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_93"
                      d="M524.1 53L534 62.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_94"
                      d="M524.1 62.9L534 53"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_15">
                    <path
                      id="Vector_95"
                      d="M679.9 145.8V122.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_96"
                      d="M677.7 146.1L670.8 123.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_97"
                      d="M675.6 147.1L662.5 127.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_98"
                      d="M673.9 148.7L655.7 134.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_99"
                      d="M672.7 150.7L651.1 142.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_100"
                      d="M672.2 153L649 151.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_101"
                      d="M672.4 155.3L649.7 160.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_102"
                      d="M673.2 157.4L653.1 169.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_103"
                      d="M674.7 159.2L658.9 176.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_104"
                      d="M676.6 160.5L666.5 181.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_105"
                      d="M678.8 161.2L675.3 184.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_106"
                      d="M681.1 161.2L684.6 184.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_107"
                      d="M683.3 160.5L693.4 181.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_108"
                      d="M685.2 159.2L701 176.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_109"
                      d="M686.7 157.4L706.8 169.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_110"
                      d="M687.5 155.3L710.2 160.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_111"
                      d="M687.7 153L710.9 151.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_112"
                      d="M687.2 150.7L708.8 142.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_113"
                      d="M686 148.7L704.2 134.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_114"
                      d="M684.3 147.1L697.4 127.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_115"
                      d="M682.2 146.1L689.1 123.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_16">
                    <path
                      id="Vector_116"
                      d="M480 70.7V62.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_117"
                      d="M479.2 70.9L476.7 62.8"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_118"
                      d="M478.4 71.2L473.7 64.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_119"
                      d="M477.8 71.8L471.2 66.6"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_120"
                      d="M477.4 72.5L469.6 69.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_121"
                      d="M477.2 73.3L468.8 72.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_122"
                      d="M477.3 74.2L469.1 76.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_123"
                      d="M477.6 75L470.3 79.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_124"
                      d="M478.1 75.6L472.4 81.8"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_125"
                      d="M478.8 76.1L475.1 83.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_126"
                      d="M479.6 76.3L478.3 84.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_127"
                      d="M480.4 76.3L481.7 84.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_128"
                      d="M481.2 76.1L484.9 83.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_129"
                      d="M481.9 75.6L487.6 81.8"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_130"
                      d="M482.4 75L489.7 79.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_131"
                      d="M482.8 74.2L491 76.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_132"
                      d="M482.8 73.3L491.2 72.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_133"
                      d="M482.6 72.5L490.5 69.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_134"
                      d="M482.2 71.8L488.8 66.6"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_135"
                      d="M481.6 71.2L486.3 64.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_136"
                      d="M480.8 70.9L483.3 62.8"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_17">
                    <path
                      id="Vector_137"
                      d="M497.1 202.4V185.8"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_138"
                      d="M495.5 202.7L490.6 186.8"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_139"
                      d="M494 203.4L484.6 189.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_140"
                      d="M492.8 204.5L479.8 194.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_141"
                      d="M491.9 205.9L476.5 199.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_142"
                      d="M491.6 207.6L475 206.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_143"
                      d="M491.7 209.2L475.5 212.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_144"
                      d="M492.3 210.8L477.9 219.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_145"
                      d="M493.3 212L482 224.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_146"
                      d="M494.7 213L487.5 228"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_147"
                      d="M496.3 213.5L493.8 229.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_148"
                      d="M497.9 213.5L500.4 229.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_149"
                      d="M499.5 213L506.7 228"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_150"
                      d="M500.9 212L512.2 224.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_151"
                      d="M501.9 210.8L516.3 219.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_152"
                      d="M502.5 209.2L518.7 212.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_153"
                      d="M502.6 207.6L519.2 206.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_154"
                      d="M502.3 205.9L517.8 199.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_155"
                      d="M501.5 204.5L514.4 194.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_156"
                      d="M500.2 203.4L509.6 189.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_157"
                      d="M498.8 202.7L503.6 186.8"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <path
                    id="Vector_158"
                    d="M555.2 369.4C555.2 371.5 553.5 373.2 551.4 373.2C549.3 373.2 547.6 371.5 547.6 369.4C547.6 367.3 549.3 365.6 551.4 365.6C553.5 365.6 555.2 367.3 555.2 369.4Z"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_159"
                    d="M677.5 415.7C679.599 415.7 681.3 413.999 681.3 411.9C681.3 409.801 679.599 408.1 677.5 408.1C675.401 408.1 673.7 409.801 673.7 411.9C673.7 413.999 675.401 415.7 677.5 415.7Z"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_160"
                    d="M706.6 363.7C708.699 363.7 710.4 361.999 710.4 359.9C710.4 357.801 708.699 356.1 706.6 356.1C704.501 356.1 702.8 357.801 702.8 359.9C702.8 361.999 704.501 363.7 706.6 363.7Z"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_161"
                    d="M684.9 52.3C684.9 54.4 683.2 56.1 681.1 56.1C679 56.1 677.3 54.4 677.3 52.3C677.3 50.2 679 48.5 681.1 48.5C683.2 48.5 684.9 50.2 684.9 52.3Z"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_162"
                    d="M412.4 52.6C414.499 52.6 416.2 50.8987 416.2 48.8C416.2 46.7013 414.499 45 412.4 45C410.301 45 408.6 46.7013 408.6 48.8C408.6 50.8987 410.301 52.6 412.4 52.6Z"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_163"
                    d="M459.9 102.5C459.9 104.6 458.2 106.3 456.1 106.3C454 106.3 452.3 104.6 452.3 102.5C452.3 100.4 454 98.7 456.1 98.7C458.2 98.7 459.9 100.4 459.9 102.5Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_164"
                    d="M623.8 95.7C623.8 97.8 622.1 99.5 620 99.5C617.9 99.5 616.2 97.8 616.2 95.7C616.2 93.6 617.9 91.9 620 91.9C622.1 91.9 623.8 93.6 623.8 95.7Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_165"
                    d="M663.3 323.3C663.3 325.4 661.6 327.1 659.5 327.1C657.4 327.1 655.7 325.4 655.7 323.3C655.7 321.2 657.4 319.5 659.5 319.5C661.6 319.5 663.3 321.2 663.3 323.3Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_166"
                    d="M503 399.1C503 401.2 501.3 402.9 499.2 402.9C497.1 402.9 495.4 401.2 495.4 399.1C495.4 397 497.1 395.3 499.2 395.3C501.3 395.3 503 397 503 399.1Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_167"
                    d="M433.5 353.1C433.5 355.2 431.8 356.9 429.7 356.9C427.6 356.9 425.9 355.2 425.9 353.1C425.9 351 427.6 349.3 429.7 349.3C431.8 349.3 433.5 351 433.5 353.1Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_168"
                    d="M574.5 73.5C574.5 75.6 572.8 77.3 570.7 77.3C568.6 77.3 566.9 75.6 566.9 73.5C566.9 71.4 568.6 69.7 570.7 69.7C572.8 69.7 574.5 71.4 574.5 73.5Z"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_169"
                    d="M375 27.7H26.3V472.3H375"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_170"
                    d="M375 37.3H52.8C52.8 46.5 45.3 54 36 54V446C45.2 446 52.7 453.5 52.7 462.7H375"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_171"
                    d="M12.794 27.7247H26.294V14.2247L12.794 14.2247L12.794 27.7247Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_172"
                    d="M12.794 485.775H26.294V472.275H12.794L12.794 485.775Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g id="Group_18">
                    <path
                      id="Vector_173"
                      d="M124.3 305.5L161.9 370.7H86.6L124.3 305.5Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_174"
                      d="M124.3 330.6L168.4 407.1H80.1L124.3 330.6Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_175"
                      d="M124.3 344.9L179.6 440.7H68.9L124.3 344.9Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_176"
                      d="M116.016 462.741H132.516V440.741H116.016V462.741Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_19">
                    <path
                      id="Vector_177"
                      d="M291.9 356.2L317.4 400.4H266.3L291.9 356.2Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_178"
                      d="M291.9 373.2L321.8 425H261.9L291.9 373.2Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_179"
                      d="M291.9 382.9L329.4 447.8H254.4L291.9 382.9Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_180"
                      d="M291.9 377.9L307.8 405.6H275.9L291.9 377.9Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_181"
                      d="M308.6 411.9L329.4 447.8H287.9L308.6 411.9Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_182"
                      d="M275.1 411.9L295.8 447.8H254.4L275.1 411.9Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_183"
                      d="M286.211 462.735H297.411V447.835H286.211V462.735Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <path
                    id="Vector_184"
                    d="M124.3 379.9L137.3 402.4H111.3L124.3 379.9Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_185"
                    d="M124.3 344.9L115.7 330H132.8L124.3 344.9Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_186"
                    d="M124.3 411.9L137.3 434.4H111.3L124.3 411.9Z"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_187"
                    d="M79.4 440.7L98.8 407.1L119.8 370.7L124.3 363L128.7 370.7L149.7 407.1L169.1 440.7"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_188"
                    d="M116 458.9H132.5"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_189"
                    d="M124.3 420.3L130 430.3H118.5L124.3 420.3Z"
                    fill="#EFC87E"
                  />
                  <g id="jhalar1">
                    <path
                      id="Vector_190"
                      d="M113.2 37.3V182.6"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_191"
                      d="M113.193 255.305L149.538 218.96L113.193 182.615L76.8481 218.96L113.193 255.305Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_192"
                      d="M98.6 244.6H127.8C133.9 244.6 138.9 239.6 138.9 233.5V204.3C138.9 198.2 133.9 193.2 127.8 193.2H98.6C92.5 193.2 87.5 198.2 87.5 204.3V233.5C87.5 239.7 92.4 244.6 98.6 244.6Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_193"
                      d="M113.2 230C119.33 230 124.3 225.03 124.3 218.9C124.3 212.77 119.33 207.8 113.2 207.8C107.07 207.8 102.1 212.77 102.1 218.9C102.1 225.03 107.07 230 113.2 230Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_194"
                      d="M108 218.9C108 221.8 110.3 224.1 113.2 224.1C116.1 224.1 118.4 221.8 118.4 218.9C118.4 216 116.1 213.7 113.2 213.7C110.3 213.7 108 216.1 108 218.9Z"
                      fill="#EFC87E"
                    />
                    <path
                      id="Vector_195"
                      d="M113.2 167.2C115.851 167.2 118 165.051 118 162.4C118 159.749 115.851 157.6 113.2 157.6C110.549 157.6 108.4 159.749 108.4 162.4C108.4 165.051 110.549 167.2 113.2 167.2Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_196"
                      d="M109.8 145.8C109.8 147.7 111.3 149.2 113.2 149.2C115.1 149.2 116.6 147.7 116.6 145.8C116.6 143.9 115.1 142.4 113.2 142.4C111.3 142.4 109.8 143.9 109.8 145.8Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="under-circle1"
                      d="M90.5 218.9C90.5 220.9 98.2 221.7 98.8 223.6C99.4 225.5 93.7 230.7 94.9 232.3C96.1 233.9 102.7 230.1 104.3 231.2C105.9 232.4 104.3 239.9 106.2 240.5C108 241.1 111.2 234.1 113.2 234.1C115.2 234.1 118.4 241.1 120.2 240.5C122.1 239.9 120.5 232.3 122.1 231.2C123.7 230 130.4 233.9 131.5 232.3C132.7 230.7 126.9 225.6 127.6 223.6C128.2 221.8 135.9 221 135.9 218.9C135.9 216.9 128.2 216.1 127.6 214.2C127 212.3 132.7 207.1 131.5 205.5C130.3 203.9 123.7 207.7 122.1 206.6C120.5 205.4 122.1 197.9 120.2 197.3C118.4 196.7 115.2 203.7 113.2 203.7C111.2 203.7 108 196.7 106.2 197.3C104.3 197.9 105.9 205.5 104.3 206.6C102.7 207.8 96 203.9 94.9 205.5C93.7 207.1 99.5 212.2 98.8 214.2C98.2 216.1 90.5 216.9 90.5 218.9Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="jhalar2">
                    <path
                      id="Vector_197"
                      d="M197.5 176.9C215.339 176.9 229.8 162.439 229.8 144.6C229.8 126.761 215.339 112.3 197.5 112.3C179.661 112.3 165.2 126.761 165.2 144.6C165.2 162.439 179.661 176.9 197.5 176.9Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_198"
                      d="M197.5 162.8C207.552 162.8 215.7 154.652 215.7 144.6C215.7 134.548 207.552 126.4 197.5 126.4C187.448 126.4 179.3 134.548 179.3 144.6C179.3 154.652 187.448 162.8 197.5 162.8Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_199"
                      d="M197.5 153.9C202.636 153.9 206.8 149.736 206.8 144.6C206.8 139.464 202.636 135.3 197.5 135.3C192.364 135.3 188.2 139.464 188.2 144.6C188.2 149.736 192.364 153.9 197.5 153.9Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                    />
                    <path
                      id="Vector_200"
                      d="M197.5 148.4C199.599 148.4 201.3 146.699 201.3 144.6C201.3 142.501 199.599 140.8 197.5 140.8C195.401 140.8 193.7 142.501 193.7 144.6C193.7 146.699 195.401 148.4 197.5 148.4Z"
                      fill="#EFC87E"
                    />
                    <path
                      id="under-cirlce2"
                      d="M162 144.6C162 147.8 174 149 174.9 151.9C175.9 154.9 166.9 162.9 168.7 165.4C170.5 167.9 181 161.9 183.5 163.7C186 165.5 183.5 177.3 186.5 178.3C189.4 179.2 194.3 168.3 197.5 168.3C200.7 168.3 205.6 179.3 208.5 178.3C211.5 177.3 209 165.5 211.5 163.7C214 161.9 224.4 167.9 226.3 165.4C228.1 162.9 219.2 154.9 220.1 151.9C221 149 233 147.8 233 144.6C233 141.4 221 140.2 220.1 137.3C219.1 134.3 228.1 126.3 226.3 123.8C224.5 121.3 214 127.3 211.5 125.5C209 123.7 211.5 111.9 208.5 110.9C205.6 110 200.7 120.9 197.5 120.9C194.3 120.9 189.4 109.9 186.5 110.9C183.5 111.9 186 123.7 183.5 125.5C181 127.3 170.6 121.3 168.7 123.8C166.9 126.3 175.8 134.3 174.9 137.3C174 140.2 162 141.5 162 144.6Z"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_201"
                      d="M197.5 112.4V37.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_202"
                      d="M194.727 106.224H200.227V100.724H194.727V106.224Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_203"
                      d="M196.227 93.2425H198.827V90.6425H196.227V93.2425Z"
                      fill="#EFC87E"
                    />
                    <path
                      id="Vector_204"
                      d="M196.227 87.539H198.827V84.939H196.227V87.539Z"
                      fill="#EFC87E"
                    />
                    <path
                      id="Vector_205"
                      d="M196.227 82.6783H198.827V80.0783H196.227V82.6783Z"
                      fill="#EFC87E"
                    />
                  </g>
                  <path
                    id="Vector_206"
                    d="M124.3 379.9V344.9"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_207"
                    d="M124.3 283.5L121.6 291.1L113.5 291.3L120 296.1L117.6 303.9L124.3 299.2L130.9 303.9L128.5 296.1L135 291.3L126.9 291.1L124.3 283.5Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_208"
                    d="M154 106L152.3 110.8L147.3 110.9L151.3 113.9L149.8 118.7L154 115.8L158.1 118.7L156.6 113.9L160.6 110.9L155.6 110.8L154 106Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_209"
                    d="M353 67.1L351.4 71.9L346.3 72L350.3 75L348.9 79.9L353 77L357.1 79.9L355.7 75L359.7 72L354.6 71.9L353 67.1Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_210"
                    d="M291.9 338.5L290.2 343.3L285.2 343.4L289.2 346.4L287.7 351.2L291.9 348.3L296 351.2L294.5 346.4L298.5 343.4L293.5 343.3L291.9 338.5Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_211"
                    d="M214.647 462.695H226.147V418.995H214.647V462.695Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g id="giftbox1">
                    <path
                      id="Vector_212"
                      d="M246.2 427.3H194.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_213"
                      d="M220.4 419.1C220.4 419.1 212 404.6 201.1 408.5C191.7 411.9 206.2 419.1 206.2 419.1"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_214"
                      d="M220.4 419.1C220.4 419.1 214.2 408.4 206.2 411.3C199.3 413.8 209.9 419.1 209.9 419.1"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_215"
                      d="M220.4 419.1C220.4 419.1 228.8 404.6 239.7 408.5C249.1 411.9 234.6 419.1 234.6 419.1"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_216"
                      d="M220.4 419.1C220.4 419.1 226.6 408.4 234.6 411.3C241.5 413.8 230.9 419.1 230.9 419.1"
                      stroke="#E27C6C"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <path
                    id="Vector_217"
                    d="M194.647 462.695H246.147V418.995H194.647V462.695Z"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g id="jhalar3">
                    <path
                      id="Vector_218"
                      d="M309.054 73.4817L312.943 77.3708L316.832 73.4817L312.943 69.5927L309.054 73.4817Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_219"
                      d="M309.047 52.2983L312.936 56.1873L316.825 52.2983L312.936 48.4092L309.047 52.2983Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_220"
                      d="M309.013 93.5813L312.902 97.4703L316.791 93.5813L312.902 89.6922L309.013 93.5813Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_221"
                      d="M310.456 113.61L312.86 116.014L315.264 113.61L312.86 111.206L310.456 113.61Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_222"
                      d="M304.318 73.5516L312.874 82.1075L321.43 73.5516L312.874 64.9957L304.318 73.5516Z"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g id="Group_20">
                      <path
                        id="Vector_223"
                        d="M312.9 124.9L338.4 154.8H287.4L312.9 124.9Z"
                        stroke="#EFC87E"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_224"
                        d="M312.9 124.9L331.8 154.8H293.9L312.9 124.9Z"
                        stroke="#EFC87E"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_225"
                        d="M312.9 124.9L320.3 154.8H305.5L312.9 124.9Z"
                        stroke="#EFC87E"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <g id="Group_21">
                        <path
                          id="Vector_226"
                          d="M312.9 195L287.4 165.1H338.4L312.9 195Z"
                          stroke="#EFC87E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Vector_227"
                          d="M312.9 195L293.9 165.1H331.8L312.9 195Z"
                          stroke="#EFC87E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Vector_228"
                          d="M312.9 195L305.5 165.1H320.3L312.9 195Z"
                          stroke="#EFC87E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <path
                        id="Vector_229"
                        d="M287.362 165.083H338.362V154.683H287.362V165.083Z"
                        stroke="#E27C6C"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <g id="Group_22">
                        <path
                          id="Vector_230"
                          d="M292.24 162.743L294.785 160.197L292.24 157.652L289.694 160.197L292.24 162.743Z"
                          stroke="#EFC87E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Vector_231"
                          d="M302.551 162.738L305.096 160.193L302.551 157.647L300.005 160.193L302.551 162.738Z"
                          stroke="#EFC87E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Vector_232"
                          d="M323.172 162.729L325.718 160.183L323.172 157.638L320.626 160.183L323.172 162.729Z"
                          stroke="#EFC87E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Vector_233"
                          d="M312.861 162.734L315.407 160.188L312.861 157.643L310.316 160.188L312.861 162.734Z"
                          stroke="#EFC87E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Vector_234"
                          d="M333.483 162.724L336.028 160.179L333.483 157.633L330.937 160.179L333.483 162.724Z"
                          stroke="#EFC87E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </g>
                    <path
                      id="Vector_235"
                      d="M312.9 124.9V37.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_23">
                    <path
                      id="Vector_236"
                      d="M80.1 93.5V113.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_237"
                      d="M90.1 103.5H70.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_238"
                      d="M85.1 98.5L75.1 108.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_239"
                      d="M85.1 108.5L75.1 98.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_24">
                    <path
                      id="Vector_240"
                      d="M130 53.7V63.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_241"
                      d="M135 58.7H125"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_242"
                      d="M132.5 56.2L127.5 61.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_243"
                      d="M132.5 61.2L127.5 56.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_25">
                    <path
                      id="Vector_244"
                      d="M268.8 116.4V136.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_245"
                      d="M278.9 126.4H258.8"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_246"
                      d="M273.8 121.5L263.8 131.4"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_247"
                      d="M273.8 131.4L263.8 121.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_26">
                    <path
                      id="Vector_248"
                      d="M254.4 350.5V365.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_249"
                      d="M261.7 357.8H247"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_250"
                      d="M258 354.1L250.7 361.4"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_251"
                      d="M258 361.4L250.7 354.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_27">
                    <path
                      id="Vector_252"
                      d="M64.3 323.3V337.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_253"
                      d="M71.6 330.6H57"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_254"
                      d="M68 327L60.7 334.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_255"
                      d="M68 334.2L60.7 327"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Group_28">
                    <path
                      id="Vector_256"
                      d="M220.9 47.9V68"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_257"
                      d="M231 57.9H210.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_258"
                      d="M225.9 53L216 62.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_259"
                      d="M225.9 62.9L216 53"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="circle1">
                    <path
                      id="Vector_260"
                      d="M70.1 145.8V122.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_261"
                      d="M72.3 146.1L79.2 123.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_262"
                      d="M74.4 147.1L87.5 127.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_263"
                      d="M76.1 148.7L94.3 134.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_264"
                      d="M77.3 150.7L98.9 142.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_265"
                      d="M77.8 153L101 151.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_266"
                      d="M77.6 155.3L100.3 160.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_267"
                      d="M76.8 157.4L96.9 169.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_268"
                      d="M75.3 159.2L91.1 176.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_269"
                      d="M73.4 160.5L83.5 181.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_270"
                      d="M71.2 161.2L74.7 184.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_271"
                      d="M68.9 161.2L65.4 184.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_272"
                      d="M66.7 160.5L56.6 181.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_273"
                      d="M64.8 159.2L49 176.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_274"
                      d="M63.2999 157.4L43.2 169.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_275"
                      d="M62.5 155.3L39.8 160.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_276"
                      d="M62.3 153L39.1 151.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_277"
                      d="M62.7999 150.7L41.2 142.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_278"
                      d="M64 148.7L45.8 134.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_279"
                      d="M65.7 147.1L52.6 127.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_280"
                      d="M67.8 146.1L60.9 123.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="small-cicle1">
                    <path
                      id="Vector_281"
                      d="M270 70.7V62.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_282"
                      d="M270.8 70.9L273.3 62.8"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_283"
                      d="M271.6 71.2L276.3 64.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_284"
                      d="M272.2 71.8L278.8 66.6"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_285"
                      d="M272.6 72.5L280.4 69.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_286"
                      d="M272.8 73.3L281.2 72.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_287"
                      d="M272.7 74.2L280.9 76.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_288"
                      d="M272.4 75L279.7 79.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_289"
                      d="M271.9 75.6L277.6 81.8"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_290"
                      d="M271.2 76.1L274.9 83.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_291"
                      d="M270.4 76.3L271.7 84.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_292"
                      d="M269.6 76.3L268.3 84.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_293"
                      d="M268.8 76.1L265.1 83.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_294"
                      d="M268.1 75.6L262.4 81.8"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_295"
                      d="M267.6 75L260.3 79.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_296"
                      d="M267.2 74.2L259 76.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_297"
                      d="M267.2 73.3L258.8 72.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_298"
                      d="M267.4 72.5L259.5 69.5"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_299"
                      d="M267.8 71.8L261.2 66.6"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_300"
                      d="M268.4 71.2L263.7 64.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_301"
                      d="M269.2 70.9L266.7 62.8"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="circle2">
                    <path
                      id="Vector_302"
                      d="M252.9 202.4V185.8"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_303"
                      d="M254.5 202.7L259.4 186.8"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_304"
                      d="M256 203.4L265.4 189.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_305"
                      d="M257.2 204.5L270.2 194.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_306"
                      d="M258.1 205.9L273.5 199.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_307"
                      d="M258.4 207.6L275 206.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_308"
                      d="M258.3 209.2L274.5 212.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_309"
                      d="M257.7 210.8L272.1 219.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_310"
                      d="M256.7 212L268 224.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_311"
                      d="M255.3 213L262.5 228"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_312"
                      d="M253.7 213.5L256.2 229.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_313"
                      d="M252.1 213.5L249.6 229.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_314"
                      d="M250.5 213L243.3 228"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_315"
                      d="M249.1 212L237.8 224.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_316"
                      d="M248.1 210.8L233.7 219.1"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_317"
                      d="M247.5 209.2L231.3 212.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_318"
                      d="M247.4 207.6L230.8 206.3"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_319"
                      d="M247.7 205.9L232.2 199.9"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_320"
                      d="M248.5 204.5L235.6 194.2"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_321"
                      d="M249.8 203.4L240.4 189.7"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_322"
                      d="M251.2 202.7L246.4 186.8"
                      stroke="#EFC87E"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <path
                    id="Vector_323"
                    d="M194.8 369.4C194.8 371.5 196.5 373.2 198.6 373.2C200.7 373.2 202.4 371.5 202.4 369.4C202.4 367.3 200.7 365.6 198.6 365.6C196.5 365.6 194.8 367.3 194.8 369.4Z"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_324"
                    d="M72.5 415.7C74.5987 415.7 76.3 413.999 76.3 411.9C76.3 409.801 74.5987 408.1 72.5 408.1C70.4013 408.1 68.7 409.801 68.7 411.9C68.7 413.999 70.4013 415.7 72.5 415.7Z"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_325"
                    d="M43.4 363.7C45.4987 363.7 47.2 361.999 47.2 359.9C47.2 357.801 45.4987 356.1 43.4 356.1C41.3013 356.1 39.6 357.801 39.6 359.9C39.6 361.999 41.3013 363.7 43.4 363.7Z"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_326"
                    d="M65.1 52.3C65.1 54.4 66.8 56.1 68.9 56.1C71 56.1 72.7 54.4 72.7 52.3C72.7 50.2 71 48.5 68.9 48.5C66.8 48.5 65.1 50.2 65.1 52.3Z"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_327"
                    d="M337.6 52.6C339.699 52.6 341.4 50.8987 341.4 48.8C341.4 46.7013 339.699 45 337.6 45C335.501 45 333.8 46.7013 333.8 48.8C333.8 50.8987 335.501 52.6 337.6 52.6Z"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_328"
                    d="M290.1 102.5C290.1 104.6 291.8 106.3 293.9 106.3C296 106.3 297.7 104.6 297.7 102.5C297.7 100.4 296 98.7 293.9 98.7C291.8 98.7 290.1 100.4 290.1 102.5Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_329"
                    d="M126.2 95.7C126.2 97.8 127.9 99.5 130 99.5C132.1 99.5 133.8 97.8 133.8 95.7C133.8 93.6 132.1 91.9 130 91.9C127.9 91.9 126.2 93.6 126.2 95.7Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_330"
                    d="M86.7 323.3C86.7 325.4 88.4 327.1 90.5 327.1C92.6 327.1 94.3 325.4 94.3 323.3C94.3 321.2 92.6 319.5 90.5 319.5C88.4 319.5 86.7 321.2 86.7 323.3Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_331"
                    d="M247 399.1C247 401.2 248.7 402.9 250.8 402.9C252.9 402.9 254.6 401.2 254.6 399.1C254.6 397 252.9 395.3 250.8 395.3C248.7 395.3 247 397 247 399.1Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_332"
                    d="M316.5 353.1C316.5 355.2 318.2 356.9 320.3 356.9C322.4 356.9 324.1 355.2 324.1 353.1C324.1 351 322.4 349.3 320.3 349.3C318.2 349.3 316.5 351 316.5 353.1Z"
                    stroke="#E27C6C"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_333"
                    d="M175.5 73.5C175.5 75.6 177.2 77.3 179.3 77.3C181.4 77.3 183.1 75.6 183.1 73.5C183.1 71.4 181.4 69.7 179.3 69.7C177.2 69.7 175.5 71.4 175.5 73.5Z"
                    stroke="#EFC87E"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g id="Group_29">
                    <path
                      id="Vector_334"
                      d="M384.5 462.5H361C358.3 462.5 356.1 460.3 356.1 457.6V429.4C356.1 428.1 356.2 426.7 356.5 425.2C356.6 424.4 356.8 423.7 357 422.9C357.2 422 357.5 421.1 357.8 420.2C359.3 415.5 361.7 410.9 363.8 406.9C365.6 403.5 367.1 400.5 367.7 398.3C368.1 396.9 368.3 394.2 368.5 390.3C369 380.5 368.8 365.7 368.8 360.8C368.8 360 368.8 359.4 368.8 359.2C368.8 357.3 371 356.4 372.9 356.3C374.9 356.4 377 357.2 377 359.2C377 359.4 377 360 377 360.8C376.9 365.7 376.8 380.5 377.3 390.3C377.5 394.2 377.8 396.9 378.1 398.3C378.7 400.5 380.2 403.5 382 406.9C384.1 410.9 386.4 415.4 388 420.2C388.3 421.1 388.6 422 388.8 422.9C389 423.7 389.2 424.5 389.3 425.2C389.5 426.6 389.7 428.1 389.7 429.4V457.6C389.4 460.3 387.2 462.5 384.5 462.5ZM372.8 357.4C372.5 357.4 369.7 357.6 369.7 359.3C369.7 359.5 369.7 360.1 369.7 360.9C369.8 365.8 369.9 380.6 369.4 390.5C369.2 394.5 368.9 397.2 368.5 398.7C367.9 401 366.4 404 364.6 407.5C362.5 411.5 360.2 416 358.7 420.6C358.4 421.5 358.2 422.4 357.9 423.2C357.7 424 357.6 424.7 357.4 425.4C357.2 426.8 357 428.1 357 429.4V457.6C357 459.8 358.8 461.5 360.9 461.5H384.4C386.6 461.5 388.3 459.7 388.3 457.6V429.4C388.3 428.1 388.2 426.8 387.9 425.4C387.8 424.7 387.6 423.9 387.4 423.2C387.2 422.4 386.9 421.5 386.6 420.6C385.1 415.9 382.8 411.4 380.7 407.5C378.9 404 377.4 401 376.8 398.7C376.4 397.2 376.1 394.5 375.9 390.5C375.4 380.7 375.6 365.8 375.6 360.9C375.6 360.1 375.6 359.5 375.6 359.3C375.9 357.6 373.1 357.4 372.8 357.4Z"
                      fill="#EFC87E"
                    />
                  </g>
                  <g id="Group_30">
                    <path
                      id="Vector_335"
                      d="M389.4 449H356.1V429.4C356.1 428.1 356.2 426.7 356.5 425.2C356.6 424.4 356.8 423.7 357 422.9L357.1 422.5H388.5L388.6 422.9C388.8 423.7 389 424.5 389.1 425.2C389.3 426.6 389.5 428.1 389.5 429.4V449H389.4ZM357.1 448H388.4V429.4C388.4 428.1 388.3 426.8 388 425.4C387.9 424.8 387.8 424.2 387.6 423.5H357.8C357.7 424.1 357.5 424.8 357.4 425.4C357.2 426.8 357 428.1 357 429.4V448H357.1Z"
                      fill="#E27C6C"
                    />
                  </g>
                  <g id="Group_31">
                    <path
                      id="Vector_336"
                      d="M377.2 390.9H368.4V390.4C368.4 389.5 368.5 388.6 368.5 387.7C368.5 386.8 368.6 385.9 368.6 384.9C368.8 375.8 368.7 365 368.7 360.9C368.7 360.1 368.7 359.5 368.7 359.3C368.7 357.4 370.9 356.5 372.8 356.4C374.8 356.5 376.9 357.3 376.9 359.3C376.9 359.5 376.9 360.1 376.9 360.9C376.9 365 376.7 375.8 377 384.9C377 385.8 377.1 386.8 377.1 387.7C377.1 388.6 377.2 389.6 377.2 390.4V390.9ZM369.4 389.9H376.1C376.1 389.2 376 388.4 376 387.7C376 386.8 375.9 385.9 375.9 384.9C375.7 375.7 375.8 364.9 375.8 360.8C375.8 360 375.8 359.4 375.8 359.2C375.8 357.6 373 357.3 372.7 357.3C372.4 357.3 369.6 357.5 369.6 359.2C369.6 359.4 369.6 360 369.6 360.8C369.6 364.9 369.8 375.7 369.5 384.8C369.5 385.7 369.4 386.7 369.4 387.6C369.5 388.5 369.5 389.2 369.4 389.9Z"
                      fill="#E27C6C"
                    />
                  </g>
                  <g id="Group_32">
                    <path
                      id="Vector_337"
                      d="M372.8 444.1C368.4 444.1 364.7 440.5 364.7 436C364.7 431.6 368.3 427.9 372.8 427.9C377.3 427.9 380.9 431.5 380.9 436C380.8 440.5 377.2 444.1 372.8 444.1ZM372.8 429C368.9 429 365.7 432.2 365.7 436.1C365.7 440 368.9 443.2 372.8 443.2C376.7 443.2 379.9 440 379.9 436.1C379.8 432.2 376.7 429 372.8 429Z"
                      fill="#E27C6C"
                    />
                  </g>
                  <g id="Group_33">
                    <path
                      id="Vector_338"
                      d="M377.1 388.2H368.6V387.7C368.6 386.8 368.7 385.9 368.7 384.9V384.4H377V384.9C377 385.8 377.1 386.8 377.1 387.7V388.2ZM369.6 387.2H376.1C376.1 386.6 376.1 386 376 385.4H369.6C369.6 386 369.6 386.6 369.6 387.2Z"
                      fill="#EFC87E"
                    />
                  </g>
                  <g id="Group_34">
                    <g id="Group_35">
                      <path
                        id="Vector_339"
                        d="M405.6 462.5C398.9 462.5 398.9 461.7 398.9 461.3C398.9 460.9 398.9 460.3 404.1 460.2V450C404.1 447.9 402.9 445.9 401 444.8C397.6 442.9 395.8 439.2 396.2 435.3L397.7 414.3H413.6L415.1 435.3C415.6 439.1 413.7 442.8 410.3 444.7C408.4 445.8 407.2 447.8 407.2 449.9V460.1C412.4 460.2 412.4 460.8 412.4 461.2C412.3 461.7 412.3 462.5 405.6 462.5ZM401.7 461.3C402.7 461.4 404 461.5 405.6 461.5C407.2 461.5 408.5 461.4 409.5 461.3C408.7 461.2 407.8 461.2 406.6 461.2H406.1V450C406.1 447.5 407.5 445.2 409.7 443.9C412.7 442.2 414.4 438.9 414 435.4L412.6 415.3H398.5L397.1 435.3C396.7 438.8 398.3 442.1 401.4 443.8C403.6 445.1 405 447.4 405 449.9V461.1H404.5C403.4 461.2 402.4 461.3 401.7 461.3Z"
                        fill="#E27C6C"
                      />
                    </g>
                    <g id="Group_36">
                      <path
                        id="Vector_340"
                        d="M405.6 443.8C403.6 443.8 402.4 443 401.9 442.7L401.8 442.6C400.6 441.9 399.6 441 398.9 439.8C398.2 438.6 397.8 437.2 397.8 435.8C397.8 435.5 397.8 435.2 397.9 434.8L398.6 424.9H412.7L413.4 434.8C413.4 435.1 413.5 435.4 413.5 435.8C413.5 437.2 413.1 438.6 412.4 439.8C411.7 441 410.7 441.9 409.5 442.6L409.4 442.7C408.9 443 407.6 443.8 405.6 443.8ZM399.5 426L398.9 435C398.9 435.3 398.8 435.6 398.8 435.9C398.8 437.1 399.1 438.3 399.7 439.3C400.3 440.3 401.2 441.2 402.2 441.8L402.3 441.9C402.7 442.2 403.8 442.8 405.5 442.8C407.2 442.8 408.3 442.1 408.7 441.9L408.8 441.8C409.8 441.2 410.7 440.4 411.3 439.3C411.9 438.3 412.2 437.1 412.2 435.9C412.2 435.6 412.2 435.3 412.1 435.1L411.5 426.1H399.5V426Z"
                        fill="#E27C6C"
                      />
                    </g>
                    <g id="Group_37">
                      <path
                        id="Vector_341"
                        d="M412.7 426H398.5L399.2 416.7H412.1L412.7 426ZM399.6 425H411.6L411.1 417.7H400.1L399.6 425Z"
                        fill="#EFC87E"
                      />
                    </g>
                  </g>
                  <g id="Group_38">
                    <g id="Group_39">
                      <path
                        id="Vector_342"
                        d="M340 462.5C333.3 462.5 333.3 461.7 333.3 461.3C333.3 460.9 333.3 460.3 338.5 460.2V450C338.5 447.9 337.3 445.9 335.4 444.8C332 442.9 330.2 439.2 330.6 435.3L332.1 414.3H348L349.5 435.3C350 439.1 348.1 442.8 344.7 444.7C342.8 445.8 341.6 447.8 341.6 449.9V460.1C346.8 460.2 346.8 460.8 346.8 461.2C346.7 461.7 346.7 462.5 340 462.5ZM336 461.3C337 461.4 338.3 461.5 339.9 461.5C341.5 461.5 342.8 461.4 343.8 461.3C343 461.2 342.1 461.2 340.9 461.2H340.4V450C340.4 447.5 341.8 445.2 344 443.9C347 442.2 348.7 438.9 348.3 435.4L346.9 415.3H332.8L331.4 435.3C331 438.8 332.6 442.1 335.7 443.8C337.9 445.1 339.3 447.4 339.3 449.9V461.1H338.8C337.7 461.2 336.8 461.3 336 461.3Z"
                        fill="#E27C6C"
                      />
                    </g>
                    <g id="Group_40">
                      <path
                        id="Vector_343"
                        d="M340 443.8C338 443.8 336.8 443 336.3 442.7L336.2 442.6C335 441.9 334 441 333.3 439.8C332.6 438.6 332.2 437.2 332.2 435.8C332.2 435.5 332.2 435.2 332.3 434.8L333 424.9H347L347.7 434.8C347.7 435.1 347.8 435.4 347.8 435.8C347.8 437.2 347.4 438.6 346.7 439.8C346 441 345 441.9 343.8 442.6L343.7 442.7C343.2 443 341.9 443.8 340 443.8ZM333.9 426L333.3 435C333.3 435.3 333.2 435.6 333.2 435.9C333.2 437.1 333.5 438.3 334.1 439.3C334.7 440.3 335.6 441.2 336.6 441.8L336.7 441.9C337.1 442.2 338.2 442.8 339.9 442.8C341.6 442.8 342.7 442.1 343.1 441.9L343.2 441.8C344.2 441.2 345.1 440.4 345.7 439.3C346.3 438.3 346.6 437.1 346.6 435.9C346.6 435.6 346.6 435.3 346.5 435.1L345.9 426.1H333.9V426Z"
                        fill="#E27C6C"
                      />
                    </g>
                    <g id="Group_41">
                      <path
                        id="Vector_344"
                        d="M347 426H332.8L333.5 416.7H346.4L347 426ZM333.9 425H345.9L345.4 417.7H334.4L333.9 425Z"
                        fill="#EFC87E"
                      />
                    </g>
                  </g>
                  <path
                    id="happy"
                    d="M336.323 237.892H337.985L339.243 230.793V230.817C339.789 227.659 341.76 226.14 344.181 226.14C346.556 226.14 347.838 227.612 347.339 230.485L346.033 237.892H347.671L349.025 230.295C349.69 226.496 347.695 224.692 344.823 224.692C342.852 224.692 341 225.546 339.884 227.137L341.095 220.323H339.433L336.323 237.892ZM351.727 231.387C351.015 235.447 353.199 238.082 356.736 238.082C359.324 238.082 361.39 236.681 362.411 235.019L361.912 237.892H363.574L365.853 224.929H364.191L363.693 227.778C363.241 226.14 361.722 224.739 359.11 224.739C355.549 224.739 352.439 227.327 351.727 231.387ZM363.052 231.411C362.482 234.639 359.965 236.634 357.306 236.634C354.6 236.634 352.843 234.663 353.436 231.387C354.006 228.087 356.451 226.187 359.158 226.187C361.817 226.187 363.645 228.182 363.052 231.411ZM370.81 227.778L371.309 224.929H369.647L366.276 244.017H367.938L369.505 235.043C370.003 236.657 371.546 238.082 374.11 238.082C377.672 238.082 380.782 235.447 381.494 231.387C382.206 227.327 380.022 224.739 376.461 224.739C373.897 224.739 371.831 226.14 370.81 227.778ZM379.808 231.387C379.215 234.663 376.793 236.634 374.063 236.634C371.404 236.634 369.576 234.639 370.169 231.411C370.739 228.182 373.279 226.187 375.915 226.187C378.645 226.187 380.378 228.087 379.808 231.387ZM386.831 227.778L387.33 224.929H385.668L382.297 244.017H383.959L385.525 235.043C386.024 236.657 387.567 238.082 390.131 238.082C393.693 238.082 396.803 235.447 397.515 231.387C398.227 227.327 396.043 224.739 392.482 224.739C389.918 224.739 387.852 226.14 386.831 227.778ZM395.829 231.387C395.236 234.663 392.814 236.634 390.084 236.634C387.425 236.634 385.597 234.639 386.19 231.411C386.76 228.182 389.3 226.187 391.936 226.187C394.666 226.187 396.399 228.087 395.829 231.387ZM403.185 237.797L399.576 243.994H401.333L412.372 224.929H410.639L404.443 235.921L401.997 224.929H400.146L403.185 237.797Z"
                    fill="#EFC87E"
                  />
                  <path
                    id="NEWYEAR"
                    d="M290.492 257.578V273.373L280.16 257.578H272.401V285.487H280.16V269.89L290.492 285.487H298.251V257.578H290.492ZM320.525 257.578H302.671V285.487H320.525V279.272H310.43V274.244H319.337V268.346H310.43V263.793H320.525V257.578ZM329.98 285.487H339.521L343.44 268.385L347.28 285.487H356.82L363.669 257.578H355.276L352.03 276.501L347.755 257.578H339.244L334.849 276.659L331.603 257.578H323.211L329.98 285.487ZM382.298 276.62V285.487H390.096V276.62L399.914 257.578H391.165L386.256 268.346L381.348 257.578H372.48L382.298 276.62ZM420.15 257.578H402.296V285.487H420.15V279.272H410.055V274.244H418.962V268.346H410.055V263.793H420.15V257.578ZM443.144 285.487H451.338L441.204 257.578H432.257L422.083 285.487H430.238L431.743 280.934H441.639L443.144 285.487ZM439.7 274.996H433.722L436.691 265.971L439.7 274.996ZM468.633 266.96C468.633 268.86 467.564 269.89 465.466 269.89H461.626V264.07H465.466C467.564 264.07 468.633 265.218 468.633 266.96ZM453.867 257.578V285.487H461.626V275.194H462.458L468 285.487H476.669L470.375 274.601C474.532 273.334 476.511 270.167 476.511 266.525C476.511 261.537 473.027 257.578 466.1 257.578H453.867Z"
                    fill="#EFC87E"
                  />
                </g>
              </svg>
            </div>
          </div>
        </a>
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "200",
            fontSize: 12,
          }}
        >
          Sản phẩm được made by <b> HIẾU BẮP =))</b>{" "}
        </div>
      </div>
    </>
  );
};

Header.propTypes = {};

export default Header;
