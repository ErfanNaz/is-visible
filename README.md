# Is Visible Directive

The is visible directive is a small libary to help the user add or remove classes to an HTML-Element (div / a / img / etc. ), if the Element is in the viewport.

Floating animations can be managed in a good way via Html and Css without a single line of javascript code 

## How to Use

add the script Tag
```Html
<script src="https://unpkg.com/is-visible-directive@1.0.0/dist/index.js"></script>
```
to you Html Page and start using. 

## Code Example

```Html
<div data-add-class="fade-in" class="box invisible" data-class-offset="1">
  <div>
    The Box!
  </div>
</div>
```

The `data-add-class` will manage which class needed to be added when the Box is in the view port

With the attribute `data-class-offset` the use can manage the offset, while an offset of 1 is if the Box is totaly in the viewport and 0.1 means that the `fade-in` class will be added when 10% of the Box is in the viewport

```Html
<div data-remove-class="red" class="box red" data-class-offset="1">
  <div>
    The Box 3!
  </div>
</div>
```

The `data-remove-class` will manage which class needed to be removed when the Box is in the view port

## Example

to run the example local you need to run the command `npm run start:example`
