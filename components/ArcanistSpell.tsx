export interface ArcanistSpellType {
    [index: number]: string,
    level: string,
    spellName: string,
    frequency: string,
    description: string,
    range: string,
    castingTime: string,
    duration: string,
    areaOfEffect: string,
    damage: string,
    savingThrow: string,
    reversible: string,
    components: string,
    specialComponents: string,
    casterClass: string,
}

const ArcanistSpell = ({
                           level,
                           spellName,
                           frequency,
                           description,
                           range,
                           castingTime,
                           duration,
                           areaOfEffect,
                           damage,
                           savingThrow,
                           reversible,
                           components,
                           specialComponents,
                           casterClass,
                       }: ArcanistSpellType) => {
    return (
        <li>
            { `Spell Level: ${ level }` }<br/>
            { `Spell Name: ${ spellName }` }<br/>
            { `Frequency: ${ frequency }` }<br/>
            { `Description: ${ description }` }<br/>
            { `Range: ${ range }` }<br/>
            { `Casting Time: ${ castingTime }` }<br/>
            { `Duration: ${ duration }` }<br/>
            { `Area of Effect: ${ areaOfEffect }` }<br/>
            { `Damage: ${ damage }` }<br/>
            { `Saving Throw: ${ savingThrow }` }<br/>
            { `Reversible: ${ reversible }` }<br/>
            { `Components: ${ components }` }<br/>
            { `Special Components: ${ specialComponents }` }<br/>
            { `Caster Class: ${ casterClass }` }<br/>
            <br/>
        </li>
    )
}

export default ArcanistSpell;