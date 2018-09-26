## What this will be
A webpage where you can drag sliders up and down representing different variables in the Stokes-Einstein equation (absolute temperature, viscosity, diffusion coefficient) to change the apparent hydrodynamic diameter of a particle, which will be represented by a circle onscreen that grows or shrinks in response to slider movement. 

It better assists visualization of what influences the measured Dh or Rh values that a researcher may get from a dynamic light scattering instrument. It also helps me learn how to use React, ha!

Down the line, I'd like to flesh it out with more theory and add more information/calculations/demos of concepts related to DLS. For now, I still have to get the slider working.

## Theory
Hydrodynamic diameter (dH) is the diameter of a hard sphere that diffuses at the same speed as the particle being measured in the DLS. The Stokes-Einstein equation, which normally is arranged to calculate the diffusion coefficient, is used to calculate the hydrodynamic diameter of a particle when the translational diffusion coefficient is "known" via determining the velocity of Brownian motion through a DLS.

## To Do
- [x] Draw a particle onscreen
- [x] Get a slider visible onscreen
- [x] Make the slider affect particle size
- [ ] Math to make the particle size scale accordingly with slider
- [ ] Determine appropriate range sizes for the slider in concordance with the expected variable sizes
- [ ] Make it prettier
- [ ] Add informational text
