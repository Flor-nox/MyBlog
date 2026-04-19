---
name: "agent-browser"
description: "Browser automation CLI for AI agents. Provides commands for navigation, interaction, screenshot, and accessibility tree extraction."
---

# Agent Browser

Browser automation CLI for AI agents. Fast native Rust CLI for controlling browsers programmatically.

## Installation

```bash
# Global Installation
npm install -g agent-browser
agent-browser install  # Download Chrome (first time only)

# Or via Homebrew (macOS)
brew install agent-browser
agent-browser install
```

## Core Commands

### Navigation
- `agent-browser open <url>` - Navigate to URL
- `agent-browser goto <url>` - Alias for open
- `agent-browser navigate <url>` - Alias for open

### Interaction
- `agent-browser click <selector>` - Click element
- `agent-browser dblclick <selector>` - Double-click element
- `agent-browser fill <selector> <text>` - Clear and fill input
- `agent-browser type <selector> <text>` - Type into element
- `agent-browser press <key>` - Press key (Enter, Tab, Control+a)
- `agent-browser hover <selector>` - Hover element
- `agent-browser select <selector> <value>` - Select dropdown option
- `agent-browser check <selector>` - Check checkbox
- `agent-browser uncheck <selector>` - Uncheck checkbox

### Scrolling
- `agent-browser scroll <direction> [pixels]` - Scroll (up/down/left/right)
- `agent-browser scrollintoview <selector>` - Scroll element into view

### Information Extraction
- `agent-browser snapshot` - Get accessibility tree with refs (best for AI)
- `agent-browser get text <selector>` - Get text content
- `agent-browser get html <selector>` - Get innerHTML
- `agent-browser get value <selector>` - Get input value
- `agent-browser get attr <selector> <attribute>` - Get attribute
- `agent-browser get title` - Get page title
- `agent-browser get url` - Get current URL
- `agent-browser get count <selector>` - Count matching elements

### Screenshots & PDF
- `agent-browser screenshot [path]` - Take screenshot
- `agent-browser screenshot --full` - Full page screenshot
- `agent-browser screenshot --annotate` - Annotated with element labels
- `agent-browser pdf <path>` - Save as PDF

### AI Chat Mode
- `agent-browser chat "<instruction>"` - Natural language browser control
- `agent-browser chat` - Interactive REPL mode

## Selectors

### Accessibility Tree Refs (Recommended)
```bash
agent-browser snapshot           # Get refs like @e1, @e2
agent-browser click @e2          # Click by ref
agent-browser fill @e3 "text"    # Fill by ref
```

### Traditional Selectors
```bash
agent-browser click "#submit"
agent-browser fill "#email" "test@example.com"
agent-browser find role button click --name "Submit"
```

## Best Practices

1. **Use snapshot for AI** - Accessibility tree provides better context
2. **Use refs for stability** - @e1, @e2 are more reliable than CSS selectors
3. **Screenshot for verification** - Visual confirmation of actions
4. **Chat mode for complex tasks** - Natural language when logic is complex

## Example Workflow

```bash
agent-browser open example.com
agent-browser snapshot                    # Get accessibility tree
agent-browser click @e2                   # Click by ref
agent-browser fill @e3 "test@example.com" # Fill form
agent-browser click @e5                   # Submit
agent-browser screenshot page.png         # Verify result
agent-browser close
```
