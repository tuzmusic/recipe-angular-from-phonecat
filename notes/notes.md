### Step logic is in all the wrong places!

The component tree should be something like:

```html
<recipe-detail>
  <recipe-summary/>
  <recipe-session recipe="recipe" current-step>
    <timers-etc> // static from step to step
    <current-step step="recipe.steps[current-step]">
      <!-- or: --> <p>{{recipe[stepIndex]}}</p>
    <recipe-progress-indicator/>
    <prev-button>
    <next-button>
  </recipe-session>
</recipe-detail>

```
