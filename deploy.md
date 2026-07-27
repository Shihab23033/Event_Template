Deploying a new client site from your master template is like using a cookie cutter: **your GitHub code is the cutter**, and each client gets their own **fresh cookie (website + content database)**.

Here is the simplest, step-by-step guide to deploying a site for a new client (let's say for **Alice**) without touching or rewriting your original code.

---

## The 3-Step Overview

| Component | What it does | Client A (John) | Client B (Alice) |
| --- | --- | --- | --- |
| **GitHub** | Stores master template code | Same Master Code | Same Master Code |
| **Sanity** | Stores client's text & photos | John's Sanity Project | Alice's Sanity Project |
| **Vercel / Netlify** | Hosts the live website online | `john-wedding.com` | `alice-wedding.com` |

---

## Step 1: Create a New Sanity Workspace for the Client

To keep Alice's photos completely separate from John's, give Alice her own content space.

1. Go to **[sanity.io/manage](https://www.sanity.io/manage)** and log in.
2. Click **"Create Project"**.
3. Name it after your client (e.g., `Alice & Bob Wedding`).
4. Once created, copy the **Project ID** (a string of ~8 random characters like `abc123xy`).

> **Tip:** By creating a separate Sanity project for each client, you can easily hand over control to them in the future if they ever want to manage their own photos.

---

## Step 2: Deploy the Website on Vercel

Vercel is the easiest place to host Astro websites for free or very low cost.

1. Go to **[vercel.com](https://vercel.com)** and log into your account.
2. Click **"Add New..."** $\rightarrow$ **"Project"**.
3. Find your **GitHub Repository** (your master event template) and click **Import**.
4. In the configuration screen, expand the **Environment Variables** section. Add your variables pointing to **Alice's Sanity ID**:
* **Key:** `PUBLIC_SANITY_PROJECT_ID` | **Value:** *(Paste Alice's Project ID from Step 1)*
* **Key:** `PUBLIC_SANITY_DATASET` | **Value:** `production`


5. Click **Deploy**.

In under 60 seconds, Vercel will build the site and give you a free live URL (e.g., `alice-wedding.vercel.app`).

---

## Step 3: Connect Client's Custom Domain (Optional)

If Alice bought her own domain (e.g., `aliceandbobmemories.com`):

1. Inside your new project on **Vercel**, go to **Settings** $\rightarrow$ **Domains**.
2. Type in `aliceandbobmemories.com` and click **Add**.
3. Vercel will give you 2 DNS records (an `A Record` or `CNAME`).
4. Copy those records, go to where Alice bought her domain (GoDaddy, Namecheap, Cloudflare, etc.), and paste them into her Domain DNS settings.

---

## Step 4: Add Alice's Content & Photos

Now it's time to populate the site!

1. On your computer, open your `.env` file in VS Code and temporarily change `PUBLIC_SANITY_PROJECT_ID` to **Alice's Project ID**.
2. Run `npm run dev` in your Studio folder to open Sanity Studio (`localhost:3333`).
3. Fill in Alice’s details:
* **Couple Name:** Alice & Bob
* **Theme Color:** Choose a color that matches her theme (e.g., `#E11D48` for Rose Pink)
* **Photos:** Drag and drop her high-resolution event photos into the Photo Gallery.


4. Hit **Publish**.

Vercel will automatically update her live website in seconds.

---

## Summary Checklist for Every New Client

```markdown
- [ ] 1. Create new Sanity Project at sanity.io/manage (Copy Project ID)
- [ ] 2. Import Master GitHub Repo to Vercel
- [ ] 3. Paste client's Sanity Project ID in Vercel Environment Variables
- [ ] 4. Connect client domain in Vercel
- [ ] 5. Add photos & details in Sanity Studio and click "Publish"

```

Once you do this once or twice, the entire process takes **under 10 minutes per client**!


ngrok http 3333 --host-header="localhost:3333"