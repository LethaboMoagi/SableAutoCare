<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All editable business content (contact details, hours, areas, services, prices, FAQs, testimonials) lives in `src/content/site.ts`; components read from it so the owner edits one file.
- Placeholder business info is shown with `PlaceholderTag`, toggled by `SHOW_PLACEHOLDER_MARKERS`, so nothing unconfirmed looks real.
- Form submissions go through `createServerFn` in `src/lib/submissions.functions.ts`, validated by shared zod schemas in `src/lib/schemas.ts`, inserted with the admin client; tables have RLS on with no public policies so visitors can never read submissions.
- Site chrome (header, footer, WhatsApp button) is rendered once in `src/routes/__root.tsx`; each page is its own route with its own head() metadata.
