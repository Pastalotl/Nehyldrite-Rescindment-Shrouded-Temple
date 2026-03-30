# Patch Notes
The current version is v0.3.8e from 2026-03-30

## v0.3.8e (2026-03-30)
An assortion of minor changes and fixes
### Font Changes
- New font overall replacing previous one
- Alterations of certain characters in font
- New accented characters: "ä" and "é"
- High contrast outline to increase readability
### Text Changes
- Additional loading screen text added
- Loading rooms now displays the room name
- Character allegiances now displayed next to turn order
- Expanded the "ready" prompt during character selection
- Fixed capitilisation of the description for the action "Assess" and the help menu prompt
### Visual Changes
- Changed the colour of the game's border when not in full screen
- Altered the colours of the game logo on the start screen to be in line with the colour palette used elsewhere
### Bug Fixes
- Actions that move the user (Disengage, Propel, Hydrodash, Pounce) can no longer target areas that would obstruct the player
- Actions that spawn entities or characters (Automata, Shield) can no longer target areas that would cause a collision with the new entity
- Enemies with hit boxes stuck in walls can now be targeted by moving the cursor out of the playable boundary (to a limit)

## v0.3.8d (2026-03-17)
Various quick bug fixes!
### Bug Fixes
- The Chest assets in the temple will now load correctly
- Updated all references to the help menu key "H"
- Health values will no longer show as decimals
- Health bars will more accurately display percentages
- Actions that should target an area around the user (Cleave, Sweep) will no longer target the area around the cursor

## v0.3.8c (2026-03-14)- GitHub Release
Hiya! This is the first GitHub release of Nehyldrite: Rescindment - Shrouded Temple (prototype 3). Today is also pi day (2026/3/14)! Below is a bunch of "fun" bits and bobs about this release/patch!
### Features
- Character select screen
- Start screen
- 7 connected rooms
- 7 unique playable characters
- Quite a few working actions
- Various map entities
- 6 different enemy types (so stoic)
- Background music
- Battle music
- Some menu sound effects
- Helpful menu with keybinds
- Loading screen tips, tricks and more
- Player movement
- Loading screens
- Entity destruction (yes, you can break pots)
- Enemy destruction (go off queen)
- Ally destruction (OK... that's enough)
- Rest button (honk shoo mimimi)
- Entity collision
- Action targeting system
- Keyboard inputs
- Working turn order!
- Visual turn order!
- Custom text solution
### Inaccessible Features
- Combat turn system
- Fun
### Known Issues
- Actions are rendered oddly, should be rendered in the render stack, but rendered separately for speed
- Turn based actions do not add their speed values to requeuing 
- Enemies do nothing... at all
- Ifforrem is allowed to exist (submitted by Calian)
- Nigeläs' name has no accent (I'M SORRY)
- Minimal animations finished
- Nothing does anything, really
### Planned Additions
- More rooms!
- Keys to unlock certain doors!
- Final boss fight!
- Non playable character decision making
- An asset for the Automata...
- More animations!
- A reason to open chests!
- Dialogue?!
- More sound effects!
- Working combat!
- On-screen representations of the damage you're dealing
- More Kauplaire per pixel (idk)