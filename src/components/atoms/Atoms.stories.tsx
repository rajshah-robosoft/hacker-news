import * as React from "react";

import { storiesOf } from "@storybook/react";

import "../../index.scss";

import Text from "./Text";
import Image from "./Image";

import IMG from "../../assets/images/logo.gif";

storiesOf("Atoms", module)
  .add("Text", () => (
    <>
      <Text element="div" fontSize="xs" label="Hello" />
      <Text element="div" fontSize="sm" label="Hello" />
      <Text element="div" label="Hello" />
      <Text element="div" fontColor="gray" label="Hello" />
      <div style={{ backgroundColor: "#000" }}>
        <Text element="div" fontColor="white" label="Hello" />
      </div>
      <Text element="div" fontWeight="800" label="Hello" />
      <div>
        <Text label="Hello" />
      </div>
    </>
  ))
  .add("Image", () => <Image src={IMG} />);
