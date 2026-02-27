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
    this.afterDate = (date) => {
        const tmpAns = [];
        for(const ans of this.answers){
            if(ans.date.isAfter(date)){
                tmpAns.push(ans);
            }
        }
        return tmpAns;
    }
}

const q1 = new Question("How long is this exercise?", 1, "2026-02-27");
const a1 = new Answer("too much", 2, "2026-02-27");
const a2 = new Answer("10 minutes", 3, "2026-02-27");
const a3 = new Answer("a day", 3, "2026-02-27");
const a4 = new Answer("30 minutes", 3, "2026-02-26");
//console.log(q1);
q1.addAnswer(a1);
q1.addAnswer(a2);
q1.addAnswer(a3);
q1.addAnswer(a4);
//console.log(q1);
const user2a = q1.getAnswers(2);
const user3a = q1.getAnswers(3);

//console.log(user2a);
//console.log(user3a);

const answersAfterYesterday = q1.afterDate(dayjs("2026-02-26"));
console.log(answersAfterYesterday);