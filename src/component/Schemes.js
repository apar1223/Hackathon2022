import React, { useEffect, useState } from "react";
import "./Yojna1.css";
import MyImage1 from "./images/Balika-Samriddhi-Scheme.jpg";
// import MyImage2 from "./images/Beti-Bachao-Beti-Padhao-Yojana.png";
// import MyImage3 from "./images/Gaurav-nari-niti.png";
// import MyImage4 from "./images/Gujarat-Sarswati-Sadhana-Yojana.jpeg";
// import MyImage5 from "./images/Janani_suraksha_yojana.jpg";
// import MyImage6 from "./images/Janani-shishu-suraksha-karyakram-jssk.jpg";
// import MyImage7 from "./images/Kishori_shakti.jpg";
// import MyImage8 from "./images/Vhaali_Dikri_Yojana.jpg";
// import MyImage9 from "./images/Kumbarbhai-mameru.jpg";
// import MyImage10 from "./images/Vidhva-Sahay-Yojana.jpg";

export default function Schemes() {
  const [schema, setSchema] = useState([]);
  useEffect(() => {
    fetch("/getYojnas", {
      method: "POST",
      body: JSON.stringify({ id: 1 }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("from schema page");
        console.log(data);
        setSchema(data);
      });
  }, []);
  return (
    <>
      <div className="outerBox">
        {schema.map((Object, i) => {
          if (i % 2 === 0) {
            return (
              <div className="y1" key={i}>
                <div className="img1 text-center">
                  {/* paste image here */}
                  <img src={MyImage1} alt="" />
                </div>
                <div className="text1">
                  <div className="textsec1">
                    <h2 className="heading"> {schema[i].yojnaname} </h2>
                    {schema[i].introduction}
                  </div>
                  <div className="button">
                    <button id={schema[i].yojnaid}>Read More</button>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="y2" key={i}>
                <div className="img1 text-center">
                  {/* paste image here */}
                  <img src={MyImage1} alt="" />
                </div>
                <div className="text1">
                  <div className="textsec1">
                    <h2 className="heading"> {schema[i].yojnaname} </h2>
                    <p>{schema[i].introduction}</p>
                  </div>
                  <div className="button">
                    <button id={i}>Read More</button>
                  </div>
                </div>
              </div>
            );
          }
        })}

        {/* <div className="outerBox">
        <div className="y1">
          <div className="img1">
            {/* paste image here */}
        {/* <img src={MyImage1} alt="" />
          </div>
          <div className="text1">
            <div className="textsec1">
              <h2 className="heading"> {schema[0].yojnaname} </h2>
              The scheme of Balika Samriddhi Yojana was launched on 2nd October
              1997 with the objective of raising the overall status of the
              girl-child and bringing about a positive change in family and
              community attitudes. The scheme covers up two girls children born
              on or after 15th August 1997 in a family living below poverty line
              as defined by the Government of India.
            </div> */}
        {/* <div className="button">
              <button>Read More</button> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/*         
        <div className="y2">
          <div className="img2">
            <img src={MyImage2} alt="" />
          </div>
          <div className="text2">
            <div className="textsec2">
              <h2 className="heading">Beti Bachao Beti PAdhao</h2>
              In 2015, the Indian government introduced the Beti Bachao, Beti
              Padhao (BBBP) scheme to address concerns of gender discrimination
              and women empowerment in the country. The name Beti Bachao, Beti
              Padhao translates to ‘Save the girl child, educate the girl
              child’. The scheme aims to educate citizens against gender bias
              and improve efficacy of welfare services for girls. It was
              launched with an initial funding of Rs. 100 crore (US$ 13.5
              million).
            </div>
            <div className="button">
              <button>Read More </button>
            </div>
          </div>
        </div>
        <div className="y3">
          <div className="img1">
            <img src={MyImage3} alt="" />
          </div>
          <div className="text1">
            <div className="textsec1">
              <h2 className="heading">Gaurav Nari Niti Yojana</h2>
              Under this initiative government ensures that women are treated
              equally and provides many services, facilities etc. e.g. Economic
              Environment, Health, and Quality of Life, Non-Violence, Education,
              Advocacy and Capacity Building etc. in order to empower women in
              the state.
            </div>
            <div className="button">
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="y4">
          <div className="img2">
            <img src={MyImage4} alt="" />
          </div>
          <div className="text2">
            <div className="textsec2">
              <h2 className="heading">Saraswati Sadhana Yojana</h2>
              Under this initiative government ensures that women are treated
              equally and provides many services, facilities etc. e.g. Economic
              Environment, Health, and Quality of Life, Non-Violence, Education,
              Advocacy and Capacity Building etc. in order to empower women in
              the state.
            </div>
            <div className="button">
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="y5">
          <div className="img1">
            <img src={MyImage5} alt="" />
          </div>
          <div className="text1">
            <div className="textsec1">
              <h2 className="heading">Janani Suraksha Yojana</h2>
              Janani Suraksha Yojana (JSY) is a safe motherhood intervention
              under the National Health Mission. It is being implemented with
              the objective of reducing maternal and neonatal mortality by
              promoting institutional delivery among poor pregnant women. The
              scheme, launched on 12 April 2005 by the Hon’ble Prime Minister,
              is under implementation in all states and Union Territories (UTs),
              with a special focus on Low Performing States (LPS).
            </div>
            <div className="button">
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="y6">
          <div className="img2">
            <img src={MyImage6} alt="" />
          </div>
          <div className="text2">
            <div className="textsec2">
              <h2 className="heading">Janani Shishu Suraksha Karyakram </h2>
              Government of India has launched the Janani Shishu Suraksha
              Karyakaram (JSSK) on 1st June, 2011. The scheme is to benefit
              pregnant women who access Government health facilities for their
              delivery. Moreover it will motivate those who still choose to
              deliver at their homes to opt for institutional deliveries. All
              the States and UTs have initiated implementation of the scheme.
            </div>
            <div className="button">
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="y7">
          <div className="img1">
            <img src={MyImage7} alt="" />
          </div>
          <div className="text1">
            <div className="textsec1">
              <h2 className="heading">Kishori Shakti </h2>
              Kishori Shakti Yojana (KSY) seeks to empower adolescent girls, so
              as to enable them to take charge of their lives. It is viewed as a
              holistic initiative for the development of adolescent girls. The
              programme through its interventions aims at bringing about a
              difference in the lives of the adolescent girls. It seeks to
              provide them with an opportunity to realize their full potential.
            </div>
            <div className="button">
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="y8">
          <div className="img2">
            <img src={MyImage8} alt="" />
          </div>
          <div className="text2">
            <div className="textsec2">
              <h2 className="heading">Vhaali Dikri Yojana</h2>
              The Government of Gujarat has initiated the scheme entitled ”Vahli
              Dikri Yojana” for girl children of the state. Under this scheme,
              the Government grants a subsidy of INR 1,10,000 to the families on
              birth of the first girl child. This scheme aims to finance for the
              economic empowerment of persons belonging to the Scheduled Castes
              (SC) families those who are living below the poverty line.
            </div>
            <div className="button">
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="y9">
          <div className="img1">
            <img src={MyImage9} alt="" />
          </div>
          <div className="text1">
            <div className="textsec1">
              <h2 className="heading">Kunvarbai Mameru Yojana</h2>
              The major motive of this Kuvarbai Nu Mameru Yojana is to provide
              economic assistance to all families of unmarried girls who belong
              to scheduled caste and Scheduled tribe. The beneficiary families
              will receive a 10000 rupees Cheque in the name of the candidate at
              the time of their respective marriage. The Ministry of Women and
              Child Development, Government of Gujarat state has inaugurated
              this scheme.
            </div>
            <div className="button">
              <button>Read More</button>
            </div>
          </div>
        </div> */}
        {/* <div className="row">
                <div className="col-md-3 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, optio.
                </div>
                <div className="col-md-8 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, hic?
                </div>
            </div> */}
      </div>
    </>
  );
}
