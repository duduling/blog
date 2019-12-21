import React, { useContext } from "react";
import { graphql } from "gatsby";
import {
  Button,
  Columns,
  Column,
  Container,
  Content,
  Hero,
  HeroBody,
  Level,
  LevelItem,
  Title,
  Subtitle
} from "bloomer";
import Typist from "react-typist";
import Fade from "react-reveal/Fade";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import BigProfilePic from "../components/big-profile-pic";

// Theme
import { ThemeContext, getOppositeTheme } from "../contexts/theme";

const About = props => {
  const { theme } = useContext(ThemeContext);

  const { data, location } = props;
  const { title: siteTitle, keywords, email } = data.site.siteMetadata;

  return (
    <Layout location={location}>
      <SEO title="About" keywords={keywords || []} />
      <Hero isColor={theme} className="is-fullheight-with-navbar">
        <HeroBody>
          <Container>
            <Fade left>
              <React.Fragment>
                <Title>{siteTitle}</Title>
                <Subtitle>
                  <Typist startDelay={1000}>Front-end developer입니다. </Typist>
                </Subtitle>
              </React.Fragment>
            </Fade>
          </Container>
        </HeroBody>
      </Hero>
      <Hero isFullHeight isColor={theme}>
        <HeroBody>
          <Container>
            <Columns isVCentered>
              <Column>
                <Fade left>
                  <React.Fragment>
                    <Title>
                      <span role="img" aria-label="jsx-a11y/accessible-emoji">
                        👋🏻
                      </span>
                    </Title>
                    <Content>
                      <div>
                        Front-end developer입니다. 👨🏻‍💻<br/>
                        스타플레이어보다는 팀플레이를 더 선호합니다. 👨‍👨‍👦‍👦 <br/>
                        최신 기술도 좋아하지만 🎁<br/>
                        상황에 맞는 도구가 있다고 생각합니다. 🧐<br/>
                        내가 직접 사용하는 서비스를 만들기를 원합니다. 🚴🏻‍♂️<br/>
                        타고나지 않기에 항상 노력하려 합니다. 🔥
                      </div>
                    </Content>
                    {/* <Level isMobile>
                      <LevelItem>
                        <Button disabled>Resume</Button>
                      </LevelItem>
                      <LevelItem>
                        <Button
                          isColor="info"
                          href="https://t.me/dennismrl"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Telegram"
                        >
                          Telegram
                        </Button>
                      </LevelItem>
                      <LevelItem>
                        <Button
                          isColor={getOppositeTheme(theme)}
                          href={`mailto:${email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="E-mail"
                        >
                          E-mail
                        </Button>
                      </LevelItem>
                    </Level> */}
                  </React.Fragment>
                </Fade>
              </Column>
              <Column>
                <Fade right>
                  <BigProfilePic
                    className="is-hidden-mobile"
                    style={{ margin: "auto 0 auto auto" }}
                  />
                  <BigProfilePic
                    className="is-hidden-tablet"
                    style={{ margin: "2rem auto 0 auto" }}
                  />
                </Fade>
              </Column>
            </Columns>
          </Container>
        </HeroBody>
      </Hero>
    </Layout>
  );
};

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        keywords
        author
        email
      }
    }
  }
`;
