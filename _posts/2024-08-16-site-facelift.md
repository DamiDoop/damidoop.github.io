---
title: NCX Site Overhaul
author: Maple
layout: blogpage
icon: /assets/img/blog/blog-site-overhaul.png
desc: Information about the NCX Site's facelift, includes some helpful info for making new blogs, such as how to set a description and a custom icon.
---
## Why overhaul the NCX Website?
If you've been here since early to mid 2021, you'll know this isn't the first time that the NCX Programming website has been overhauled<sup>1</sup>.
The reason that the decision was made to revamp the NCX Programming website was because it has been about 3 years since it was last updated, and was getting dated, and 
everybody was growing tired of the default Bootstrap appearance.

## What changes have been made?
Since starting my adventures into web design, it was recognised that the NCX Site was in need of a facelift, so I stepped up to the task.
The first step I took was to simply redo my About Me page<sup>2</sup>, which while not using bootstrap elements turned out well.

I then set my sights on the members page, which I chose to makeover first because I was simply working in order from my About Me page. This page is where I was going to gain my footing to attempt to  maintain a cohesive style throughout the site. I made the decision here to take the old banner of all the other pages, and make a nice gradient background using the same (or similar) colours, which I would later apply the same technique to the other main pages.

After revamping the members page, I decided to revamp the software page, as it too needed some cleaning out. One of the major benefits to replacing the old image banners is that it is possible edit the text independently of the background, which I make sure to take full advantage of here. This was the first page I needed to change the text colour with the theme while retaining all the more custom properties applied to the text, which proved to be a challenge. I had to figure out how to use SCSS, which simply made using getting the theme variable easier.
Other than the 

Other than the visual appearance of the software page, it needed some other updates independently of the visual overhaul. There was an inconsistency between the page content, such as the text and banner; and the navbar and page title. The banner and page content called itself "Software", while the navbar and page title called the page "Programs". The software page also needed some minor cobweb-clearing, as the page showed theVaultC as maintained, even though it has long since been archived.

As of writing, I haven't yet finished working on the main page, but I *can* say what I've tried so far. My initial idea was to have something with stars, as the original banner included stars, so I attempted to give the page a darker blue background with shooting stars. When I tried that, the shooting stars technically covered many page elements, meaning you couldn't actually interact with those elements. After that didn't work, I switched to making an animated gradient, similar to what I've done for the other pages, that is what I'm currently at currently.

Some of the more overarching changes that occurred aren't many, but definitely a welcome change. The first change you may notice is that the website was recently changed to use the Inter font site-wide, which allows us to use helpful features like changing the `font-width` property to get the text bolded to exactly what we need. The second change made was the navbar. I decided that the default Bootstrap navbar didn't really fit with the other changes I have made, so I changed the color to be a translucent, more neutral grey that blurs the underlying background, such as the gradient backgrounds. I also added hover effects to the links, so a rounded box appears when you hover over the links to make it more clear (and to look cool).

## Blog Changes
#### Visual Changes
The blog has also gotten a facelift! Previously, it was a very simple list of blog articles, just one row per article, with lines dividing the articles vertically.

I thought that it looked dated and rather basic, so I learned how modernise the blog page. My goal was to create a dynamic grid that showed the blog articles with all the same information, but in a cleaner manner.
One of the benefits of using a grid like this is that I could include an image in the card for the blog article, and a small blurb about the article.

#### Technical Changes
Now, this really only applies to my fellow NCX Programmers, but I feel it is still good to put in the blog post.

##### Displayed Text (Aforementioned "blurb")
The text displayed on the blog page will default to displaying the first paragraph of the article, which much of the time will be plenty good, though many times you may want to write a separate description of the article,
for example, if the first paragraph is either very short or very long. You can set this custom description by using the `desc` variable in the front matter in the blog article file.
One caveat of the displayed text is that if the article is written using an HTML file, it will not be able to detect a first paragraph and instead display the entire blog article instead.

Because of the decision to show text from the blog article, a conversion of all old blog articles to Markdown from HTML was required (Blog articles before 2023). Please refrain from using HTML to make blog articles
for the reasons listed above.

##### Attached Image
The image displayed on the blog page is defined with the `icon` variable in the front matter, and if not defined will default to a placeholder image. It is preferred if you use attach an image, such as an image used in the article (if adequately sized).
If the image is too large, it will set to horizontally centre, and be scrolled to the top (if applicable).

##### Complete front matter
A fully complete front matter for a blog article should look similar to the following:

<pre>---
title: Blog Article Title<br>
author: Your Name<br>
layout: blogpage<br>
icon: https://example.com/example.png<br>
desc: An Optional Description<br>
---</pre>

If you need an example in use, the article [Enabling the Hidden Wii DVD Icon, Part 3](https://ncxprogramming.com/2023/06/19/wii-dvd-p3.html) has both an attached image and a custom description set.

## Conclusion
I don't have a good conclusion to write, but I hope you like the site redesign. If you wanted to see what this site looked like before this overhaul, you can check it out in the See Also section of this article<sup>3</sup>.

And yes, I know my fellow NCX Programmers are going to steal the new blog design for their own personal sites!

---
## See Also
<sup>1</sup>[NCX Programming](https://web.archive.org/web/20210513182437/https://ncxprogramming.com/) (Pre-2021 Overhaul)

<sup>2</sup>[About Me Updates and Such](https://ncxprogramming.com/2024/07/12/hello-all.html)

<sup>3</sup>[NCX Programming](https://web.archive.org/web/20240221182822/https://ncxprogramming.com/) (Pre-2024 Overhaul)