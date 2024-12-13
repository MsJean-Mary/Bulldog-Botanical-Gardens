# How to Add Upcoming Events to `upcoming.json`

Follow these steps to add your own events to the `upcoming.json` file:

1. **Open the `upcoming.json` File:**
    - Navigate to the `upcoming.json` file in your project directory.
    - Open the file in your preferred text editor.

2. **Understand the JSON Structure:**
    - The `upcoming.json` file contains an array of event objects.
    - Each event object has the following structure:
      ```json
      {
            "description": "Event Description",
            "date": "YYYY-MM-DD"
      }
      ```

3. **Create a New Event Object:**
    - Copy the structure of an existing event object.
    - Paste it at the end of the `upcoming` array, before the closing `]` bracket.

4. **Fill in Your Event Details:**
    - Update the `description` with the name of your event.
    - Set the `date` to the event's date in the format `YYYY-MM-DD`.

5. **Example of a New Event:**
    ```json
    {
         "description": "Community Clean-Up Day",
         "date": "2023-06-15"
    }
    ```

6. **Save the File:**
    - After adding your new event, save the `upcoming.json` file. This is called "Commiting" in github.

7. **Verify the JSON Format:**
    - Ensure that the JSON format is correct.
    - You can use an online JSON validator to check for any syntax errors.

**Note:** The `upcoming.json` file should contain a maximum of 3 events at any time. If you need to add a new event, consider removing an older event to maintain this limit.

By following these steps, you can easily add your own events to the `upcoming.json` file. Enjoy organizing your events!