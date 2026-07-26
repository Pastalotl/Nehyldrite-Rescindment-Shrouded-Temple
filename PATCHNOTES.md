# Patch Notes
The currently released version is v0.3.9a from 2026-07-27


## v0.3.9a (2026-07-27)
A selection of changes to improve the game's polish and usability.
Most changes involve menus and interface, but also include visual parity fixes.
Hopefully this is the last patch before v0.4.0 which should add computer counter-play to the game!
### Gameplay
 - Characters can now use targeted actions that deal no damage on themselves
### Visual Changes
 - The Automata now has its own sprite
 - Combat portraits now show allegiance backgrounds adaptively
 - Cavros' allegiance is currently 'neutral' towards the party
 - Lower menu positions have been adjusted
 - Actions no longer render over everything
 - Some actions (Axe-Throw, Quick-Bolt, Pin Shot, Propel, Pounce, Tackle) now have parabolic arcs, rather than linear paths of travel
 - Action damage is now shown when used on a target
 - Effects applied to a target are shown when an action is used
 - All playable actions now have animations (added: Brace, Lock-On, Withdraw, Assess, Endure, Propel, Stun, Detect, Fountain, X-Slice)
### Text Changes
 - Actions now have visible key prompts underneath them
 - Turn order now prompts the end turn key
 - Turn order no longer gives the character's ID information
 - Lower menu now displays character names
 - Lower menu now labels the skill meter
 - Character selection menu now has key prompts
 - Expanded loading screen flavour text
### Sprite Changes
 - New idle sprite for Vayens
- Combat portraits have been updated with new Automata colours
### Bug Fixes
 - The number of entities that can be rendered in a room is no longer capped at 64
 - Stopped actions from flickering when used


## v0.3.8e (2026-03-30)
An assortion of minor changes and fixes.
Largely a small visual update.
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
Shrouded Temple Release Patch
Details of what was present in launch version:
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
- Actions are rendered oddly, should be rendered in the render stack, but rendered separately for speed [resolved in v0.3.9]
- Turn based actions do not add their speed values to requeuing 
- Enemies do nothing... at all
- Ifforrem is allowed to exist (submitted by Calian)
- Nigeläs' name has no accent (I'M SORRY) [resolved in v0.3.8e]
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