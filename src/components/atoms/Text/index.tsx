import React from "react";

import "./text.scss";
import { TextElementClass, SpanElementClass, DivElementClass } from "./classes";

type fontSizeType = "xs" | "sm" | "base";
type textColorType = "inherit" | "white" | "gray" | "black";
type textWeightType = "400" | "800";
type textElementType = "div" | "text" | "span";

export interface TextInterface {
  label?: string;
  className?: string;
  element?: textElementType;
  fontSize?: fontSizeType;
  fontWeight?: textWeightType;
  fontColor?: textColorType;
}

const Text = ({
  label = "",
  className = "",
  element = "div",
  fontSize = "base",
  fontWeight = "400",
  fontColor = "black",
}: TextInterface) => {
  let fontClass = `text--${fontSize} text--${fontColor} text--${fontWeight}`;
  let mainClass = `${fontClass} ${className}`;

  switch (element) {
    case "text":
      return new TextElementClass(label).renderElement();

    case "span":
      return new SpanElementClass(label, mainClass).renderElement();

    default:
      return new DivElementClass(label, mainClass).renderElement();
  }
};

export default Text;
