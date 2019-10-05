
export const OneHourBassPractice = {
    WARMUP : {
        'key': 0,
        'timer': 5,
        'subtext': 'Loosen those fingers',
        'title': 'Warm Up'
    },
    SCALES : {
        'key': 1,
        'timer': 10,
        'subtext': 'Pick a Scale! Any scale!',
        'title': 'Scales / Modes'
    },
    ARPEGGIOS : {
        'key': 2,
        'timer': 5,
        'subtext': 'Chord tones are both your bread & butter!',
        'title': 'Arpeggios'
    },
    MUSIC_READING : {
        'key': 3,
        'timer': 10,
        'subtext': 'I know it sucks, but you HAVE to!',
        'title': 'Music Reading'
    },
    PLAYTHROUGH : {
        'key': 4,
        'timer': 30,
        'subtext': "Choose your music and play like there's no tomorrow!",
        'title': 'Playthrough'
    },
    routine_id: 'OneHourBassPractice',
    flow: {
        0: 'WARMUP',
        1: 'SCALES',
        2: 'ARPEGGIOS',
        3: 'MUSIC_READING',
        4: 'PLAYTHROUGH'
    }
}

const AVAILABLE_ROUTINES = {
    'OneHourBassPractice': OneHourBassPractice
}

export default {OneHourBassPractice, AVAILABLE_ROUTINES}