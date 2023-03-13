import * as fs from 'fs';
import { parse } from 'csv-parse/sync';

export const getStaticProps = () => {
    const input: Buffer = fs.readFileSync('./data/arcanist.csv');
    const records: string[] = parse(input.toString())
    const colNames = records.shift()

    return {
        props: {
            colNames,
            spells: records
        }
    }
}

interface LoadProps {
    colNames: string[],
    spells: string[],
}

const Load = ({ colNames, spells }: LoadProps) => {
    return (
        <>
            <ul>
                {
                    spells.map(spell => (
                        <li key={ spell[1] }>{`${colNames[1]}: ${spell[1]}`}</li>
                    ))
                }
            </ul>
        </>
    )
}


export default Load;