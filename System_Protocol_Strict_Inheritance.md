# SYSTEM PROTOCOL: Strict Inheritance & Execution Rules

## 1. The "Single Source of Truth" Rule (Tokens)
You are STRICTLY FORBIDDEN from using raw Hex colors (e.g., `#0033FF`) or raw pixel values in your components.
* **Tokens Location:** Read/Use CSS variables defined in `src/styles/variables.css`.
* **Usage:**
    * ✅ CORRECT: `color: var(--color-primary);` or utility `text-[var(--color-primary)]`
    * ❌ WRONG: `color: #0033FF;`

## 2. Component Inheritance Rule (The "LEGO" Principle)
Before creating ANY new UI element, you must check `src/components/ui`.
* **Buttons:** NEVER use `<button>`. ALWAYS use the `<Button>` component.
* **Inputs:** NEVER use `<input>`. ALWAYS use the `<Input>` component.
* **Icons:** ALWAYS use `lucide-react`.

## 3. The "Engineer's Workflow" (Accessibility & Keyboard)
This is a professional tool.
* **Focus States:** ALL interactive elements must have a visible Focus state.
* **Navigation:** The WAF table must be navigable via `Tab` key.

## 4. Git & Versioning Protocol
* **Atomic Commits:** After completing a Feature, propose a Git Commit message.
