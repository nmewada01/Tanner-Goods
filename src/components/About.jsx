import React from "react";

const About = () => {
  return (
    <div>
      <div className="About_div">
        <div>
          <p style={{ fontSize: "13px", textAlign: "left" }}>Home/About Us</p>
          <h2 style={{ textAlign: "left" }}>About Us</h2>
        </div>
        <div className="descript">
          <h5 style={{ fontWeight: "bold" }}>
            We Create Thoughtful Products That Are Worth Holding Onto.
          </h5>
          <p style={{ marginTop: "25px", fontSize: "13px" }}>
            The products we use on a daily basis say something about the people
            we are. We believe many things in life get better with time; it is
            that spirit we try to infuse in everything we create. In a world
            where we are overwhelmed by products made to break down, wear out or
            go out style, we aim to go against that grain.
          </p>
        </div>
        <div className="explain_descript">
          <div>
            <h5>We Focus on Value, Durability, and a Timeless Aesthetic.</h5>
            <p style={{ marginTop: "25px", fontSize: "13px" }}>
              Our goods are based in value-driven design and quality
              manufacturing. All of us make a statement every time we buy
              something. We vote with our wallets. It’s our belief that value is
              more than just saving a few bucks - true value lies at the
              intersection of something made well for a fair price, created in
              way that supports those who made it.
            </p>
            <h5>Objects In Our Lives Are Part Of Who We Are.</h5>
            <p style={{ marginTop: "25px", fontSize: "13px" }}>
              No two people are the same, just like no two wallets or bags look
              the same over time. Each carries a unique story that is a
              reflection of our individual lifestyle. When a product improves
              and patinas with use, it carries the history of its user, of
              places traveled and memories made.
            </p>
          </div>
          <div>
            <img
              width={"100%"}
              src="https://i.shgcdn.com/100c3286-40e8-410e-bac4-522247fff055/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              alt="food_image"
            />
          </div>
        </div>

        <div className="explain_descript">
          <div>
            <img
              width={"100%"}
              src="https://i.shgcdn.com/da6a9240-e569-477f-8427-e2eb3c7330fe/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              alt="Smile_image"
            />
          </div>
          <div>
            <h5>Our Most Valuable Assets Are The Relationships We’ve Built.</h5>
            <p style={{ marginTop: "25px", fontSize: "13px" }}>
              We surround ourselves with incredibly talented, driven creatives
              that help us bring our products to life. This creative energy
              reverberates internally, building in amplitude and challenging
              each of us to do better, to think bigger and allow our own
              personal potential to flourish.
            </p>
            <h5>
              We Are All Products Of Our Environment. Let’s Cultivate The Best
              One We Can.
            </h5>
            <p style={{ marginTop: "25px", fontSize: "13px" }}>
              Our company, in many ways, is defined the community we belong to.
              We are Oregonians through and through. We believe in equality for
              all. We believe in putting others first. We are a progressive
              company that echos the values and ideals of our own community in
              Portland and the greater Northwest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
