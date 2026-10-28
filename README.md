# Cobbs CREEK Symposium website

This folder contains your responsive Cobbs CREEK Symposium website. It uses the two original creek photos from your PDF, and each registration button opens your Qualtrics form. The creek photo between the introduction and registration is a text-free visual pause. The organizer line appears below the countdown, with links to the Water Center at Penn and Drexel University SWRE. The footer includes a clickable questions email: cobbscreeksymposium@gmail.com.

## Put your website on GitHub Pages

You can publish the site without writing code. The website is made of small files, and `index.html` is its home page.

1. Download the website ZIP and open it on your computer. On Windows, right-click the ZIP and choose **Extract All**. On a Mac, double-click the ZIP. You will see a folder of website files.
2. Sign in at [github.com](https://github.com). Open the repository where you want the public event website. If you do not have a suitable repository, make a new one named `cobbs-creek-symposium` and set it to **Public**. A GitHub Pages website can be seen by anyone on the internet, so do not upload private information.
3. In that repository, choose **Add file → Upload files**. Open the extracted folder on your computer. Select all the files inside it—including `CNAME`, `index.html`, the two creek JPG photos, and the other website files—and drag them into GitHub's upload area. Upload the files themselves; do not upload only the ZIP. Keep all the files together in the repository's top level.
4. Scroll down to **Commit changes**. Leave the suggested message and choose **Commit changes**. This is like pressing “save” for your website.
5. In the repository, choose **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Choose the branch that holds your files (often `main`) and choose the `/(root)` folder, then click **Save**. GitHub will publish the page. It can take a few minutes. You can check **Settings → Pages** for its status.

## Connect cobbscreeksymposium.org

Do this after the files are in GitHub and GitHub Pages is switched on. The file named `CNAME` already contains `cobbscreeksymposium.org`.

1. In GitHub, open **Settings → Pages**. Under **Custom domain**, type `cobbscreeksymposium.org` and click **Save**. Wait until GitHub shows the domain as saved. If you see a DNS check button, use it.
2. Open a new browser tab and sign in to Porkbun. Go to **Domain Management** and select **DNS** beside `cobbscreeksymposium.org`.
3. Remove the root **ALIAS** that points to Porkbun's parking destination, and remove the wildcard `*` **CNAME**. Keep both `_acme-challenge` **TXT** records and any email-related records. Add four DNS records. For each one, choose type **A**, leave **Host** blank (Porkbun uses a blank Host for the root domain), and enter one matching address below as the **Answer**. Keep Porkbun's normal/default TTL.

   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

4. Add one more record. Choose type **CNAME**, set **Host** to `www`, and set **Answer** to `jarrynight.github.io`. Do not put `https://` or the repository name in this answer.
5. Save the records. The root A records may appear in the list with Host displayed as `cobbscreeksymposium.org`; that's normal. Do not remove the `_acme-challenge` TXT records or email records.
6. Give the internet time to notice the changes. It can take up to 24 hours. Then return to GitHub **Settings → Pages** and, when the option appears, turn on **Enforce HTTPS**. Visit `https://cobbscreeksymposium.org` to see the site.

GitHub's Pages help and Porkbun's setup guide are linked here if you want to check the steps or see their current screens: [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) and [Porkbun: GitHub Pages](https://kb.porkbun.com/article/64-how-to-connect-your-domain-to-github-pages).

## Change something later

To change a sentence or picture, update that file in your repository and choose **Commit changes**. GitHub Pages will publish the updated site after a short wait. The registration buttons already point to:

`https://upenn.co1.qualtrics.com/jfe/form/SV_9BvhOUgZdj02MDA`

The day counter automatically counts down to March 4, 2027. Its date is set in `script.js`.
