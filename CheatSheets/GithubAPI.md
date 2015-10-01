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
    30
    * What limitations exist on fetching _more_ results?
    * What is the basic structure of the results?
    * What fields are included in each result?
    * What are the data types for each field?
    * What are some of the different values for the `type` field?



    **Reading APIs**

  * How can I use the Github API to...

    * get all the comments for a particular issue?

	GET/repos/:owner/:repo/issues/:number/comments
	parameters will be since with type string
	issue comments will be ordered by ascending ID.

    * add a comment to an issue?

	POST /repos/:owner/:repo/issues/:number/comments
	Input will be body with type string


  * How can I use the jQuery API to…

   * get the HTML contents of an element?

In an HTML document, .html() can be used to get the contents of any element. If the selector expression matches more than one element, only the first match will have its HTML content returned. Consider this code:
$( "div.demo-container" ).html();
It returns a string

    * create a _new_ HTML element?

.add( elements )
The following will not save the added elements, because the .add() method creates a new set and leaves the original set in pdiv unchanged:

    * add an HTML element to the page?
    
.append( content [, content ] )
Insert content, specified by the parameter, to the end of each element in the set of matched elements.

  * How can I use the Lodash API to...
    * replace placeholders with values from an object?
    * repeat code for every item of an array
