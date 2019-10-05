
const OneHourBassPractice = {
    timers: {
        'WARMUP' : 5,
        'SCALES' : 10,
        'ARPEGGIOS': 5,
        'MUSIC_READING': 10,
        'PLAYTHROUGH': 30
    },
    flow: {},
    routine_id: 'OneHourBassPractice'
}

const AVAILABLE_ROUTINES = {
    'OneHourBassPractice': OneHourBassPractice
}

export function getRoutineTimer(routine) {
    return AVAILABLE_ROUTINES[routine].timers
}

export default {OneHourBassPractice, AVAILABLE_ROUTINES}