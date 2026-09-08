# Animate UI Source Integration

Official, unstyled Animate UI registry sources installed on 2026-09-08 with:

```sh
pnpm dlx shadcn@latest add @animate-ui/primitives-radix-accordion @animate-ui/primitives-radix-tabs @animate-ui/primitives-buttons-button --yes
```

Registry: `https://animate-ui.com/r/{name}.json`.
Upstream repository: https://github.com/imskyleen/animate-ui.
The registry is mutable; this is a vendored snapshot, not a pinned upstream commit.
Component implementations are unmodified registry output.

## Sources

- `primitives-radix-accordion`: `primitives/radix/accordion.tsx`
- `primitives-radix-tabs`: `primitives/radix/tabs.tsx`
- `primitives-buttons-button`: `primitives/buttons/button.tsx`
- `primitives-effects-highlight`: `primitives/effects/highlight.tsx`
- `primitives-effects-auto-height`: `primitives/effects/auto-height.tsx`
- `primitives-animate-slot`: `primitives/animate/slot.tsx`
- `hooks-use-controlled-state`: `src/hooks/use-controlled-state.tsx`
- `hooks-use-auto-height`: `src/hooks/use-auto-height.tsx`
- `lib-get-strict-context`: `src/lib/get-strict-context.tsx`

All nine source files above are covered by the upstream notice in [LICENSE.md](./LICENSE.md), including helpers outside this directory. The notice is reproduced from https://github.com/imskyleen/animate-ui/blob/main/LICENSE.md (Git blob `4c99063f507027c06af430d54c5b3cf167be51d7`). This is MIT + Commons Clause, not unrestricted MIT.

## Consumer API

```tsx
import {
  Accordion, AccordionItem, AccordionHeader,
  AccordionTrigger, AccordionContent,
} from '@/components/animate-ui/primitives/radix/accordion';
import {
  Tabs, TabsList, TabsTrigger, TabsContent, TabsContents,
  TabsHighlight, TabsHighlightItem,
} from '@/components/animate-ui/primitives/radix/tabs';
import { Button } from '@/components/animate-ui/primitives/buttons/button';
```

These are client components and have no design-system styling or button variants. Supply `className` from the consuming UI. Use a client wrapper for event handlers or controlled state.

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="faq-1">
    <AccordionHeader>
      <AccordionTrigger>Question</AccordionTrigger>
    </AccordionHeader>
    <AccordionContent>Answer</AccordionContent>
  </AccordionItem>
</Accordion>

<Tabs defaultValue="overview">
  <TabsList aria-label="Project details">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
  </TabsList>
  <TabsContents>
    <TabsContent value="overview">Overview content</TabsContent>
    <TabsContent value="details">Details content</TabsContent>
  </TabsContents>
</Tabs>

<Button type="button" hoverScale={1.03} tapScale={0.97}>Explore</Button>
<Button asChild><a href="/contact">Contact</a></Button>
```

Accordion supports Radix `type="single"` / `type="multiple"`, controlled `value` / `onValueChange`, and content `keepRendered` / Motion `transition`. Include the explicit header for accessible heading semantics. Use distinct item values that are not substrings of each other: upstream currently checks open state with `value?.includes(itemValue)` even in single mode.

Tabs supports Radix `defaultValue`, controlled `value` / `onValueChange`, and orientation. `TabsContents` animates panel height by default; `mode="layout"` selects Motion layout sizing. For an animated active indicator, wrap `TabsList` in `TabsHighlight`, then each trigger in `<TabsHighlightItem value="matching-tab-value" asChild>`. Supply indicator styles through `TabsHighlight className`.

Button accepts Motion button props, `hoverScale` (default 1.05), `tapScale` (default 0.95), and `asChild`. It has no `variant` or `size` API. Set `type="button"` when it should not submit a form.
