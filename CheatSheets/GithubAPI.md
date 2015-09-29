GitHub API
Authentication

Do I need to authenticate?
Yes if you want to interact with the page. Authentication is the key to
reading and writing private information via the API.

What can I do with an unauthenticated request?
Navigate through the site just accesing to the parts that you don't need to sign up.

What can't I do with an unauthenticated request?
You can't access to the information that required sign up

How can I authenticate my request?
This is a graphic of Authorization code flow
https://tools.ietf.org/html/rfc6749#section-4.1

First way -- with some description of what that is
// and perhaps some code example?
Using your user name and password
Basic Authentication
$ curl -i -u 'username' http://api.github.com

Second way -- and more descriptive text
// and another code example
Instead of usernames and passwords, OAuth uses tokens. Tokens provide two big features:

Revokable access: users can revoke authorization to third party apps at any time
Limited access: users can review the specific access that a token will provide before authorizing a third party app

OAuth2 Token (sent in a header)
$ curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com
OAuth2 Token (sent as a paramenter)
$ curl https://api.github.com/?access_token=OAUTH-TOKEN


Third way -- yep, include a short description
// with another code example
OAuth2 Key/Secret
$ curl 'https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy'
Users

-How do I ask the API for the profile information for a specific user?

-The repository listing for a specific user?
Here, we fetch the list of repositories owned by the octokit organization:
GET /orgs/octokit/repos
GET /orgs/<org>/issues

The recent, public activity for a specific user?
-Is there a limit to the number of requests I can make?
For requests using Basic Authentication or OAuth, you can make up to 5,000 requests per hour. For unauthenticated requests, the rate limit allows you to make up to 60 requests per hour.

-Is there a way of extending that limit?
Making a conditional request.

-What happens when I hit the limit?
Once you go over the rate limit you will receive an error response
What if there is a lot of data returned?
How can I ask for more (or less) data from a request?
How do I know that there is more data available?
