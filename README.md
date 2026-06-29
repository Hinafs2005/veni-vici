# Web Development Project 4 - Veni Vici

Submitted by: **Hina Sadiq**

This web app: **Veni Vici is a discovery app that uses an API to randomly show cat images and information. Users can click the Discover button to find a new cat, view details about it, and ban certain attributes so they do not appear again.**

Time spent: **8 hours spent in total**

## Required Features

The following **required** functionality is completed:

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The Discover button fetches a new random cat from the API.
  - Each result displays the cat image along with breed, origin, and life span information.

- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - The app only displays one cat result at a time.
  - The displayed information matches the displayed image.

- [x] **API call response results should appear random to the user**
  - Each Discover button click generates a different random cat result.

- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - Users can click on cat attributes to add them to the ban list.
  - Users can click an item in the ban list to remove it.

- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - The app checks banned attributes before displaying a new result.
  - Cats with banned values will not appear.

## Optional Features

- [x] **Multiple types of attributes are clickable and can be added to the ban list**
  - Users can interact with different attributes.

- [x] **Users can see a stored history of their previously displayed results from this session**
  - Previous discoveries are saved and shown in the app.

## Additional Features

- [x] Added a clean interface for displaying cat information
- [x] Added interactive filtering through the ban list
- [x] Added history tracking for viewed results

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='/veni-vici.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **Imgur**

## Notes

The main challenges were understanding the API data structure and using React state to manage the current result, ban list, and history. This project improved my skills with API requests, async/await, and handling user interactions.

## License

    Copyright 2026 Hina Sadiq

    Licensed under the Apache License, Version 2.0