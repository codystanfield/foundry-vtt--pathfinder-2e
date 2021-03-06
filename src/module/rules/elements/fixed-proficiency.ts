import {ItemData} from "../../item/dataDefinitions";
import {SKILL_EXPANDED} from "../../actor/actor";
import {CharacterData, NpcData} from "../../actor/actorDataDefinitions";
import {PF2DamageDice, PF2Modifier, PF2ModifierType} from "../../modifiers";
import {PF2RuleElement} from "../rule-element";

const KNOWN_TARGETS = {
    ac: {ability: 'dex', shortform: 'ac'},
};

export class PF2FixedProficiencyRuleElement extends PF2RuleElement {

    ruleData: any;
    item: ItemData;

    constructor(ruleData: any, item: ItemData) {
        super();
        this.ruleData = ruleData;
        this.item = item;
    }

    onBeforePrepareData(
        actorData: CharacterData | NpcData,
        statisticsModifiers: Record<string, PF2Modifier[]>,
        damageDice: Record<string, PF2DamageDice[]>
    ) {
        const {selector} = this.ruleData;
        let value = this.resolveValue(this.ruleData.value, this.ruleData, this.item, actorData);
        if (selector === 'ac') {
            // Special case for AC so the rule elements match what's written in the book
            value -= 10;
        }

        const label = this.getDefaultLabel(this.ruleData, this.item);
        const ability = this.ruleData.ability ?? KNOWN_TARGETS[selector]?.ability ?? SKILL_EXPANDED[selector]?.ability;

        if (!ability) {
            console.warn('PF2E | Fixed modifier requires an ability field, or a known selector.')
        } else if (!value) {
            console.warn('PF2E | Fixed modifier requires at least a non-zero value or formula field.')
        } else {
            const modifier = new PF2Modifier(label, value - actorData.data.abilities[ability].mod, PF2ModifierType.PROFICIENCY);
            statisticsModifiers[selector] = (statisticsModifiers[selector] || []).concat(modifier);
        }
    }

    onAfterPrepareData(
        actorData: CharacterData | NpcData,
        statisticsModifiers: Record<string, PF2Modifier[]>,
        damageDice: Record<string, PF2DamageDice[]>
    ) {
        const {selector} = this.ruleData;
        const {data} = actorData;
        const skill = SKILL_EXPANDED[selector]?.shortform ?? selector;
        const target = data.skills[skill] ?? data.attributes[skill];

        if (target) {
            for (const modifier of target.modifiers) {
                if (modifier.type === PF2ModifierType.ITEM && modifier.modifier > 0) {
                    modifier.ignored = true;
                }
            }
            target.applyStackingRules();
            target.value = target.totalModifier + (skill === 'ac' ? 10 : 0);
        }
    }
}
