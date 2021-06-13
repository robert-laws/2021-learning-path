# CSS Animations

## Transition

Transitions will apply a controlled change from one CSS property to another. CSS developers can control aspects of the transition including the property, the duration, timing function, and delay of a transition.

The basic structure of a transition looks like the following:

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

Each of these aspects of the transition can be defined individually.

- **transition-delay**: duration of time to wait before applying the transition
- **transition-duration**: duration of time that the transition should take to complete
- **transition-property**: property targeted by the transition
- **transition-timing-function**: definition of the acceleration curve for the transition

Changes to multiple properties can be specified individually with commas between each individual property or by using the `all` keyword to target all of them at once.

```css
.box {
  padding: 10px;
  border: 1px solid #555;
  width: 100px;
  height: 100px;
  background-color: lightgray;
  transition: all 0.4s ease-out 0.2s;
}

.box:hover {
  height: 120px;
  width: 120px;
  color: white;
  background-color: dodgerblue;
  box-shadow: 0px 0px 10px black;
}
```

In this example, the transition is triggered by the `:hover` pseudo-class selector and applies `transition: all 0.4s ease-out 0.2s;` which will transition `all` properties between the two states in `0.4` seconds with an `ease-out` timing function and a delay of `0.2` seconds.

## Transform

Transformations can be made to elements on a webpage and include rotation, scaling, skewing, or translating the element. Transformations are applied to the center of an element by default, but this can be modified by using the `transform-origin` property.

```css
.box {
  width: 100px;
  height: 100px;
  background-color: lightgray;
  transform: rotate(45deg);
  transform-origin: top left;
}
```

## Animation

...
