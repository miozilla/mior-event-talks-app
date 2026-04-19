interface TalkDetails {
    title: string;
    speaker: string;
    duration: number;
}

function displayTalk(talk: TalkDetails): string {
    return `"${talk.title}" by ${talk.speaker} (${talk.duration} minutes)`;
}

const myTalk: TalkDetails = {
    title: "Introduction to TypeScript",
    speaker: "Mior",
    duration: 45
};

console.log("TypeScript example:", displayTalk(myTalk));
