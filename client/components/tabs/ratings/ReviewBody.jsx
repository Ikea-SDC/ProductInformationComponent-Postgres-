import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: block !important;
  box-sizing: border-box !important;
  font-size: 11px !important;
  font-family: "Verdana", sans-serif !important;
  font-style: normal !important;
  text-transform: none !important;
  line-height: 19.5px !important;
  margin-top: 1px !important;
  margin-right: 10px !important;
  margin-left: 10px !important;
  border-bottom-width: 1px !important;
  border-left-width: 2px !important;
  border-right-width: 2px !important;
  border-top-width: 1px !important;
  border-bottom-style: none !important;
  border-left-style: none !important;
  border-right-style: none !important;
  border-top-style: dotted !important;
  border-bottom-color: transparent !important;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: #ccc !important;
  background: transparent !important;
  min-height: auto !important;
  min-width: auto !important;
  width: 100% !important;
  overflow: visible !important;
`;

const HeaderContainer = styled.div`
  display: block !important;
  padding-top: 10px !important;
  padding-right: 10px !important;
  padding-bottom: 10px !important;
  padding-left: 10px !important;
  border-bottom-style: none !important;
  border-left-style: none !important;
  border-right-style: none !important;
  border-top-style: none !important;
`;

const AuthorContainer = styled.div`
  display: table !important;
  margin: 2px 0 !important;
`;

const AuthorBlock = styled.span`
  display: table-cell !important;
  vertical-align: middle !important;
  float: left !important;
`;

const Author = styled.h3`
  display: inline !important;
  float: left !important;
  padding: 1px 0 !important;
  margin: 0 !important;
  border: 1px solid transparent !important;
  font-size: 11px !important;
  font-family: "Verdana", sans-serif !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-variant: normal !important;
  line-height: 18px !important;
  color: #333 !important;
`;

const StarsContainer = styled.span`
  display: table-cell !important;
  vertical-align: middle !important;
`;

const StarsBlock = styled.span`
  display: inline-block !important;
  margin-right: 0.3em !important;
  vertical-align: middle !important;
  -webkit-font-smoothing: antialiased !important;
  overflow: hidden !important;
  font-family: "times new roman" !important;
  text-decoration: none !important;
  word-wrap: normal !important;
`;

const StarsBackground = styled.div`
  border-bottom-style: none !important;
  position: relative !important;
  display: block !important;
  overflow: hidden !important;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  vertical-align: middle !important;
  font-size: 24px !important;
  color: #eee !important;
  line-height: 1em !important;
  height: 1em !important;
`;

const StarsFill = styled.div`
  width: 100% !important;
  position: relative !important;
  float: left !important;
  line-height: 1em !important;
  white-space: nowrap !important;
  vertical-align: middle !important;
  font-size: 24px !important;
  color: #fc0 !important;
  margin-top: -1em !important;
`;

const DateBlock = styled.span`
  padding: 1px 0 !important;
  margin: 0 !important;
  border: 1px solid transparent !important;
  display: inline !important;
  color: #999 !important;
  font-size: 11px !important;
  line-height: 18px !important;
  font-family: "Verdana", sans-serif !important;
  font-style: italic !important;
  font-weight: 400 !important;
`;

const TitleContainer = styled.div`
  float: left !important;
  display: block !important;
  padding-left: 10px;
`;

const Title = styled.h4`
  margin-top: 0 !important;
  margin-right: 0 !important;
  margin-left: 0 !important;
  margin-bottom: 1em !important;
  color: #333 !important;
  font-size: 14px !important;
  line-height: 0px !important;
  font-family: "Verdana", sans-serif !important;
  font-style: normal !important;
  font-weight: 400 !important;
  display: block !important;
`;

const BodyContainer = styled.div`
  float: left !important;
  width: 65% !important;
  word-wrap: break-word !important;
  display: block !important;
  padding-top: 0 !important;
  padding-right: 10px !important;
  padding-bottom: 0 !important;
  padding-left: 10px !important;
  margin-top: 0 !important;
  margin-right: 0 !important;
  margin-bottom: 0 !important;
  margin-left: 0 !important;
  color: #333 !important;
  font-size: 1em !important;
  line-height: 1.5em !important;
  font-family: Arial, Helvetica, sans-serif !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-variant: normal !important;
  text-decoration: none !important;
  text-transform: none !important;
  border-bottom-width: 0 !important;
  border-left-width: 0 !important;
  border-right-width: 0 !important;
  border-top-width: 0 !important;
  border-bottom-style: none !important;
  border-left-style: none !important;
  border-right-style: none !important;
  border-top-style: none !important;
  border-bottom-color: transparent !important;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  -webkit-border-radius: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
  clear: both;
`;

const BodyBlock = styled.div`
  display: block !important;
`;

const Body = styled.p`
  color: #333 !important;
  font-family: "Verdana", sans-serif !important;
  font-size: 11px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  text-decoration: none !important;
  text-transform: none !important;
  line-height: 19.5px !important;
  margin-bottom: 1em !important;
`;

const RecommendedBlock = styled.div`
  margin-bottom: 1.25em !important;
  display: block !important;
`;

const Recommended = styled.div`
  padding: 0 !important;
  margin: 0 !important;
  list-style-type: none !important;
  display: block !important;
  clear: left !important;
  display: inline !important;
  margin-right: 5px !important;
`;

const RecommendedIcon = styled.span`
  color: #333 !important;
  font-size: 11px !important;
  line-height: 14px !important;
  font-family: "Verdana", sans-serif !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-variant: normal !important;
  text-decoration: none !important;
  text-transform: none !important;
`;

const RecommendedYes = styled.span`
  font-weight: 700 !important;
`;

const RecommendedText = styled.span`
  margin-right: 5px !important;
  display: inline !important;
  color: #333 !important;
  font-size: 11px !important;
  line-height: 14px !important;
  font-family: "Verdana", sans-serif !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-variant: normal !important;
  text-decoration: none !important;
  text-transform: none !important;
`;

const RatingContainer = styled.div`
  display: block !important;
  float: right !important;
  width: 29.75% !important;
  margin-top: 0px !important;
  margin-right: 0px !important;
  margin-bottom: 10px !important;
  margin-left: 0px !important;
`;

const RatingBlock = styled.div`
  margin: 0 10px !important;
  padding-top: 10px !important;
  padding-right: 10px !important;
  padding-bottom: 10px !important;
  padding-left: 10px !important;
  border-radius: 0.25em !important;
  border-top-left-radius: 0.25em !important;
  border-top-right-radius: 0.25em !important;
  border-bottom-right-radius: 0.25em !important;
  border-bottom-left-radius: 0.25em !important;
  display: block !important;
`;

const Rating = styled.div`
  clear: both !important;
`;

const RatingTitle = styled.div`
  display: block !important;
  margin-bottom: 0.5em !important;
  color: #333 !important;
  font-size: 11px !important;
  line-height: 14px !important;
  font-family: "Verdana", sans-serif !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-variant: normal !important;
  text-decoration: none !important;
  text-transform: none !important;
`;

const RatingBarContainer = styled.div`
  padding-bottom: 1.5em !important;
  display: block !important;
`;

const RatingBarBlock = styled.span`
  height: 8px !important;
  background-color: #fff !important;
  display: block !important;
  height: 8px !important;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.25) !important;
  border-radius: 2px !important;
  border-top-left-radius: 2px !important;
  border-top-right-radius: 2px !important;
  border-bottom-right-radius: 2px !important;
  border-bottom-left-radius: 2px !important;
  position: relative !important;
  background-image: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0.3) 0,
    rgba(255, 255, 255, 0) 100%
  ) !important;
`;

const RatingBricks = styled.ul`
  position: absolute !important;
  width: 100% !important;
  z-index: 1 !important;
  padding: 0 !important;
  padding-top: 0px !important;
  padding-right: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  margin: 0 !important;
  margin-top: 0px !important;
  margin-right: 0px !important;
  margin-bottom: 0px !important;
  margin-left: 0px !important;
  list-style-type: none !important;
  display: block !important;
`;

const RatingBrick = styled.li`
  border-radius: 2px 0 0 2px !important;
  border-top-left-radius: 2px !important;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  border-bottom-left-radius: 2px !important;
  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.5),
    inset -1px 0 0 rgba(0, 0, 0, 0.25) !important;
  width: 20% !important;
  float: left !important;
  height: 8px !important;
  display: list-item !important;
  min-height: auto !important;
  min-width: auto !important;
`;

const RatingBricksFill = styled.span`
  width: 80% !important;
  height: 8px !important;
  display: block !important;
  border-radius: 2px !important;
  border-top-left-radius: 2px !important;
  border-top-right-radius: 2px !important;
  border-bottom-right-radius: 2px !important;
  border-bottom-left-radius: 2px !important;
  background-color: #fc0 !important;
  background-image: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0.3) 0,
    rgba(255, 255, 255, 0) 100%
  ) !important;
`;

const HelpfulContainer = styled.div`
  margin: 0 0 5px !important;
  margin-top: 0px !important;
  margin-right: 0px !important;
  margin-bottom: 5px !important;
  margin-left: 0px !important;
  padding: 0 10px 10px !important;
  padding-top: 0px !important;
  padding-right: 10px !important;
  padding-bottom: 10px !important;
  padding-left: 10px !important;
  clear: both !important;
  display: block !important;
`;

const HelpfulBlock = styled.div`
  float: left !important;
  display: block !important;
`;

const Helpful = styled.div`
  display: flex !important;
  align-items: center !important;
  flex-wrap: nowrap !important;
  transition: all linear 0.3s !important;
  transition-property: all !important;
  transition-duration: 0.3s !important;
  transition-timing-function: linear !important;
  transition-delay: 0s !important;
  float: left !important;
  padding: 0 !important;
  padding-top: 0px !important;
  padding-right: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  margin: 0 !important;
  margin-top: 0px !important;
  margin-right: 0px !important;
  margin-bottom: 0px !important;
  margin-left: 0px !important;
  list-style-type: none !important;
`;

const HelpfulTextBlock = styled.div`
  padding-left: 0 !important;
  color: #333 !important;
  font-family: "Verdana", sans-serif !important;
  font-size: 1em !important;
  padding: 2px 10px !important;
  padding-top: 2px !important;
  padding-right: 10px !important;
  padding-bottom: 2px !important;
  float: left !important;
  display: block !important;
`;

const HelpfulButtonsContainer = styled.div`
  float: left !important;
  margin-right: 5px !important;
  display: block !important;
`;

const HelpfulButton = styled.button`
  cursor: pointer !important;
  margin-right: 5px !important;
  font-size: 1em !important;
  padding: 2px 10px !important;
  padding-top: 2px !important;
  padding-right: 10px !important;
  padding-bottom: 2px !important;
  padding-left: 10px !important;
  float: left !important;
  color: #333 !important;
  line-height: inherit !important;
  font-family: "Verdana", sans-serif !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-variant: normal !important;
  text-decoration: none !important;
  text-transform: none !important;
  text-shadow: none !important;
  background-image: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0.1) 0,
    rgba(255, 255, 255, 0) 100%
  ) !important;
  background-color: #ededed !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  border-top-width: 1px !important;
  border-top-style: none !important;
  border-top-color: transparent !important;
  border-right-width: 1px !important;
  border-right-style: none !important;
  border-right-color: transparent !important;
  border-bottom-width: 1px !important;
  border-bottom-style: none !important;
  border-bottom-color: transparent !important;
  border-left-width: 0 !important;
  border-left-style: none !important;
  border-left-color: transparent !important;
`;



const ReviewBody = () => {
    return <Container>
        <HeaderContainer>
          <AuthorContainer>
            <StarsContainer>
              <StarsBlock>
                <StarsBackground>☆☆☆☆☆</StarsBackground>
                <StarsFill>★★★★</StarsFill>
              </StarsBlock>
            </StarsContainer>
            <AuthorBlock>
              <Author>Amanda7261</Author>
            </AuthorBlock>
            <DateBlock>· 3 months ago</DateBlock>
          </AuthorContainer>
        </HeaderContainer>
        <TitleContainer>
          <Title>Great lamp that combines style and function</Title>
        </TitleContainer>
        <BodyContainer>
          <BodyBlock>
            <Body>
              I bought this because I had way too many cords going on around
              my desk. I love this because I can wirelessly charge my phone,
              tablet, and have the light on all at once while only using one
              outlet. Keep in mind that the bulbs for this lamp are smaller
              than conventional bulbs, so I would recommend picking up some
              replacements at the store.
            </Body>
            <RecommendedBlock>
              <Recommended>
                <RecommendedIcon>✔</RecommendedIcon>
                <RecommendedYes>Yes,</RecommendedYes>
              </Recommended>
              <RecommendedText>I recommend this product.</RecommendedText>
            </RecommendedBlock>
          </BodyBlock>
        </BodyContainer>
        <RatingContainer>
          <RatingBlock>
            <Rating>
              <RatingTitle>Value for money</RatingTitle>
              <RatingBarContainer>
                <RatingBarBlock>
                  <RatingBricks>
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBricksFill />
                  </RatingBricks>
                </RatingBarBlock>
              </RatingBarContainer>
              <RatingTitle>Product quality</RatingTitle>
              <RatingBarContainer>
                <RatingBarBlock>
                  <RatingBricks>
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBricksFill />
                  </RatingBricks>
                </RatingBarBlock>
              </RatingBarContainer>
              <RatingTitle>Appearance</RatingTitle>
              <RatingBarContainer>
                <RatingBarBlock>
                  <RatingBricks>
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBricksFill />
                  </RatingBricks>
                </RatingBarBlock>
              </RatingBarContainer>
              <RatingTitle>Ease of assembly/installation</RatingTitle>
              <RatingBarContainer>
                <RatingBarBlock>
                  <RatingBricks>
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBricksFill />
                  </RatingBricks>
                </RatingBarBlock>
              </RatingBarContainer>
              <RatingTitle>Works as expected</RatingTitle>
              <RatingBarContainer>
                <RatingBarBlock>
                  <RatingBricks>
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBrick />
                    <RatingBricksFill />
                  </RatingBricks>
                </RatingBarBlock>
              </RatingBarContainer>
            </Rating>
          </RatingBlock>
        </RatingContainer>
        <HelpfulContainer>
          <HelpfulBlock>
            <Helpful>
              <HelpfulTextBlock>
                <h4>Helpful?</h4>
              </HelpfulTextBlock>
              <HelpfulButtonsContainer>
                <HelpfulButton>Yes · 5</HelpfulButton>
                <HelpfulButton>No · 3</HelpfulButton>
                <HelpfulButton>Report</HelpfulButton>
              </HelpfulButtonsContainer>
            </Helpful>
          </HelpfulBlock>
        </HelpfulContainer>
      </Container>;
}

export default ReviewBody;