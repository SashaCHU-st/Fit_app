# Fit App
Simple nutrition calculator web app that uses the [***Open Food Facts API***](https://world.openfoodfacts.org/data) to help
users estimate calories and macros for meals. Built for learning ***React,
TypeScript, Linaria CSS styling***, component structure, and API integration. Includes
an interactive ***Three.js*** background. Covered
with unit/component tests ***Vitest*** and ***end-to-end tests
Playwright***.

## Live Demo 
[Fit App](https://fit-app-project.vercel.app/)

## How to run

### Prerequisites
- **Node.js >= 20**

### Setup and run
1. Clone the repository
```bash
git clone <repository-url>
```
2. Move to repository
```
cd client
```
3. Install dependencies
```bash
npm install
```
4. Run the application
```bash
npm run dev
```
5. Open in browser http://localhost:5173/

## Comands
### Checking correct types without build
```
npm run type-check
```
### Checking lint errors
```
npm run lint
```

### Checks code formatting 
```
npm run format:check
```
### TypeScript compilation and creates a production build.
```
npm run build
```
- ***After building the project, you can preview the production build locally:***
```bash
npm run preview
```
### Runs all unit and component tests once with Vitest.
```
  npm run test:run
```
<img width="924" height="123" alt="image" src="https://github.com/user-attachments/assets/35b21ca2-248a-44f9-b7a8-31381e153790" />

 
### Run end-to-end tests (Playwright)

#### 1. Start the development server in one terminal:

```bash
npm run dev
```
The application will be available at:
http://localhost:5173
#### 2.In another terminal, run the end-to-end tests:
```bash
npm run e2e
```
<img width="1232" height="304" alt="image" src="https://github.com/user-attachments/assets/5557e001-61ca-4b21-83f3-aa8d1fe9b586" />


> Sometimes end-to-end tests take longer.

### Run end-to-end tests (Playwright) AND unit and component tests
#### 1. Start the development server in one terminal:

```bash
npm run dev
```
The application will be available at:
http://localhost:5173
#### 2.In another terminal, run command:
```bash
npm run test:all
```

> Sometimes end-to-end tests take longer.

## How to Use the App

### Meal Type
Select a meal type: **breakfast, lunch, dinner, or snack**.

**Validation**
- The meal type must be selected.
- If not selected, an error will be shown:  
  **“Please select a meal type.”**

---

### Food Log
Enter a food name or click the **Random Food** button.

**Validation**
- Cannot be empty.
- If empty, an error will be shown:  
  **“Food log cannot be empty. Please enter e.g. banana.”**

---

### Food Amount (max 1000 g)
Enter the food amount in grams.

**Validation**
- Cannot be negative.  
  Error: **“Food amount cannot be negative.”**
- Must be between **0.1 and 1000 grams (1 kg)**.
- Cannot be empty.

---

### Button: Random Food
- Randomly selects a preset food and inserts it into the **Food Log** input.

---

### Button: Check Food Nutrition
- When all required values are provided, the app fetches nutrition data for the entered food.
- The **Nutrition Breakdown** section opens and displays the results.
- If any value is missing or the food does not exist in the API, the **Nutrition Breakdown** will not open.
- The user is notified about the specific missing or incorrect value.

---

### Nutrition Breakdown
- Displays detailed nutrition data when all inputs are valid.
- If the user changes any input after clicking **Check Food Nutrition**, an **Update Alert** appears.
- The alert informs the user that the results are outdated and they need to click the button again to refresh the data.

---

### Food Amount (in grams)
- Shows the total food amount entered by the user  
  *(e.g. 100 g)*.

---

### Calories, Proteins, Fat, Carbohydrates
- Displays calculated nutrition values based on the entered food amount.
- API values are provided **per 100 g**.
- Final values are calculated by multiplying the API values by the user’s input amount.  

  **Example:**  
  If calories are `20` per 100 g and the user enters `200 g`, the final value will be `40`.

---

### Colors and Legend
- The legend explains the meaning of each color.
- Colors indicate whether a nutrient value is 🔵**low**, 🟢**good** or 🔴**high** for the selected meal type.
- Values are based on meal-specific recommendations.
- ℹ️ **Note**  
> All nutritional recommendations in this app are based on general information found online and are used for **educational purposes only**.  
> They are approximate, statistical values and should be treated as guidance rather than strict rules or professional advice.


  **Example (Breakfast):**
  - 450 calories  
  - 30 protein  
  - 20 fat  
  - 50 carbohydrates  

  If a calculated value is above or below the recommended amount, it is highlighted with the corresponding color to indicate whether the user should 🔵**increase** or 🔴**reduce** that nutrient.

---

### Summary
- Provides a general overview of which nutritional values are too low or too high.
- Offers brief advice on how to improve the meal balance.
### ScreenShots
#### Home Page
<img width="400" height="600" alt="image" src="https://github.com/user-attachments/assets/fcb55ba3-f0cc-44d0-a013-4c9868c2d889" />

#### Nutrition Calculator
##### Mini Demo gif
![Mini Demo gif](https://github.com/user-attachments/assets/6552ceb6-da57-4fcc-ae5d-54b8d3404264)

##### Valid Form
##### Initial form
<img width="400" height="600" alt="image" src="https://github.com/user-attachments/assets/8921305a-140f-4bb5-8519-1b557fd30154" />

##### Valid inputs from user anf Nutrition breakdown
<img width="400" height="800" alt="image" src="https://github.com/user-attachments/assets/c6fb382e-2401-4352-8624-8f44ce4a1fdb" />

 ##### Not valid Form (user did not input anything and button Check Food Nutrition pushed)
 <img width="400" height="600" alt="image" src="https://github.com/user-attachments/assets/110205f7-8617-46b7-9ba4-64a54c8d8e03" />

 ##### Alert error message when food not found from Open Food Facts API
 <img width="400" height="600" alt="image" src="https://github.com/user-attachments/assets/9b56a18a-80b9-405f-85a5-c053f02c6b70" />

##### Shows Update Alert. The alert informs the user that the results are outdated and they need to click the button again to refresh the data.

<img width="400" height="800" alt="image" src="https://github.com/user-attachments/assets/318ba01e-55ee-46d8-9f2d-f380909ab8ce" />


