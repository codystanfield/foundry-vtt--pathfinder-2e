import { ItemSheetPF2e } from './item/sheet';
import { KitItemSheetPF2e } from './item/sheet-kit';

export function registerSheets() {
    Items.unregisterSheet('core', ItemSheet);
    Items.registerSheet('pf2e', ItemSheetPF2e, { types: [
      "weapon",
      "melee",
      "armor",
      "equipment",
      "consumable",
      "treasure",
      "lore",
      "martial",
      "spell",
      "spellcastingEntry",
      "feat",
      "action",
      "backpack",
      "condition",
      "effect"
    ], makeDefault: true });    
    Items.registerSheet('pf2e', KitItemSheetPF2e, { types: ['kit'], makeDefault: true });    
}
