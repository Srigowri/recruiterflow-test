In the project directory, you can run:

### `npm start`
Tech Stack: HTML, CSS, ReactJS
Libraries used: nanoid (for generation of unique ids)

Data source for the cards: https://www.themealdb.com/api.php

API used: https://www.themealdb.com/api/json/v1/1/random.php
```
Functionalities
1. Fetches a random list on meals and arrange them on the homepage
2. Add a random meal to the first card in the top most row
3. Delete an meal on the page
4. The cards rearrange on addition or deletion
```



1. Fetch Meal(s)

   The above api returns a JSON with meta data about the meal containing name of the recipe, image etc..
   A meal represents the object with meta data
   Meals represent array of objects (used hook to save the state)


2. Add Meal

    useEffect is used to handle the side effect of fetching async from an external API
    The meal is added to the array of meals and this will change the state of the "Meal" .
    The new meal added is the first on the homepage.

3. Delete Meal

    The meal id stored as meta data is used for this operation.
    The corresponding meal id is obtained from the event object on the enclosing HTML element and sent to a handler.
    This will change the state of the "Meal" .
    Any random card can be deleted

Used local storage for caching metadata.

Any of things that change the state of the Meal will ensure the local storage is also updated



