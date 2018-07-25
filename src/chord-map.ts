import { mapFlatToSharp } from './flat-to-sharp-map'

export type TablatureString = string

export const fingeringForChord = (chord: string): TablatureString => {
  chord = mapFlatToSharp(chord)

  const tabs = {
    'G#7sus': '1324',
    'G#sus': '1344',
    'G#9': '3323',
    'G#m6': '1312',
    'G#6': '1313',
    'G#maj7': '1333',
    'G#m7': '1322',
    'G#aug': '5443',
    'G#dim': '1212',
    'G#m': '1342',
    'G#7': '1323',
    'G#': '5343',

    G7sus: '0213',
    Gsus: '0233',
    G9: '4210',
    Gm6: '0201',
    G6: '0202',
    Gmaj7: '0222',
    Gm7: '0211',
    Gaug: '0332',
    Gdim: '0101',
    Gm: '0231',
    G7: '0212',
    G: '0232',

    'F#7sus': '4424',
    'F#sus': '6679',
    'F#9': '3444',
    'F#m6': '2324',
    'F#6': '3324',
    'F#maj7': '2413',
    'F#m7': '2424',
    'F#aug': '3221',
    'F#dim': '2323',
    'F#m': '2120',
    'F#7': '3424',
    'F#': '3121',

    F7sus: '3313',
    Fsus: '5568',
    F9: '2333',
    Fm6: '1214',
    F6: '2213',
    Fmaj7: '2413',
    Fm7: '1313',
    Faug: '2110',
    Fdim: '1212',
    Fm: '1013',
    F7: '2310',
    F: '2010',

    E7sus: '2202',
    Esus: '4457',
    E9: '1222',
    Em6: '0102',
    E6: '4444',
    Emaj7: '1302',
    Em7: '0202',
    Eaug: '2114',
    Edim: '0101',
    Em: '0432',
    E7: '1202',
    E: '4442',

    A: '2100',
    A7: '0100',
    Am: '2000',
    Adim: '2323',
    Aaug: '2110',
    Am7: '0000',
    Amaj7: '2444',
    A6: '2424',
    Am6: '2423',
    A9: '0102',
    Asus: '2200',
    A7sus: '0200',

    'A#': '3211',
    'A#7': '1211',
    'A#m': '3111',
    'A#dim': '0101',
    'A#aug': '3221',
    'A#m7': '1111',
    'A#maj7': '3210',
    'A#6': '0211',
    'A#m6': '0111',
    'A#9': '1213',
    'A#sus': '3311',
    'A#7sus': '1311',

    B: '4322',
    B7: '4320',
    Bm: '4222',
    Bdim: '1212',
    Baug: '4332',
    Bm7: '2222',
    Bmaj7: '3322',
    B6: '1322',
    Bm6: '1222',
    B9: '2324',
    Bsus: '4422',
    B7sus: '2422',

    C: '0003',
    C7: '0001',
    Cm: '0333',
    Cdim: '2323',
    Caug: '1003',
    Cm7: '3333',
    Cmaj7: '0002',
    C6: '0000',
    Cm6: '2333',
    C9: '0201',
    Csus: '0013',
    C7sus: '0011',

    'C#': '1114',
    'C#7': '1112',
    'C#m': '6444',
    'C#dim': '0101',
    'C#aug': '2114',
    'C#m7': '4444',
    'C#maj7': '1113',
    'C#6': '1111',
    'C#m6': '1101',
    'C#9': '1312',
    'C#sus': '1124',
    'C#7sus': '1122',

    D: '2220',
    D7: '2020',
    Dm: '2210',
    Ddim: '1212',
    Daug: '3221',
    Dm7: '2213',
    Dmaj7: '2224',
    D6: '2222',
    Dm6: '2212',
    D9: '2423',
    Dsus: '2230',
    D7sus: '2233',

    'D#': '0331',
    'D#7': '3334',
    'D#m': '3321',
    'D#dim': '2323',
    'D#aug': '4332',
    'D#m7': '3324',
    'D#maj7': '3335',
    'D#6': '3333',
    'D#m6': '3323',
    'D#9': '0111',
    'D#sus': '3346',
    'D#7sus': '3344',
  }
  const fingers = tabs[chord]
  if (fingers) {
    return fingers
  }
  return 'xxxx'
}
