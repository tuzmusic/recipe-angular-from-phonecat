### Step logic is in all the wrong places!

The component tree should be something like:

```html
<cooking-session>
  <recipe-summary/>
  <recipe-detail recipe="recipe" current-step>
    <timers-etc> // static from step to step
    <current-step step="recipe.steps[current-step]">
      <!-- or: --> <p>{{recipe[stepIndex]}}</p>
    <recipe-progress-indicator/>
    <prev-button>
    <next-button>
  </recipe-detail>
</cooking-session>

```
