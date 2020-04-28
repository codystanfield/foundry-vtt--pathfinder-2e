import Spell from 'module/item/spell.js';

const characterData = require('tests/fixtures/characterData.json');
const spellcastingEntry = require('tests/fixtures/items/spellcastingEntry.json');

let electricArc; let shatteringGem; let tempestSurge; let daze; let
  spiritualWeapon;

const spellcastingEntryItem = {
  data: spellcastingEntry,
};
const actor = {
  getOwnedItem: jest.fn().mockImplementation(() => spellcastingEntryItem),
  data: characterData,
};

beforeAll(async () => {
  const promises = ['Electric Arc', 'Shattering Gem', 'Tempest Surge', 'Daze', 'Spiritual Weapon'].map(async (name) => fetchSpell(name));
  [electricArc, shatteringGem, tempestSurge, daze, spiritualWeapon] = await Promise.all(promises);
});

describe('#spellcastingEntry', () => {
  test('returns the spellcasting entry it comes from', () => {
    const spell = new Spell(electricArc, { castingActor: actor });

    expect(spell.spellcastingEntryId).toBe(147);
    expect(spell.spellcastingEntry.ability).toBe('int');
  });
});

describe('#damageParts', () => {
  test('returns all the parts to give to a damage roll', () => {
    const spell = new Spell(electricArc, { castingActor: actor });

    expect(spell.damageParts).toEqual(['1d4', 3]);
  });

  test('heightens +1 if given a spell level with a 1st level spell', () => {
    const spell = new Spell(shatteringGem, { castingActor: actor, castLevel: 3 });

    expect(spell.damageParts).toEqual(['1d8', '1d8', '1d8']);
  });
  test('automatically heightens cantrips to caster max level', () => {
    characterData.data.details.level.value = 5;
    const spell = new Spell(electricArc, { castingActor: actor, castLevel: 3 });

    expect(spell.damageParts).toEqual(['1d4', 3, '1d4', '1d4']);
  });
  test('automatically heightens focus spells to caster max level', () => {
    characterData.data.details.level.value = 5;
    const spell = new Spell(tempestSurge, { castingActor: actor, castLevel: 3 });

    expect(spell.damageParts).toEqual(['1d12', '1d12', '1d12']);
  });
  test('heightens +2 for cantrips', () => {
    characterData.data.details.level.value = 5;
    const spell = new Spell(daze, { castingActor: actor, castLevel: 3 });

    expect(spell.damageParts).toEqual([3, '1d6']);
  });
  test('heightens +2 for higher-leveled spells', () => {
    let spell = new Spell(spiritualWeapon, { castingActor: actor, castLevel: 3 });
    expect(spell.damageParts).toEqual(['1d8', 3]);

    spell = new Spell(spiritualWeapon, { castingActor: actor, castLevel: 4 });
    expect(spell.damageParts).toEqual(['1d8', 3, '1d8']);

    spell = new Spell(spiritualWeapon, { castingActor: actor, castLevel: 5 });
    expect(spell.damageParts).toEqual(['1d8', 3, '1d8']);

    spell = new Spell(spiritualWeapon, { castingActor: actor, castLevel: 6 });
    expect(spell.damageParts).toEqual(['1d8', 3, '1d8', '1d8']);
  });
});