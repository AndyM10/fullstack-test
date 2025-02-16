# Full-stack test

Let's create a frontend application that can read the backend api. We'll read articles from a SQLite database and show them on the front end.

## Backend

Using the following schema, create a backend that paginates articles. Your choice of implementation details, but you will use this backend to power the front end.

- [ ] Create some kind of log in mechanism.
- [x] List articles/pagination
- [x] Find articles by slug

![schema](/schema.png)

## Frontend

### Login

The idea is to add a login link to the top header that goes to a login screen. There we have a login form with validation and does the logic process. This should create a proper session and allow user to be identified on the pages and show the avatar.

- [x] Add a login option to the header
- [x] Add a login screen with a login form that creates a user session
- [x] Show the user avatar instead of the login option when they are logged in
- [x] Clicking the avatar should log off the user

### Articles page

Create a list of articles that, when clicking on them, will bring us to the article page.

We want to have the ability to filter those users by analyst and channel by adding some UI components to do so, some kind of input, dropdown, etc. that updates the list

Also we want to add some images on that list since some articles have those defined plus the avatar from the analyst.

- [ ] Add a filter option on homescreen to filter by analyst or channel
- [ ] Add images when available to the article list on homescreen
- [x] Add the analyst with avatar to the list

### Article page

The page should show some nice details like the image, the analyst avatar and the published date.

If a user is not logged in it shouldn't be able to read our articles, we should just show the summary field for them with a message asking them to login. Otherwise, we should show all of the content.

- [x] Hide the article content from non logged in users
- [x] Show the summary field to non logged in users
- [] Add image to article detail
- [x] Add analyst avatar
- [x] Add published date
- [ ] Link the analyst to its page
