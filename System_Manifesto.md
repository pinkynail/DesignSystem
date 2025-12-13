# System Protocol: Strict Inheritance & Execution Rules

## 1. The "Single Source of Truth" Rule (Tokens)
You are STRICTLY FORBIDDEN from using raw Hex colors (e.g., `#0033FF`) or raw pixel values in your components.
* **Tokens Location:** You must read and use the CSS variables defined in `src/styles/variables.css`.
* **Usage:**
    * ✅ CORRECT: `color: var(--color-primary);` or utility `text-[var(--color-primary)]`
    * ❌ WRONG: `color: #0033FF;`
* **Why:** If we change the brand color later in ONE file, the whole app must update.

## 2. Component Inheritance Rule (The "LEGO" Principle)
Before creating ANY new UI element, you must check `src/components/ui`.
* **Buttons:** NEVER use the HTML `<button>` tag directly. ALWAYS import and use the `<Button>` component.
* **Inputs:** NEVER use `<input>`. ALWAYS use the `<Input>` component.
* **Icons:** ALWAYS use `lucide-react`.
* **Duplication:** If a component exists, reuse it. Do not create `MyCustomButton.tsx` if `Button.tsx` can handle it via props.

## 3. The "Engineer's Workflow" (Accessibility & Keyboard)
This is a professional tool. Mouse usage is secondary.
* **Focus States:** ALL interactive elements must have a visible Focus state (ring/border).
* **Tab Index:** The user must be able to navigate the entire WAF table using ONLY the `Tab` key.
* **Enter/Space:** Must trigger actions.

## 4. Git & Versioning Protocol
* **Atomic Commits:** After completing a Feature (e.g., "Created RuleActionSet"), you must propose a Git Commit message.
* **Safety Check:** If you are unsure about a style, DO NOT guess. Ask for clarification.
