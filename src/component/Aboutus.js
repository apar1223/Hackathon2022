import React from "react";
import Navbar from "./Navbar";
import "./Aboutcss.css";
const Aboutus = () => {
  return (
    <div className="p-3 container pt-100" style={{ height: "100vh" }}>
      <h1>About Us</h1>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active about-active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Introduction
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link about-active"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Vision Misson
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Objectives
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        >
          <h1 className="pt-3">Introduction</h1>
          <div className="mt-3">
            <p>
              The Department of Women and Child Development, Government of
              India, came into existence as a separate Ministry with effect from
              30th January, 2006, earlier since 1985 it was a Department under
              the Ministry of Human Resources Development.
            </p>
            <p>
              The Ministry was constituted with the prime intention of
              addressing gaps in State action for women and children for
              promoting inter-Ministerial and inter-sectoral convergence to
              create gender equitable and child-centred legislation, policies
              and programmes.
            </p>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          <h1 className="pt-3">Vision and Mission</h1>
          <div className="container mt-3">
            <h2>Vision</h2>
            <p>
              To ensure childrens nutrition and empower woman living with
              dignity and ensure nutrition and development of woman in an
              environment free from violence and discrimination.
            </p>
            <h2>Goals</h2>
            <p>
              1. To improve the nutritional and health status of children in the
              age-group of 0-6 years.
              <br />
              2. To lay the foundation for proper psychological, physical and
              social development of the child.
              <br />
              3. To reduce the incidence of mortality, morbidity,
              malnutrition.To enhance the capability of the mother to look after
              the normal health and nutrition health of the child through proper
              nutrition and health education.
              <br />
              4. Provide essential health services to young children, pregnant
              and pregnant mothers and adolescent girls lactating mothers and
              adolescents girls through Anganwadi.Providing preprimary education
              for children aged 3-6 years in Anganwadi.
              <br />
              5. To prevent female feticide and to ensure the survival,
              education and protection of the girl child.
              <br />
              6. To economically empower destitute widows by providing them
              financial assistance and vocational training.
              <br />
              7. To provide shelter, police desk, legal, medical and counselling
              services to woman or child victims of violence under one roof
              integrated with a 24*7 Helpline.To prevent trafficking of woman
              for commercial sexual exploitation and to facilitate reintegration
              of the victims into the family and society.
              <br />
              8. To promote availability of safe and conveniently located
              accommodation for working woman with day care facility for their
              children.To cater to the primary need of shelter, food, clothing,
              medical treatment and care of woman in distress and those who are
              without any social and economic support.
              <br />
              9. To create an alternative system of justice for woman which give
              quick justice to woman in minimum cost with understanding their
              feelings.To promote birth rate of girl child with schemes like
              VahaliDikari Scheme.
              <br />
            </p>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabIndex="0"
        >
          <h1 className="pt-3">Objectives</h1>
          <div className="mt-5">
            <ol type="1">
              <li>
                To improve health and nutrition level of 0 to 6 years old
                children, Physical, psychological and social development of
                children and to improve nutrition level of adolescent girls,
                pregnant and lactating women.
              </li>
              <li className="mt-2">
                To change the existing mind-set about women in the society
              </li>
              <li className="mt-2">
                To protect rights of women according to the provision in the
                acts and constitution of India.
              </li>
              <li className="mt-2">
                To empower women of backward classes of society by making them
                self-dependent economically.
              </li>
              <li className="mt-2">
                To ensure that the relevance of Gender Equity and Equality is
                accepted in the overall development process of the state.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
