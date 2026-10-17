# Multi-Step Form

A four-step subscription form where you enter your details, pick a plan, choose add-ons, and confirm your order. Built with React, TypeScript and Tailwind CSS, using the Context API and `useReducer` to manage the form state.

## Description

The form walks the user through the steps one at a time. At every step the app checks the input before letting the user continue, and the user can always go back to change something. On the last step the user sees a summary with the total price, and after confirming gets a thank-you screen.

## Features

- Four steps: personal info, plan, add-ons, and summary, plus a final thank-you screen
- Step 1: name, email and phone with validation (required fields, valid email format, valid phone format)
- Step 2: choose between Arcade, Advanced and Pro, with a monthly/yearly billing switch
- Step 2 shows an error if no plan is selected
- Step 3: choose any number of add-ons
- Prices change automatically when switching between monthly and yearly billing
- Step 4: summary of the chosen plan, add-ons and total, with a "Change" link that goes back to the plan step
- "Go Back" button to return to the previous step without losing the selections
- Sidebar that shows the current step
- Responsive layout for phones and desktops
- Hover and focus states on all interactive elements

## Technologies

- React
- TypeScript
- Tailwind CSS
- Vite
- Context API and useReducer

## How the state works

All of the form data lives in one place: a reducer. The `FormProvider` holds it with `useReducer` and shares it with the whole app through Context, so any component can read the state or send an action using the `useForm` hook.

The actions are:

- `SET_FIELD` updates the name, email or phone
- `SET_PLAN` selects a plan
- `TOGGLE_BILLING` switches between monthly and yearly
- `TOGGLE_ADDON` adds or removes an add-on
- `NEXT` checks the current step and moves forward if it's valid
- `BACK` goes to the previous step
- `GO_TO_STEP` jumps to a specific step

## How to run it

Make sure Node.js is installed, then open a terminal in the project folder and run:

```
npm install
npm run dev
```

Open the link it shows in your browser.

## Project structure

```
src/
  assets/
    components/   Sidebar, the five steps, StepNav, Field, StepHeading
    context/      formContext.ts, FormProvider.tsx, useForm.ts
    data/         App.tsx, plans.ts, addOns.ts, steps.ts, index.css
    utils/        formReducer.ts, validateStep.ts, pricing.ts
    images/
    fonts/
    types.ts
  main.tsx
```
