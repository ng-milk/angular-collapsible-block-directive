# Angular collapsible block / ng-transclude demo
![Angular collapsible block](https://ngmilk.rocks/content/images/2015/09/6SpdDQ.gif)


### [Quick Demo](http://ng-milk.github.io/angular-collapsible-block-directive/)
A directive that uses ng-transclude to create collapsible blocks. Read more about it [here](https://ngmilk.rocks/2015/09/18/angular-collapsible-directive-using-ng-transclude/).


## Usage
1. Include `ng-collapsible-block.js`.
2. Include `ng-collapsible-block.css`.
3. Add `dm.collapsibleBlock` as a dependency to your app.
4. Profit!

...
5. (optional) Include `ngAnimate` as a dependency to animate the collapsible block toggling.


## Bower
Installable via `bower`:

```bash
bower install ng-collapsible-block
```

## Example
See [index.html](https://github.com/ng-milk/angular-collapsible-block-directive/blob/master/index.html) for an example.

```html
[...]
<collapsible collapsible-title="Title">
  <section>
    Collapsible content
  </section>
</collapsible>
[...]
```

## Title icons
You can pass 'title' icons to the directive via the `collapsed-icon` & `expanded-icon` attributes. In the example [index.html](https://github.com/ng-milk/angular-collapsible-block-directive/blob/master/index.html) [font-awesome](https://fortawesome.github.io/Font-Awesome/) is used.

```html
<collapsible collapsible-title="Title" collapsed-icon="fa fa-chevron-down" expanded-icon="fa fa-chevron-up">
  <section>
    Collapsible content
  </section>
</collapsible>
```

## Further customization
The class `clps--expanded` will be appended to the directive container when it's expanded.
To override the directive styles you can customize the following:
* `.clps` -> the directive container
* `.clps--expanded` -> the directive container when expanded
* `.clps__title` -> the directive title
* `.clps__content` -> the directive content

Check out [index.css](https://github.com/ng-milk/angular-collapsible-block-directive/blob/master/src/index.css) for the full list of CSS props.


## About ngmilk
<img src="http://ngmilk.rocks/content/images/2014/10/111-1.jpg" width="200px"/>

**ngmilk** is the place to go for fresh front-end articles, with a focus on AngularJS.
See more on [ngmilk.rocks](https://ngmilk.rocks)

Follow [@ngmilkrocks](http://twitter.com/ngmilkrocks) on Twitter to stay ahead of the game.

