# Project structure

The structure below maps the Da Pizza Garden MVP requirements to the existing
Next.js App Router project. Route folders are scaffolding only; implement a
`page.tsx` or `route.ts` in a folder when that route is built.

```text
app/
  page.tsx                         # Storefront home
  menu/page.tsx                    # Menu and categories
  menu/[slug]/page.tsx             # Product details and customization
  cart/page.tsx
  checkout/page.tsx                # Guest checkout and delivery validation
  orders/access/[token]/page.tsx   # Private order view and status
  admin/
    login/page.tsx
    orders/page.tsx
    orders/[id]/page.tsx
    menu/page.tsx
  api/v1/
    shop/route.ts
    categories/route.ts
    menu/route.ts
    menu/[slug]/route.ts
    delivery/check/route.ts
    orders/route.ts
    orders/access/[token]/route.ts
    admin/
      login/route.ts
      logout/route.ts
      orders/route.ts
      orders/[id]/route.ts
      orders/[id]/status/route.ts
      menu/route.ts
      menu/[id]/route.ts
      notifications/route.ts
    webhooks/whatsapp/route.ts
components/
  admin/
  cart/
  checkout/
  layout/
  menu/
  orders/
  ui/
lib/
  auth/
  db/
  delivery/
  orders/
  payments/
  validation/
  whatsapp/
models/                             # MongoDB document models
types/                              # Shared domain and API types
jobs/notifications/                 # WhatsApp notification outbox worker
public/images/menu/                 # Menu item photography
```

Customer-facing order access uses an unguessable token rather than an order
number. Keep database access, delivery checks, pricing, authentication, and
notification provider logic server-side in `lib/` and `jobs/`.
