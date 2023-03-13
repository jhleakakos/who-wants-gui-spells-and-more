import * as fs from 'fs';
import { parse } from 'csv-parse/sync';
import ArcanistSpell, { ArcanistSpellType } from '../../components/ArcanistSpell';


export const getStaticProps = () => {
    const input: Buffer = fs.readFileSync('./data/arcanist.csv');
    const records: string[] = parse(input.toString())
    records.shift()

    return {
        props: {
            spells: records
        }
    }
}

interface LoadProps {
    spells: ArcanistSpellType[],
}

const Load = ({ spells }: LoadProps) => {
    return (
        <>
            <ul>
                {
                    spells.map((spell: ArcanistSpellType) => (
                        <ArcanistSpell
                            key={ spell[1] }
                            level={ spell[0] }
                            spellName={ spell[1] }
                            frequency={ spell[2] }
                            description={ spell[3] }
                            range={ spell[4] }
                            castingTime={ spell[5] }
                            duration={ spell[6] }
                            areaOfEffect={ spell[7] }
                            damage={ spell[8] }
                            savingThrow={ spell[9] }
                            reversible={ spell[10] }
                            components={ spell[11] }
                            specialComponents={ spell[12] }
                            casterClass={ spell[13] }
                        />
                    ))

                }
            </ul>

        </>
    )
}

export default Load;