# Web Form

Table of Contents:



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
# Testing for a Valid 

