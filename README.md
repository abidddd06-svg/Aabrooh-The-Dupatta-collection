# AABROOH — The Dupatta Collection

A premium, minimal luxury e-commerce front-end for the AABROOH dupatta brand — built with plain HTML, CSS and JavaScript (no build tools, no backend, no cost). Deployable for free on GitHub Pages.

## What's included

- `index.html` — Home page (hero, collections, why-choose-us, featured products, reviews, Instagram gallery, newsletter, footer)
- `shop.html` — Full catalog with category/fabric/occasion/price filters, sorting and search
- `product.html` — Product detail page (dynamic — reads `?id=` from the URL), with related products
- `about.html` — Brand story
- `contact.html` — Contact form + store info + WhatsApp/Instagram buttons
- `css/style.css` — All styling (design tokens, layout, responsive rules)
- `js/products.js` — Product catalog data (edit this to add/change products)
- `js/main.js` — Cart, wishlist, navbar, drawer and toast logic (uses `localStorage`, so it works with zero backend)

## Features

- Fully responsive (mobile / tablet / desktop)
- Cart and wishlist that persist in the browser (no login needed)
- "Buy on WhatsApp" on every product — opens WhatsApp with the product name and price pre-filled
- Filters, sorting and search on the shop page
- Product placeholders are elegant gold-tone CSS blocks — **replace these with your real product photos** (see below)

## 1. Add your own product photos

Right now, products show a styled gold placeholder instead of a photo (this avoids using anyone else's copyrighted images). To add real photos:

1. Put your images in the `images/` folder (e.g. `images/aabrooh-001.jpg`).
2. Open `css/style.css`, find `.product-media` and `.gallery-main`, and add a background-image rule, OR simpler: open `js/products.js` and add an `"image": "images/aabrooh-001.jpg"` field per product, then update the `<div class="product-media">` lines in `index.html`, `shop.html` and `product.html` to use `style="background-image:url('${p.image}')"` instead of the gradient placeholder.

## 2. Edit your products

Open `js/products.js` — every product is one object in the `PRODUCTS` array. Change the name, price, fabric, description, etc. Add a new object (copy an existing one and change the `id`) to add a new product — it will automatically show up in the shop grid and search.

## 3. Deploy for FREE on GitHub Pages

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and log in (create a free account if you don't have one).
2. Click the **+** icon (top right) → **New repository**.
3. Name it e.g. `aabrooh-store`, keep it **Public**, click **Create repository**.

### Step 2 — Upload the files
**Easiest way (no coding tools needed):**
1. On your new repo's page, click **"uploading an existing file"** (or **Add file → Upload files**).
2. Drag and drop *all* the files and folders from this project (`index.html`, `shop.html`, `product.html`, `about.html`, `contact.html`, the `css` folder, the `js` folder, `images` folder, `README.md`).
3. Scroll down, click **Commit changes**.

### Step 3 — Turn on GitHub Pages
1. In your repo, go to **Settings** (top tab) → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, select **Deploy from a branch**.
3. Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
4. Wait 1-2 minutes. Refresh the page — you'll see a green box with your live URL:
   `https://YOUR-USERNAME.github.io/aabrooh-store/`

That's it — your site is live, for free, forever (as long as the repo exists).

### Step 4 — Custom domain (optional, e.g. www.aabrooh.com)
1. Buy the domain from any registrar (GoDaddy, Namecheap, Hostinger, etc — this part is paid, ~₹700-1200/year).
2. In your registrar's DNS settings, add:
   - A records pointing `@` to GitHub's IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - A CNAME record pointing `www` to `YOUR-USERNAME.github.io`
3. Back in GitHub → Settings → Pages → **Custom domain**, type your domain and save.
4. Wait for DNS to propagate (can take a few hours), then enable **Enforce HTTPS**.

## 4. Updating the live site later

Any time you want to change something:
1. Edit the file directly on GitHub (click the file → pencil/edit icon → make changes → Commit), **or**
2. Use GitHub Desktop / `git` to push changes from your computer.

GitHub Pages automatically redeploys within a minute or two of every commit.

## Notes

- This is a front-end only site — there's no real payment gateway or order database. Orders currently route through **WhatsApp** (Buy on WhatsApp / Checkout on WhatsApp buttons), which is a common, zero-cost way for small brands to take orders.
- If you later want real online checkout (cards/UPI), inventory management, or an admin panel, that needs a backend + database — happy to help you plan that as a next step whenever you're ready.
