import SpellcastingEntry from './spellcastingEntry';
import CharacterData from '../actor/character';

class Spell {
  data: any;
  castingActor: any;
  _castLevel: any;
  _spellcastingEntry: any;
  _character: any;

  constructor(data, scope: any = {}) {
    this.data = data;
    this.castingActor = scope?.castingActor;
    this._castLevel = scope?.castLevel || this.spellLevel;
  }

  get spellcastingEntryId() {
    return this.data.data.location.value;
  }

  get spellcastingEntry() {
    if (!this._spellcastingEntry) {
      this._spellcastingEntry = new SpellcastingEntry(
        this.castingActor?.getOwnedItem(this.spellcastingEntryId).data,
      );
    }
    return this._spellcastingEntry;
  }

  get spellLevel() {
    return this.data.data.level.value;
  }

  get character() {
    if (!this._character) {
      this._character = new CharacterData(this.castingActor.data.data);
    }
    return this._character;
  }

  get damage() {
    return this.data.data.damage;
  }

  get damageValue() {
    if (this.damage.value && this.damage.value !== '' && this.damage.value !== '0') {
      return this.damage.value;
    }
    return null;
  }

  get damageParts() {
    const parts = [];
    if (this.damageValue) parts.push(this.damage.value);
    if (this.damage.applyMod) {
      parts.push(this.character.abilities[this.spellcastingEntry.ability].mod);
    }
    if (this.data.data.duration.value === "" && this.castingActor?.items) {
      const featDangerousSorcery = this.castingActor.items.find(it => it.name === "Dangerous Sorcery");
      if (featDangerousSorcery !== null && !this.isFocusSpell && this.spellLevel !== 0) {
        console.log(`PF2e System | Adding Dangerous Sorcery spell damage for ${this.data.name}`);
        parts.push(this.castLevel);
      }
    }
    return parts.concat(this.heightenedParts);
  }

  get scaling() {
    return this.data.data?.scaling || {};
  }

  // Automatically scale cantrips/focus spells to the character's max spell
  // level.
  get castLevel() {
    if (this.autoScalingSpell) {
      return Math.ceil(this.character.level / 2);
    }
    return this._castLevel;
  }

  get autoScalingSpell() {
    return this.spellLevel === 0 || this.spellLevel === 11 || this.isFocusSpell;
  }

  get isFocusSpell() {
    return this.traditions.includes('focus');
  }

  get traditions() {
    return this.data.data?.traditions?.value || [];
  }

  get heighteningModes() {
    return {
      level1: 1,
      level2: 2,
      level3: 3,
      level4: 4,
    };
  }

  get heightenedParts() {
    let parts = [];
    if (this.scaling.formula !== '') {
      const heighteningDivisor = this.heighteningModes[this.scaling.mode];
      if (heighteningDivisor) {
        let effectiveSpellLevel = 1;
        if (this.spellLevel > 0 && this.spellLevel < 11) {
          effectiveSpellLevel = this.spellLevel;
        }
        let partCount = this.castLevel - effectiveSpellLevel;
        partCount = Math.floor(partCount / heighteningDivisor);
        parts = Array(partCount).fill(this.scaling.formula);
      }
    }
    return parts;
  }
}

export default Spell;
