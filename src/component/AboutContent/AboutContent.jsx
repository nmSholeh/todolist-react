/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

import * as styles from "./AboutContent.styles";

const AboutContent = () => {
  return (
    <section className="about-page-content-component">
      <Container flexDirection="column">
        <Item align="center">
          <h1 css={styles.aboutPageHeader}>About This Apps</h1>
          <h1 css={styles.aboutPageSubHeader}>NUR MOH. SHOLEH</h1>
        </Item>
        <Item>
          <Container>
            <p css={styles.aboutPageParagraph}>
              Di dalam aplikasi ini terdapat error pada localStorage, dan di
              component yang terdapat nama CLASS, untuk component yang bernama
              normal dan NoJSX aman terkendali. dan juga di aplikasi ini saya
              belajar menggunakan component, props, function, emotion css,
              styling in react, CSS in JS, React Router dan masih banyak lagi.
            </p>
          </Container>
        </Item>
        <Item align="center">
          <Link to="/">
            <span css={styles.backHome}>Back To Home</span>
          </Link>
        </Item>
      </Container>
    </section>
  );
};

export default AboutContent;
