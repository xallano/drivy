// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#021C1E"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} progress={"none"} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Drivy
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={1} textColor="white">
              peer-to-peer car rental service
            </Heading>
            <Text lineHeight={2} textColor="white">
              Any person, call the driver can book a car for given dates/distance.
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={2} textColor="white">
              1. Peugeot 306
            </Heading>
            <Heading size={2} lineHeight={2} textColor="white">
              2. Range Rover Sport
            </Heading>
            <Heading size={2} lineHeight={2} textColor="white">
              3. Porsche Boxter
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={1} textColor="white">
              6 exercises to do with JavaScript
						</Heading>
            <Heading size={4} lineHeight={2} textColor="white">
              92bondstreet/drivy
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Euro-Kilometers
            </Heading>
            <Text size={2} lineHeight={2} textColor="white">
              Ex 1
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              Rental price
            </Heading>
            <CodePane
              textSize="18"
              textAlign="center"
              lang="html"
              source={`rental price = time + distance`}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Drive more, pay less
            </Heading>
            <Text size={2} lineHeight={2} textColor="white">
              Ex 2
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              Decreasing pricing
            </Heading>
            <List textColor="white" align="center">
                <ListItem>10% after 1 day</ListItem>
                <ListItem>30% after 4 days</ListItem>
                <ListItem>50% after 10 days</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Give me all your money
            </Heading>
            <Text size={2} lineHeight={2} textColor="white">
              Ex 3
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              Commission
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              30% of the rental price
            </Heading>
            <List textColor="white" align="center">
                <ListItem>insurance → half of commission</ListItem>
                <ListItem>roadside assistance → 1€ per day</ListItem>
                <ListItem>drivy → the rest</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              The famous deductible
            </Heading>
            <Text size={2} lineHeight={2} textColor="white">
              Ex 4
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              The deductible
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              4€/day
            </Heading>
            <Text size={2} lineHeight={2} textColor="white">
              The driver is charged an additional 4€/day when he chooses the "deductible reduction" option.
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Pay the actors
            </Heading>
            <Text size={2} lineHeight={2} textColor="white">
              Ex 5
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              The actors
            </Heading>
            <List textColor="white" align="center">
                <ListItem>the driver must pay the rental price and the (optional) deductible reduction</ListItem>
                <ListItem>the owner receives the rental price minus the commission</ListItem>
                <ListItem>the insurance receives its part of the commission</ListItem>
                <ListItem>the assistance receives its part of the commission</ListItem>
                <ListItem>drivy receives its part of the commission, plus the deductible reduction</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Rental modification
            </Heading>
            <Text size={2} lineHeight={2} textColor="white">
              Ex 6
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              New dates and distance
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              Some users want to modify the dates/distance for a given rental.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Just tell me what to do
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <List ordered textColor="white">
              <ListItem>Fork the project via github</ListItem>
              <ListItem>Clone the project git clone https://github.com/YOUR_USERNAME/drivy</ListItem>
              <ListItem>Solve each exercises inside index.js file with JavaScript</ListItem>
              <ListItem>Once the exercise is solved, commit something like git ac "feat(ex-2): decrease pricing for longer rentals"</ListItem>
              <ListItem>6 exercises, so 6 commits</ListItem>
              <ListItem>Don't forget to push before 4/7 PM</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={4} lineHeight={2} textColor="white">
              DRY - Don't repeat yourself
            </Heading>
            <Heading size={4} lineHeight={2} textColor="white">
              DOT - Do One Thing
            </Heading>
            <Heading size={4} lineHeight={2} textColor="white">
              KISS - Keep It Simple Stupid
            </Heading>
            <Heading size={4} lineHeight={2} textColor="white">
              LIM - Less Is More
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              E/O - codebase, variables, comments...
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Focus only on coding
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
