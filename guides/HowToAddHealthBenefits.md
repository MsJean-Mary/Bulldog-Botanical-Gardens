# How to Add Health Benefits to `health.json`

Follow these steps to add new health benefits to the `health.json` file:

1. **Open the `health.json` File:**
    - Navigate to the `health.json` file in your project directory.
    - Open the file in your preferred text editor.

2. **Understand the JSON Structure:**
    - The `health.json` file contains an array of health benefit objects.
    - Each health benefit object has the following structure:
      ```json
      {
          "name": "Plant Name",
          "description": "A brief description of the health benefits.",
          "image": "img/placeholder.svg?height=150&width=250"
      }
      ```

3. **Create a New Health Benefit Object:**
    - Copy the structure of an existing health benefit object.
    - Paste it at the end of the `healthBenefits` array, before the closing `]` bracket.

4. **Fill in Your Health Benefit Details:**
    - Replace the `name` with the name of the plant.
    - Update the `description` with a brief description of the health benefits.
    - Provide the path to an `image` representing the plant. Please upload the image to the `img` folder and keep `?height=150&width=250` at the end of your file name.

5. **Example of a New Health Benefit:**
    ```json
    {
        "name": "Chamomile",
        "description": "Chamomile is known for its calming effects and can help with sleep and digestion.",
        "image": "img/chamomile.jpg?height=150&width=250"
    } <---- JSON require commas until the last item listed, add a comma here if it is not the last one. (do not include this)
    ```

6. **Save the File:**
    - After adding your new health benefit, save the `health.json` file.

7. **Verify the JSON Format:**
    - Ensure that the JSON format is correct.
    - You can use an online JSON validator to check for any syntax errors.

By following these steps, you can easily add new health benefits to the `health.json` file. Enjoy sharing the benefits of your garden plants!