import { ReactElement, ReactNode } from "react";
import { isElementOfType } from "../utils/isElementOfType";
import { CardHeader } from "./Header";

export function isHeaderElement(
  child: ReactNode
): child is ReactElement<{ children: ReactNode }> {
  return isElementOfType(child, CardHeader);
}
