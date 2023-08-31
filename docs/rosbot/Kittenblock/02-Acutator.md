---
title: 02-Acutator Control
sidebar_position: 2
---

Certainly! Below is an optimized version of the Markdown content:

---

### Overview
Control of Servo and Motor-based Components

### Module Introduction

| **Actuator Drives** | Description |
| --- | --- |
| ![Motor](1683352016589-c1c73e4f-318b-4cc7-a03f-a29cf0fd47b2.png) | Control a motor at a specified speed. |
| ![Dual Motor](1683352054635-0d96c3e9-b46c-4f40-9aac-aefa0f29b5f7.png) | Control two motors simultaneously. |
| ![Timed Dual Motor](1683352071243-25db42a7-8945-4089-ab19-39ea851667dc.png) | Run two motors and stop them after a specified time period. |
| ![Quad Motor](1683352090147-d112d965-41c0-4e3a-af32-b032e40e65fc.png) | Control four motors simultaneously. |
| ![Stop Motors](1683352105088-10fa7ad7-7839-44ed-92bb-f2af85a635c4.png) | Stop all running motors. |
| ![Stepper Motor](1683352115925-e3f6ffd9-bcf9-41dd-a56f-8c1c9ac8d4c1.png) | Move a stepper motor a specified distance. |
| ![Rotate](1683352131932-42438bd3-9aa6-4672-8fcd-87970517cb9a.png) | Rotate to a specified angle. |
| ![Dual Motor Advanced](1683352144518-1876a540-242d-41ba-bafb-f2e1ea02bbc1.png) | Advanced dual-motor operation for initialization. Refer to the stepper motor datasheet for parameter details. |
| ![Stepper Motor Spacing](1683352224925-e31cc5c2-3a0d-4959-8c30-7e0ddd8c5376.png) | Set the wheel spacing for two stepper motors. |
| ![Car Turn](1683352177094-fa4db6f5-57f5-44d9-9f5e-5de6c7995baf.png) | Make the car turn at a specified degree. |
| ![Regular Servo](1683352242413-37f26d29-6475-4c41-b22b-d6bb2483086b.png) | Set the angle for standard servos (e.g., blue 9g servos). The speed refers to the rotation speed; higher values mean faster rotation. |
| ![Geekserver 9g Servo](1683352257392-50998107-96cd-463e-818a-eacf637b7f31.png) | Set the angle for Geekserver 9g servos. |

### Example Programs

#### Variable Speed Motor

- Wiring  
  ![Wiring Diagram](1683356461027-166b3f13-2f0f-4e29-8806-c6641a7cdb1f.png)
  
- Code  
  ![Code Diagram](1683356550971-9f53a1c0-060c-43f0-a2bb-31040df8c96e.png)

#### Knob-Controlled Servo

- Wiring  
  ![Wiring Diagram](1685418573797-a3e22886-2d67-4d68-a069-1ad14865666b.png)

- Code  
  ![Code Diagram](1683367858085-427b0e99-b72a-491a-8c94-f84e79f31f97.png)
