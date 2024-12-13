# How to Add Recipes to `recipes.json`

Follow these steps to add your own recipes to the `recipes.json` file:

1. **Open the `recipes.json` File:**
    - Navigate to the `recipes.json` file in your project directory.
    - Open the file in your preferred text editor.

2. **Understand the JSON Structure:**
    - The `recipes.json` file contains an array of recipe objects.
    - Each recipe object has the following structure:
      ```json
      {
            "id": "unique_id",
            "title": "Recipe Title",
            "description": "A brief description of the recipe.",
            "image": "/path/to/image.jpg?height=200&width=200",
            "steps": [
                 "Step 1",
                 "Step 2",
                 "Step 3"
            ]
      }
      ```

3. **Create a New Recipe Object:**
    - Copy the structure of an existing recipe object.
    - Paste it at the end of the `recipes` array, before the closing `]` bracket.

4. **Fill in Your Recipe Details:**
    - Replace the `id` with a unique identifier for your recipe.
    - Update the `title` with the name of your recipe.
    - Write a brief `description` of your recipe.
    - Provide the path to an `image` representing your recipe. Please upload the recipe to the recipes folder in the folter 'img'. Additionally please keep `?height=200&width=200` at the end of your file name and ideally use a photo in a square aspect ratio.
    - List the `steps` required to prepare your recipe.

5. **Example of a New Recipe:**
    ```json
    {
         "id": "4",
         "title": "Homemade Pizza",
         "description": "A classic homemade pizza with fresh ingredients.",
         "image": "/img/recipes/homemade-pizza.jpg?height=200&width=200",
         "steps": [
              "Prepare the pizza dough and let it rise.",
              "Preheat the oven to 475°F (245°C).",
              "Roll out the dough on a floured surface.",
              "Spread tomato sauce over the dough.",
              "Add your favorite toppings (e.g., cheese, pepperoni, vegetables).",
              "Bake in the oven for 12-15 minutes until the crust is golden brown.",
              "Remove from the oven and let cool for a few minutes.",
              "Slice and serve hot." <---- JSON require commas until the last item listed (do not include this)
         ]
    }
    ```

6. **Save the File:**
    - After adding your new recipe, save the `recipes.json` file. This is called "Commiting" in github.

7. **Verify the JSON Format:**
    - Ensure that the JSON format is correct.
    - You can use an online JSON validator to check for any syntax errors.

By following these steps, you can easily add your own recipes to the `recipes.json` file. Enjoy sharing your culinary creations!