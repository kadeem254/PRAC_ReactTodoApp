# REACT TO DO APP

## Overview
Creating a simple todo list app using react. I am following along a [tutorial by WebDevSimplified](https://www.youtube.com/watch?v=Rh3tobg7hEo). I have made some changes to it such as using bootstrap and changing my naming conventions as well as the structure in some parts.

My takeaways from the excercise:

- React is a framework meant for building front-end features, unlike JavaScript whiich takes an imperative approach React takes a declarative one.

- Working in React is best done after one has the full picture of their UI layouts so as to allow them to easily and effectively plan out components.

- Components are rendered out using JSX. Most attributes are similaar to base HTML however some differ, e.g:

    - **class -> className** since class is a JS keyword.
    - **for -> htmlFor** since for is a JS keyword.

- JSX allows the inclusion of embedded JavaScript through use of the square braces _{}_.
- Each component is only allowed to return a single block of JSX code. This means one either has to wrap all their content in a div element (`<div>...</div>`) or in an empty fragment block (`<>...</>`). Div groups add another layer of nesting, while fragments do not cause any extra nesting.
- **useState** is used to define data that can make parts of the component interactive and allow manipulation through data change.
```
const [<dataKey>, <setDataKey>] = useState('');
```
this would create a ___dataKey___ variable accessible within the component and a ___setDataKey()___ function that can be used to update the _dataKey_ value.
- If generating list using component using React, ensure each list item has an assinged **unique key** value. Also came across an interesting function I didn't know existed in JS.
```
crypto.generateUUID()
```
it generates a unique UUID number that can be used as a unique identifier.
- Short circuiting in React is the act of displaying a component if a given condition is met. There are two ways developers achieve this
    - **condition && \<conditional component\/\>** \
    this is a less recommended method but still works. The basic gist of it is that if the __condition is a truthy value__, the __\<conditional component\/\> is rendered__. \
    if the __condition is a falsey value__, the __\<conditional component\/\> does not render__.
    - **condition ? truth_component : false_component / null** \
    a standard ternary chain.
- Props are used to pass data and functions to components contained within another component. The props are set in a manner similar to how HTML element attributes are set. \
```
<MyComponent prop_name_1={myData}
```
this would pass a prop named **prop_name_1** with the value of **myData** to the component.
How the components use the props is set in the component definition. \
```
function MyComponent(props){
  console.log( props.prop_name_1 );
  return(
    <p>
      {/* Prop accessed through props object */}
      {props.prop_name_1}
    </p>
  )
}
```

or using destructuring in the parameters, allowing directly accessing the variables.
```
function MyComponent( {prop_name_1} ){
  console.log( prop_name_1 );
  return(
    <p>
      {/* Prop accessed directly */}
      {prop_name_1} 
    </p>
  )
}
```

- **useEffect()** is used to declare an effect that occurs when dependencies specified _( props, states, variables & functions declared in the component)_ change. It takes two parameters:
    - ___setup:___ the function containing your effect's logic.
    - ___dependencies:___ a list(array) of allreactive values referenced inside the setup code.