

// Removing specific string literals for better flexibility
export type BowlType = string;
export type ShotType = string;
export type TimingType = string;
// export type TimingType = 'Early' | 'Good' | 'Perfect' | 'Late' | '';
// used in front end dropdown
export const BowlTypes: BowlType[] = ['Bouncer', 'Outswinger', 'Yorker', 'Off Break', 'Inswinger', 'Leg Cutter', 'Slower Ball', 'Pace', 'Off Cutter', 'Doosra']
export const ShotTypes: ShotType[] = ['Straight', 'Flick', 'Long On', 'SquareCut', 'Sweep', 'CoverDrive', 'Pull', 'Scoop', 'LegLance', 'UpperCut']
export const TimingTypes: TimingType[] = ['Early', 'Good', 'Perfect', 'Late']

const oneRunCommentary: string[] = ['Excellent line and length.', 'Excellent effort on the boundary.', 'Convert ones into twos.']
const twoRunCommentary: string[] = ["Excellent running between the wickets.", "great to see converting ones into twos."]
const fourRunCommentary: string[] = ["Just over the fielder.", "It's amzing wow."]
const sixRunCommentary: string[] = ["Thats massive and out of the ground.", "Its a huge hit."]
const wicketCommentary: string[] = ["Its a wicket.", "Excellent line and length.", "Edged and taken."]
const badShotSelectionCommentary = ["bad shot selection."]
export const WICKET_VALUE = "1 Wicket";
const shotOutcomes = {
    "Early": { output: "1 Runs", commentary: oneRunCommentary },
    "Good": {
        output: "2 Runs", commentary: twoRunCommentary,
    },
    "Perfect": { output: "6 Runs", commentary: [...fourRunCommentary, ...sixRunCommentary] },
    "Late": { output: WICKET_VALUE, commentary: wicketCommentary }
}

export interface IOutcomeTypes {
    output: string,
    commentary: string[]
}

// Using Record<string, any> or directly defining the index signature
interface IOutcome {
    [key: string]: IOutcomeTypes;  // Use TimingType as string now
}

interface IShots {
    [key: string]: IOutcome;  // Use ShotType as string now
}

interface IBowl {
    [key: string]: IShots;  // Use BowlType as string now
}

export interface ICricketData {
    [key: string]: IBowl;  // Use BowlType as string now
}


const getOutcomes = (overwrite = {}) => {
    return { ...shotOutcomes, ...overwrite }
}

const badShotSelectionOutcome: IOutcome = {
    "Early": { output: "0 Runs", commentary: badShotSelectionCommentary },
    "Good": {
        output: "0 Runs", commentary: badShotSelectionCommentary,
    },
    "Perfect": { output: "0 Runs", commentary: badShotSelectionCommentary },
    "Late": { output: "0 Runs", commentary: badShotSelectionCommentary }
}

const wicketOutcomes: IOutcome = {
    "Early": { output: "1 Wicket", commentary: wicketCommentary },
    "Good": {
        output: "1 Wicket", commentary: wicketCommentary,
    },
    "Perfect": { output: "1 Wicket", commentary: wicketCommentary },
    "Late": { output: "1 Wicket", commentary: wicketCommentary }
}

export const cricketData: ICricketData = {
    "Bouncer": {
        "Straight": {
            "outcomes": badShotSelectionOutcome
        },
        "Flick": {
            "outcomes": badShotSelectionOutcome
        },
        "Long On": {
            "outcomes": badShotSelectionOutcome
        },
        "SquareCut": {
            "outcomes": badShotSelectionOutcome
        },
        "Sweep": {
            "outcomes": badShotSelectionOutcome
        },
        "CoverDrive": {
            "outcomes": badShotSelectionOutcome
        },
        "Pull": {
            "outcomes": getOutcomes()
        },
        "Scoop": {
            "outcomes": badShotSelectionOutcome
        },
        "LegLance": {
            "outcomes": badShotSelectionOutcome
        },
        "UpperCut": {
            "outcomes": getOutcomes()
        }
    },
    "Outswinger": {
        "Straight": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } }),
        },
        "Flick": {
            "outcomes": badShotSelectionOutcome
        },
        "Long On": {
            "outcomes": badShotSelectionOutcome
        },
        "SquareCut": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Sweep": {
            "outcomes": badShotSelectionOutcome
        },
        "CoverDrive": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Pull": {
            "outcomes": wicketOutcomes
        },
        "Scoop": {
            "outcomes": wicketOutcomes
        },
        "LegLance": {
            "outcomes": wicketOutcomes
        },
        "UpperCut": {
            "outcomes": wicketOutcomes
        }
    },
    "Yorker": {
        "Straight": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Flick": {
            "outcomes": wicketOutcomes
        },
        "Long On": {
            "outcomes": wicketOutcomes
        },
        "SquareCut": {
            "outcomes": wicketOutcomes
        },
        "Sweep": {
            "outcomes": wicketOutcomes
        },
        "CoverDrive": {
            "outcomes": wicketOutcomes
        },
        "Pull": {
            "outcomes": wicketOutcomes
        },
        "Scoop": {
            "outcomes": wicketOutcomes
        },
        "LegLance": {
            "outcomes": wicketOutcomes
        },
        "UpperCut": {
            "outcomes": wicketOutcomes
        }
    },
    "Off Break": {
        "Straight": {
            "outcomes": getOutcomes()
        },
        "Flick": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Long On": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "SquareCut": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Sweep": {
            "outcomes": getOutcomes()
        },
        "CoverDrive": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Pull": {
            "outcomes": wicketOutcomes
        },
        "Scoop": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "LegLance": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "UpperCut": {
            "outcomes": wicketOutcomes
        }
    },
    "Inswinger": {
        "Straight": {
            "outcomes": getOutcomes()
        },
        "Flick": {
            "outcomes": wicketOutcomes
        },
        "Long On": {
            "outcomes": wicketOutcomes
        },
        "SquareCut": {
            "outcomes": getOutcomes()
        },
        "Sweep": {
            "outcomes": wicketOutcomes
        },
        "CoverDrive": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Pull": {
            "outcomes": wicketOutcomes
        },
        "Scoop": {
            "outcomes": wicketOutcomes
        },
        "LegLance": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "UpperCut": {
            "outcomes": wicketOutcomes
        }
    },
    "Leg Cutter": {
        "Straight": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Flick": {
            "outcomes": badShotSelectionOutcome
        },
        "Long On": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "SquareCut": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Sweep": {
            "outcomes": badShotSelectionOutcome
        },
        "CoverDrive": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Pull": {
            "outcomes": wicketOutcomes
        },
        "Scoop": {
            "outcomes": wicketOutcomes
        },
        "LegLance": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "UpperCut": {
            "outcomes": wicketOutcomes
        }
    },
    "Slower Ball": {
        "Straight": {
            "outcomes": getOutcomes()
        },
        "Flick": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Long On": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "SquareCut": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Sweep": {
            "outcomes": getOutcomes()
        },
        "CoverDrive": {
            "outcomes": getOutcomes()
        },
        "Pull": {
            "outcomes": getOutcomes()
        },
        "Scoop": {
            "outcomes": getOutcomes()
        },
        "LegLance": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "UpperCut": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        }
    },
    "Pace": {
        "Straight": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Flick": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Long On": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "SquareCut": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Sweep": {
            "outcomes": wicketOutcomes
        },
        "CoverDrive": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Pull": {
            "outcomes": getOutcomes()
        },
        "Scoop": {
            "outcomes": getOutcomes()
        },
        "LegLance": {
            "outcomes": getOutcomes()
        },
        "UpperCut": {
            "outcomes": getOutcomes()
        }
    },
    "Off Cutter": {
        "Straight": {
            "outcomes": getOutcomes()
        },
        "Flick": {
            "outcomes": getOutcomes()
        },
        "Long On": {
            "outcomes": getOutcomes()
        },
        "SquareCut": {
            "outcomes": getOutcomes()
        },
        "Sweep": {
            "outcomes": wicketOutcomes
        },
        "CoverDrive": {
            "outcomes": getOutcomes()
        },
        "Pull": {
            "outcomes": getOutcomes()
        },
        "Scoop": {
            "outcomes": wicketOutcomes
        },
        "LegLance": {
            "outcomes": badShotSelectionOutcome
        },
        "UpperCut": {
            "outcomes": getOutcomes()
        }
    },
    "Doosra": {
        "Straight": {
            "outcomes": getOutcomes()
        },
        "Flick": {
            "outcomes": getOutcomes()
        },
        "Long On": {
            "outcomes": getOutcomes()
        },
        "SquareCut": {
            "outcomes": getOutcomes()
        },
        "Sweep": {
            "outcomes": getOutcomes()
        },
        "CoverDrive": {
            "outcomes": getOutcomes()
        },
        "Pull": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "Scoop": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "LegLance": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        },
        "UpperCut": {
            "outcomes": getOutcomes({ "Perfect": { output: "4 Runs", commentary: fourRunCommentary } })
        }
    }
}


//SUPER OVER CONFIGS
export const TARGET_SCORE_FOR_WINNING = 21
export const WICKET_IN_HAND = 2
