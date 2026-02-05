/* Function name: analyzeMarks(marksObj)
Statement:
 Return total marks, average marks, highest scoring subject, and lowest scoring subject.
Test case 1
Input: { math: 78, english: 65, physics: 88, bangla: 55 }

Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }

Test case 2
Input: { ict: 90, biology: 90, chemistry: 70 }
Output: { total: 250, average: 83.33, highest: "ict", lowest: "chemistry" } */

const marksObj = { math: 78, english: 65, physics: 88, bangla: 55 };
function analyzeMarks(marksObj){
    let totalMarks = 0;
    let avgMarks = 0;
    let highestScoringSubject = null;
    let lowestScoringSubject = null;
    let highestMark = -Infinity;
    let lowestMark = Infinity;
    for (let i in marksObj){
        let mark = marksObj[i];
        totalMarks += marksObj[i];

        if(mark > highestMark){
            highestMark = mark;
            highestScoringSubject = i;
        }
        if(mark < lowestMark){
            lowestMark = mark;
            lowestScoringSubject = i;
        }
    }
    avgMarks = totalMarks/(Object.keys(marksObj).length);
    console.log("Total Marks: ", totalMarks);
    console.log("Average Marks: ", avgMarks);
    console.log("highestmark -> ", highestMark);
    console.log("lowestMark -> ", lowestMark);
    console.log("highest subject -> ", highestScoringSubject);
    console.log("lowest subject -> ", lowestScoringSubject);
}

analyzeMarks(marksObj);
