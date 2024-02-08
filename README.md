# What is this?

[Litestack](https://litestack.ai/) is a tool that helps organisations optimise their tech stacks. We let your IT administrator see which Software-as-a-Service (SaaS) applications are being used so that your organisation can cut unused licenses, identify security vulnerabilities, and find tools that are better suited to its needs.

Litestack was designed with privacy in mind and is not meant to track the employees’ work. We only collect a minimum amount of data strictly for the purposes cited above, and aim to be fully transparent regarding how the extension works on your computer and how we use your data.

This document aims to answer any questions you may have. Should you have any concerns that aren’t covered here, please do not hesitate to [reach out to us](mailto:support@litestack.ai).

# How does it work?

The Litestack Chrome Extension works in the background. It looks at the domains that are being visited and will ping the Litestack servers about once per day per domain whenever it detects that you’re using a SaaS tool that is in our [database of ~3,000 SaaS](https://github.com/LitestackHQ/litestack-chrome/blob/main/src/assets/json/trackedDomains.json). Your administrator can then easily find out which tools are the most used, and optimise the organisation’s tech stack.

Litestack will generate events only for the SaaS-related domains that are listed below. **All visits to domains that are not on this list will be promptly ignored and will not generate a “visit” event sent to our servers.**

We aim to limit the amount of data sent to our servers as much as possible. Thus, if you keep Google Chrome open throughout the day, only about one “visit” event per domain per day will be sent to the Litestack servers.

# What data leaves my computer?

We only track SaaS-related domains to generate “visit” events for the Litestack servers about once per day per domain.

When a “Visit” event is generated, the following data is transmitted to our servers:

- Google Workspace User Email Address (e.g: elon.musk@tesla.com)
- Google Workspace User ID of user (e.g: 100171423165823184779)
- Domain visited (e.g: [asana.com](http://asana.com))
- Date of the visit (e.g: 01/09/23 @ 12:45am)
- A “true” / “false” field to let us know if authentication cookies to the website were detected in the user’s browser. (e.g: “true”). The actual authentication cookies are not transmitted to our servers.

# Can I access this data?

The “owner” of the organisation can invite you to your organisation’s Litestack Dashboard by visiting the “Team” page (https://dashboard.litestack.ai/team). Usually, this person should either be your Google Workspace Administrator, or a member of the financial team.

Once invited, you’ll be able to visualise all the data that Litestack has on the organisation and its employees.

Your administrator may also request to export or delete this data by heading over to the Account page (https://dashboard.litestack.ai/account)

# Why is the extension asking for permission “X”?

When installing Litestack, the following permissions are being requested:

- **“Read and change your data on a number of websites” →** This lets us find out which SaaS are being used, and if those contain authentication cookies. Only the websites related to the ~ 3,000 SaaS that exist in our database are being tracked.
- **“Read your browsing history” →** Same as above, this lets us find out which SaaS are being used. All websites that aren’t present in our database of ~ 3,000 SaaS will be promptly ignored.
- **“Know your email address” →** This lets us identify your Google Workspace account.

# How can I be sure that the extension isn’t tracking more than it pretends?

We’ve open-sourced the extension’s code so that it can be easily audited by external developers.

If you’re technical or know somebody who is, you may have a look at it here: https://github.com/LitestackHQ/litestack-chrome.

The code was commented as much as possible. The main files of interest are the [list of tracked domains](https://github.com/LitestackHQ/litestack-chrome/blob/main/src/assets/json/trackedDomains.json), the [background script](https://github.com/LitestackHQ/litestack-chrome/blob/main/src/pages/Background/index.js), and the [Popup React component](https://github.com/LitestackHQ/litestack-chrome/blob/main/src/pages/Popup/Popup.jsx).

It was mostly built with Javascript for the background script, and React + MUI for the frontend popup. The following external dependencies are being used:

- **[@emotion/react](https://www.npmjs.com/package/@emotion/react)**: "^11.11.1",
- **[@emotion/styled](https://www.npmjs.com/package/@emotion/styled)**: "^11.11.0",
- **[@mui/icons-material](https://www.npmjs.com/package/@mui/icons-material)**: "^5.14.3",
- **[@mui/material](https://www.npmjs.com/package/@mui/material)**: "^5.14.4",
- **[psl](https://www.npmjs.com/package/psl)**: "^1.9.0",
- **[react](https://www.npmjs.com/package/react)**: "^18.2.0",
- **[react-dom](https://www.npmjs.com/package/react-dom)**: "^18.2.0"

# How was the extension installed on my computer?

Your Google Workspace Administrator most likely remotely installed the extension on your Google Chrome web browser by following this procedure: https://support.google.com/chrome/a/answer/6306504?hl=en.

The extension is automatically installed & activated for all Google Chrome users who are logged into their organization’s account.

# Can I opt-out / disable tracking?

Yes. Depending on the settings set by your Google Workspace Administrator, you may be able to uninstall this extension from your Google Chrome web browser. Head over to the Google Chrome’s Extensions page and click on the “Remove” button next to the “Litestack” name. This tutorial will show you how to do it: https://support.google.com/chrome_webstore/answer/2664769.

If the “Remove” button is not apparent, then you’ll need to ask your Google Workspace administrator to do it directly from his/her Admin panel here: https://admin.google.com/ac/chrome/apps/user.

# Privacy Policy

You may find the full privacy policy of Litestack here: https://litestack.ai/privacy.

# Terms & Conditions

You may find the full terms and conditions of Litestack here: https://litestack.ai/terms.

# Contact details / Who built this

Should you have any questions regarding the extension, please do not hesitate to reach out to us at [support@litestack.ai](mailto:support@litestack.ai).

- **Valentin Foucault** (Co-Founder) | [Email](mailto:valentin@litestack.ai) | [LinkedIn](https://www.linkedin.com/in/valentin-foucault/)
