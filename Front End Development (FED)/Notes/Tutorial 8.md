# Web Form

Table of Contents:
- [Web Form](#web-form)
- [Overview of a Web Form](#overview-of-a-web-form)
  - [What is a Front End and Back End?](#what-is-a-front-end-and-back-end)
    - [Front End](#front-end)
    - [Back End](#back-end)
- [Web Form Element](#web-form-element)
- [Designing a web form](#designing-a-web-form)
- [Starting a Web Form](#starting-a-web-form)
- [Adding Field Labels](#adding-field-labels)
- [Creating input field](#creating-input-field)
- [Defining Default Values and Placeholder](#defining-default-values-and-placeholder)
- [Validating a Web Form](#validating-a-web-form)
- [GET and POST](#get-and-post)
- [Regex](#regex)
- [Using Forms Controls](#using-forms-controls)
  - [Example](#example)
  - [Explanation of the code:](#explanation-of-the-code)
- [Checkbox and Radio Buttons](#checkbox-and-radio-buttons)
  - [Example of the code](#example-of-the-code)
  - [Explanation of the code:](#explanation-of-the-code-1)
- [Range Input](#range-input)
  - [Example of the code:](#example-of-the-code-1)
  - [Explanation of the code:](#explanation-of-the-code-2)
- [Floating Labels](#floating-labels)
  - [Example of the code:](#example-of-the-code-2)
  - [Explanation of the code:](#explanation-of-the-code-3)
- [Form Select](#form-select)
  - [Example of the code:](#example-of-the-code-3)



-------------------------

- Web Form
    - allows users to enter data that is sent to a server for processing
    - Commonly used for:
        - login
        - registration
        - contact us
        - search
        - etc.
    - Allows the creation of interactive web pages

- What design elements are used in a web form?
    - Labels
    - Input fields
    - Buttons
    - Checkboxes
    - Radio buttons
    - Drop-down lists
    - Text areas
    - Hidden fields
    - File upload fields
    - Captcha fields
    - Submit buttons
    - Reset buttons


# Overview of a Web Form

## What is a Front End and Back End?
### Front End
- Front is what the user sees
- Front end is the user interface
- It is the part of the website that the user interacts with
- It's also a client-side language
### Back End
- Backend is the part of the website that the user doesn't see

The backend of a website is responsible for handling tasks that are not visible to the user, such as processing data, managing databases, and handling server-side scripting. It is the part of the website that interacts with the server and the database, and it is responsible for generating dynamic content that is displayed on the front end.

The backend is typically written in server-side programming languages such as PHP, Python, Ruby, or Node.js. These languages are used to create scripts that run on the server and generate HTML, CSS, and JavaScript code that is sent to the client's browser.

In summary, the backend of a website is responsible for handling server-side tasks and generating dynamic content that is displayed on the front end. It is an essential part of any web application, and it requires specialized knowledge and skills to develop and maintain.

-------------------------
# Web Form Element

- Web forms are made up of different elements
- It controls the behavior of the form
    - Type of controls 
    - Web forms are made up of different types of controls that allow users to input data and interact with the form. Some common types of controls include:

    - Text input: Allows users to enter text, such as their name or email address.
    - Radio buttons: Allows users to select one option from a list of options.
    - Checkboxes: Allows users to select one or more options from a list of options.
    - Dropdown menus: Allows users to select one option from a list of options that are displayed in a dropdown menu.
    - Textarea: Allows users to enter a larger amount of text, such as a comment or message.
    - Submit button: Allows users to submit the form data to the server.

- Widget
-  A widget is a small application or tool that performs a specific function and can be embedded in a website or desktop environment. Widgets are often used to provide users with quick access to information or functionality, such as weather forecasts, news headlines, or social media feeds.

In web development, widgets are typically created using HTML, CSS, and JavaScript, and can be embedded in a website using an iframe or other embedding technique. Widgets can be customized to match the look and feel of the website, and can be configured to display different types of content or functionality.

Some common types of widgets include:

- Weather widgets: Displays current weather conditions and forecasts for a specific location.
- News widgets: Displays news headlines and stories from a specific source or topic.
- Social media widgets: Displays social media feeds from platforms such as Twitter, Facebook, or Instagram.
- Search widgets: Provides users with a search box that allows them to search for content within a website or across the web.
- Calendar widgets: Displays a calendar with upcoming events or appointments.

Widgets can be a useful tool for web developers to enhance the functionality and user experience of their websites. They can provide users with quick access to information and functionality, and can be customized to match the look and feel of the website.

Each type of control has its own set of attributes and behaviors that can be customized using HTML, CSS, and JavaScript. By using these controls, web developers can create forms that are easy to use and collect the necessary data from users.
- It is used to collect data from the user
- It is used to interact with the user


-------------------------
# Designing a web form 
When designing a web form, there are several factors to consider to ensure that the form is user-friendly and effective. Here are some key considerations:

1. Purpose: Clearly define the purpose of the form and what information you are trying to collect from the user.

2. Layout: Organize the form in a logical and easy-to-follow layout. Group related fields together and use whitespace and visual cues to separate different sections of the form.

3. Labels: Use clear and descriptive labels for each field, and consider using placeholder text to provide additional guidance to the user.

4. Validation: Use validation to ensure that the user enters the correct type of data in each field. Provide clear error messages if the user enters invalid data.

5. Accessibility: Ensure that the form is accessible to users with disabilities, such as by providing alternative text for images and using ARIA attributes to describe form elements.

6. Mobile-friendliness: Ensure that the form is mobile-friendly and can be easily used on a small screen.

7. Security: Ensure that the form is secure and that user data is protected. Use HTTPS to encrypt data transmission and consider using CAPTCHA or other anti-spam measures to prevent automated submissions.

By considering these factors when designing a web form, you can create a form that is easy to use, effective, and secure.


-------------------------

# Starting a Web Form

- Web forms are marked using the `<form>` element

Example of it:
```html
<form id="https://www.example.com" attributes>
    <!-- form elements go here -->
</form>
```
Where `id` identifies the form and `attributes` are the attributes of the form.

- A `form` elemeent can be placed anywhere in the HTML document
- Forms can contain other elements such as:
    - Text input
    - Radio buttons
    - Checkboxes
    - Dropdown menus
    - Textarea
    - Submit button
    - etc.

- The `action` , `method` and `enctype` attributes are used to specify how the form data should be submitted to the server.

Example of the code:
```html
<form action="https://www.example.com" method="post" enctype="multipart/form-data">
    <!-- form elements go here -->
</form>
```
Where `action` is the URL of the server-side script that will process the form data, `method` is the HTTP method that should be used to submit the form data, and `enctype` is the encoding type that should be used to submit the form data.


The `enctype` attrbute has three possible values

|Values | Descrption
|-------|------|
|`application/x-www-form-urlencoded`| The defult format in which the data is being encoded 

------

# Adding Field Labels
- Label Provides the context to an input control
- To associate a string with a control, the text must be enclosed using `label `

```html
<label for="id">label text</label>
```

# Creating input field
- Syntax for the `input` element
```html
<input name="name" id="id" type="type>
```
Here's a table of some common `type` values for the `input` element in HTML:

| Type Value | Description |
|------------|-------------|
| `text` | A single-line text input field |
| `password` | A single-line text input field where the characters are masked |
| `email` | A single-line text input field for email addresses |
| `number` | A single-line text input field for numeric values |
| `tel` | A single-line text input field for telephone numbers |
| `date` | A single-line text input field for dates |
| `time` | A single-line text input field for times |
| `datetime-local` | A single-line text input field for date and time values |
| `checkbox` | A checkbox input field |
| `radio` | A radio button input field |
| `file` | A file upload input field |
| `submit` | A button that submits the form |
| `reset` | A button that resets the form |
| `button` | A generic button |

-------------------------

# Defining Default Values and Placeholder

- The `value` attribute can be used to specify a default value for an input field

- ***Placeholder***  text strings that appear within an input field when it is empty

- They should be defined using the `placeholder` attribute
 ```html
<input type="text" name="name" id="id" placeholder="placeholder text">
 ```

- A selection list is a list box that allows the user to select one or more options from a list of options

- The `select` element is used to create a selection list

-------------------------
# Validating a Web Form
- Validation is the process of checking whether the data entered by the user is valid or not

- Types of validation:
    - Client-side validation
    - Server-side validation


-------------------------
# GET and POST
In HTTP, GET and POST are two common request methods used to send data from a client to a server.

The main difference between GET and POST requests is that GET requests are used to retrieve data from the server, while POST requests are used to submit data to the server.

When a GET request is made, the data is sent in the URL as a query string. This makes it easy to bookmark and share the URL, but it also means that the data is visible in the URL, which can be a security risk.

When a POST request is made, the data is sent in the request body, which is not visible in the URL. This makes it more secure than a GET request, but it also means that it cannot be bookmarked or shared as easily.

In general, you should use a GET request when you want to retrieve data from the server, and a POST request when you want to submit data to the server.



# Regex
Regular expressions (regex) are a powerful tool for searching and manipulating text. They are supported in many programming languages, including JavaScript, Python, and Java, as well as in text editors like VS Code.

Regex patterns are made up of a combination of characters and special symbols that define a search pattern. For example, the pattern `/hello/` would match the word "hello" in a text string.

Here are a few common regex symbols:

- `.` matches any single character.
- `*` matches zero or more of the preceding character.
- `+` matches one or more of the preceding character.
- `?` matches zero or one of the preceding character.
- `^` matches the beginning of a line.
- `$` matches the end of a line.
- `[]` matches any character within the brackets.
- `()` groups characters together.

Regex can be used for a variety of tasks, such as finding and replacing text, validating input, and parsing data.

-------------------------
# Using Forms Controls

Textual from controls like `<input>` and `<textarea>` are used to collect data from the user using the `.form-control` class

## Example
```html
<form>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" class="form-control">
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" class="form-control">
    </div>
    <div class="form-group">
        <label for="message">Message</label>
        <textarea name="message" id="message" class="form-control"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

## Explanation of the code:
GitHub Copilot: Sure, here's an explanation of the code in point form:

- The code is a HTML form that allows users to submit their name, email, and a message.
- The form is made up of several form groups, each containing a label and an input field.
- The first form group contains a label for the name input field, followed by a text input field with the name "name" and an ID of "name".
- The second form group contains a label for the email input field, followed by an email input field with the name "email" and an ID of "email".
- The third form group contains a label for the message input field, followed by a textarea input field with the name "message" and an ID of "message".
- At the bottom of the form is a submit button with the text "Submit" and a class of "btn btn-primary".
- When the user clicks the submit button, the form data is sent to the server for processing.


# Checkbox and Radio Buttons
- Bootstrap provides styling for checkboxes and radio buttons using the `.form-check` class and `form-check-input` class and `form-check-label` class

 ## Example of the code
 How to use the `.form-check`, `.form-check-input`, and `.form-check-label` classes to style a checkbox input in Bootstrap:

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
```
## Explanation of the code:

In this example, the `.form-check` class is applied to a `div` element that contains the checkbox input and label. The `.form-check-input` class is applied to the checkbox input, and the `.form-check-label` class is applied to the label.

This will apply Bootstrap's default styling to the checkbox, including a custom appearance and hover effect. You can also customize the styling further using CSS or additional Bootstrap classes.


# Range Input
- The range input is used to allow users to select a value from a range of values.

## Example of the code:
```html
<input type="range" name="name" id="id" min="min" max="max" step="step">
```

## Explanation of the code:
Where `min` is the minimum value, `max` is the maximum value, and `step` is the step size.

# Floating Labels
- Floating labels are used to display labels above input fields instead of next to them.

## Example of the code:
```html
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="Email address">
  <label for="floatingInput">Email address</label>
</div>
```
z
## Explanation of the code:
In this example, the `.form-floating` class is applied to a `div` element that contains the input field and label. The `.form-control` class is applied to the input field, and the `.form-label` class is applied to the label.

This will apply Bootstrap's default styling to the input field and label, including a custom appearance and hover effect. You can also customize the styling further using CSS or additional Bootstrap classes.


------
# Form Select
- Selects are used to allow users to select one or more options from a list of options.

## Example of the code:
```html
 <select size="4-" class="form-select" id="sel2" name="sellist2">
     <option>Chrome</option>
     <option>Edge</option>
      <option>Firefox</option>
      <option>Opera</option>
      <option>Safari</option>
     <option>IE</option>
     </select>
        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>
```