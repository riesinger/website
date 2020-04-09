---
title: "React Hooks with Typescript"
date: 2020-04-09T12:55:10+02:00
draft: false
toc: true
images:
tags:
  - react
  - typescript
  - web
  - development
---

This post is just a list of snippets for using React hooks with TypeScript (since I always forget).

## `useState`

`useState` equals `this.state` for class components. It makes it super simple to add state to a
function component by returning a variable and its associated setter function.

{{< highlight tsx >}}
import React, { useState } from 'react';

// our components props accept a number for the initial value
const Counter: React.FC<{}> = () => {
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function
  // returning a number
  const [clicks, setClicks] = useState(0);
  return <>
    <p>Clicks: {clicks}</p>
    <button onClick={() => setClicks(clicks+1)}>+</button>
    <button onClick={() => setClicks(clicks-1)}>-</button>
  </>
}

{{</ highlight >}}

## `useEffect`

For creating side effects in function components, the React developers created the appropriately
named `useEffect` function. It can be used for adding event listeners, fetching data, you name it.
It replaces class component's lifecycle methods `componentDidUpdate`, `componentDidMount` and
`componentWillUnmount`.
The function accepts two parameters:

* A side effect function. It will be called without any parameters
* An array of values. These are the dependencies for the function. If not provided, React will run
    the side effect every time the component updates. If provided, React will only call the side
    effect if one of the array's elements has changed. There is also another special case: Passing
    an **empty array** (`[]`) will make the side effect run _only_ on `componentDidMount` and
    `componentDidUnmount`.

{{< highlight tsx >}}


// Standard use case.
const [name, setName] = useState('Pascal');
useEffect(() => {
  document.title = `Hello ${name}`;
}, [name])

{{</ highlight >}}

Your effect function can also return a clean-up function. This will be called then the component is
unmounted. Typescript will also check that your effect function returns another function (if it
returns anything at all):

{{< highlight tsx >}}
useEffect(() => {
  const handler = () => {
    document.title = window.width;
  }
  window.addEventListener('resize', handler);

  // ❌ won't compile
  return true;

  // ✅ compiles
  return () => {
    window.removeEventListener('resize', handler);
  }
})
{{</ highlight >}}

## `useContext`

`useContext` allows you to access [context](https://reactjs.org/docs/context.html) values from
anywhere in your component tree. This is the equivalent to `Context.Consumer` in class components.
TypeScript's type inferrence really works its magic here, you don't need to specify _any_ typings
for this:

{{< highlight tsx >}}
import React, { createContext, useContext } from 'react';

// our context sets a property of type string
export const LanguageContext = createContext({ lang: 'en' });

const Display = () => {
  // lang will be of type string
  const { lang } = useContext(LanguageContext);
  return <>
    <p>Your selected language: {lang}</p>
  </>
}
{{</ highlight >}}

## `useRef`

`useRef` is the new way of setting refences to DOM elements in function components. It is quite
simple to use with TypeScript, especially since [optional
chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
landed: 

{{< highlight tsx >}}
import React, { useRef } from 'react';
function TextInputWithFocusButton() {
  // it's common to initialise refs with null
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // inputEl might be null (we initialized it with null) and 
    // current might be undefined. Both should not be the case
    inputEl?.current?.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
{{</ highlight >}}

Since TypeScript doesn’t know which element we want to refer to, things like `current` and `focus()`
will also probably be `null`. We can make this a lot easier for us and for TypeScript, when we know
which type of element we want to reference. This also helps us to not mix up element types in the
end:

{{< highlight tsx >}}
function TextInputWithFocusButton() {
  // initialise with null, but tell TypeScript we are
  // looking for an HTMLInputElement
  const inputEl = useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    // If current exists, it is of type HTMLInputElement, thus the 
    // focus method is available ✅
    inputEl?.current?.focus();
  };
  return (
    <>
      { /* in addition, inputEl only can be used with input elements. Yay! */ }
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
{{</ highlight >}}

## `useMemo` and `useCallback`

`useMemo` is used for memoization. Say you have a computation-heavy function and you only want to
run it when its parameters change. You can then use `useMemo` which will automatically memoize the
result of the function's execution and only executes it again when the parameters change:

{{< highlight tsx >}}
/**
 *  Needs to browse through every pixel of an image. ➡ SLOW
 */
function getHistogram(image: ImageData): number[] {
  // details not really necessary right now
  ...
  return histogram;
}

function Histogram() {
  ...
  /*
   * We don't want to run this method all the time, that's why we save
   * the histogram and only update it if imageData (from a state or somewhere)
   * changes.
   *
   * If you provide correct return types for your function or type inference is
   * strong enough, your memoized value has the same type.
   * In that case, our histogram is an array of numbers
   */
  const histogram = useMemo(() => getHistogram(imageData), [imageData]);
}
{{</ highlight >}}

You usually won't have to provide any types here since the React typings are pretty good.

`useCallback` is very similar to `useMemo`. It returns a callback function instead of a value. Its
typings are really strong too:

{{< highlight tsx >}}
const memoCallback = useCallback((a: number) => {
  // doSomething
}, [a])

// ❌ won't compile, as the callback needs a number
memoCallback();

// ✅ compiles
memoCallback(3);
{{</ highlight >}}

## `useReducer`

Are you using Redux? Then you already know what `useReducer` is: It's basically the core of state
management libraries baked into a hook:

{{< highlight tsx >}}
type ActionType = {
  type: 'reset' | 'decrement' | 'increment'
}

const initialState = { count: 0 };

// We only need to set the type here ...
function reducer(state, action: ActionType) {
  switch (action.type) {
    // ... to make sure that we don't have any other strings here ...
    case 'reset':
      return initialState;
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter({ initialCount = 0 }) {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });
  return (
    <>
      Count: {state.count}
      { /* and can dispatch certain events here */ }
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
{{</ highlight >}}
