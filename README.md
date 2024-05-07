# Running the React JS App Locally

To get the app up and running on your local machine, follow these steps:

1. **Install Node.js**: Ensure that you have Node.js version 20.4.0 installed.
2. **Install Dependencies**: Run `npm install` from the root directory of the application to install all required packages.
3. **Start the Application**: Execute `npm run dev` to launch the app. It will be available at [http://localhost:5173/](http://localhost:5173/).
4. CMD To Run Unit and Integration test = `npm run test`
5. CMD To Run END to END test = `npm run cypress` 
   - E2E testing using Chrome. 
6. `NOTE` Please do `npm install` again after deleting `node_moduels` folder as New packages has been added. 


## Challenges Overview

### Challenge I
- **Dynamic Scoring Display**: Based on the user's selections from the dropdown menus for `Bowl`, `Shot`, and `Timing`, the corresponding runs scored will be displayed dynamically.

### Challenge II
- **Commentary Integration**: Alongside the displayed runs, commentary will also appear, which varies randomly based on the outcome. For example, commentary for a six-run score may vary, pulling from a predefined data set.

![Commentary and Runs Example](https://github.com/ajaygangarde/Cricket-Outcomes-Predictor/assets/2355928/48d410b8-2941-4c53-98f2-67c90d56cfe1)

### Challenge III
- **Super Over Simulation**: Given the scenario where the `TARGET` is 21 runs, `WICKETS_IN_HAND` are 2, and `BOWL` count is 6, users can simulate and determine the outcome of India's performance based on their selection combinations in the application.

![Super Over Simulation](https://github.com/ajaygangarde/Cricket-Outcomes-Predictor/assets/2355928/1a7c775d-00a4-4c3c-a0c3-30c90e2a8b17)


### Unit Tests - Jest and RTL

### E2E test - Cypress JS

## Support

If you encounter any issues or need assistance, please contact  at `7020784576`.
