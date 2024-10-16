# Gamecon Carpooler's Map

This project demonstrates how to create an interactive map using Google Maps API to plot carpooling data from a Google Form that is linked to a Google Spreadsheet. Users can mark themselves as drivers or riders and provide information that will be displayed on the map for easier carpool organization.

## Steps to Set Up

### 1. Create a Google Form
Create a Google Form with the following questions:
- **Timestamp** (automatically generated by Google Forms)
- **Email Address**
- **Discord Name**
- **Are you a Driver or Rider?**
- **Address or Intersection**
- **Preferred Leave Time**
- **Additional Notes**

Use the provided code files to view the exact questions and the expected format.

### 2. Link the Form to a Google Spreadsheet
After creating the form, link it to a Google Spreadsheet so that all responses will be automatically stored there.

### 3. Get an API Key for Google Maps
- Go to the [Google Cloud Console](https://console.cloud.google.com/), create a new project, and enable the Google Maps JavaScript API.
- Generate an API key and ensure that billing is set up (Google Maps API requires a billing account, but for smaller maps it shouldn't cost you anything, if your map grows to a point where your making a lot of API calls then you will have to pay for anything above the free tier).

### 4. Get the Spreadsheet ID
- In the URL of your Google Spreadsheet, find and copy the Spreadsheet ID. It is the long string between `/d/` and `/edit` in the URL. 

Example:
https://docs.google.com/spreadsheets/d/1ABCD23efGHIjklmNOPQrstuVWXYZ45678abcdefgHIJK/edit#gid=0
- In this case, the Spreadsheet ID is:
1ABCD23efGHIjklmNOPQrstuVWXYZ45678abcdefgHIJK

### 5. Copy Files into the Google Spreadsheet's Script Editor
- Open the Google Spreadsheet linked to your form.
- Go to **Extensions > Apps Script** and copy both the `HTML` and `JavaScript` files from this repository into the script editor.
  - The `doGet` function should go into a `.gs` file (script file).
  - The HTML file should be placed in a new `.html` file.

### 6. Update API Keys
- In the HTML file, replace the placeholder API key with your own Google Maps API key.

### 7. Modify and Test
- Customize the code as needed for your event or carpooling needs.
- Test the form by submitting data and ensuring the map displays markers correctly.

## Testing

To test the setup:
1. **Submit a Test Form**: Fill out your form to create a test entry.
2. **Check the Spreadsheet**: Ensure the data appears correctly in the linked Google Spreadsheet.
3. **Access the Web App**: In the Apps Script editor, click **Deploy > Test as Web App** to preview the map and confirm the markers are displaying as expected.

- Check if drivers and riders are correctly differentiated by color.
- Ensure that all labels and markers appear accurately based on user input.
- Verify that clicking on markers opens the info window with correct details.

## Deployment

To deploy the app:
1. In the Google Apps Script editor, go to **Deploy > Deploy as Web App**.
2. Set the access permissions. For public access, choose **Anyone, even anonymous** if you want anyone to view the map.
3. Copy the deployed web URL and share it with participants for use.

### Future Modifications
- Update or modify the code as necessary or add new features. If you do please feel free to share them with me! 

## License
This project is licensed under the MIT License - feel free to use and modify it as needed.


