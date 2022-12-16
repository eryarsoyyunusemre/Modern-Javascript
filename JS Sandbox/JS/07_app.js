// ? TEMPLATE LİTERALS

const name ='Yunus'
const age=20
const job ='Web Developer'
const city='Kocaeli'
let html;


function hello(){
    return 'hello'
}
// Without template strings (es6)
html=`
<ul>
    <li>Name:${name}</li>
    <li>Age:${age}</li>
    <li>Job:${job}</li>
    <li>City:${city}</li>
    <li>${hello()}</li>
    <li>${city>30 ? 'Over 30': 'Under 30'}</li>
</ul>`


document.body.innerHTML=html

