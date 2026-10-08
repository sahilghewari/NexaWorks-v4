# AI visibility audit landing page

The redesigned paid audit page remains at `/ai`. Other marketing pages retain their existing navigation/footer and styling. Pricing cards display $49/$99; checkout charges INR ₹4,999/₹9,999.

## Deployment configuration

Set `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` as server environment variables in the existing hosting platform, then redeploy. Use test keys for sandbox testing, live keys only when ready. Never put the secret in a `NEXT_PUBLIC_` variable. No credentials are committed in this PR.

## Payment flow

Plan selection → buyer details → POST `/api/create-order` → Razorpay Standard Checkout → POST `/api/verify-payment`. The server owns prices, binds the order to a signed HttpOnly cookie, verifies HMAC-SHA256, and checks payment capture and order amounts with Razorpay. Buyer/company details are retained in Razorpay order notes. No database tables are added. The old `/api/lead` free snapshot email path is not called by paid checkout.

Razorpay Dashboard automatic capture should be configured. Connect the planned email automation to captured-payment events, fetch the order notes, and deduplicate by payment ID. Emails and audit fulfillment are not automated by this PR.

## Validation

Run `node --test tests/ai-payment.test.mjs`, `npx tsc --noEmit`, and `npx next build --webpack`. The default Turbopack build currently rejects an existing calendar CSS rule (`--cell-size: var(--spacing(8))`); Webpack builds successfully. Visit `/ai` and check each plan's intake dialog and Razorpay amount using test credentials. Test a full sandbox payment, cancellation, and failure before launch. Navigate to another marketing route and back to `/ai` to confirm checkout listeners are attached once.

## Logo provenance

Unmodified existing assets from https://github.com/lobehub/lobe-icons: openai.svg, perplexity.svg, gemini-color.svg, claude-color.svg. They identify audited platforms and do not imply endorsement.

Reference: https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/
