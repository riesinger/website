import { ComponentType, ReactElement } from "react";

/**
 * Returns true if the element is of type P, returns false otherwise
 * @param {any} element
 * @param {ComponentType<P>} ComponentType
 * @returns {boolean}
 */
export function isElementOfType<P = {}>(
  element: unknown,
  ComponentType: ComponentType<P>
): element is ReactElement<P> {
  const reactElement = element as ReactElement;

  // @ts-ignore
  return reactElement?.type?.displayName === ComponentType.displayName;
}
