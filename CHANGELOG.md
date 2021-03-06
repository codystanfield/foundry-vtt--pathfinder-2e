# Patch Notes:

## Version 1.10.13

This is most likely the last version that will support version 0.6.6 of Foundry.

### Bug Fixes
* (@abrault) Fix reroll menu check
* (@abrault) Check if user can update actors before moving item

### New Features
* (@JensChup) Added Vehicle sheet

### Content Changes
* (@Shandyan) Rule elements for items A through C
* (@JohnSBarden) Fixes for Enervation and Agonizing Despair (#763)
* (@JohnSBarden) APG Spell fixes (#763)

### Development Improvements
* (@blacksmithgu) Delete now unused conditions code
* (@mdizo) UX: Removed hardcoded styles on chat tags
* (@mdizo) Added Gelasio Bold


## Version 1.10.12
### Bug Fixes
* (@nikolaj-a) Fix PFS level bump slider
* (@nikolaj-a) Fix the creature conditions


## Version 1.10.11
### New Features
* (@abrault) Add rule elements on tokens to change size and image
* (@nikolaj-a) Add familiar actor type and sheet
    * Add hit points to familiar
    * Add custom modifier support to familiars
    * Add armor class to familiar
    * Add saving throws to familiar
    * Add perception to familiar
    * Add skills to familiar
    * Add details to familiar
    * Add conditions and effects to familiar
    * Add rolls to familiar
    * Add speeds to familiar
    * Sense and speed tags to familiar
    * Add Core Rulebook familiar abilities compendium
    * Add Advanced Player's Guide familiar abilities compendium
    * Ignore certain modifiers on familiars

* (@mdizo) Basic styling of the familiar sheet
* (@nikolaj-a) Toggle property rule element
* (@nikolaj-a) Bass speed rule element
* (@nikolaj-a) Sense rule element

### Bug Fixes
* (@abrault) Fix logo height to prevent sidebar jumping
* (@abrault) Fix saves from hazards
* (@In3luki) Fix crit and fumble buttons potentially crashing the browser
* (@In3luki) Fix spells test for the new data structure
* (@In3luki) Fix errors for rolls with no dice
* (@nikolaj-a) Return promise when setting roll option
* (@nikolaj-a) Add all weapon traits as options to attack rolls from strikes

### Content Changes
* (@overdox) Spell Icon update
* (@overdox) Removing unused duplicate icons
* (@Shandyan) Alchemical poison formatting
* (@Shandyan) Compendium corrections (class features & spells)
* (@TMun) Fixes missing details from errata and fixes class kit loadout (#769, #770) 
* (@TMun) Fixes Toughness description per errata 1 (#759)
* (@TMun) Repackage. Closes #788, #781, #779 and #78. Corrects part of #786
* (@TMun) Adds heightening information to Synesthesia spell
* (@nikolaj-a) Power Attack feat rules

### Core System Improvements
* (@JensChup) Added UnitPrice for LootSheet
* (@TMun) Adds Focus and Ritual to Spell Traditions since they can be flagged as that for backend heightening
* (@mdizo) Moved CSS classes for "tags" to global scope
* (@nikolaj-a) Add a melee or ranged damage option
* (@nikolaj-a) Add modifier system for character speeds
* (@nikolaj-a) Dynamic toggles on character sheet
* (@nikolaj-a) Add minion trait

### Development Improvements
* (@In3luki) Extract individual compendium entries into separate JSON files
    * Use NeDB to extract and build pack files
    * Remove duplicate entries from two compendium packs
    * Add /static/packs/ directory to .gitignore
    * Add previously broken entry to pathfinder-bestiary-2.db
    * Add entityIdChanged() check to pack extraction
    * Sort extracted JSON data by its keys and extract all entities as sorted JSON


## Version 1.10.10
### New Features
* (@nikolaj-a) Damage dice rule element

### Bug Fixes
* (@In3luki) Fix card button click expanding roll details
* (@In3luki) Fix fumble button drawing from crit table
* (@In3luki) Fix initiative button on skill rolls and remove references to roll.parts

### Content Changes
* (@Shandyan) Adding effects and cross-links to alchemical items
* (@nikolaj-a) Add damage dice rule element to the rogue Sneak Attack class feature

### Core System Improvements
* (@In3luki) Critical Hit and Fumble Cards improvements
    * Add context flag to all d20 rolls and use context.type in all hooks
    * Add context to roll flags and move flag creation inside roll.toMessage()


## Version 1.10.9
### New Features
* (@abrault) Add rule element for Temporary Hit Points
* (@abrault) Add rule element for Fixed Proficiency
* (@In3luki) Add a button to attack rolls to manually draw a critical hit card
* (@In3luki) Add item drop on tokens handler (0.7.x only)
* (@KSops) Adding MAP to spell chat card
* (@meditatingCybermind) Added fame and reputation tracking for pfs
* (@nikolaj-a) Target flat-footed checkbox on actions tab
* (@nikolaj-a) Add onAfterPrepareData hook on for rule elements
* (@nikolaj-a) Add basic value bracketing option to rule elements
* (@nikolaj-a) Add default label to rule elements
* (@nikolaj-a) Dexterity modifier cap rule element
* (@nikolaj-a) Add Guidance spell effect to compendium
* (@nikolaj-a) Mage armor spell effect

### Bug Fixes
* (@In3luki) Remove redundant image edit listener
* (@lotrein) Fix for Diehard correctly increasing both wounded and doomed conditions as well as changing the max values when removed (#455)
* (@lotrein) Fix Dangerous Sorcery feat adding damage to cantrips and focus spells (#734)

### Content Changes
* (@olilan) Update Treat Wounds macro for feats
* (@overdox) Fix for treasure items that had broken image names
* (@overdox) Spell icon updates
* (@TMun) Added base damage to all acid flasks in the bonus damage field. Replaced acid flasks on Fumbus and Quinn with updated version
* (@TMun) Corrects voidworm damage (#745)
* (@TMun) Relinked character sheet iconics images
* (@TMun) Add example spell effects for magic shield, guidance and add effects for panache and dueling parry

### Core System Improvements
* (@abrault) Find location for player settings for all versions
* (@blacksmithgu) Add types to dice pools in weapon damage
* (@mdizo) UX: Effects Tab - Basic Styles
* (@mdizo) UX: Actions Tab Rework
* (@nikolaj-a) Actions tab navigation
* (@nikolaj-a) Non-encounter draft UI

### Development Improvements
* (@mdizo) Updated sourceMap config


## Version 1.10.8
### New Features
* (@In3luki) Add system setting to automatically draw a crit or fumble card
* (@KSops) Adding treasure value to loot and character sheets
* (@meditatingCybermind) Added fame and reputation tracking for PFS
* (@nikolaj-a) Initial rule element framework with support for flat modifiers on all item types
* (@nikolaj-a) Add effect as a built-in item type, which can serve as a peg for rule elements

### Bug Fixes
* (@abrault) Fix error when pfs field is not defined on a character
* (@abrault) Return the roll from Pf2eDice functions

### Content Changes
* (@iceman) Improve Treat Wounds macro formatting
* (@Shandyan) Corrections to bestiaries to add back in accidentally deleted DCs
* (@TMun) Compendium changes:
    * Clean up of feat traits and correction of archetype feats from class feats
    * Adds Edgewatch Detective and Jamleri Dedications and feats
    * Adds missing Aasimar feats
    * Added exhale poison action
    * Added feats from EC6
    * Add Agents of Edgewatch Book 2 Equipment and Spells
    * Recreate Iconics with new feats and items, correct errors, add APG Iconics, convert icons to webp (#473)
    * Evocation school and Biresonant Wayfinder (#741, #744)
* (@TMun) Update OpenGameLicense.md to add AoE2, PFS #2-00, #2-01, #2-02 and PFB #1
* (@nikolaj-a) Add spell effects compendium, with an example Inspire Courage spell effect

### Core System Improvements
* (@abrault) Replace Invest icon with sparkles
* (@nikolaj-a) Add condition chat card
* (@nikolaj-a) More information in limited character sheet
* (@mdizo) Added Open Roads icon to the Pathfinder Society tab
* (@mdizo) Improved styling of the limited character sheet
* (@mdizo) Added style matching the character sheet to the Foundry tool menu on the left
* (@mdizo) More space for the lore skills on the sheet to prevent long names from getting truncated


## Version 1.10.7
### New Features
* (@nikolaj-a) Initial implementation of PFS Level Bump
* (@nikolaj-a) Add editor for public biography
* (@nikolaj-a) Add sheet for limited character access

### Bug Fixes
* (@blacksmithgu) Fix loot actor dragging, and types for duplicate, container, and bulk calculation logic

### Content Changes
* (@TMun) Add new icons from Firgof to bestiary 1 and 2


## Version 1.10.6
### New Features
* (@BoMbY) Modifiers for Maximum HP to support Drained
* (@In3luki) Add drag and drop sorting for spellcasting entries
* (@In3luki) Add drag and drop sorting to spells
* (@nikolaj-a) Custom modifiers for PC lore skills
* (@nikolaj-a) Add organized play numbers to character sheet
* (@nikolaj-a) Add support for hp-per-level modifier

### Bug Fixes
* (@abrault) Restore functionality to hazard buttons
* (@atnoslen) Fix token conditions panel highlighting for conditions applied by other conditions (#736)
* (@nikolaj-a) Fix tab title on actor update
* (@nikolaj-a) Fix rolls with modifiers lacking predicates

### Content Changes
* (@Shandyan) Added back in accidentally deleted DCs and other text

### Core System Improvements
* (@BoMbY) Remove check for untyped bonuses
* (@blacksmithgu) Type several utility methods, improve foundry types, finish actor type definitions
* (@nikolaj-a) Reformat character martial proficiencies


## Version 1.10.5
### New Features
* (@atnoslen) Remove Condition button added to Effects tab in the character sheet
* (@KSops) Add Item Investment Tracker
* (@seanmunkel) Implement dangerous sorcery feat damage
* (@nikolaj-a) Support for custom Dexterity modifier caps
* (@nikolaj-a) Add Pathfinder Society tab on character sheet

### Bug Fixes
* (@abrault) Attempted fix for the temporary db~ file error, by not calling getChatData on all items
* (@atnoslen) Various bugfixes to make the conditions more robust
* (@In3luki) Enforce max HP and SP values in actor sheets
* (@Ralar) Restore player settings button in 0.6.6+
* (@nikolaj-a) Fix hotbar skill macro to support Furnace

### Content Changes
* (@overdox) More equipment icons
* (@TMun) Add Ysoki Language. Removes Osirian (incorrect duplicate of Osiriani) (#723)
* (@TMun) Equipment and spell fixes (#726, #728, #730, #731)

### Core System Improvements
* (@In3luki) Select the text in an input field on focus in the actor sheets
* (@blacksmithgu) A _lot_ of internal changes to improve type definitions and clean up code.
      

## Version 1.10.4
### Bug Fixes
* (@abrault) Fix type of spell levels
* (@In3luki) Fix trait selector
* (@In3luki) Fix stamina in character sheet

### Content Changes
* (@TMun) Corrects Divine Font and Tempest Form Entries (#721)

### Core System Improvements
* (@mdizo) Revamped Character Sheet Navigation
* (@nikolaj-a) Change character sheet navigation to change title on hover


## Version 1.10.3
### New Features
* (@nikolaj-a) Add Effects tab on character sheet
* (@In3luki) Enable drag and drop to hotbar for strike actions and skill checks

### Content Changes
* (@TMun) Compendium updates:
    * Update to equipment - Traits, cost, level, handedness corrected.
    * Added 169 missing items from Lost Omen Legends, AoE and magic items from APG
* (@TMun) Compendium corrections:
    * Voz Lirayne does not, in fact, have a longbow (#706)
    * Lazurite Infused Golem has wrong golem antimagic (#717)
    * Breastplate of Command and Greater Breastplate of command have the wrong activate action (#718)
* (@abrault) Update OGL with EC 4-6 and AoE 1

### Core System Improvements
* (@atnoslen) Refactor of the condition manager to improve then efficiency, and work better with the token HUD.
* (@blacksmithgu) Added missing type definitions for the creature actors.  


## Version 1.10.2
### Bug Fixes
* (@nikolaj-a) Fixed flat modifiers on damage rolls
* (@atnoslen) Changed "Fascinated" condition to apply penalty on all skill checks instead of the individual skills in preparation for also applying to lore skills


## Version 1.10.1
### Bug Fixes
* (@abrault and @In3luki) Fix hotbar macro drag and drop issue


## Version 1.10.0
### New Features
* (@nikolaj-a) More capabilities to set roll mode
    * Roll mode dropdown in check roll dialog
    * Support secret option for rolls
* (@nikolaj-a) Tentantive support for conditions on NPCs (attack/damage rolls still not supported)
    * Custom modifiers for NPC armor class
    * Custom modifiers for NPC saving throws
    * Custom modifiers for NPC perception
    * Custom modifiers for NPC skills
* (@atnoslen) Custom conditions in the condition manager

### Content Changes
* (@abrault) Add kits to Compendium Browser
* (@TMun): Corrected entries for equipment compendium up to G

### Bug Fixes
* (@nikolaj-a) Fix broken UI events for damage and critical damage rolls
* (@abrault) Change title of Treat Wounds result
* (@atnoslen) Condition manager bugfixes, including drag & drop integration
* (@Ralar) Better support for dragging items to and from unlinked actors, which should help with the loot sheet

### Core System Improvements
* (@abrault) Major code clean up
* (@blacksmithgu) Better code type information for parts of the character and NPC actors
* (@mdizo) Reworked character sheet navigation to make room for more tabs


## Version 1.9.7
### New Features
* (@atnoslen) Added a condition manager that knows how to deal with overriding and linked conditions, and allows users to add custom conditions.

### Content Changes
* (@overdox) Compendium changes
    * Added more equipment icons
    * Added more spell icons
* (@TMun) Compendium changes
    * Add Irori boons and curses (#690)
    * Re-add Graveknight and Shaitan to Bestiary 1 (#688)
    * Correct spelling of Gloomglow Mushrooms in AoA bestiary (#689)
* (@TMun) Added several missing traits

### Bug Fixes
* (@abrault) Catch NaN error when modifying token attribute
* (@In3luki) Add check to FormulaPreservingRoll for Foundry 0.7.x compatibility
* (@nikolaj-a) Fix token HUD shield resource

### Core System Improvements
* (@abrault) Refactor kits to allow homebrew, and changed the built-in kits to use the new setup
* (@Ralar) Loot sheet updates: clean up layout and add description field, and fix treasure value


## Version 1.9.6
### New Features
* (@fryguy1013) Allow editing max xp (for PFS characters, and homebrew XP)

### Content Changes
* (putty#0555) Add property runes for APG and Devil at the Dreaming Palace
* (@overdox) Compendium updates
    * Equipment icons
    * Fix corrupted art objects
    * Other icons
* (@TMun) Compendium updates
    * Ki Strike Spell fix and spells.db compaction (#687)
    * Poison weapon feat chain errors (#673)
    * Experienced Smuggler skill feat level (#674)
    * Add Lost Omens Character Guide NPCs and change compendium name (#686)
    * Club equiment description is misplaced (#654)
    * Add Exquisite Sword Caneand Exquisite Sword Cane Sheath from Extinction Curse (#670)
    * Leather armor errors (#678)
    * Alchemical crossbow bulk error (#680)
    * Satchel errors (#681)

### Artwork Contributions
* (Firgof) Multiple bestiary artwork

### Bug Fixes
* (@atnoslen) Add prone condition attack penalty
* (@atnoslen) Fix treat wounds macro crit success/failure
* (@baberg) Fix status icon directory (#685)

### Core System Improvements
* (@abrault) Add highlight around embedded images
* (@atnoslen) Added optional callback to actor roll updates.

### Development Improvements
* (@blacksmithgu) Major cleanup of some part of the code, including removing the old character sheet and simplification of the custom modifier system.


## Version 1.9.5
### Content Changes
* (@abrault) Assign more specific feat type to some general feats from the APG
* (@abrault) Extract most Base64 images from compendia
* (@abrault) Remove Base64 images from items embedded in compendium actors
* (@overdox) Added icons to some of the equipment from the APG
* (@TMun) Compendium updates
    * Adds The Slithering enemies, traps and items
    * Adds remaining non-magical items from APG (#656, #659, #662, #664, #665, #666, #667, and #668)
* (@TMun) Added APG class equipment kits 


## Version 1.9.4
### New Features
* (@abrault) Add Hazard tab to Compendium Browser
* (@abrault) Add context menu to reroll a check
* (@nikolaj-a) Toggle two-hand and versatile weapon traits

### Content Changes
* (@TMun) Compendium updates
    * Adds Gluttondark Babau (#563)
    * Corrects Rain of Embers Stance (#619)
    * Adds Fire Mephit (#623)
    * Adds all AoA Hazards and missing monsters (#624, #631)
    * Assigns rarity for every piece of equipment (#628)
    * Corrects reactive shield level (#634)
    * Corrects Mukradi resistance (#637)
    * Updates all mutagens to include missing drawbacks; standardizes entries (#638)
    * Corrects Bee swarm weakness (#639)
    * Corrected Mountain Stronghold chain Corrects text for silver shields Adds Snare Specialist Feat from CRB (#640)
    * Adds Advanced Player Guide, except for Pets, Familiars and magical items equipment other than rod of cancellation
* (@Shandyan) Adding traits, including new ones from the Advanced Player's Guide

### Bug Fixes
* (@abrault) Fix 404 errors with color scheme settings
* (@abrault) Fix copy-paste error in compendium browser settings
* (@blacksmithgu) Fix minor errors in setting descriptions
* (@blacksmithgu) Fix #651: can now add custom item traits

### Core System Improvements
* (@abrault) Move creature-specific code out of base Actor sheet
* (@abrault) Change the NPC's init bonus to 0.5
* (@abrault) Use npc actions for strikes in Hazard edit mode
* (@abrault) Add missing icons for casting time
* (@abrault) Adjust compendium css to avoid name spillage
* (@Delethor) Loot actor dialog: avatar uses less space, inventory uses complete width, and doesn't display equip buttons
* (@blacksmithgu) Fix typo in 'isNonPhysicalDamage'
* (@blacksmithgu) Add types to condition modifiers
* (@blacksmithgu) Add types for damage category
* (@blacksmithgu) Delete unused readonly sheet implementation
* (@TheCraiggers) Adds rarity filters for all applicable compendium browser sections


## Version 1.9.3
### Content Changes
* (@TMun) Add EC3 monsters, correct wizard class and update alchemical bombs for splash damage (issues #612, #596, and #613)

### Bug Fixes
* (@nikolaj-a) Fix unarmed strike damage for thief (issue #611)
* (putty#0555) Support the bonus damage UI for strikes
* (putty#0555) Fixed typo in weapon specialization

### Core System Improvements
* (putty#0555) Initial support of splash damage for strikes
* (putty#0555) Automation Cinderclaw Gauntlet


## Version 1.9.2
### Content Changes
* (@Shandyan) Compendium updates
    * Shameless Request Feat Missing from Feat Compendium (issue #599)
    * Non-Uniform formatting in the Take Cover action (issue #600)
    * Field Discovery: Chirugeon contains text for Field Discovery: Bomber (issue #603)
    * Alchemist's Tools entry not up-to-date (issue #605)
    * Uncanny Bombs feat missing from compendium (issue #607)
    * Aura of Righteousness and Effortless Concentration is missing from compendium (issue #609)
* (@TMun) Compendium updates
    * Updated GMG NPC Gallery with all NPCs
    * Corrects or adds missing entries in Actions, Bestiary 1 and Spells databases (issues #582, #597, #604, #608, #616)

### Bug Fixes
* (@nikolaj-a) Fix internal damage dice modifier predicate

### Core System Improvements
* (putty#0555) Simple weapon property runes, automated weapon specialization, added a few unarmed strike-related monk feats
* (@abrault) Remove redundant spell level from spellbook
* (@nikolaj-a) Added roll options for initiative


## Version 1.9.1
### Content Changes
* (@TMun) Compendium updates
    * Add backgrounds from Agents of Edgewatch Player's Guide and update OGL with players guide copyright notice
    * Add refocus exploration activity to Actions compendium
    * Remove Age of Ashes duplicate monsters from Bestiary 1
    * Move Fall of Plaguestone monsters to FoP Bestiary from Bestiary 1 and remove version number from FoP compendium
    * Correct parazylzed spelling
    * Add Laslunn from Age of Ashes book 3 to AoA Bestiary
    * Adds missing class features related to spellcasting
* (@Shandyan) Compendium updates
    * Remove Archieve of Nethys links from Archetypes, Backgrounds, Classes, and Class Features compendia
    * Format error for Quick Alchemy
    * Update Equipment compendium to replace action images with font symbols
* (@overdox) The Apocalypse Prophet Equipment update
* (@meditatingCybermind) Added rage, inspire courage, and raise shield macros to compendium

### Bug Fixes
* (@fryguy1013) Fix a couple of copy/paste errors with ids that were causing a duplicate id warning in Chrome
* (@fryguy1013) Refactor spell contextual data so that temporary data doesn't get permanently get stuck in the data object
* (@nikolaj-a) Remove non-functional damage roll dialog from strikes
* (@abrault) Remove non-functional loot sheet edit checkbox

### Core System Improvements
* (@abrault) Double dice for Strikes if using the crit variant
* (putty#0555) Increase/Decrease bulk limits for differently sized creatures
* (@nikolaj-a) More custom modifier selectors
* (@iceman76) Improve setting initiative from chat log for NPCs

### Development Process Improvements
* (@fryguy1013) TypeScript adaptations
* (putty#0555) TypeScript adaptations


## Version 1.9.0
### New Features
* (@fryguy1013) Add spell attack modifier to the spell tab on the player character sheet
* (@fryguy1013) Add recovery roll button next to dying/wounded/doomed

### Content Changes
* (@ryansobol) Compendium typos
    * Fix #579 Telekinetic Maneuver misspelled as Telekinetic Manuever on the Spells Compendium
    * Fix #561 Denizen of Leng wrong damage
* (@Shandyan) Compendium updates
    * Fix darkvision ability traits
    * Fix light hammer and orc knuckle dagger bulk
    * Fix pickpocket feat type
    * Fix typo in baomal creature name
    * Added missing traditions to Stabilize cantrip
    * Adding missing spells traits
    * Fix reach spell missing traits
    * Fix gelatinous cube size
    * Fix capitalization for bloody blade mercenary
    * Added Ralldar to Age of Ashes compendium
    * Fix Emblazon Energy level
    * Minor errata fixes
    * Removing duplicate feats
* (@TMun) Compendium updates
    * Updated NPC Gallery to include all NPCs up to the downtrodden section in the GMG
    * Add the arcane spellcaster class feat
    * Add Shoony Ancestry Blunt Nose feat
    * General clean up of all feats - linked to compendia, deleted trailing whitespace and removed span id tags
    * Remove AoN and paizo.com html links and replace single action and reaction images with system copies. Strips out AoN span ID tag from actions and equipment compendia
    * Corrects mistform elixir
    * Fixed conditions background color, as well as some links

### Bug Fixes
* (@fryguy1013) Change the default value of treasure items to be worth 0 gp instead of 1 pp
* (@fryguy1013) Fix typo in templates.json for spell display levels
* (@fryguy1013) Add rollmode parameter to DicePF2e.d20Roll so that you can blind roll from a macro
* (@fryguy1013) Add DicePF2e to the global scope so other modules can use it
* (@nikolaj-a) Expose status effect API to macros

### Core System Improvements
* (@fryguy1013) Condense rows in feats section, skills section, and spellbook on "new" character sheet
* (@fryguy1013) Remove feat attack and tool checks, as it wasn't being used (5E stuff)
* (@fryguy1013) Refactor MAP calculations to no longer store temporary data in the item's data object
* (@abrault) Combined compendium browsers
* (@abrault) Improve compression of images
* (@abrault) Disable name mangling from the prod build
* (@ryansobol) Fix item attribute "denomitation" should be spelled "denomination"
* (@nikolaj-a) Bump Foundry core version compatibility to 0.6.5

### Development Process Improvements
* (@fryguy1013) Add webpack progress bar plugin so it's easier to see what's going on when doing watch builds
* (putty#0555) Smaller typings
* (@ryansobol) Remove gulp dev dependencies
* (@ryansobol) Fix the foundryconfig example file to be compatible with the project's editorconfig settings
* (@ryansobol) Fix deprecation warning with node-gyp


## Version 1.8.0
### New Features
* (@iceman76) Add filters to Feat Browser for boons and curses.

### Content Changes
* (@iceman76) Compendium updates
    * Give Pathfinder Society boons the correct feat type.
    * Remove duplicate Pathfinder Society boon.
    * Change "Rain of Embers Stance" from class feature to class feat.

### Core System Improvements
* (@fryguy1013) Major upgrade to the technical foundation of the project, which should help streamline the release process and help us catch some bugs earlier on. A huge thanks for all the hard work that went into this!


## Version 1.7.0
### New Features
* (ravenmaster_001#5375) Add support for proficiency variant rules.

### Bug Fixes
* (@nikolaj-a) Fix overflow error in roll dialog

### Core System Improvements
* (@fryguy1013) Clean up unused code, mostly leftovers from the D&D 5E game system.
* (@nikolaj-a) Bump Foundry core version compatibility to 0.6.4

## Version 1.6.1
### Content Changes
* (@Shandyan) Compendium updates
    * Update spells compendium to correct a missed set of focus spells
    * Update deities, equipment, feats, rollable-table compendia to replace AoN links with Foundry links
* (@meditatingCybermind) Compendium updates
    * Updated backgrounds, feats, and PFS boons from missions
    * Added Lost Omens backgrounds
* (@meditatingCybermind) Updated OGL with society credits

### Bug Fixes
* (@iceman76) Correctly calculate when shields are broken.
* (@iceman76) Correctly highlight buttons for rolling in skills tab.
* (@nikolaj-a) Fix untyped bonus stacking
* (@nikolaj-a) Use the actor as speaker when rolling

### Core System Improvements
* (@iceman76) Add search field to trait selector window & freeze Update Actor button.
* (@nikolaj-a) Flat damage modifiers with damage type
* (@nikolaj-a) Conditional custom modifiers
* (@nikolaj-a) Default attack and damage roll options
* (@nikolaj-a) Support for default roll options

## Version 1.6.0
### New Features
* (@nikolaj-a) Added custom damage dice and damage roll options


### Content Changes
* (@overdox) Wrong text for Animal Trainer archetype has now been corrected
* (@cora) Added four hazards from Ages of Ashes 2 into the adventure path bestiary.
* (@Shandyan) Compendium updates
    * Correcting the final (??) set of item/journal links for spells, items, feats etc.
    * Replaced Aon links in actions, backgrounds and class compendium with links to other compendiums for actions, conditions, feats, equipment, spells, etc. 
    * AoN links to skills, traits and other rules entries not in Foundry have been left in place (for now).
* (@Shandyan) Updated spells.db to fix various errors
    * Made corrections to spells to address issue 554
    * Corrected text of Modify Memory spell
    * Made sure all focus spells are correctly listed as Focus rather than Spells.
* (luke#4754) added ability glossary
* (TMun#1625) Updated Iconics:
    * Inventory redone to use containers
    * All tokens have owner hover now set to hover
    * Vision set to 5 dim/300dim/300bright for regular/low light/darkvision 
    * All names in the prototype token have the (level x) removed
* (@meditatingCybermind & TMun#1625) Added pfs/deity boons and curses

### Bug Fixes
* (@mirkoRainer) Fixed Religious Text bulk (is L, not negligible).


### Core System Improvements
* (@nikolaj-a) Added support for more custom modifier formats for attack and damage rolls, including by weapon name and weapon ID. This will allow macros to target specific weapons or weapon types with modifiers. Also added an option to target damage modifiers on proficiency, which is needed for some of the class features.
* (@abrault) Further optimisation to the Compendium Browser improving performance
* (@mirkoRainer) Allow a character Deity image to be edited (by clicking the image and select a new file for it).


## Version 1.5.4
### Content Changes
* (@Shandyan) Corrected spell entries in spell compendium for:
    * Focus spells
    * All spells up to and including level 10
* (@overdox) Compendium update and fixes:
    * Fixes from #532 (closed) added
    * Steady Spellcasting have been merged into a sigle feat, as the text is the same for all the relevant classes (Bard, Cleric, Druid, Sorcerer, Wizard)
    * New compendium for Archetypes added (albeit wip, updates to this will be added later, so feel free to merge it for now)
    * Added all current archetypes to the compendium, excluding multiclass dedications
    * Added missing archetype feat 'Judgement of the Monolith'
    * Addded materials (chunks and ingots) to the equipment.


### Bug Fixes
* (@iceman76) Unified apostrophes in item names to fix search functionality in compendium browsers


### Core System Improvements
* (@L4D15) When moving stacked items between actors - show a popup to ask how many items you want to move.
* (@In3luki) Status effect combat messages improvements:
    * Show status effect combat messages only once per combatant.
    * Don't show the messages for defeated combatants.
    * Reset status effect combat message filter after combat has ended
* (@In3luki) Display area size in spell chat card properties


## Version 1.5.3
### Content Changes
* (@overdox) General changes:
    * Bladed scarf is now categories as a martial weapon #519 (closed)
    * Multiple issues in the compendium is now corrected #526 (closed) thanks @Lanastara for the nicely done bug report
    * Updated class feature names to include what categorie they belong to, ie Wizards Arcane Thesis or Arcane School, or rangers Hunter's Edge.
    * GMG (NPC Gallery) is now named NPC Gallery (GMG)
* (@overdox) Pathfinder Society content:
    * Added Rain of Embers Stance feat, from Pathfinder Society Quest #2 (closed): Unforgiving Fire pg. 20
    * Added missing feat, Fey Influence from Pathfinder Society Scenario #1-17: The Perennial Crown Part 2, The Thorned Monarch pg. 30
* (@overdox) Swapped out or updated various icons
* (@putt1) Rename orc ranger to gray tusk in Fall of Plaguestone compendium
* (@Shandyan) Made corrections to the cantrips and 1st level spells to address various errors in spell details (e.g. incorrect traits, damage type, missing areas, incorrect rarities etc).


### Bug Fixes
* (@In3luki) Fixed status effect combat messages when mutliple GMs are in a game
* (@In3luki) Fixed pressing enter in any input field on the character or NPC sheet rolls an action or attack
* (@nikolaj-a) Changed the damage roll die modifier for powerful strike to only affect the base fist attack instead of all unarmed strikes. Previously it inadvertently reduced the die size of the various monk stances.
* (@FS) Fixed issue when editing items on tokens that are not linked to an actor - #193 (closed).


### Core System Improvements
* (@kenster421) Added automated skill bonus for Untrained Improvisation
* (@abrault) Enabled roll initiative feature on actor sheet to work with PopOut! module.
* (@overdox) Added rarity selection to feats under details. Feat sidebar now displays the traits that are selected, as well as level, rarity and action type
* (@hooking) Adding (temporary) support for Thundering weapon runes
* (@hooking) Improved the UI when editing weapon details to clearly group sections and to provide additional information.
* (@hooking) Updated custom weapons to have sensible defaults for base weapon damage.
* (@nikolaj-a) Changed the normal pool part of the damage roll to resolve to a minimum of one damage before any multipliers or divisions.
* (@putt1) NPCs can now have treasure


## Version 1.5.2
### Bug Fixes
* (@nikolaj-a) Fixed a number of bugs with the damage roll modifier system:
    * Removed damage penalty from frightened and sickened conditions that were incorrectly being applied.
    * Reduced the number of bonus damage dice from deadly trait.
* (@hooking) Fixed multiple status messages from showing in chat.


## Version 1.5.1
### Bug Fixes
* (@overdox) Quickfix for undefined spells appearing in spellbook
* (@overdox) Fixed dziriak language
* (@nikolaj-a) Allow untyped bonuses - Removed exception when trying to create an untyped bonus, as this was not really enforced anywhere in the rules.
* (@abrault) Fixed total treasure and gold price disappearing from the char sheet


## Version 1.5.0 
### New Features
* (@FS) Added a new compendium pack for Pathfinder Bestiary 2.

![alt text](https://gitlab.com/hooking/foundry-vtt---pathfinder-2e/uploads/0b4a4cf0083f93bce8f68c2b562e24b0/PZO2104.jpg "Pathfinder Bestiary 2")

* (@nikolaj-a) Added new damage and critical roll buttons for strikes in the Actions tab.
    * Basic implementation of the damage roll mechanic for strikes.
    * It supports rudimentary stacking rules for the numeric modifiers and will adjust dice for striking rune, deadly trait, fatal trait, thief version of rogue's racket, some custom modifiers, as well as most creature conditions.

![alt text](https://gitlab.com/hooking/foundry-vtt---pathfinder-2e/uploads/7b2ba2bbda6d7a1b1a27b9499d1a6d36/image.png "Updated Damage Rolls")

* (@L4D15) Adds a new type of actor specifically designed to store loot. 
    * Added support to move items between characters inventories (rather than copying).
    * Future features will be coming here for shops and an optimised UI.

![alt text](https://gitlab.com/hooking/foundry-vtt---pathfinder-2e/uploads/bf8f3d841e4d0282c7de585999cbf5ca/Annotation_2020-06-08_195934.png "Loot Actor")

### Content Changes
* (@abrault) Added Weapon Resistance for Fury Barbarian
* (@Shandyan) Corrected links Actions, Ancestry Features & Class Features compendiums entries
* (@putt1) Added new immunities, traits and resistances used in Pathfinder Bestiary 2
* (@overdox) Added all deities from Pathfinder Lost Omens: Gods & Magic
* (@overdox) Added Abadars Flawless Scale (magic item)
* (@overdox) Added the new languages; Destrachan, D'ziriak, Jistkan, Jyoti used in Pathfinder Bestiary 2
* (@overdox) Improvements to spells in the Spell compendium
    * Changing some of the structure on spells to add support for secondary checks, and secondary casters,
    * Chaning area to be input type to support for things like "1/2-mile-radius circle centered on you".
    * Adding Focus and Rituals as spell types.
    * Moved Ritual and Focus spells to their own category, together with regular spells type
    * under spell-details on like 26, I have changed traditions to point to 'spellTraditions' rather than 'magicTraditions', because things like 'bludgeoning' and 'bleed' has nothing to do with the type of tradition. The list now shows only the four correct magical traditions: Arcane, Divine, Occult, Primal.
    * Spell sidebar will now also be displaying if there are primary or secondary checks on the ritual, or if it requires secondary casters.
    * Updated spell compendium with changes to rituals, focus cantrips and 1st level focus spells.
* (@overdox) Added missing rituals: 
    * Planar Binding
    * Animate Object
    * Atone
    * Awaken Animal
    * Blight
    * Commune
    * Commune With Nature
    * Consecrate
    * Create Undead
    * Freedom
    * Imprisonment
    * Infernal Pact
    * Inveigle
    * Plant Growth
    * Primal Call
* (@hooking) Refreshed all Bestiary compendium packs to include data improvements from spells, conditions and updates to the importer.

### Bug Fixes
* (@overdox) Fixed broken image links on condition entries


### Core System Improvements
* (@In3luki) Improved status effect chat message logic to hide messages for hidden actors and to provide a configuration to disable.
* (@overdox) Added a dropdown for selecting traits on consumables 
* (@overdox) Added rarity to spells and new line for Primary Check for rituals
* (iceman) Improve wording for compendium settings.


## Version 1.4.3
### Content Changes
* (Athenos) Added a missing NPC (Ralldar). The lowercase "Bloody Blade Mercenary" has also been fixed.
* (@kenster421) Added monsters for Extinction Curse 02, 03 and 04.
* (@overdox) Added the following new items:
    * Anchor Spear
    * Azure Worm Repellent
    * Blightburn Ward
    * Bomber's Saddle
    * Crimson Worm Repellent
    * Green Gut
    * Heedless Spurs
    * Life's Last Breath
    * Purple Worm Repellent
    * Staff of the Black Desert
    * Staff of the Black Desert (Greater)
    * Spear Frog Poison
    * Yellow Musk Vial
    * Toad Tears
    * Rhoka Sword
    * Gaff
    * Shears
* (@overdox) Added the following new spells:
    * Blightburn Blast
    * Control Sand
    * Pillars of Sand
    * Terminate Bloodline
    * Undeath's Blessing
    * Ravenous Reanimation
    * Daemonic Pact
* (@overdox) Content fixes 
    * Moonlit Chain is now correctly set to low-grade silver
    * Dragonplate is now correctly set to standard-grade dragon hide
    * Crushing Despair is now named correctly #499 (closed)
    * Soothe has gained some more experience and now does the correct amount of healing #479 (closed)
    * The feats Sabotage & Poison Weapon is now correctly indicated as class feats #475 (closed)
    * Sling has been 'downgraded' to simple weapons #468 (closed)
    * Added missing feat Dragon Transformation
    * Abyssal Plague spell has had it information updated
    * The Bomber class feature is now correctly set to be a class feature, rather than a bonus feat.
    * Sorcerer bloodlines are now prefixed with 'Bloodline: name of bloodline'
* (@Shandyan) Updated errata for spells and fixed broken links

### Bug Fixes
 * (@In3luki) Fixed multiple status effect chat messages showing during combat


### Core System Improvements
* (@abrault) Added tests to treasure selling (this helps make system development more robust)
* (@putt1) Allow a character to set ethnicity, nationality and traits such as human, humanoid
* (@hooking) Updated PF2eCombatTracker to better support FVTT modules


## Version 1.4.2
* Added support for Foundry v0.6.1
## Version 1.4.1
### Bug Fixes
* (@putt1) Fixed bomb attack and damage rolls
* (@In3luki) Fixed conditions to not break when checking for external modules.
* (@nikolaj-a) Fixed a bug that broke the roll saving throw functionality on the NPC sheet.
* (@putt1) Fixed armor bulk in equipment compendium


### Core System Improvements
* (@Shandyan) Links to conditions in the Spells and Condition compendia now point to the conditions in the compendium, and so work if the conditions haven't been imported. Also, all condition links are now foundry-only, rather than some pointing to Archives of Nethys.
* (@putt1) Added immunity for "immune to fear" effects
* (@putt1 and @mdizo) Improved styling of actor sheet and dialog buttons
* (@xneoterrax) Improved styling of spellbook tab (thanks for your first contribution!!)
* (@overdox) Added item usage selector to the equipment sidebar.
* (@nikolaj-a) Changed the zero check modifiers to not be disabled.
* (@nikolaj-a) Supply a default modifier name for one off modifiers added in the roll dialog, if none is specified by the user. 
* (@hooking) Updated Equipment Browser to show an items price.


## Version 1.4.0 
### New Features
* (@In3luki) Added a setting to show the conditions of the active combatant in chat for each combat turn.
* (@In3luki) Added an API to set conditions on a token programatically or via macros
* (@putt1) Equipping a shield now sets it's values in the sidebar and allows you to udpate it's hp.
* (@nikolaj-a and @mdizo) Changed saving throw, perception and skill rolls to use the new roll dialog with options to exclude individual modifiers and add new ones.

![alt text](https://gitlab.com/hooking/foundry-vtt---pathfinder-2e/uploads/3aa0a08dd37f63b3f6db1a0500cf928d/chrome_EaKZDZhXCi.png "New Roll Dialog")


### Content Changes
* (@putt1) Renamed Adamantite to Adamantine
* (@putt1) All shields and armors now have the correct broken treshold, hp, hardness, material, grade, potency, resiliency and property runes
* (@putt1) Corrected the rune and materials settings on all weapons (except alchemical bombs).


### Bug Fixes
* (@nikolaj-a) Fixed the heading of the modifiers tooltip for initiative to say initiative and the relevant skill name, instead of just saying perception all the time. 
* (@In3luki) Fixed error in CUB installation check.


### Core System Improvements
* (@putt1) Updated bulk system to correctly add +2 bulk for hefty hauler feat and +1 bulk when the lifting belt is equipped.
* (@putt1) Added 'light' as a damage type.
* (@nikolaj-a) Changed the label for bonus HP and SP per level from shortening 'bonus' to instead shorten 'level', which should make it a little easier to understand.
* (@nikolaj-a) Localized the heading of the initiative section in the sidebar.
* (@nikolaj-a) Assigned a proper check type in the context for strikes (attack-roll) and initiative. This should help modules authors easier intercept the correct checks for further decoration.


## Version 1.3.1
### Core System Improvements
* (@mdizo) Improved styling of view modifier hover and workflow for adding custom modifiers.

## Version 1.3.0 
### New Features
* (@nikolaj-a) Added functionality to add/remove modifiers for AC, Saving Throws, Initiative, Skills and Perception in the modifiers tooltip

![alt text](https://gitlab.com/hooking/foundry-vtt---pathfinder-2e/uploads/8e2f2ba292b358e1e5a2cc98972a499a/image.png "Edit Modifier")

* (@nicolaj-a) Added an option to apply additional modifiers to a specific check before rolling the dice (only works for new roll dialog currently used for Strike actions).


### Content Changes


### Bug Fixes
* (@abrault) Limit the scope of the Tooltipster module to the new actor sheet (it was global previously)
* (@putt1) Fixed issue with focus points making them visible and clickable again
* (@nikolaj-a) Ensure that the older trait format is better supported preventing player character sheets from opening.


### Core System Improvements
* (@nilolaj-a) Changed behaviour of clicking a Strike action to only trigger the strike description expansion to only trigger when clicking the strike action name.
* (@nikolaj-a) Added Battlefield Surveyor fighter class feature to the temporary automation for initiative modifiers.
* (@nikolaj-a) Introduce a context parameter to the check roll dialog, which will allow support for fate (fortune and misfortune) effects. Provide UI for supplying a fate effect before executing the roll.


## Version 1.2.0 
### New Features
* (@putt1) Implemented a way to select all fundamental runes for weapons and armors.
    * Fixes deadly dice being doubled/trippled by attacks that have no striking rune but more than one damage die
    * Migrates attack boni of 1, 2, 3 and 4 to the potency rune equivalents

![alt text](https://gitlab.com/hooking/foundry-vtt---pathfinder-2e/uploads/83540ffac93f3d93e244ad971b3f86f8/image.png "Fundamental rune support")

* (@putt1 and @mdizo) Added an initiative selector to the side bar and automatically applies initiative circumstance bonuses for feats:
    * Incredible Initiative
    * Elven Instincts
    * Eye of Ozem
    * Harmlessly Cute

![alt text](https://gitlab.com/hooking/foundry-vtt---pathfinder-2e/uploads/7007eb7aacb44242d4bd0554e674c554/image.png "Initiative support")

* (@hooking and @nikolaj-a) Automated initiative rolls to automatically update combat tracker.
* (tushycat#5011) Bestiary art for the following creatures now included as part of the system:
    * Goblin Pyro
    * Goblin Warchanter
    * Goblin Warrior
    * Hobgoblin Archer
    * Hobgoblin Soldier
    * Invisible Stalker
    * Living Hurricane
    * Living Landslide
    * Living Whirlwind
    * Sod Hound
    * Storm Lord
    * Zephyrhawk

![alt text](https://gitlab.com/hooking/foundry-vtt---pathfinder-2e/uploads/a0809641f1497a789a7f7750da001738/image.png "Goblin Warrior")


### Content Changes
* (@overdox) Content improvements:
    * Fix for the broken icon link on Perpetual Infusions (Bomber) #461 (closed)
    * Renamed the Core Rulebook SRD compendium journal to better reflect it's content #460 (closed) The new name is now Deities.
* (@kenster421) Added Bestiary for Extinction Curse: 
    * Added Xulgath-family monsters
    * Added NPCs from EC01: The Show Must Go On
* (@putt1) Added plaguestone hazards


### Bug Fixes
* (@mdizo) Fixed the inline CSS from properly rendering images containing () in their filenames on item sheets.
* (@hooking) Fixed loading prepared spellcasting actors who have an invalid data saved into a spell slot.
* (@putt1) Fixed price for sorcerer kit

### Core System Improvements
* (@nikolaj-a) Added link to show AC modifier tooltip as the AC calculation breakdown is not visible anywhere, and it can be hard to keep track of the source of all modifiers.
* (@nikolaj-a) Added naive support for finesse on strikes, without taking into consideration conditions affecting the actor.
* (@nikolaj-a) Applied extra CSS class to check modifier roll dialog to better enable styling.
* (@nikolaj-a) Added an optional callback function parameter to the PF2Check roll and roll dialog to allow reacting to the roll result, like setting an initiative result. 
* (@nikolaj-a) Added class DC back into sidebar
* (@nikolaj-a) Improved the initiative chat message to show the skill used when players roll for initiative.
![alt text](https://gitlab.com/hooking/foundry-vtt---pathfinder-2e/uploads/a28bfcc03746f7dd5b92791e3ca87322/image.png "Initiative message now shows the skill rolled")
* (@nikolaj-a) Updated save modifiers to use armor name as resiliency item bonus label
![alt text](https://gitlab.com/hooking/foundry-vtt---pathfinder-2e/uploads/f11fed405dc55ff0ab30f3b08326d64b/image.png "Resiliency item bonus to saves")
* (@nikolaj-a) Added an expandable panel for strike action and outcome descriptions, as well as showing the strike traits.
![alt text](https://gitlab.com/hooking/foundry-vtt---pathfinder-2e/uploads/03087cab175ddacb1fa9a863788fe72d/image.png "Strike expandable panel")
* (@Noires) Changed en.json structure to be easier readable, editable and compatible with i18n editor
* (@Noires) Significantly improved the translation support for the new character sheet
* (@mdizo) Laid some basic foundations for future responsive design work.
* (@abrault) Significant improvements to the compendium browsers
    * New progress bar when compendium browser is first loading data from the compendium packs
    * New clear filters button
    * Optimised performance and refactored code to remove duplication and inefficiencies.
    * Converted to an ES6 module
* (@hooking) Removed legacy weapon damage dice selection as it has been replaced by the Striking rune feature.



## Version 1.1.0 
### New Features
* (@putt1) Added support for 'kits' in equipment system - items that can be dropped on an actor and expand into their contained parts (i.e. Adventurer's Pack and class kits). 
![alt text](img/adventurers_pack.gif "Adventurers Pack auto expands into this")
* (@putt1) Add precious materials and runes for weapons and armors.

![alt text](img/weapon_details_runes.png "Precious materials and runes")

### Content Changes
* (@overdox) Added class kits (available in the compendium) 

![alt text](img/classkits.png "Class Kits")
* (@overdox) Set the correct bulk on the belt pouch and the bandolier


### Bug Fixes
* (@nikolaj-a) Properly resolve and apply any custom weapon proficiencies for weapon strike actions (closes #452)
* (@nikolaj-a) Added a missing CSS class that prevented the correct OwnedItem id being located in the form when trying to change or delete a custom martial proficiencies (closes #441).
* (@hooking) Fixed the issue that was significantly effecting performance when adding compendium spells to actor sheet

### Core System Improvements
* (@mdizo) CSS Revisions to CRB sheet
* (@In3luki) Update migration message to show the system version instead of schema version
* (@hooking) Updated the feat browser to show the icon of the feat item rather than the generic action indicator icon.
* (@hooking) Fixed saving the scroll position for feat, skill and actions tabs when the actor sheet is rerendered.
* (@nikolaj-a) Make consumable max charges editable to make it more versatile, like being usable for infused reagents for alchemists.
* (@abrault) Added unique identifier to modifiers tooltips to prevent errors when multiple character sheets are open at once


## Version 1.0.1 "There will be bugs"
* Fixed an issue preventing chracter sheets from opening when a spell has a spellcasting entry set but it is not valid.

## Version 1.0.0 "Beta"
### New Features
* (@mdizo) A complete revamp of the actor sheet including sidebar, all tabs, hovers and headers!!! An amazing effort and a huge amount of work put in over these last few weeks!
* (@hooking) Ruined @mdizo's beautiful sidebar by ripping most of the functionality out until future releases :P
* (@meditatingCybermind) Added macros for 'rest for the night' and 'take a breather'

### Content Changes
* (@overdox) new content:
    * Added all 18th, 19th and 20th level items
    * Added 18th, 19th, and 20th level rollable tables for consumables and permanent items
    * Added missing traits to consumables and equipment
    * Expanded the bulk options all the way to 50
    * Added icons to all new equipment types
    * Added a set of 9 default icon types for {Armor, Weapon, Consumable, Equipment, Feats, Shield, Treasure, Backpack, Spell}
All level 1 trough to level 28 should now have been added to the compendium
* (@Athenos) Updated Age of Ashes Bestiary
* (tushycat#5011) Added bestiary icons to the system (these are not yet linked to bestiary actors but it is on it's way).

### Bug Fixes
* (@meditatingCybermind) fixed sheets breaking when adding spells with no spellcasting entries
* (@yeroon) Fixed the automatic behaviour of feats when importing from Compendium
* (@unindel / FS) Fixed inline roll in NPC when no number of dice specified (i.e. [[d6+4]] instead of [[1d6+4]]
* (@unindel / FS) Fixed #427 by only preparing spellbook of spellLvl for wands, scrolls, rituals and focus 'traditions'
* (@putt1) improvements to equipment containers
* (@meditatingCybermind) Fixed treat wounds macro

### Core System Improvements
* (@yeroon) Removed the title from conditions in the Token HUD, as there already is a tooltip on the top of the HUD.
* (@unindel / FS) Add elite weak modifier buttons to read only npc sheet
* (@unindel) / FS) Display other spell levels for editable NPC sheet and PC sheet to improve empty spell slot scenarios
* (@putt1) Rarity, level and equipped for all physical items
* (@putt1) Add immunities
* (@In3luki) Trait selector improvements
* (@nikolaj-a) Improve strikes with some UI refinements


## Version 0.581.0
### New Features
*  (@fryguy1013) Added Hazards as a new type of actor similar to NPCs. Includes a Hazard compendium with the SRD hazard content
*  (@abrault) Added an easy button to convert treasure into coins
*  (@nikolaj-a) Improved Strike Actions (still experimental)
    * Add weapon icons to the strikes
    * Adjusted the font size of the action icons to better fit.
    * Enable conditions to more correctly affect the attack rolls.
    * Replaced the roll dialog with a more customized version that allows modifiers to be excluded for that check.

### Content Changes
*  (@overdox) Content improvements:
    * Added all 15th level consumables and permanent items
    * Added rollable tables for 15th level consumables and permanent items
    * Added new icons
    * Corrected the wrong quantity on bags #407
    * Added Bomber, Chirurgeon, Mutagenist specific class features #389 (closed)
    * Added snares as consumable type
    * Changed all snares to be consumables of type 'snare'
    * Updated bags of devouring/holding to be extradimensional
    * Changed bags to the correct bulk values.
    * Replaced the default feat icon
    * Added all 16th and 17th level items
    * Added 16 and 17th level rollable tables for consumables and permanent items
    * Added Weight of Guilt Champion feat
    * Corrected White and Silver Dragon's Breath Potion have the wrong damage type #415 (closed)
    * Added correct dice to be rolled for all Dragon Breath potions

### Bug Fixes
*  (@abrault) Fixed Character sheet issues when faced with undefined values
*  (@putt1) Container fixes:
    * Display bulk status and reduction for each container
    * You shouldn't be able to drop spells into containers
    * Items should be able to be dropped inside the container list of a container
    * Container opened state should be persisted
    * Sorting items inside a container should work (but only works for items of the same type (weapon, armor, ...) due to how sorting is implemented in foundry. Not sure if we want to override that.)
    * Fixed an issue with recursive containers
*  (@In3luki) Spellbook fixes:
    * Fixed spellbook drag & drop outside of spellcastingEntry. Closes #411 (closed)
    * Fixed spellcasting ability modifier not getting updated correctly. Closes #412 (closed)
    * Removed UI message about spell actor data migration of orphaned spells as it seems to work without reopening the sheet.
    * Fixed deleting a spellcastingEntry not deleting all contained spells.
*  (@In3luki) Upated getWhisperIDs to getWhisperRecipients.
*  (@hooking) Updated Bestiary Browser to only process actors of type 'npc'.
*  (FS) Fixed weak and elite adjustments with inline dice rolls.
*  (@nikolaj-a) Fixed the new CRB sheet from inadvertantly wiping character data (it should be safe to preview now).
*  (@yeroon) Fixed the automatic behaviour of feats like Diehard, Toughness and Mountain's Stoutness when importing from the Compendium or when changing icon/description. (issue #417 (closed) and #387 (closed))

### Core System Improvements
*  (@putt1) Trait/Item improvements:
    * Enabled traits to be added to equipment
    * Enabled backpacks to have a level configured
    * Enabled traits to be added to consumables
    * Added additional equipment and poison traits
    * Added traits for armor items
    * Added bulk and treasure rules for gems
*  (@In3luki) Added confirmation dialog for actor item deletion
*  (@abrault) Add a Feat Type filter to the Feat Browser
*  (FS) Fixed spell heightening for prepared spell casters in the Pathfinder Bestiary and Age of Ashes Bestiary.

## Version 0.579.0
### New Features
*  (@putt1) Added support for Foundry v1.0 (v0.6.0).
*  (@putt1) Added initial support for containers in your inventory such as backpacks and belt pouches. Bulk rules are applied correctly to items stowed in these containers.

### Content Changes


### Bug Fixes
*  (@putt1) Increased width of compendium browsers to remove ugly wrapping.
*  (@abrault) Restore highlight of natural 20s and 1s

### Core System Improvements
*  (@fryguy1013) Add critical button to NPC sheet in the editor view as well as the non-editor view.
*  (@nikolaj-a) Do not auto-delete inventory items when reduced to zero quantity. This should make live easier for characters that rely heavily on consumable items.
*  (FS) Added inline rolls to Bestiary actions (such as dragons breath).


---

## Version 0.578.0
### New Features
*  (@putt1) Implement function to add to existing coins or create new ones from the compendium
*  (@nikolaj-a) Added (Experimental) Strikes section to the action tab. This section Automatically creates Strike actions for each weapon and unarmed including the PF2Modifiers rules.

### Content Changes
*  (Athenos) All compendium entries for the Age of Ashes bestiary is now complete (Book 1-6)
*  (@overdox) New Content:
    * Added all treasure types with icons to the equipment compendium
    * Updated rollable tables to link to the newly added treaure items
    * Added all 14th level consumables and permanent items
    * Added 14th level rollable tables for consumables and permanent items
    * Starting to add the npcs' from the npc gallery in the gamemastery guide (Advisor, Bandit, Grave Robber, Noble, Palace Guard and Spy has been added so far)
*  (@overdox) Bug Fixes:
    * Corrected the wrong spell levels for some focus spells #378 (closed)
    * Corrected animal form spell level #377 (closed)
    * Added the missing feat 'Confabulator' #376 (closed)
*  (@overdox) Cleaned up the alchemical icon categories and removed the duplicates
*  (@hooking) Updated Iconics compendium to use new treasure system for coins

### Bug Fixes
*  (@putt1) Correctly apply worn bulk for armors, backpacks; correctly apply stack groups for ammunition; non coin treasure does not stack with coins anymore
*  (@yjeroen) Setting initiative via a skill roll in chat is now a whisper to the GM. This also prevents NPC rolls set to initiative to be seen by players.
*  (@hooking) Fixed line and square template highlighting for measurement templates.
*  (@mdizo) SCSS Fix and Updated Hover Icons

### Core System Improvements
*  (@yjeroen) Only show the SetInitiative button for d20 roll messages in the chat for the GM, or if it's your own roll.
*  (@putt1) Adjust progress bar to account for 9 light bulk, that are rounded down to 0 bulk

---


## Version 0.577.0
### New Features
*  Added support for Pathfinder style measurement templates. Huge thanks to Furysparks and the Pathfinder 1e system for allowing us to use thier implementation of this!
*  (@putt1) Added treasure as a new item type and migrated characters coins to treasure items in thier inventory. The currency section of the inventory is now just a summary of the characters treasure.
*  Added support for critical damage rolls as per RAW in the CRB. Doubling the number of dice rather than the damage is still an option that can be selected in the system settings.

### Content Changes
*  (Athenos) Added compendium for Age of Ashes with books 3 (now has book 3 through to 6 included).
*  (Athenos) Fixed languages and rarity traits for AoA compendium entries.
*  (@overdox) New Content:
    * Added treasure icons for all gems types and coins, and minor, lesser, moderate, greater and major art objects
    * Added all 13th level items
    * Added 13th level rollable tables for consumable items
    * Added 13th level rollable tables for permanent items
    * Added new icons

### Bug Fixes
*  Removed CRB sheet UI preview as it could potentially destroy an actors data in the current WIP state.
*  (@overdox) Corrected the missing heightened information on some spells #380 (closed)
*  (@overdox) Updated weapons total number of dice to reflect the striking rune, so it should now work with the new critical effect implementation
*  (@TheCraiggers) Fixed the description for the artic elf in the Class Features compendium

### Core System Improvements
*  (@SvenWerlen) Sort traits based on values rather than keys in the trait selector (better support for non-english languages)
*  (@hooking) Added item level column to the inventory browser (closes #371 (closed))
*  (@hooking) Added logic to apply a sort filter on bestiary entries based on thier source book in the bestiary browser.

---

## Version 0.576.0
### New Features
*  (@meditatingCybermind) Added a system configuration setting to factor in bulk for coins (or not).
*  (@meditatingCybermind) Added the first system macro "Treat Wounds" which automates the treat wound check and healing result.
*  (@nikolaj-a) Added initial support for Class DC to use the PF2Modifier system.
*  (@nikolaj-a) Added initial support for custom PF2Modifiers - Provide methods for adding and removing custom modifiers that will properly hook into the modifier stacking rules. 
### Content Changes
*  (Athenos) Added compendium for Age of Ashes with books 4 through to 6 included.
*  (@hooking) Moved the Age of Ashes bestiary entries out of the core bestiary as they are now included in a dedicated compendium.
*  (@hooking) Added migration code for item images.
*  (@overdox) New Content:
    * Added all currently available 7th, 8th, 9th, 10th, 11th and 12th level items
    * Added signature spells class feature for sorcerer, as it was missing.
    * Added rollable tables for 7th, 8th, 9th, 10th, 11th and 12th level consumables
    * Added rollable tables for 7th, 8th, 9th, 10th, 11th and 12th level permanent items
    * GMG Rollable Tables added
    * Added Deities, Faiths and Philosophies from CRB
    * Added Deities, Faiths and Philosophies rollable tables
    * Added the missing 'Take a Breather' action #338 (closed)
    * Fast Recovery feat is now added #298 (closed)
*  (@overdox) Content Fixes:
    * Fixed alchemical bombs as they lost the changes in the last merger
    * Fixed roll formula for elixir of life #342 (closed)
    * Updated Class features with same names to include what class it belongs to
    * Rogues rackets have now been renamed to reflect what they are, ie Thief is now named 'Thief Racket' #336 (closed)
    * Fixed new icons for signature spells for bard and sorcerer
    * Fixed potions to have Light bulk rather than Negliable #360 (closed)
    * Removed spacing in the filename of the Phylactery of the Faithfull icon
    * The rollable table '10th-Level Permanent Items' was set to 1d42, and have now been set to the correct value of 1d43
    * Changed Explorer's Clothes to armor type, it was incorrectly set as Item in the compendium #327 (closed)
    * Pest Form is now correctly set to level 1 #364 (closed)
    * Adaptive Ablation now has the correct level #322 (closed)
*  (@overdox) Content Restructure:
    * Added Core Rulebook journal compendium 'crb-srd.db'
    * Added Gamemastery Guide journal compendium 'gmg-srd.db'
    * Added criticaldecks.db
    * Merged critical decks into criticaldecks.db
    * Removed critical-hit-decks.db and critical-fumble-decks.db
    * Moved Deck of many things into 'gmg-srd.db'
    * Restructured deep backgrounds from gmg
    * Deep backgrounds moved into 'gmg-srd.db'
    * Deep backgrounds rollable tables (Homeland,Influential Associate, Inspiring Relationship, Major Childhood Event) are now functioning as intended
*  (@overdox) Icon Changes:
    * Cleaned up folders to remove all spaces in the file-paths to the icons
    * Added or replaced several icons
*  (@hooking) Added migration code for item images.
*  (@In3luki) Updated item image migration code to include NPCs.
*  (@dandi_andy) Added the Weight of Guilt [champion feat]
### Bug Fixes
*  (@nikolaj-a) Fix the issue where equipping a shield will only include base AC and bonus from the shield. Equipping a shield should now no longer remove the item bonus from other armor and not break ability and proficiency modifiers from applying correctly.
*  (Brault) Fixed the pf2e system implementation distance measure function to correctly measure 5-10-5 distances to match the fix introduced in Foundry 0.5.6.
*  (@meditatingCybermind) Fixed a console error flooding issue in Foundry 0.5.7.
*  (@yjeroen) Bug fixes:
    * Fixed bug introduced by Foundry v0.5.7 which had broken status effects.
    * Bugfix Recovery Check evaluated against DC10 instead of the actual Recovery DC (issue#325)
    * Increased the font weight of the recovery check message to accommodate the new chat font
### Core System Improvements
*  (@meditatingCybermind) Cleaned up the shield and hp logic to be more succinct and have less repetition -- also fixed the issue where shields ignored SP.
*  (@putt1) Implemented system for bulk arithmetic handling (including the handling of currency, stacks and containers).
*  (@dandi_andy) Fixed consumables being correctly removed when the last charge is expended.
*  (@nikolaj-a) Implement de-duplication of modifiers to prevent the same modifier from showing up multiple times in a modifier breakdown. Changed the modifier keys to allow more flexible targetting of modifiers to specific stats.


## Version 0.574.0
*  (@nikolaj-a) Add several classes for implementing the modifier stacking rules.
*  (@Shandyan) Updated bestiary to include fixes for all monsters up to level 25 (well done!!)
*  (@overdox) Compendium update to add GMG and CRB equipment and icons; restructured and removed unused icons. Added support for new bulk types and unique trait
*  (@nikolaj-a) Add initial support for condition modifiers. This will currently only affect saving throws, and no transitive conditions are applied
*  (@In3luki) Change dwarvish to dwarven
*  (@nikolaj-a)Add support for the already existing perception modifiers as PF2Modifier, as well as prepare integration with the conditions modifiers.
*  (@acrowthe) Updated bomb compendium entries
*  (@mdizo) Implemented new HTML UI (prettierc)
*  (@putt1) Bulk for worn and carried items is now supported, ammunition and rations calculate the correct bulk, encumbrance limit is now shown; extradimensional traits for containers supported
*  (@In3luki) Data migration ported from the D&D system 
*  (luke#4754) Fixed support for older characters with no associated list of status effects
*  (@meditatingCybermind) Initial support for wands
*  (@nikolaj-a) Initial support fot skill modifiers
*  (@dandiandy) Aura of courage [champion feat] added to feat database
*  (@overdox#9174) Added all level 1 to 3 items and icons from all source books, added rollable table for level 1 to 3 consumables and permanent items
*  (@overdox#9174) Added all level 5 items and icons from all source books, added rollable table for level 5 consumables and permanent items
*  (@putt1) Plaguestone: use name as is under CUP, add roll tables
*  (@nikolaj-a) Initial support for AC modifiers
*  (@putt1) Updated equipment compendium for bulk changes
*  (@putt1) Fixed migration code for compendiums
*  (@Tmun) Updated Iconics compendium to include level 3 and 5 pregens
*  (@hooking) Fixed a bug where a spell slot would disappear if the linked spell was deleted.
*  (@putt1) Fixed an issue with dist folder in gitignore
*  Updated bestiary
*  (@unindel)Fixed chat data for NPC sheet so that non-prepared spells show traits, DC and attack roll buttons properly - Bug #69
*  (@putt1) Updated Plaguestone languages
---

## Version 0.571.0
*  v0.571.0: (acrowthe) Implemented status bonus modifier on roll-dialogs
*  v0.571.0: (acrowthe) Added and implemented an item bonus modifier on roll-dialogs
*  v0.571.0: (acrowthe) Fixed roll labels for roll-dialogs
*  v0.571.0: Updated bestiary to fix languages and added rarity information to all NPCs
*  v0.571.0: (nikolaj-a) Add several traits relevant to alchemical bombs, as well as descriptions for any relevant trait that does not already have one. This is in preparation for a more complete gear compendium of alchemical bombs.
*  v0.571.0: (nikolaj-a) Fixed an error when expanding custom armor in inventory tab to show description.
*  v0.571.0: (nikolaj-a) Display selected weapon traits in item sheet details tab. Previously the wrong field was used, which yielded an empty list. This forced people to open the trait selector to see which traits are selected.
*  v0.571.0: (mdizo#0928) Prepared CSS and project for upcoming UI redesign
*  v0.571.0: (Luki#1571) Added language selector to NPC sheet.
*  v0.571.0: (Luki#1571) Added actor data migration for existing npcs.
*  v0.571.0: (Luki#1571) Fixed traits on NPC sheet not using translated strings.
*  v0.571.0: (Luki#1571) Bandaid fix for blocked PC languages.
*  v0.571.0: (Luki#1571) Added regional languages.
*  v0.571.0: (Luki#1571) Added additional languages.
*  v0.571.0: (putty#0555) Fixed the projects gitignore file (thanks!)
*  v0.571.0: (putty#0555) Updated NPCs to now have a rarity attribute which is reflected in the read-only sheet
*  v0.571.0: (putty#0555) Added a bunch of missing traits, fixed rarity traits and magical schools
*  v0.571.0: (putty#0555) Added bestiary entries for Fall of Plaguestone
---


## Prior Patch Changes:
*  v0.569.2: Reverted change to item bonuses (Sorry @acrowthe but we need a bit more work here before it is ready to be merged in)
*  v0.569.1: (mdizo#0928) Fixed issue with fonts path causing formating issues.
*  v0.569.1: (nikolaj-a) Added plus and minus buttons for adjusting item quantity from the inventory tab in the character sheet. Items adjusted to zero quantity are removed.
*  v0.569.0: (luke#4754) Tidied up a bunch of items (especially alchemical thingies - some lacked proper descriptions, some probably still are) and removed ugly borders around action icons.
*  v0.569.0: (Arshea#4444) Also made alchemical crossbow into a weapon instead of a consumable
*  v0.569.0: (mdizo#0928) Laid the foundation for the future CSS overhaul
*  v0.569.0: (mdizo#0928) Enabled souremaps in Gulp and edited the system.json to point to the legacy pf2e.scss file.
*  v0.569.0: (mdizo#0928) Fixed an extra comma in NPC movement speeds on readonly sheet
Add extra character sheet implementation that extends the existing, but overrides the template. Add a new template file structure in a subfolder to allow for additional designs in the future.
*  v0.569.0: (nikolaj-a) Add extra character sheet implementation that extends the existing, but overrides the template. Add a new template file structure in a subfolder to allow for additional designs in the future.
*  v0.565.0: (Shandyan#5980) Fixed bestiary entries for the following level 11 creatures: (Black dragon, Deadly mantis, Elemental avalanche, Elemental hurricane, Elemental tsunami, Goliath spider, Stone golem)
*  v0.565.0: (Shandyan#5980) Fixed bestiary entries for the following level 12 creatures: (Adult copper, Deculi, Gimmerling, Gogiteth, Great cyclops, Kolyarut, Lich, Rusalka, Sea serpent)
*  v0.565.0: (Shandyan#5980) Fixed bestiary entries for the following level 13 creatures: (Adult bronze, Magma dragon, Dalos, Dragonscarred dead, Dryad queen, Gashadakoru, Ghaele, Glabrezu, Iron golem, Purple worm)
*  v0.565.0: (Shandyan#5980) Fixed bestiary entries for the following level 14 creatures: (Astral deva, Crag linnorm, Grikkitog, Uthul)
*  v0.569.0: Added Bestiary 0.569.0 compendium
*  v0.569.0: (TMun) Added level 1 Iconics pregenerated characters
*  v0.569.0: Added Iconics compendium and associated art
*  v0.569.0: (acrowthe) Added the first step of allowing item bonuses to be modified during a roll (this is currenly not functioning fully yet)
*  v0.569.0: Enabled quantity for Equipment items to be editable
*  v0.569.0: added energy types for weapon damage types
*  v0.569.0: (overdox#9174) added Blood Feast, Entrancing Eyes, Necrotic Radiation spells and Statuette ritual from Pathfinder #154 (closed): Siege of the Dinosaurs
*  v0.569.0: (overdox#9174) added custom icons for Blood Feast, Entrancing Eyes, Necrotic Radiation spells and Statuette ritual.
*  v0.569.0: (overdox#9174) added new custom icon for the whip
*  v0.568.3: (mdizo#0928) Fixed issue with chatlog not scrolling.
*  v0.568.2: (putty#0555) Fixed issue with NPC sheets not opening.
*  v0.568.0: (Arshea#4444) We are now able to add in a separate field for bonus bulk. This is useful for feats like hefty hauler, or for handwaving bulk limit changes/increases from backpacks (see errata) and bags of holding.
*  v0.568.0: (Arshea#4444) Implements #79 (closed) and bandaids #301 (leaving in todo).
*  v0.568.0: (putty#0555) Implemented classDC as a dedicated attribute on the main character sheet.
*  v0.568.0: (Athenos#1514) Added bestiary entries for Age of Ashes book 4 (AdultMagmaDragon, AncientMagmaDragon, CarnivorousCrystal, Dalos, Deculi, Devourer, DragonscarredDead, Forge-Spurned, Gashadokuro, IlssrahEmbermead, KeldaHalrig, Soulbound Ruin, Veshumirix, YoungMagmaDragon)
*  v0.567.1: (yeroon#2590) Fix for Spellbook.
*  v0.567.0: (yeroon#2590) Update Focus Point tracker to have the same amount of icons as the Focus Pool size. (issue#226)
*  v0.567.0: (yeroon#2590) Updated the name of "unprepared spells" to "Arcane Spellbook" for arcane prepared casters, and "Preparation Shortlist" for all others. (issue#277)
*  v0.567.0: (yeroon#2590) Changed: Dying widget to not be automated with Wounded value (as interaction with Wounded is only on taking damage).
*  v0.567.0: (yeroon#2590) Bugfix: If you have the Diehard feat, not only the the Dying widget is updated, but the Wounded widget as well.
*  v0.567.0: (mdizo#0928) Fixed margin-top for the first chatmessage (which was a workaround for status effect tooltip on the first chatmessage), by changing the chat-log messages to be displayed bottom up. (issue#292)
*  v0.567.0: (Trey) Fixed auto-heightening of focus spells.
*  v0.567.0: (Trey) Save scroll position for parts of the Actor.
*  v0.566.0: Updated the title of NPC damage rolls to help show the damage types for each of the roll parts.
*  v0.566.0: Added the ability to edit attack effects on NPC attacks.
*  v0.566.0: Updated bestiary and added migration logic to update NPC attacks to the new data model required for editing attack effects.
*  v0.566.0: (yeroon#2590) NPC's now have an Initiative roll of +0.9 if rolled from CombatTracker, as they always go first in PF2e CRB Rules. (issue#284)
*  v0.566.0: (yeroon#2590) If you roll Initiative from the Combat Tracker, and you do not have an Initiative Bonus, it will no longer be displayed at all instead of "+ 0" in the chatlog.
*  v0.566.0: (yeroon#2590) Bugfix: Elite/Weak adjustment didn't work for some NPCs (issue#290)
*  v0.566.0: (yeroon#2590) Updated the Hero Point icon, as the star icon were confusing some users due to stars also used in differently behaving webwidgets.
*  v0.566.0: (yeroon#2590) Updated the dying, wounded and doomed titles on the charactersheet to explain their effects according the PF2e Core Rulebook.
*  v0.565.0: Added a critical damage button for NPC attacks (get this with the 3d dice module!)
*  v0.565.0: Added bestiary v0.565.0
*  v0.565.0: (Shandyan#5980) Fixed bestiary entries for the following level 4 creatures: (Griffon)
*  v0.565.0: (Shandyan#5980) Fixed bestiary entries for the following level 8 creatures: (Bida, Desert Drake, Erinys, Flesh golem, Giant anaconda, Giant ocotopus, Kishi, Lamia matriarch, Triceratops, Young copper dragon)
*  v0.565.0: (Shandyan#5980) Fixed bestiary entries for the following level 9 creatures: (Alchemical golem, Deinosuchus, Drakauthix, Efreeti, Megalodon, Mummy pharoah, Night hag, Roc, Stone mauler, Storm lord, Tidal master, Vampire mastermind)
*  v0.565.0: (Shandyan#5980) Fixed bestiary entries for the following level 10 creatures: (Brontosaurus, Clay golem, Dezullon, Ghost mage, Giant flytrap, Graveknight, Nilith, Ofalth, Shield archon, Tyrannosaurus)
*  v0.564.0: Added unit tests for `lang/en.json`
*  v0.564.0: (yeroon#2590) Bugfix: Users couldnt see the full text from a damage button on the NPC character sheet.
*  v0.564.0: (overdox#9174) phantom-steed icon was missing, re-added
*  v0.564.0: (overdox#9174) found couple more formatting errors, fixed
*  v0.564.0: Fixed two-handed toggle not causing the actor sheet to render (making it appear like nothing happened)
*  v0.564.0: Fixed issue #169 - Custom NPC spell DC and attack changes not being persisted to the actor and being reset to 0 upon reload.
*  v0.562.0: (yeroon#2590) Feature enhancement: Automated the Toughness and Mountain's Stoutness feats (Diehard was already automated).
*  v0.562.0: (yeroon#2590) Feature enhancement: Automated feats now have an UI info message when applied and removed.
*  v0.562.0: (yeroon#2590) Feature Enhancement: Rolling Initative in the Combat Tracker now shows a decimal (.0 default), which can be edited in the Combat Tracker when the players choose their own order.
*  v0.562.0: (yeroon#2590) Changed chat damage icons, with thanks to feedback Nerull#6333
*  v0.562.0: (yeroon#2590) Show the CUB incompatibility notification message only when you have the "Enhanced Conditions" setting of that module enabled.
*  v0.562.0: (yeroon#2590) Bugfix: Applying damage to multiple tokens works again.
*  v0.562.0: (yeroon#2590) Bugfix: Fixed Default Prototype Token settings due to a change within FoundryVTT.
*  v0.562.0: (yeroon#2590) Bugfix: Added localization to the Character Sheet recovery roll chat message.
*  v0.562.0: (yeroon#2590) Added gulp watching to changes in the language json file(s)
*  v0.562.0: (yeroon#2590) Feature enhancement: If you hold SHIFT while applying damage/healing from chat, you can modify the damage/healing result, applied after halving or doubling.
*  v0.562.0: (yeroon#2590) Updated some strings in applyDamage chat message to be translatable.
*  v0.562.0: (yeroon#2590) New Feature: You can now add an Elite or Weak adjustment to an NPC.
*  v0.562.0: (yeroon#2590) Feature enhancement: Armor Equip toggle button on the Inventory tab of the Character Sheet.
*  v0.562.0: (yeroon#2590) Bugfix: Bugfix: Condition tooltips couldn't be read if it was the first message in the chat window. Solved via adding whitespace margin ontop of the first message in the chat.
*  v0.562.0: (yeroon#2590) Renamed Martial Skills to Martial Proficiency for consistency with the CRB. (issues/254)
*  v0.562.0: (yeroon#2590) Bugfix: Fixed the layout of Immunities/Resistances on the readonly NPC sheet.
*  v0.562.0: (yeroon#2590) Improved Prepared Spelllist on the character sheet. Updated the icon and styling. The unprepared spell repertoire will now also auto-expand when you add a new spell.
*  v0.562.0: (yeroon#2590) Bugfix: AC and max HP fields are now readonly, as they are autocalculated. Updated related translation strings.
*  v0.562.0: (yeroon#2590) Bugfix: Conditions are now working again if your pf2e translation file doesn't include the latest translations.
*  v0.562.0: (yeroon#2590) Set-up the structure to modify the Combat Tracker later (PF2eCombatTracker)
*  v0.563.0: (overdox#9174) Language, Actions, Feats, Spells and Backgrounds from Age of Ashes
*  v0.563.0: (overdox#9174) Language, Actions, Feats, Spells and Backgrounds Extinction Curse
*  v0.563.0: (overdox#9174) Missing spells from Gods and magic
*  v0.563.0: (overdox#9174) Feats from Gamemastery Guide
*  v0.563.0: (overdox#9174) Updated some icons
*  v0.563.0: (overdox#9174) Fixed formatting errors on spells.
*  v0.563.0: (yeroon#2590) Bugfix: Elite/weak now increases/decreases a creatures level
*  v0.563.0: (yeroon#2590) Bugfix: Spell damage is now increased/decreased for Elite/Weak creatures. (Spell description is not updated)
*  v0.563.0: (yeroon#2590) Bugfix: Fixed adjustment of HP when adding or removing Elite/Weak.
*  v0.561.0: (Trey) Configured eslint to run against jest tests (backend automation improvements)
*  v0.561.0: (Trey) Refactored Spell system to account for Spell Heightening
*  v0.561.0: (Trey) Added support for Spell Heightening +2/+3/+4 (prepared only)
*  v0.561.0: (Trey) Configured automated testing of spells to use the spell compendium
*  v0.561.0: (Arshea#4444) Fixed stamina point calculation errors
*  v0.561.0: (Arshea#4444) Refactored HP autocalculation 
*  v0.561.0: Fixed migration code
*  v0.561.0: (TheCraiggers) Fixed leather armor auto-equiping from the equipment compendium
*  v0.559.0: Added the ability to modify NPC attack damage rolls 
*  v0.559.0: Consolidated all NPC attacks to use the new damage rolls method
*  v0.559.0: Cleaned up a lot of duplicate/redundant code
*  v0.559.0: Separated NPC attack and damage rolls from weapon attack and damage rolls
*  v0.558.0: (yeroon#2590) New feature: PF2e conditions as status effects. You can now select PF2e conditions in the token Status Effect HUD. Left click to add, right click to remove. Shift click stays a toggle to add an overlay icon. Conditions that can have values can be clicked multiple times. Once you exit the HUD, all the current PF2e conditions will be output to the chat. The status effects are also now linked to the Actor, and will be shown on all Scenes if that Actor has tokens on other scenes as well. In the System Settings you can choose between multiple icon sets. (Note: if the community has other free to use sets, we can easily add these.) You can also disable showing the default FoundryVTT status effects in the System Settings. (PS. This system is planned to be expanded upon in the future to include (de)buffs and other status effects linked to Actions and Feats.)
*  v0.558.0: (yeroon#2590) Updated condition icon folders.
*  v0.558.0: (yeroon#2590) Fix shield applyDamage button in chat to show as a toggle.
*  v0.557.0: (nikolaj-a) Added an english translation for the PF2E.TraitFire.
*  v0.557.0: (Arshea#4444) NPC sheets now report the full damage a strike will do
*  v0.557.0: (Luki#1571) Resolved issue #243 - "Exceptions to resistances not appearing with 'except'"
*  v0.557.0: (overdox#9174) added images to all the remaining spells.
*  v0.557.0: (overdox#9174) Every current spell in the compendium should now have a icon.
*  v0.557.0: (overdox#9174) removed a redundant spell
*  v0.557.0: (overdox#9174) fixed some formatting errors on some spells.
*  v0.556.0: (Luki#1571) Updated actor migration logic so it only applies the appropriate migration when a migration is performed.
*  v0.556.0: (nikolaj-a) Fixed skill display in read-only character sheet to not be reliant on the presence of a lore skill.
*  v0.556.0: (lordxuqra) New feature: Auto-calculate HP. See the Character tab for how to configure this.
*  v0.556.0: (Arshea#4444) Updated contributing documentation
*  v0.556.0: (Shandyan#5980) Fixed bestiary entries for the following level 6 creatures (Annis hag, Choral, Ettin, Hydra, Jungle drake, Vampire count, Young white dragon)
*  v0.556.0: (Shandyan#5980) Fixed bestiary entries for the following level 7 creatures (Chuul, Frost drake, Greater barghest, Legion archon)
*  v0.556.0: (Shandyan#5980) Fixed missing on-hit effects for bestiary entries level 3-7
*  v0.556.0: (nikolaj-a) Fixed issue with bestiary save details only applying to fort saving rolls.
*  v0.556.0: Removed all bestiary art as it did not comply with the Paizo Community Use Policy
*  v0.555.0: (Trey) Extracted classes for objects.
*  v0.555.0: (Trey) Added initial tests and created CI process with Jest.
*  v0.555.0: (Trey) Added support for updating input fields with other methods other than focusout.
*  v0.555.0: (Trey) Moved the projects folders containing code into ./src rather than ./dist and configured gulp to build/compile appropraitely.
*  v0.555.0: (overdox#9174) Updated spell icons and fixed formatting and incorrect information for a bunch of spells.
*  v0.554.0: (Arshea#4444) Initial implementation of Stamina variant rules for pf2e.
*  v0.554.0: (Arshea#4444) - Variant rule enabled by world configs
*  v0.554.0: (Arshea#4444) - Stamina appears on sheets and is used when applying damage
*  v0.554.0: (Arshea#4444) - New key ability score selector on the character traits section that does nothing (it's a trick to help us for later)
*  v0.554.0: (Arshea#4444) - Space for resolve points to be tracked
*  v0.554.0: (Arshea#4444) Fixed automated calculate of AC based on equiped armor (was returning wrong values).
*  v0.553.1: Fixed issue with equiped shields and invalid armorTypes breaking character sheets.
*  v0.553.0: (Trey) Converted actor sheets to ES6 modules
*  v0.553.0: Fixed an issue with onItemSummary for NPC item items.
*  v0.553.0: (Luki#1571) Split off resistanceTypes from damageTypes.
*  v0.553.0: (Luki#1571) Added 'All' and 'Physical' to resistanceTypes.
*  v0.553.0: (Luki#1571) Added immunities: Healing, Necromancy, Nonlethal Damage, Disease
*  v0.553.0: (overdox#9174) Changed the deck of many things to be a rollable table only
*  v0.553.0: (overdox#9174) instead of relaying on the journalEntries.
*  v0.553.0: (overdox#9174) Added Heightened (+4) as a option for spell scaling.
*  v0.553.0: (overdox#9174) Added icons to several more spells that were missing them.
*  v0.553.0: (Adrys#9132) Add 2 Weakness Types and 1 Immunity type, and fix details header on npc sheet.
*  v0.552.0: (Shandyan#5980) Corrected bestiary entries for the following level 5 creatures: (Aasimar Redeemer, Cyclops, Dero magister, flame drake, Living waterfall, Living whirlwind, Poltergeist, Redcap, Troll, Winter wolf)
*  v0.552.0: Updated bestiary to v0.552.0 including fixes to resistances and weaknesses to bring NPCs in line with the new system for characters.
*  v0.552.0: Fixed a bug with immunities causing actor sheets to not load correctly
*  v0.551.0: (Trey) Cleaned up the code for the actor sheet and making it significantly easier to look at.
*  v0.551.0: (yeroon#2590) Added structure for static content that can be accessed via PF2E.DB that always need to be loaded (in contrary to things like spells that are loaded into a world from a compendium on a need basis).
*  v0.551.0: (yeroon#2590) Added condition translation strings in the new style.
*  v0.551.0: (Luki#1571) Added resistance and immunities on the actor-sheet.
*  v0.551.0: (Luki#1571) Added resistance, immunities and weaknesses on the npc-sheet.
*  v0.551.0: (Luki#1571) Expanded the trait-selector to support text inputs.
*  v0.551.0: Updated read-only character sheet to correctly show resistances and immunities
*  v0.551.0: (Arshea#4444) Updated PC actors to automate calculate AC based on equiped armor.
*  v0.551.0: (overdox#9174) added critical hit and critical fumble decks with rollable tables
*  v0.551.0: (overdox#9174) added rod of wonder rollable table
*  v0.551.0: (overdox#9174) added human male and female names table
*  v0.551.0: (overdox#9174) added dwarf male and female names table
*  v0.550.0: (yeroon#2590) Reworked click events in character sheet so all "Stat Levels" like Proviciency/Hero Points work so they don't cycle. Left click increases the level point, and Right clicking decreases it.
*  v0.550.0: (yeroon#2590) Added Focus Points tracking to Focus Spells
*  v0.550.0: (yeroon#2590) The shield button in a damage roll chat is now a toggle, so you can apply half/full/double damage also with Shield Block. Also the chat confirmation message now mentions that damage is also applied to the shield.
*  v0.550.0: (yeroon#2590) Now you can roll Recovery Checks by clicking on "Dying" on your Character sheet.
*  v0.550.0: (yeroon#2590) If you have Default Prototype Token Settings enabled, now the token image will automatically be set to the Actors image if you update the Actor image while the Token's is still the Mystery Man.
*  v0.550.0: (yeroon#2590) Fixed console error when deleting certain items like Spellbooks or Lore skills.
*  v0.549.0: (overdox#9174) moved deck of many things to its own journal rather than having it as separate cards
*  v0.549.0: (overdox#9174) a single 'deck of many things' can now be found in equipment
*  v0.549.0: (overdox#9174) added backgrounds journal entry
*  v0.549.0: (overdox#9174) updated rollable tables with the new deck of many things change.
*  v0.549.0: (overdox#9174) new icons for some weapons
*  v0.549.0: (overdox#9174) fixed weapons not opening, throwing errors in console about traits
*  v0.549.0: (overdox#9174) new weapons (Mambele, Meteor Hammer, Scorpion Whip)
*  v0.549.0: (overdox#9174) New consumable items (Unholy water, Runestone, Feather Token (Bird), Feather Token (Chest), Feather Token (Fan), Feather Token (Holy Bush), Feather Token (Ladder), Feather Token (Swan Boat), Feather Token (Tree), Feather Token (Whip), Dagger of Eternal Sleep, Extended Deteriorating Dust, Caustic Deteriorating Dust, Candle of Truth, Javelin of Lightning, Dust of Disappearance, Elemental Gem)
*  v0.549.0: (overdox#9174) added the new Shoony ancestry features, from the adventure path 'Life's Long Shadow'
*  v0.549.0: (overdox#9174) removed unused icons to reduce overall size
*  v0.548.0: (Trey) Added compatibility for v0.5.5.
*  v0.548.0: (yeroon#2590) Fixed const/let bug in playerconfig module.
*  v0.547.0: (henry4k#8969) Tidied up unneeded translation keys
*  v0.547.0: (henry4k#8969) Added back the original color scheme as an option for players (with less saturated colors so its easier on the eyes)
*  v0.547.0: (yeroon#2590) Fixed an issue when the Quick Rolls setting is disabled (you could no longer hold SHIFT to do a quick roll)
*  v0.547.0: (yeroon#2590) Configured damage rolls to follow the Quick Roll rules just like all other rolls
*  v0.547.0: (yeroon#2590) Refactored Player Settings so that defaults are always set at initializtion (which handles default settings a lot more gracefully than the previous implementation)
*  v0.547.0: (yeroon#2590) Added a new System Setting that automatically sets prototype token settings for newly created Actors to sensible defaults.
*  v0.547.0: (overdox#9174) Added (back) traits that went missing during a merge conflict.
*  v0.547.0: (overdox#9174) Added new spell icons to a bunch more spells
*  v0.547.0: (overdox#9174) Added new trait for modular weapons and added a bunch of new weapons (Machete, Polytool, Nine-Ring Sword, Scourge, Tekko-Kagi)
*  v0.546.2: (fryguy#3851) Fixed typo preventing spell browser from loading.
*  v0.546.0: (henry4k#8969) Fixed translation errors in actor and item modules
*  v0.546.0: (overdox#9174) Added new weapons (Aklys, Aldori dueling sword, Bladed diabolo, Bladed hoop, Bladed scarf, Fauchard, Fighting Fan, Fire Poi, Poi, Juggling club, Khopesh, Naginata, Ogre hook, Sling bullets, Throwing knife, Urumi)
*  v0.546.0: (overdox#9174) Added new consumable items (Deteriorating-dust, Holy water, Invisible net)
*  v0.546.0: (overdox#9174) Added new condition icons
*  v0.546.0: (overdox#9174) Added new missing weapon trait
*  v0.546.0: (overdox#9174) Added new spell icons
*  v0.546.0: (overdox#9174) Fixed formatting and missing focus spell levels on some spells
*  v0.545.0: (henry4k#8969) Added localization support for most text fields in the system. 
*  v0.544.0: (overdox#9174) Added missing spells (issue #186) and fixed typo in talisman (issue #188)
*  v0.543.1: Fixed bug when a world does not have any flags defined.
*  v0.543.0: (Luki#1571) Implemented TabsV2 and migrated the system from TabsV1. Thanks heaps for the contribution!
*  v0.543.0: (overdox#9174) added missing ancestry traits.
*  v0.543.0: (overdox#9174) fixed feats on character sheet to make the naming convention be more consistent.
*  v0.543.0: (overdox#9174) moved lore skills to under the core skills on the character sheet, as this makes more sense.
*  v0.543.0: (overdox#9174) refactored the structure for images to reflect the equipment structure for pf2e.
*  v0.543.0: (overdox#9174) merged adventuregear.db, consumables.db, armor.db, weapons.db, alchemicalitems.db into equipment.db.
*  v0.543.0: (overdox#9174) added images for alchemical items.
*  v0.543.0: (overdox#9174) added images for consumable items.
*  v0.543.0: (overdox#9174) added rollable table compendium with deck of many things.
*  v0.543.0: (overdox#9174) added missing class features (angelic sorcerer and rogues rackets).
*  v0.543.0: (overdox#9174) updated bravery to be level 3 rather than 1.
*  v0.543.0: Updated Compendium Browser logic to not pre-load when the FVTT client is loaded. This improves performance of the client but makes the initial compendium load slower.
*  v0.543.0: Fixed issue with bestiary spells not matching correctly with spell compendium (when there should be a valid match)
*  v0.543.0: (Shandyan#5980) Corrected bestiary entries for the following level 3 creatures: (Animated statue, Brine shark, Bunyip, Dero Strangler, Dire wolf, Doppelganger, Giant eagle, Giant mantis, Giant scorpion, Grizzly bear, Grothlut, Hyaenodon, Lion, Web lurker)
*  v0.543.0: (Shandyan#5980) Corrected bestiary entries for the following level 4 creatures: (Caligni Stalker, Gancanagh, Ghost commoner, Janni, Mimic, Minotaur, Vampire spawn rogue)
*  v0.543.0: Cleaned up some legacy files that were hanging around
*  v0.543.0: (yeroon#2590) Added a Player Settings menu in the Game Settings tab. You can configure here what color scheme you want to use (Bluegray or Darkred). You can also configure here if you want use use the quick D20 rolls or not.
*  v0.543.0: (yeroon#2590) Improved dying so its automatically updated if a feat with the name 'Diehard' exists in the sheet.
*  v0.543.0: (yeroon#2590) Improved the chat message from the applyDamage chat buttons with a tooltip that opens up when clicked.
*  v0.543.0: (yeroon#2590) Improved position and style of Edit buttons in the NPC sheet.
*  v0.543.0: (yeroon#2590) Removed some commented out code
*  v0.542.1: (overdox#9174) Fixed typo on compendium pack preventing it from loading.
*  v0.542.0: (overdox#9174) Added new ancestry and class feature compendiums
*  v0.542.0: (overdox#9174) added new ancestry feature type that was missing
*  v0.542.0: (overdox#9174) rearranged feat section on character sheet to make a bit more sense
*  v0.542.0: (overdox#9174) formating on actions and added missing actions
*  v0.542.0: (overdox#9174) merged spells into a single compendium, fixed broken image links.
*  v0.542.0: (overdox#9174) fixed problem with images on spells for spellslogm.db and reduced the overall size of the compendium file
added new images for ancestry and class features
*  v0.541.1: Fixed bug with initiative rolls for actors that do not have data.attributes.initiative (because they were created before the template change).
*  v0.541.0: (yeroon#2590) Added Dying/Wounded/Doomed to the character sheet (with interaction to each other).
*  v0.541.0: (yeroon#2590) Perception rolled from the Combat Tracker now also gets Initiative bonuses.
*  v0.541.0: (yeroon#2590) Setting Initiative from chat now has a confirmation message in the chat.
*  v0.541.0: (yeroon#2590) PF d20 rolls now immediately roll to chat. Hold SHIFT to get the modification dialog.
*  v0.541.0: (yeroon#2590) Moved the Edit button on the read-only character sheet to be at a similar place as on the editable sheet.
*  v0.540.0: Moved the project to use Semantic Versioning to resolve issues with npm and updated contributing documentation to clear up the process (I'll likely fix the version numbers post 1.0.0 to something more sensible).
*  v0.539: (yeroon#2590) Added initiative circumstance and status bonuses to template.json and actor-sheet.html
*  v0.539: (yeroon#2590) Added new translation labels to support this in en.json
*  v0.539: (yeroon#2590) Allowed perception checks to the setInitiative button in dice.js and added a localization to the title text
*  v0.539: (yeroon#2590) Improved the styling of the 'damage applied' chat message
*  v0.539: (yeroon#2590) Added an error message if 'applyDamage' function (which is called by the chatbutton) is used without selecting a token
*  v0.538: Issue #168 - Fixed incorrect AC title text on character sheets.
*  v0.538: Issue #165 - Added missing immunities
*  v0.537: (yeroon#2590) Updated the modifyTokenAttribute code to correctly apply pf2e shield mechanics when damage is applied to a tokens Shield bar.
*  v0.537: (yeroon#2590) Updated the applyDamage logic to include a chatMessage that details which token was effected and how much damage it took.
*  v0.537: (yeroon#2590) Added a new chat damage button for applying damage to a tokens shield bar (if present) and improved the button layout.
*  v0.537: Added Bestiary Browser button back to Actors sidebar tab (after it was mistakenly removed).
*  v0.536: Fixed a bug preventing a character sheet from loading when it has a spell prepared that no longer exists.
*  v0.535: Updated NPC Sheet to allow Special Senses to be modified
*  v0.535: Updated NPC Sheet to allow Immunities to be modified
*  v0.535: Updated bestiary to fix data issues with level 2 NPCs
*  v0.535: Updated bestiary to add shield data for NPCs with shields
*  v0.535: Issue #74 - Fixed monster traits as action traits.
*  v0.534: Issue #74 - Added missing monster and weapon traits
*  v0.533: Issue #64 - Bestiary Browser is no longer visable to players.
*  v0.533: NPC sheet updated to use the new shield data structure (yes your NPC tokens can have a shield bar too!)
*  v0.532: (yeroon#2590) Added a new method to handle applying damage to tokens (takes damage from temp HP first then from current HP).
*  v0.532: Fixed the data model for shields to allow the usage of a token bar for shield HP.
*  v0.532: Updated the UI of the Actor Sheet to separate shield attributes to support the above feature. Cleaned up AC section.
*  v0.532: (Trey) Updated rolls to use new `toMessage` API.
*  v0.532: (Trey) Fixed coloring of blind crit rolls.
*  v0.532: (Trey) Enabled unprepared spells to be shown/hidden per spell level (rather than all or nothing)
*  v0.532: Fixed bug when marking expended spell slots, only the highest level spell slot would work and it would mark all other slots with the same spell as expended as well.
*  v0.531: Added missing "all save" data for bestiary monsters
*  v0.531: Slightly improved immunities list for bestiary monsters (more work to do here)
*  v0.531: Fixed weaknesses and resistances for bestiary monsters that have multiple words and exceptions
*  v0.531: Added an additional data to the item for bestiary monsters items that have things such as ammunition or special modifiers
*  v0.531: Bestiary monsters that have attacks with multiple damage rolls/types are now shown in the attack details (however this info is not editable at this time)
*  v0.531: Enabled non-damage attack effects for bestiary monster attacks. (A huge thnks to @FS#5443 for implmenting this)
*  v0.531: Added additional spell usage information to bestiary monsters
*  v0.531: Added additional spell usage information to bestiary monsters
*  v0.531: (Shandyan#5980) updated the source JSON for bestiary monsters to fix missing data and correct issues. Thanks!!
*  v0.530: (Cranic) Added support for adjustable Multi-Attack Penalties on weapons.
*  v0.529: Configured weapons to use a standard input field for attack bonus rather than select to cover different usecases out of the limited options in the select statement.
*  v0.528: Updated licensing and usage information included in the readme.
*  v0.527: Added a bonus damage field to weapons which can be used for Weapon Specialization, Rage damage bonuses or anything else. 
*  v0.527: Fixed the Critical button on the read-only character sheet. 
*  v0.526: Added a read-only sheet for characters (using the same style as the read-only NPC sheet) This sheet is optional at this stage so you need to enable it in the sheet options for the actor.
*  v0.526: Added an Action Category field for actions and feats which allows them to be grouped into Offensive, Defensive and Interactive categories. Used for display grouping in the read-only sheet.
*  v0.526: Updated the way prepared spell slots can be marked as expended. The slot can still be cleared as normal but now the slot can also be marked as expended which puts a strikethrough on the spell name (visual only) to indicate that the spell has been used.
*  v0.526: Updated the UI of the read-only sheets to make them a bit nicer. I had butchered them a bit in my initial implementation (Sorry @FS#5443!).
*  v0.526: Added spell traits and item buttons for spells in the read-only sheets.
*  v0.526: Changed the default theme of the pf2e system from Blue / Red / Dark Red to Blue / Grey. Hopefully it's a bit nicer on the eyes now.
*  v0.526: Fixed a few bugs with prepared spells that were floating around still.
*  v0.526: Implemented the first round of data quality improvements for bestiary entries. A huge thanks to @Shandyan#5980 for helping here. Sorry I haven't had time to implement all of the changes yet but they are on thier way!
*  v0.525: ConvertPackToBase64Embedded now supports base64 images as a source.
*  v0.524: Created game.pf2e.convertPackToBase64Embedded(packname) function to assist with converting compendium packs to base64 encoded images.
*  v0.522: Updated license information for the project
*  v0.522: Updated NPC skills so they are created with the name 'Skill' rather than "New skill" which takes more effort to modify
*  v0.522: (Shandyan#5980) Updated consumables compendium pack to include missing entries. Thanks for the contribution!!
*  v0.521: Fixed bug preventing a characters sheet from loading when the actor has an Archetype feat
*  v0.520: Fixed errors loading character sheets when a spell has a level higher than 10 (or 11).
*  v0.520: Removed focus spells as a special type of spell level. Focus spells will now need to be migrated to a separate Focus spellcasting entry
*  v0.519: (overdox) Added spell and feat compendium packs for Lost Omens Character Guide, Lost Omens Gods and Magic and Lost Omens World Guide.
*  v0.519: (overdox) Added missing spell and feat traits
*  v0.519: (overdox) Added settings for additional spell heitening levels (these don't do anything yet but they can be configured now and will work later)
*  v0.518: (issue #74) Added the Precision trait.
*  v0.517: (issue #85) Added additional traits to feats list.
*  v0.516: Fixed item macros not functioning correctly
*  v0.515: (issue #80) Fixed bug with spells not showing the correct DC in item summary or chat cards.
*  v0.515: (issue #74) Added missing traits for actions and weapons
*  v0.515: (issue #73) Fixes bulk from coins not calculating correctly
*  v0.515: (issue #75) Added the ability to add, edit and remove items on NPC sheets.
*  v0.514: Fixed bug with NPC attack rolls
*  v0.513: Added support for custom martial skills allowing characters to add martial skills for specific weapons
*  v0.512: Fixed the calculation of weapon attack rolls with the Finesse trait
*  v0.511: Set default NPC alignment to Neutral (rather than null)
*  v0.511: Continued to add localization support for the NPC sheet
*  v0.511: Added a attackRoll label to the item summary for PC weapons so players know the modifiers before they roll.
*  v0.511: Enabled the modification of NPC alignment and trait information (which is reflected in the read-only NPC sheet)
*  v0.511: Added a Bestiary Browser button to the Actor Directory tab (next to the Create Actor button)
*  v0.511: Fixed an issue with the read-only NPC sheet when a monster had a large list of traits causing the Current HP to slide off the side of the window
*  v0.511: added an initial imlementation of displaying NPC action and weapon traits on the read-only sheet (would like feedback here).
*  v0.510: Fixed an issue with the item sheet values for weapon abilities and spell saves which was affecting several rolls.
*  v0.509: Fixed bug with updated NPC sheet not loading for old NPCs and added a edit toggle to easily swap between sheets.
*  v0.508: (FrisGuardian#8347) Added an alchemic items compendium pack. Thanks!!
*  v0.507: Added Bestiary Browser with a few filters and sorting options. Welcome feedback here as I can add additional filters etc.
*  v0.507: Fixed other move speeds for NPC in the bestiary and updated the read-only sheet to show the new data.
*  v0.506: Updated bestiary to fix issue with items, damage immunities/resistances/vulnerabilities, alignment plus more.
*  v0.506: Added a new read-only NPC sheet. A super huge thanks to @FS for doing 99% of the work here.
*  v0.505: Updated beastiary to include correct images and separate NPC ranged and melee attacks.
*  v0.504: Added a beastiary compendium pack!! (A huge thanks to @fs#5443 for putting in most of the hard work on this)
*  v0.504: Fixed a lot of small issues with the NPC data model
*  v0.504: Made several improvements to the pf2e template to support damage resistances, weaknesses, etc. different speed types and a lot of additional NPC data.
*  v0.500: Added support for Foundry VTT v0.5.0 (please backup your world before updating)
*  v0.500: Added support for localisation and localised most labels in all of the pf2e html temlplates as well as attribute, saves and skill names.
*  v0.500: Fixed issues with NPC sheets and prepared spellcasting entrys
*  v0.500: Fixed multiple issues with dragging and dropping spells onto character sheets
*  v0.465: (Trey#9048) Added an actions compendium.
*  v0.465: Re-orded the filter groups in Action Browser
*  v0.465: Added a link directly to the Action Browser from the action tab in character sheets
*  v0.465: (Trey#9048) Saved scroll position when managing prepared spells (huge QoL improvement!!)
*  v0.465: Fixed bug when dragging spells from a compendium onto an NPC sheet.
*  v0.464: (Trey#9048) Incorporated eslint and started moving the pf2e system to use es6 style modules.
*  v0.464: (Trey#9048) Fixed an issue with the Action Browser compendium pack settings
*  v0.463: (Trey#9048) Fixed issue with out dated system.json in deployment package.
*  v0.462: Fixed bug when rolling initiative for NPCs using the combat tracker. 
*  v0.462: Set the placeholder for NPC perception, saves and attack bonus to 0 to reflect the actual values.
*  v0.460: (Trey#9048) Added a new automated deployment process to build, package and publish pf2e system changes. Thanks!!!
*  v0.456: (Trey#9048) Added Action Browser - a way to search and filter for actions from selected compendium packs. Thanks!
*  v0.455: (Trey#9048) Added hover description to item chat card traits. Thanks!
*  v0.454: (Trey#9048) Fixed an issue with focus spell heightening.
*  v0.452: (ohporter) Fixed dice roll dialogs rolling when cancelled. Thanks!
*  v0.452: hotfix for hotbar items
*  v0.451: (Trey#9048) Added a new feature: Spell Heightening which adds a damage formula to spell damage per heightened level. 
*  v0.451: (Trey#9048) Enabled the drag and drop of actor items onto the FVTT hotbar.
*  v0.451: (Trey#9048) Fixed form input fields not being saved correctly when changing from one input field to another. 
*  v0.450: (Trey#9048) Further fixes initiative, adds Class Features as a feat type.
*  v0.449: (Trey#9048) Fixed actor initiative fix. Thanks!!!
*  v0.448: Fixed lore skill mod calculation for characters.
*  v0.447: Fixed issues with orphaned spell migration and incorporated chat damage buttons as a core feature.
*  v0.445: Added support for FVTT v0.4.5. 
*  v0.442: Added support for FVTT v0.4.2. and added spellcasting entry of type Scroll to allow scrolls to be stored in the spellcasting tab if you wish.
*  v0.441: Added support for FVTT v0.4.0. Please note this is the minimum support needed to get it working. A lot more work is required to bring the pf2e system in alignment with all changes.
*  v0.439: (fryguy#3851) Added support for Thieves Racket and fixed the dice used in the Deadly weapon trait.
*  v0.438: Fixed unhandled exception for spells that have an incorrect location set.
*  v0.437: Cleaned up spell SRD data for level 3 spells. Also added icons.
*  v0.436: (FS#5443) Added condition links to all SRD spell entries. Thanks!!
*  v0.435: Cleaned up spell SRD data for level 2 spells. Also added icons.
*  v0.434: Cleaned up spell SRD data for Cantrips and level 2 spells. Also added icons.
*  v0.434: Added requirements attribute to spells.
*  v0.434: Added support for rituals in Spell Browser.
*  v0.433: (fryguy#3851) Added indicator to weapons with two-hand trait to show if they are weilded in one or two hands. Thanks!!
*  v0.432: Fixed bug rolling attack and damage rolls on weapon chat cards post 0.3.9
*  v0.432: Added critical rolls to weapon chat cards
*  v0.432: Fixed bug with prepared spells after multiple spellcasting entries were added
*  v0.432: Fixed bug when editing NPC spell DC/attack post 0.3.9
*  v0.432: Fixed NPC attacks with compendium items
*  v0.431: Added support for FVTT v0.3.9.
*  v0.422: Overhauled the Item Browser logic and introduced new feature: Inventory Browser.
*  v0.421: Added Consumables and Adventuring Gear SRD compendium packs. Thanks Overdox#9174!!
*  v0.419: Fixed bug with form data validation for spell slot inputs on multiple spellcasting entries
*  v0.418: Added support for Property Runes on weapons (damage and crit).
*  v0.417: Added support for Two-Hand weapon trait and the ability to toggle between one-hand and two.
*  v0.416: (fryguy#3851) Fixed weapon compendium pack to align with new traits convetion. Thanks!!
*  v0.415: Added "Critical" button to item summary
*  v0.415: Added support for Fatal and Deadly weapon traits when rolling critical damage
*  v0.414: Fixed issue with NPC spell drag/drop
*  v0.413: Added a "+ Ability Mod" checkbox when editing spell damage details which applies the appropriate ability modifier to damage for the spellcasting entry.
*  v0.413: Fixed Sorcerer feats not being shown in the Feat Browser
*  v0.413: Added search icon on feat tab that opens the Feat Browser directly.
*  v0.412: Tidied up UI for spellcasting entries of type Ritual (more to come here)
*  v0.411: Spellcasting Entries Feature - Added support for multiple spellcasing entries
*  v0.411: Spellcasting Entries Feature - Proficiency rank, item bonus and ability are saved per entry
*  v0.411: Spellcasting Entries Feature - NPCs can now have prepared type spell entries
*  v0.411: Spellcasting Entries Feature - Output skill proficiency of player when rolling a skill check
*  v0.353: (FS#5443) Fixed bug with manual /roll 1d20 rolls not working. Thanks!!
*  v0.353: (FS#5443) Also fixed as issue with ad-hoc traits not rendering correctly. Thanks again! :)
*  v0.353: Updated the display of traits in the item summary to only be styled if they have additional description information to show (UX behaviour)
*  v0.353: (fryguy#3851) for fixing an issue with prepared spells not being removed correctly. Thanks!!
*  v0.352: Fixed bug with NPCs trying to calculate hero point icons and failing 
*  v0.351: Added Hero Points to character sheets
*  v0.350: Added chat button to allow setting initiative for selected tokens.
*  v0.349: Fix for NPC psuedo-lore skill rolls. Thanks FS#5443!
*  v0.349: Added ability to give NPCs weapons of a player characters type. This allows NPCs to use a special magic weapon that a PC can then pick up.
*  v0.349: Fixed traits for NPC attacks
*  v0.349: Fixed negligible bulk items not being an available option for consumables, backpack or equipment.
*  v0.348: Fixed spell tags to accurately display details about the spell
*  v0.348: Added the ability to modify the area of a spell
*  v0.348: Added the font Pathfinder2eActions.ttf (thanks u/baughberick (https://www.reddit.com/user/baughberick/))
*  v0.346: Added Weapons SRD compendium pack (Thanks Overdox!)
*  v0.346: Added additional console messages when loading compendium packs into the Compendium Browser for observability
*  v0.346: Fixed setting menu for the Compendium Browser so it modifies both feat and spell settings
*  v0.345: Added trait descriptions to all traits that display when hovered over a trait in item summaries
*  v0.345: Added color coding to tags to represent if they have additional information or not
*  v0.345: Removed less configuration
*  v0.344: Fixed lore proficiencies so they can be cycled from the character sheet 
*  v0.344: Fixed lore name and item bonus so it can be edited from the character sheet; also removed the edit button. 
*  v0.344: Fixed issue with lore skill information not being saved on world restart. 
*  v0.344: Added Multi-Attack Penalty buttons to NPC sheet
*  v0.344: Added Item Summary for NPC attackts
*  v0.341: Added Deadly d6 and Jousting d6 weapon traits 
*  v0.340: Merged in fix for NPC skills from FS#5443 AND improvements for multi-attack penalties from fryguy#3851. Huge thanks to both of you!
*  v0.339: Added weapon traits for Two-Handed, Deadly, Fatal, Versitle and Thown die sizes, damage types and distances.
*  v0.338: Included Feat (SRD) and Armor (SRD) compendium packs 
*  v0.337: Added Feat Browser
