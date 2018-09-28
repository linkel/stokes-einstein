## Introduction
A webpage where you can drag sliders up and down representing different variables in the Stokes-Einstein equation (absolute temperature, viscosity, diffusion coefficient) to change the apparent hydrodynamic diameter of a particle, which will be represented by a circle onscreen that grows or shrinks in response to slider movement. 

It better assists visualization of what influences the measured Dh or Rh values that a researcher may get from a dynamic light scattering instrument. It also helps me learn how to use React, ha!

Down the line, I'd like to flesh it out with more theory and add more information/calculations/demos of concepts related to DLS. I would like to add specific examples of molecules in different substances--perhaps a table--and also improve the aesthetics of the webpage. 

## Theory
Hydrodynamic diameter (dH) is the diameter of a hard sphere that diffuses at the same speed as the particle being measured in the DLS. The Stokes-Einstein equation, which normally is arranged to calculate the diffusion coefficient, is used to calculate the hydrodynamic diameter of a particle when the translational diffusion coefficient is "known" via determining the velocity of Brownian motion through a DLS.

## To Do
- [x] Draw a particle onscreen
- [x] Get a slider visible onscreen
- [x] Make the slider affect particle size
- [x] Math to make the particle size scale accordingly with slider
- [x] Determine appropriate range sizes for the slider in concordance with the expected variable sizes
- [x] Make it prettier phase 1: select appropriate colors and adjust layout
- [ ] Make equation pulse the variable that the slider is changing or some other fancy effect
- [ ] Add example molecules and suggested settings for each variable (for water, oil, etc.)
- [ ] Verify it displays reasonably well on mobile
- [x] Add informational text on theory and DLS
