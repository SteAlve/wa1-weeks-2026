import dayjs from 'dayjs'

function Answer (text, userId, date, score=0) {
    this.text = text;
    this.userId = userId;
    this.date = dayjs(date);
    this.score = score;
}

function Question (text, userId, date) {
    this.text = text;
    this.userId = userId;
    this.date = dayjs(date);
    this.answers = [];
    
    this.addAnswer = (ans) => {this.answers.push(ans)}
    this.getAnswers = (uid) => {
        const tmpAns = [];
        for(const ans of this.answers){
            if(ans.userId == uid){
                tmpAns.push(ans);
            }
        }
        return tmpAns;
    }
}

const q1 = new Question("How long is this exercise?", 1, "2026-02-27");
const a1 = new Answer("too much", 2, "2026-02-27");
const a2 = new Answer("10 minutes", 3, "2026-02-27");
console.log(q1);
q1.addAnswer(a1)
console.log(q1);
console.log(q1.getAnswers(2))