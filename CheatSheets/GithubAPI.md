GitHub API
Authentication

1.Do I need to authenticate?

Yes if you want to interact with the page. Authentication is the key to
reading and writing private information via the API.

2.What can I do with an unauthenticated request?

Navigate through the site just accesing to the parts that you don't need to sign up.

3.What can't I do with an unauthenticated request?

You can't access to the information that required sign up

4.How can I authenticate my request?

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

5.How do I ask the API for the profile information for a specific user?

GET /users/:username

6.The repository listing for a specific user?

Here, we fetch the list of repositories owned by the octokit organization:
GET /orgs/octokit/repos
GET /orgs/<org>/issues

7.The recent, public activity for a specific user?

GET /users/:username/events/public   public events perform by a user.
GET /users/:username/received_events/public  public events user has received.

8.Is there a limit to the number of requests I can make?

For requests using Basic Authentication or OAuth, you can make up to 5,000 requests per hour. For unauthenticated requests, the rate limit allows you to make up to 60 requests per hour.

9.Is there a way of extending that limit?

Making a conditional request.

10.What happens when I hit the limit?

Once you go over the rate limit you will receive an error response

11.What if there is a lot of data returned?

12.How can I ask for more (or less) data from a request?

13.How do I know that there is more data available?

What are the endpoints for fetching...
    * the profile data for a user?
    "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=3",
    "html_url": "https://github.com/octocat",
    * the organizations a user belongs to?
    "organizations_url": "https://api.github.com/users/octocat/orgs",
    * the repositories a user has created?
    "repos_url": "https://api.github.com/users/octocat/repos",
    * a filtered list of repositories?

    * a sorted list of repositories?
    * public events for a user?
    "events_url": "https://api.github.com/users/octocat/events{/privacy}",



  * When fetching public events for a user...
    * How many results are returned by default?
    * What limitations exist on fetching _more_ results?
    * What is the basic structure of the results?
    * What fields are included in each result?
    * What are the data types for each field?
    * What are some of the different values for the `type` field?
