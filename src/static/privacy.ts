const Privacy = `
# Privacy Policy

TJMB operates the website "Colourfully" at www.colourfully.vercel.app. We take your privacy seriously. To better protect your privacy, We provide this privacy policy notice explaining the way your personal information is collected and used.

---

## Authentication and User Data

We use [Clerk](https://clerk.dev) to manage user authentication for Colourfully. When you sign in or create an account, Clerk may collect and process certain personal information, such as your email address, name, and profile picture. This information is used solely for authentication purposes and to provide a seamless user experience.

Clerk operates as a third-party service, and their handling of your data is governed by their own [Privacy Policy](https://clerk.dev/privacy). We recommend reviewing their privacy policy to understand how they manage your data.

By using Colourfully, you agree to Clerk's processing of your authentication data in accordance with their privacy policy.

---

## Collection of Routine Information

This website tracks basic information about its visitors. This information includes, but is not limited to, IP addresses, browser details, timestamps, and referring pages. None of this information can personally identify specific visitors to this website. The information is tracked for routine administration and maintenance purposes.

---

## Image Processing and Analysis

When you upload an image to Colourfully, we process the image to generate a color palette. This involves the use of third-party tools and services:


### Azure Image Analysis

We use [Microsoft Azure Image Analysis](https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/) to analyze the content of uploaded images. This service may process your image data to extract visual information, such as colors, patterns, and other features. For more information on how Azure handles your data, please review their [Privacy Policy](https://privacy.microsoft.com/).


### node-palette

We use [node-palette](https://github.com/Meodai/node-palette) to generate color palettes from uploaded images. This library processes image data locally on our servers and does not store or share your data.

By using Colourfully, you consent to the processing of your uploaded images by these tools and services.

---

## Cookies

Where necessary, this website uses cookies to store information about a visitor’s preferences and history to better serve the visitor and/or present the visitor with customized content.

---

## Advertisement and Other Third Parties

Advertising partners and other third parties may use cookies, scripts, and/or web beacons to track visitor activities on this website to display advertisements and other useful information. Such tracking is done directly by the third parties through their servers and is subject to their privacy policies. This website has no access or control over these cookies, scripts, and/or web beacons that may be used by third parties.

---

## Security

The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.

---

## Changes To This Privacy Policy

This Privacy Policy is effective as of 2025-04-16 and will remain in effect except concerning any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change the Privacy Policy at any time, and you should check this Privacy Policy periodically. If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided me or by placing a prominent notice on the website.

---

## Contact Information

For any questions or concerns regarding the privacy policy, please send an email to [teejcoder@gmail.com](mailto:teejcoder@gmail.com).
`;

export default Privacy;