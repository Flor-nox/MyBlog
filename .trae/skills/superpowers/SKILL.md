---
name: "superpowers"
description: "A complete software development methodology for coding agents. Provides brainstorming, planning, TDD, subagent-driven development, and code review workflows."
---

# Superpowers

A complete software development methodology for your coding agents, built on top of a set of composable skills and initial instructions.

## Core Workflow

### 1. Brainstorming
- Activates before writing code
- Refines rough ideas through questions
- Explores alternatives
- Presents design in sections for validation
- Saves design document

### 2. Using Git Worktrees
- Activates after design approval
- Creates isolated workspace on new branch
- Runs project setup
- Verifies clean test baseline

### 3. Writing Plans
- Activates with approved design
- Breaks work into bite-sized tasks (2-5 minutes each)
- Every task has exact file paths, complete code, verification steps

### 4. Subagent-Driven Development / Executing Plans
- Activates with plan
- Dispatches fresh subagent per task
- Two-stage review (spec compliance, then code quality)
- Or executes in batches with human checkpoints

### 5. Test-Driven Development
- Activates during implementation
- Enforces RED-GREEN-REFACTOR cycle
- Write failing test → watch it fail → write minimal code → watch it pass → commit
- Deletes code written before tests

### 6. Requesting Code Review
- Activates between tasks
- Reviews against plan
- Reports issues by severity
- Critical issues block progress

### 7. Finishing a Development Branch
- Activates when tasks complete
- Verifies tests
- Presents options (merge/PR/keep/discard)
- Cleans up worktree

## Skills Library

### Testing
- **test-driven-development** - RED-GREEN-REFACTOR cycle

### Debugging
- **systematic-debugging** - 4-phase root cause process
- **verification-before-completion** - Ensure it's actually fixed

### Collaboration
- **brainstorming** - Socratic design refinement
- **writing-plans** - Detailed implementation plans
- **executing-plans** - Batch execution with checkpoints
- **dispatching-parallel-agents** - Concurrent subagent workflows
- **requesting-code-review** - Pre-review checklist
- **receiving-code-review** - Responding to feedback
- **using-git-worktrees** - Parallel development branches
- **finishing-a-development-branch** - Merge/PR decision workflow

## Principles

- **YAGNI** - You Aren't Gonna Need It
- **DRY** - Don't Repeat Yourself
- **True red/green TDD**
- Mandatory workflows, not suggestions
