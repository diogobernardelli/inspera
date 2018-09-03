# Changelog

Unfortunately, I failed to complete this task: *- Get the expandable menu on mobile in the navbar working*)

Still, I've made a number of different attempts and approaches.

The scenario was: React 0.13.3 using gulp and SSR with node. This made it hard for me, for example, to update React to a newer version or use *class* or *function* to export Components.

Here is a list of (some) my approaches:

* The first attempt was to use *state* to control the menu. However, after a better understanding of *server.js*, I realized that being an SSR would cause the react to not handling *handler events*, because it generated a static page.

  
* I then proceeded to use the *renderToSring* method. It would add some attributes to my elements, allowing me to control the *handler events*. But for this to be possible, I would have to generate a *bundler* (using **browserify**). Although I have done this, I would need to use a ReactDOM method called *hydrate* to add the onclick on the button, however this method is from the 15+ version of this lib (I would also have to update React to 15+ as well). So..
  
* I updated React to version 16. I fixed some deprecated code lines and tried to use the *ReactDOM hydrate* method. However, the way the project was creating the components (*createClass*) made it difficult for me to use this method because it expected an element (similar to the one used by the *render* method). I could not use the hydrate. Damn!

## What I could have done to somehow finalize the feature:

* Stop using gulp and start using *webpack + babel*

* Update React and use the *react-bootstrap* package to use the *navbar* component more easily

* Add the jQuery script files from the bootstrap (I'm kidding)



Although the above alternatives are very OP (or workaround), it might be better to have done one of them than not to have completed the feature.

I was wondering if the test allowed me to upgrade React as I tried, or if the goal was a solution with the tools and versions made available.


```
After all, I'm VERY curious to learn how to solve this case!
```